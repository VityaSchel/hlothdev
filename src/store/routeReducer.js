export default function routeReducer(state = '', action) {
  switch (action.type) {
    case 'route/set':
      return action.route
    default:
      return state
  }
}
