import React from 'react'

export default function CartTable() {
    const mockupData = [
        {
          id: 1,
          title: "phone one",
          price: 54,
          quantity: 4,
          image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        },
        {
            id: 2,
            title: "phone one",
            price: 54,
            quantity: 4,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        },
        {
            id: 3,
            title: "phone one",
            price: 54,
            quantity: 4,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        },
        {
            id: 4,
            title: "phone one",
            price: 54,
            quantity: 4,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        },
    ]
    return (
        <>
            <table className='col-span-12 lg:col-span-8 xl:col-span-9 rounded-md'>
                <thead className='bg-gray-100'>
                    <tr>
                        <th className='font-medium py-3'>Product Name</th>
                        <th className='font-medium py-3'>Quantity</th>
                        <th className='font-medium py-3'>Subtotal</th>
                        <th className='font-medium py-3'>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mockupData.map(({id, title, image, quantity, price})=>{
                            return (
                                <tr key={id} className={`${id%2 == 0? 'bg-gray-50':''}`}>
                                    <th className='font-medium py-3 capitalize'>{title}</th>
                                    <th className='font-medium py-3 capitalize'>
                                        <input type="number" className="w-28 px-3 py-2 border-solid border-2 border-gray-100 rounded-sm" min={1} max={10} defaultValue={quantity} />
                                    </th>
                                    <th className='font-medium py-3 capitalize'>{price}</th>
                                    <th className='font-medium py-3 capitalize'>
                                        <button className='bg-red-500 p-1 rounded-sm text-white'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className='fill-current w-6 h-6' viewBox="0 0 24 24"><path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z"/></svg>
                                        </button>
                                    </th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
