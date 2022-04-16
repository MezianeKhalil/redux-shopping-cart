import { GET_PRODUCTS } from '../actions/constants'

const initialState = []

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PRODUCTS: return action.payload
        default: return state
    }
}

export default productReducer