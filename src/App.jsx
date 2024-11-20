import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import ProductInfo from './pages/ProductInfo'
import Cart from './pages/Cart'
import { Toaster } from 'react-hot-toast'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import SearchProduct from './pages/SearchProduct'
import Admin from './pages/Admin'
import AdminPanel from './component/Admin/AdminPanel'
import Users from './component/Admin/Users'
import Shops from './component/Admin/Shops'
import DeliveryBoy from './component/Admin/DeliveryBoy'
import Category from './component/Admin/Category'
import Subcategory from './component/Admin/Subcategory'

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
        
        <Route path={'/admin/'} element={<Admin />}>
          <Route path={'dashboard'} element={<AdminPanel />} />
          <Route path={'users'} element={<Users />} />
          <Route path={'shops'} element={<Shops />} />
          <Route path={'category'} element={<Category />} />
          <Route path={'deliveryboy'} element={<DeliveryBoy />} />
          <Route path={'Subcategory'} element={<Subcategory />} />
        </Route>


      </Routes>
    </div>
  )
}

export default App