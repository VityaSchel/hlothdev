export default function themeReducer(state = window.matchMedia?.('(prefers-color-scheme: dark)').matches === false ? 'light' : 'dark', action) {
  switch (action.type) {
    case 'theme/set':
      return action.theme
    case 'theme/switch':
      return state === 'dark' ? 'light' : 'dark'
    default:
      return state
  }
}
