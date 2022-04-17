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



// new code update
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getProducts = createAsyncThunk(
    'products/getProducts', 
    async () => {
        try{
            const response = await fetch('https://fakestoreapi.com/products')
            const products = await response.json()
            return products
        }catch(error){
            console.error('error: ', error)
        }
    }
)

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {}
})

const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getProducts.fulfilled,(state, action)=>{
            state.push(...action.payload)
        })
    }
})

export const { add, clear, remove, update } = cartSlice.actions
export const { addProducts } = productSlice.actions

export const newStore = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        products: productSlice.reducer
    },
    middleware: [ reduxThunk ]
})