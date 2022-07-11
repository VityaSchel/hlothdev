const defaultThemeIsDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
const defaultTheme = defaultThemeIsDark === false ? 'light' : 'dark'

function applyThemeToBody(theme) {
  if (theme === 'dark') document.body.classList.add('dark-theme')
  else if (theme === 'light') document.body.classList.remove('dark-theme')
}

applyThemeToBody(defaultTheme)

export default function themeReducer(state = defaultTheme, action) {
  switch (action.type) {
    case 'theme/set':
      applyThemeToBody(action.theme)
      return action.theme
    case 'theme/switch':
      applyThemeToBody(state === 'dark' ? 'light' : 'dark')
      return state === 'dark' ? 'light' : 'dark'
    default:
      return state
  }
}
