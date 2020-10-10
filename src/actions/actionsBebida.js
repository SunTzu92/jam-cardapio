import { TYPES } from '../reducers/bebidaReducer'

export const loadSuccess = (bebidas) => ({
  type: TYPES.BEBIDAS_LOADING_SUCCESS,
  payload: { bebidas }
})
