import reduxThunk from 'redux-thunk'
import { configureStore, createSlice, createAsyncThunk, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

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
    reducers: {
        addToCart: (state, action) => {
            let exist = state.find(item => item.id === action.payload.id)
            if(!exist){
                state.push(action.payload)
            }
            state.map(item => {
                if(item.id === action.payload.id){
                    item.quantity = action.payload.quantity
                }
                return item
            })
        },
        deleteFromCart: (state, action) => {
            return state.filter(product => product.id !== action.payload)
        },
        updateQuantity: (state, action) => {
            state.map(item => {
                if(item.id === action.payload.productId){
                    item.quantity = action.payload.quantity
                }
                return item
            }) 
        },
        clearCart: (state, action) => {
            return []
        }
    }
})

const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getProducts.fulfilled,(state, action)=>{
            return [...action.payload]
        })
    }
})

const persistedReducer = persistReducer(persistConfig, combineReducers({
    cart: cartSlice.reducer,
    products: productSlice.reducer
}))

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [ reduxThunk ]
})
export const persistor = persistStore(store)

export const { addToCart, deleteFromCart, updateQuantity, clearCart } = cartSlice.actions