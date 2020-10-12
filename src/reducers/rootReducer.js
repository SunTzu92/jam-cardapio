import { combineReducers } from 'redux'

import menuReducer from './menuReducer'
import legendaReducer from './legendaReducer'
import bebidasReducer from './bebidaReducer'
import comidasReducer from './comidaReducer'

const rootReducer = combineReducers({
  menu: menuReducer,
  legenda: legendaReducer,
  bebidas: bebidasReducer,
  comidas: comidasReducer
})

export default rootReducer
