import { ADD_TO_CART, DELETE_FROM_CART, UPDATE_PRODUCT_FROM_CART, CLEAR_CART } from "../actions/constants"

const initialState = []

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            const existItem  = state.find(item => item.id === action.payload.id)
            if(!existItem){
                return [...state, {...action.payload}]
            }
            return state.map((item)=>{
                if(item.id === action.payload.id){
                    return {...item, quantity: action.payload.quantity}
                }
                return item
            })
        case DELETE_FROM_CART: return state.filter(product => product.id !== action.payload)
        case UPDATE_PRODUCT_FROM_CART:
            return state.map(product => {
                if(product.id === action.payload.productId){
                    return {...product, quantity: action.payload.quantity}
                }
                return product
            })
        case CLEAR_CART: return []
        default: return state
    }
}

export default cartReducer