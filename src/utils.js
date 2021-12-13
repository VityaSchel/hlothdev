import React from 'react'
import store from './store'

const easeOutCubic = progress => 1 - Math.pow(1 - progress, 3)

const transitions = new Map()
export function transition(object, properties, value, setValue) {
  if(properties.every(prop => object[prop] === value)) return
  const transition = transitions.get(object)
  if(transition) clearInterval(transition.interval)
  const interval = setInterval(() => {
    const transition = transitions.get(object)
    if(!transition) return
    let ended = false
    properties.forEach(property => {
      const progress = prog(transition.from, transition.to, object[property])
      if(progress >= 1) ended = true
      object[property] = (Math.min(1, progress+0.05))*(transition.to - transition.from) + transition.from //easeOutCubic(progress || 0.01)
    })
    setValue?.(object)
    if(ended) {
      clearInterval(interval)
      transitions.delete(object)
    }
  }, 10)
  transitions.set(object, { from: object[properties[0]], to: value, interval })
}

function prog(from, to, progress) {
  const backwards = to < from
  if(backwards) {
    let from_ = from
    from = to
    to = from_
  }
  const current = progress - from
  const max = to - from
  const proportion = current/max
  return backwards ? 1-proportion : proportion
}

// use spring
// export function transitionReact(currentValue, notInverse, from, to) {
//   if(!notInverse) {
//     let from_ = from
//     from = to
//     to = from_
//   }
//   const progress = prog(from, to, currentValue)
//   return (Math.min(1, progress+0.05))*(to-from)+from
// }

export function useRedux(mapping) {
  const [mappedStore, setMappedStore] = React.useState({})

  React.useEffect(() => {
    const update = () => {
      const newState = store.getState()
      setMappedStore(mapping(newState ?? {}) ?? {})
    }

    update()
    store.subscribe(update)
  }, [store])

  return mappedStore
}

export const stringEnding = a => (a%10 === 1 && a !== 11) ? 0 : (a%10 >= 2 && a%10 <= 4 && !(a >= 12 && a <= 14)) ? 1 : 2
