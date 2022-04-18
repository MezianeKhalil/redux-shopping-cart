import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/store'

export default function Cart({id, title, price, image}) {

    const dispatch = useDispatch()
    const addToCartHandler = (product)=>{
        dispatch(addToCart({...product, quantity: 1}))
    }

    return (
        <>
            <div className="rounded-md overflow-hidden">
                <div className="border-solid border-2 border-gray-100 rounded-md">
                    <div className="w-full overflow-hidden">
                        <img className="h-80 md:h-60 w-full object-cover" src={image} alt=""/>
                    </div>
                    <div className="px-4 py-2">
                        <Link className="text-gray-900 text-lg truncate font-medium pt-2 capitalize" to={`/product/${id}`}>{title}</Link>
                        <div className="flex justify-between mt-4">
                            <p className="text-lg text-gray-800">${price}</p>
                            <button onClick={()=>addToCartHandler({id, title, price, image})} className="py-2 px-3 bg-blue-600 text-white rounded-sm">Add To cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}
