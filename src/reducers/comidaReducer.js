const INITIAL_STATE = {
  data: []
}

export const TYPES = {
  COMIDAS_LOADING_SUCCESS: 'COMIDAS_LOADING_SUCCESS'
}

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case TYPES.COMIDAS_LOADING_SUCCESS: {
      const { comidas } = payload
      return {
        ...state,
        data: [...comidas]
      }
    }
    default:
      return state
  }
}
