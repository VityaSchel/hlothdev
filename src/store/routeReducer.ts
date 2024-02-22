import { history } from '../App'

export default function routeReducer(state = window.location.pathname.substring(1).split('/')[0], action) {
  switch (action.type) {
    case 'route/set':
      var params = action.params ? '?' + action.params.toString() : ''
      history.push(`/${action.route}${params}`)
      return action.route
    case 'route/pop':
      return action.route
    default:
      return state
  }
}
