import localization from '../data/localization'

export type Localization = typeof localization
export type Translation = Localization['_DEFAULT_'] | Localization['ru-RU']