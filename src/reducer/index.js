const inttialState = {}

export default (state = inttialState, action) => {
  switch (action.type) {
    case 'ADD_HISTORY':
      return {
        ...state,
        history: action.payload.history
      }
      case 'ADD_MYHISTORY':
      return {
        ...state,
        myhistory: action.payload.myhistory
      }
      case 'ADD_ALL_LEAVE':
      return {
        ...state,
        add: action.payload.add
      }
      case 'ADD_STAFFID':
      return {
        ...state,
        staff: action.payload.staff
      }
      case 'ADD_WITHDRAW':
      return {
        ...state,
        withdraw: action.payload.withdraw
      }
      case 'ADD_PROJECT':
      return {
        ...state,
        project: action.payload.project
      }
      case 'ADD_PROFILE':
      return {
        ...state,
        profile: action.payload.profile
      }
    }
}
