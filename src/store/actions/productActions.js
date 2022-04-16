import { GET_PRODUCTS } from './constants'

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