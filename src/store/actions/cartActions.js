import { ADD_TO_CART, UPDATE_PRODUCT_FROM_CART, DELETE_FROM_CART } from './constants'

export function addToCartAction(product){
    return {
        type: ADD_TO_CART,
        payload : product
    }
}

export function updateCartAction(product){
    return {
        type: UPDATE_PRODUCT_FROM_CART,
        payload : product
    }
}

export function deleteFromCartAction(productId){
    return {
        type: DELETE_FROM_CART,
        payload : productId
    }
}