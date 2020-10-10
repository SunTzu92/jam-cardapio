import { combineReducers } from 'redux'

import menuReducer from './menuReducer'
import bebidasReducer from './bebidaReducer'
import comidasReducer from './comidaReducer'

const rootReducer = combineReducers({
  menu: menuReducer,
  bebidas: bebidasReducer,
  comidas: comidasReducer
})

export default rootReducer
