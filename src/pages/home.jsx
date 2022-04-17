import { useEffect } from 'react'
import Layout from "../components/layout"
import Cart from "../components/cart"
import { useDispatch, useSelector } from 'react-redux'
import { getProductsAction } from '../store/actions/productActions'
import { getProducts } from '../store/store'

export default function Home(){

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProducts())
  },[])
  const products = useSelector((state)=> state.products)
  return (
    <>
        <Layout title="Home | Shopping">
            <section className="py-8 px-2 md:px-4 lg:px-16 flex-grow mt-14">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {
                    products.map(({id, title, price, image},index) => (<Cart key={index} title={title} price={price} image={image} id={id}/>))
                  }
                </div>
              </div>
            </section>
        </Layout>
    </>
  )
}