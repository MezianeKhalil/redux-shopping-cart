import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import cartReducer from './reducers/cartReducer'
import productReducer from './reducers/productReducer'

const middleware = applyMiddleware(reduxThunk)

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer
})

export const store = createStore(rootReducer, middleware)