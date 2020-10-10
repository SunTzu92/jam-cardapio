const INITIAL_STATE = {
  selected: 'comidas'
}

export const TYPES = {
  CHANGE_MENU: 'CHANGE_MENU'
}

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case TYPES.CHANGE_MENU: {
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
