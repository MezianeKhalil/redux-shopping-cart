import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import cartReducer from './reducers/cartReducer'
import productReducer from './reducers/productReducer'

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer
})

const middleware = applyMiddleware(reduxThunk)

const store = createStore(rootReducer, middleware)

export default store