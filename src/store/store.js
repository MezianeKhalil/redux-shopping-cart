import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import cartReducer from './reducers/cartReducer'
import productReducer from './reducers/productReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
const middleware = applyMiddleware(reduxThunk)

export default () => {
    let store = createStore(persistedReducer, middleware)
    let persistor = persistStore(store)
    return { store, persistor }
  }