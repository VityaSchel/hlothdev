import localization, { Translation } from '../../data/localization'

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

type TranslationSlice = Translation

const initialState: TranslationSlice = localization._DEFAULT_

export const translationSlice = createSlice({
  name: 'translation',
  initialState,
  reducers: {
    setTranslation: (state, action: PayloadAction<Translation>) => {
      return action.payload
    },
    setLocale: (state, action: PayloadAction<string>) => {
      return action.payload in localization 
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore we're already checking for the key
        ? localization[action.payload] 
        : localization['_DEFAULT_']
    }
  }
})

export const { setTranslation, setLocale } = translationSlice.actions
export const selectTranslation = (state: RootState) => state.translation
export default translationSlice.reducer