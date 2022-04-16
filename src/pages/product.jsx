import Layout from "../components/layout"

export default function Product() {
  return (
    <>
        <Layout title="Product | Shopping">
          <section className="py-8 px-2 md:px-4 lg:px-16 flex-grow my-10 min-h-screen">
            <div className="container mx-auto">
              <div className="grid grid-cols-12 gap-3">
                <div className="bg-blue-200 col-span-12 lg:col-span-8 xl:col-span-9 h-96"></div>
                <div className="col-span-12 lg:col-span-4 xl:col-span-3">
                  <h1 className="text-xl text-gray-900 mb-2 font-medium">ErgoChair Pro</h1>
                  <p className="text-blue-500 mb-2">1781 reviews</p>
                  <p className="text-gray-700 mb-3">Fully adjustable, completely supportive, and super breathable. This one has it all.</p>
                  <div className="flex justify-between mt-2">
                      <input type="number" className="w-28 px-3 py-2 border-solid border-2 border-gray-100 rounded-sm" defaultValue={1} min={1} max={10} />
                      <button className="py-2 px-3 bg-blue-600 text-white rounded-sm">Add To cart</button>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-9 py-5">
                    <p className="text-gray-800 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dicta neque maiores, quibusdam consectetur voluptas ipsa iusto numquam minima, unde magni impedit reprehenderit sequi magnam cum similique molestias animi, eveniet quod odit repellat. Ut illum dignissimos quidem voluptatum veniam vero nihil tempore sed laudantium! Exercitationem?</p>
                </div>
              </div>
            </div>
          </section>
        </Layout>
    </>
  )
}