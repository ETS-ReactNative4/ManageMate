const inttialState = {}

export default (state = inttialState, action) => {
  switch (action.type) {
    case 'ADD_HISTORY':
      return {
        ...state,
        history: action.payload.history
      }
    }
}
