const INITIAL_STATE = {
  selected: '',
  itens: {}
}

export const TYPES = {
  COMIDAS_LOADING_SUCCESS: 'COMIDAS:LOADING_SUCCESS',
  CHAMGE_MENU: 'COMIDAS:CHANGE_MENU'
}

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case TYPES.COMIDAS_LOADING_SUCCESS: {
      const { selected, data } = payload
      return {
        ...state,
        selected,
        itens: {
          ...state.itens,
          ...data
        }
      }
    }
    case TYPES.CHAMGE_MENU: {
      const { selected } = payload
      return {
        ...state,
        selected
      }
    }
    default:
      return state
  }
}
