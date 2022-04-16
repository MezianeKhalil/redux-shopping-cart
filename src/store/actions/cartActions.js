import { ADD_TO_CART, UPDATE_PRODUCT_FROM_CART, DELETE_FROM_CART } from './constants'

export async function addToCartAction(product){
    return {
        type: ADD_TO_CART,
        payload : product
    }
}

export async function updateProductFromCartAction(product){
    return {
        type: UPDATE_PRODUCT_FROM_CART,
        payload : product
    }
}

export async function deleteProductFromCartAction(productId){
    return {
        type: DELETE_FROM_CART,
        payload : productId
    }
}