import Layout from "../components/layout"
import Cart from "../components/cart"

export default function Home() {
  const mockupData = [
    {
      id: 1,
      title: "phone one",
      price: 54,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    },
    {
      id: 2,
      title: "phone two",
      price: 99,
      image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      id: 3,
      title: "phone three",
      price: 54,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"

    },
    {
      id: 4,
      title: "phone four",
      price: 99,
      image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      id: 5,
      title: "phone five",
      price: 54,
      image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      id: 6,
      title: "phone six",
      price: 99,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    }
  ]
  return (
    <>
        <Layout title="Home | Shopping">
            <section className="py-8 px-2 md:px-4 lg:px-16 flex-grow mt-14">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {
                    mockupData.map(({id, title, price, image}) => (<Cart key={id} title={title} price={price} image={image}/>))
                  }
                </div>
              </div>
            </section>
        </Layout>
    </>
  )
}