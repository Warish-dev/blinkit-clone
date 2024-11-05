import React from 'react'
import Header from './component/Header'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import ProductInfo from './pages/ProductInfo'
import Cart from './pages/Cart'
import { Toaster } from 'react-hot-toast'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import SearchProduct from './pages/SearchProduct'

const App = () => {
  return (
    <div>
    <Toaster/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/cart'} element={<Cart/>}/>
        <Route path={'/productInfo/:id'} element={<ProductInfo/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/signup'} element={<SignUp/>}/>
        <Route path={'/search'} element={<SearchProduct/>}/>
      </Routes>
    </div>
  )
}

export default App