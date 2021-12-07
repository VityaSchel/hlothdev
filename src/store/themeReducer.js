export default function themeReducer(state = 'light', action) {
  switch (action.type) {
    case 'theme/set':
      return action.theme
    case 'theme/switch':
      return state === 'dark' ? 'light' : 'dark'
    default:
      return state
  }
}
