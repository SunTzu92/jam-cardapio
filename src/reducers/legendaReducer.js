const INITIAL_STATE = {
  favorito: {
    name: 'favorito',
    title: 'Favoritos',
    active: true
  },
  usarShoyu: {
    name: 'usarShoyu',
    title: 'Usar Shoyu',
    active: true
  },
  vegano: {
    name: 'vegano',
    title: 'Vegetariano',
    active: true
  },
  semLactose: {
    name: 'semLactose',
    title: 'Sem Lactose',
    active: true
  },
  semGluten: {
    name: 'semGluten',
    title: 'Sem Glúten',
    active: true
  },
  meiaPorcao: {
    name: 'meiaPorcao',
    title: 'Meia Porção',
    active: true
  }
}

export const TYPES = {
  CHANGE_LEGENDA: 'LEGENDA:CHANGE_LEGENDA'
}

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case TYPES.CHANGE_LEGENDA: {
      const { target, active } = payload
      return {
        ...state,
        [target]: {
          ...state[target],
          active
        }
      }
    }
    default:
      return state
  }
}
