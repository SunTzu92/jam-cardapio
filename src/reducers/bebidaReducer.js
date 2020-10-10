﻿const INITIAL_STATE = {
  data: []
}

export const TYPES = {
  BEBIDAS_LOADING_SUCCESS: 'BEBIDAS_LOADING_SUCCESS'
}

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case TYPES.BEBIDAS_LOADING_SUCCESS: {
      const { bebidas } = payload
      return {
        ...state,
        data: [...bebidas]
      }
    }
    default:
      return state
  }
}
