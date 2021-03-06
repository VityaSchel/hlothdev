import React from 'react'
import store from './store'
import hexRgb from 'hex-rgb'
import replace from 'react-string-replace'
import { formatDistanceToNowStrict } from 'date-fns'
import { ru as dateFns_ru, enUS as dateFns_enUS } from 'date-fns/locale'

const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3)

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

export function useRedux(mapping) {
  const [mappedStore, setMappedStore] = React.useState(mapping(store.getState() ?? {}) ?? {})

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

export const flattenObject = obj => {
  const toReturn = {}

  for (var i in obj) {
    if (!Object.hasOwnProperty.call(obj, i)) continue

    if ((typeof obj[i]) == 'object') {
      var flatObject = flattenObject(obj[i])
      for (var x in flatObject) {
        if (!Object.hasOwnProperty.call(flatObject, x)) continue

        toReturn[i + '-' + x] = flatObject[x]
      }
    } else {
      toReturn[i] = obj[i]
    }
  }
  return toReturn
}

export const applyMaterial = (scene, materials) => {
  const props = {}
  for(let [materialName, value] of Object.entries(materials)) {
    const recursiveSearch = obj => {
      for(let childIndex in obj.children) {
        const child = obj.children[childIndex]

        if(child.children.length) {
          const searchResult = recursiveSearch(child)
          if(searchResult) return `children-${childIndex}-${searchResult}`
          else continue
        } else {
          if(child?.material?.name === materialName) {
            return `children-${childIndex}-material`
          }
        }
      }
    }


    const template = recursiveSearch(scene)
    if(template) {
      // const properties = flattenObject(value) Breaks if useSpring used
      for(let [propertyName, propertyValue] of Object.entries(value)){
        props[`${template}-${propertyName}`] = propertyValue
      }
    }
  }
  return props
}

export const color = (colorOrRed, g, b) => {
  if(g !== undefined && b !== undefined) {
    return {
      'color-r': colorOrRed,
      'color-g': g,
      'color-b': b,
    }
  } else if (typeof colorOrRed === 'string' && colorOrRed[0] === '#') {
    const { red, green, blue } = hexRgb(colorOrRed)
    return {
      'color-r': red,
      'color-g': green,
      'color-b': blue,
    }
  } else {
    return Object.fromEntries(
      new Array(3)
        .fill(null)
        .map(
          (_,i) => [`color-${['r','g','b'][i]}`, colorOrRed]
        )
    )
  }
}

export const flatten = obj => Object.assign({}, ...function _flatten(o) { return [].concat(...Object.keys(o).map(k => typeof o[k] === 'object' ? _flatten(o[k]) : ({[k]: o[k]})))}(obj))
export const dotFlatten = (object, propObjectName) => {
  const newObject = JSON.parse(JSON.stringify(object))
  const newPropObject = Object.fromEntries(Object.entries(newObject[propObjectName]).map(([key, val]) => [`${propObjectName}.${key}`, val]))
  delete newObject[propObjectName]
  Object.assign(newObject, newPropObject)
  return newObject
}

export const getDateFnsLocale = () => {
  return store.getState().locale === 'ru-RU' ? dateFns_ru : dateFns_enUS
}

export function dates(text: string): string {
  return text.replaceAll(/%date_fns_(\d+)%/g, (match) => {
    const [,date] = match.match(/%date_fns_(\d+)%/)
    return formatDistanceToNowStrict(
      new Date(
        Number(date) * 1000
      ), 
      { locale: getDateFnsLocale() }
    )
  })
}