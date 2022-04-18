import reduxThunk from 'redux-thunk'
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

export const { addToCart, deleteFromCart, updateQuantity, clearCart } = cartSlice.actions

export const newStore = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        products: productSlice.reducer
    },
    middleware: [ reduxThunk ]
})