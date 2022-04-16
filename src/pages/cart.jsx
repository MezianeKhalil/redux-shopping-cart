import Layout from "../components/layout"
import CartTable from '../components/cartTable'
export default function Cart() {
  return (
    <>
        <Layout title="Cart | Shopping">
          <section className="py-8 px-2 md:px-4 lg:px-16 flex-grow mt-14">
            <div className="container mx-auto">
              <h1 className="text-2xl text-gray-900 font-medium mb-3">Order Summary</h1>
              <div className="grid grid-cols-12 gap-2">
                <CartTable/>
                <div className='bg-white col-span-12 lg:col-span-4 xl:col-span-3'>
                  <div className='border-2 border-gray-100 p-4 rounded-sm'>
                      <ul>
                          <li className='flex justify-between w-full text-lg text-gray-800'>
                              <p>Cart Subtotal</p>
                              <p>45$</p>
                          </li>
                      </ul>
                      <button className='w-full bg-blue-500 py-2 px-3 rounded-sm text-white mt-4'>Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Layout>
    </>
  )
}