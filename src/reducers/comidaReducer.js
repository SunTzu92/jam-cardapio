const INITIAL_STATE = {
  selected: ''
}

export const TYPES = {
  COMIDAS_LOADING_SUCCESS: 'COMIDAS_LOADING_SUCCESS'
}

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case TYPES.COMIDAS_LOADING_SUCCESS: {
      const { selected, data } = payload
      return {
        ...state,
        selected,
        ...data
      }
    }
    default:
      return state
  }
}
