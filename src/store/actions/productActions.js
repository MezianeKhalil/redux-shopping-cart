import { GET_PRODUCT, GET_PRODUCTS } from './constants'

export function getProductsAction(){

    return async (dispatch)=>{
        try{
            const response = await fetch('https://fakestoreapi.com/products')
            const products = await response.json()
            dispatch({
                type: GET_PRODUCTS,
                payload : products
            })
        }
        catch(error){
            console.error('error: ', error)
        }
    }
}

export function getProductAction(productId){
    return async (dispatch)=>{
        try{
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
            const product = await response.json()
            dispatch({
                type: GET_PRODUCTS,
                payload : [product]
            })
        }
        catch(error){
            console.error('error: ', error)
        }
    }
}