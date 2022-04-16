import Layout from "../components/layout"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductAction } from '../store/actions/productActions'
import { useParams } from 'react-router-dom'
export default function Product() {

  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProductAction(id))
  },[])
  const [product] = useSelector(state=>state.products.filter(product=> product.id == id))
  console.log('product: ', product)
  return (
    <>
        <Layout title="Product | Shopping">
          <section className="py-8 px-2 md:px-4 lg:px-16 flex-grow my-10 min-h-screen">
            <div className="container mx-auto">
              <div className="grid grid-cols-12 gap-3">
                <div className="border-2 p-2 col-span-12 lg:col-span-8 xl:col-span-9 overflow-hidden">
                  <img className="h-96 mx-auto" src={product.image} alt="" />
                </div>
                <div className="col-span-12 lg:col-span-4 xl:col-span-3">
                  <h1 className="text-xl text-gray-900 mb-2 font-medium">{product.title}</h1>
                  <p className="text-blue-500 mb-2">{product.rating.count} reviews</p>
                  <p className="text-lg text-gray-900 font-medium">${product.price}</p>
                  <div className="flex justify-between mt-2">
                      <input type="number" className="w-28 px-3 py-2 border-solid border-2 border-gray-100 rounded-sm" defaultValue={1} min={1} max={10} />
                      <button className="py-2 px-3 bg-blue-600 text-white rounded-sm">Add To cart</button>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-8 py-5">
                    <p className="text-gray-800 text-lg">{product.description}</p>
                </div>
              </div>
            </div>
          </section>
        </Layout>
    </>
  )
}