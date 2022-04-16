import { ADD_TO_CART, DELETE_FROM_CART } from "../actions/constants"

const initialState = []

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART: return [...state, action.payload]
        case DELETE_FROM_CART: return state.filter(product => product.id !== action.payload)
        default: return state
    }
}

export default cartReducer