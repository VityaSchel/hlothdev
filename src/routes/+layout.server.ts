export const load = async ({ cookies }) => {
  return {
    alertsDismissed: {
      jsDisabled: cookies.get('hloth-dev_js-disabled-alert-dismissed') === 'true',
      reducedMotion: cookies.get('hloth-dev_reduced-motion-alert-dismissed') === 'true'
    }
  }
}