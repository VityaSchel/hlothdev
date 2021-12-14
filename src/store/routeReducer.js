import { history } from '../App'

export default function routeReducer(state = window.location.pathname.substring(1), action) {
  switch (action.type) {
    case 'route/set':
      history.push(`/${action.route}`)
      return action.route
    case 'route/pop':
      return action.route
    default:
      return state
  }
}
