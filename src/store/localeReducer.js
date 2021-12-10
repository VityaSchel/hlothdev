import localization from '../localization.json'

export default function localeReducer(state = null, action) {
  switch (action.type) {
    case 'locale/update':
      return Object.keys(localization).includes(navigator.language) ? navigator.language : '_DEFAULT_'
    default:
      return state
  }
}
