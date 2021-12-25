import localization from '../localization'

export default function translationReducer(state = {}, action) {
  switch (action.type) {
    case 'translation/set':
      return localization[action.language ?? '_DEFAULT_'] ?? localization._DEFAULT_
    default:
      return state
  }
}
