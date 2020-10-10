﻿const INITIAL_STATE = {
  selected: ''
}

export const TYPES = {
  BEBIDAS_LOADING_SUCCESS: 'BEBIDAS_LOADING_SUCCESS'
}

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case TYPES.BEBIDAS_LOADING_SUCCESS: {
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
