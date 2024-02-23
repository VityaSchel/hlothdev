import React from 'react'
import type { TypedUseSelectorHook } from 'react-redux'
import { type RootState, type AppDispatch, store } from './index'

export const useAppDispatch = () => {
  return (event: Parameters<AppDispatch>[0]) => {
    store.dispatch(event)
  }
}
export const useAppSelector: TypedUseSelectorHook<RootState> = (state: Parameters<TypedUseSelectorHook<RootState>>[0]) => {
  const [mappedStore, setMappedStore] = React.useState(state(store.getState() ?? {}) ?? {})

  React.useEffect(() => {
    const update = () => {
      const newState = store.getState()
      setMappedStore(state(newState ?? {}) ?? {})
    }

    update()
    store.subscribe(update)
  }, [store])

  return mappedStore as ReturnType<TypedUseSelectorHook<RootState>>
}