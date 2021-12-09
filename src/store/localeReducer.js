import localization from '../localization.json'

export default function localeReducer(state = '_DEFAULT_', action) {
  switch (action.type) {
    case 'locale/update':
      return Object.keys(localization).includes(navigator.language) ? navigator.language : '_DEFAULT_'
    default:
      return state
  }
}
