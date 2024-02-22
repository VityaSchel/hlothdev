export default function localeReducer(state = null, action) {
  switch (action.type) {
    case 'locale/update':
      return action.locale
    default:
      return state
  }
}
