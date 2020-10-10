import { combineReducers } from 'redux'

import bebidasReducer from './bebidaReducer'
import comidasReducer from './comidaReducer'

const rootReducer = combineReducers({
  bebidas: bebidasReducer,
  comidas: comidasReducer
})

export default rootReducer
