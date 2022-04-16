import { Link } from 'react-router-dom'

export default function Cart({title, price, image}) {
  return (
    <>
        <div className="rounded-md overflow-hidden">
            <div className="border-solid border-2 border-gray-100 rounded-md">
                <div className="w-full overflow-hidden">
                    <img className="h-80 md:h-60 w-full object-cover" src={image} alt=""/>
                </div>
                <div className="px-4 py-2">
                    <Link className="text-gray-900 text-lg truncate font-medium pt-2 capitalize" to={`/product/${title}`}>{title}</Link>
                    <p className="text-lg text-gray-800">${price}</p>
                    <div className="flex justify-between mt-2">
                        <input type="number" className="w-28 px-3 py-2 border-solid border-2 border-gray-100 rounded-sm" defaultValue={1} min={1} max={10} />
                        <button className="py-2 px-3 bg-blue-600 text-white rounded-sm">Add To cart</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
