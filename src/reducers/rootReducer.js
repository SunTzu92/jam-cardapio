import { combineReducers } from 'redux'

import bebidasReducer from './bebidaReducer'

const rootReducer = combineReducers({
  bebidas: bebidasReducer
  // comidas: comidasReducer,
})

export default rootReducer
