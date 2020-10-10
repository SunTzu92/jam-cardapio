import { TYPES } from '../reducers/comidaReducer'

export const loadSuccess = (comidas) => ({
  type: TYPES.COMIDAS_LOADING_SUCCESS,
  payload: { comidas }
})
