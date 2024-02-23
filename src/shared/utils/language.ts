export function getLocale(language: string) {
  switch (language) {
    case 'en':
      return 'en-US'
    case 'en-US':
      return 'en-US'
    case 'ru':
      return 'ru-RU'
    case 'ru-RU':
      return 'ru-RU'
    default:
      return 'en-US'
  }
}