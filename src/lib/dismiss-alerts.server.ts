import type { Cookies } from '@sveltejs/kit'

export function getAlertsDismissedProps(cookies: Cookies) {
  return {
    alertsDismissed: {
      jsDisabled: cookies.get('hloth-dev_js-disabled-alert-dismissed') === 'true',
      reducedMotion: cookies.get('hloth-dev_reduced-motion-alert-dismissed') === 'true',
      reducedTransparency: cookies.get('hloth-dev_reduced-transparency-alert-dismissed') === 'true'
    }
  }
}
