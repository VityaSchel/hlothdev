export default function portfolioReducer(state = { showShockingProjects: false }, action) {
  switch (action.type) {
    case 'portfolio/showShockingProjects':
      return { showShockingProjects: true }
    default:
      return state
  }
}
