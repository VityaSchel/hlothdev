export default function layoutReducer(state = 'wide', action) {
  switch (action.type) {
    case 'layout/set':
      return action.layout
    default:
      return state
  }
}
