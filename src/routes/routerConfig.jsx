import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from '../pages/cart'
import Home from '../pages/home'
import Product from '../pages/product'


export default function RouterConfig() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/product/:id" element={<Product/>} />
        </Routes>
    </BrowserRouter>
  )
}