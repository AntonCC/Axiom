import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartReducer from './cart/cartReducer'
import modalReducer from './modal/modalReducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer']
}

const rootReducer = combineReducers({
  cartReducer: cartReducer,
  modalReducer: modalReducer
})

export default persistReducer(persistConfig, rootReducer)