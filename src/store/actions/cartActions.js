import { ADD_TO_CART, UPDATE_PRODUCT_FROM_CART, DELETE_FROM_CART, CLEAR_CART } from './constants'

export function addToCartAction(product){
    return {
        type: ADD_TO_CART,
        payload : product
    }
}

export function updateCartAction(productId, quantity){
    return {
        type: UPDATE_PRODUCT_FROM_CART,
        payload : {
            productId,
            quantity
        }
    }
}

export function deleteFromCartAction(productId){
    return {
        type: DELETE_FROM_CART,
        payload : productId
    }
}

export function clearCartAction(){
    return {
        type: CLEAR_CART
    }
}