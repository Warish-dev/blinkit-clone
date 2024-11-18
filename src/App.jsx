import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import ProductInfo from './pages/ProductInfo'
import Cart from './pages/Cart'
import { Toaster } from 'react-hot-toast'
import Login2 from './pages/Login2'
import Signup2 from './pages/Signup2'
import SearchProduct from './pages/SearchProduct'
import Admin from './pages/Admin'
import AdminPanel from './component/Admin/AdminPanel'
import Users from './component/Admin/Users'
import Shops from './component/Admin/Shops'
import Login from './pages/Login'
import ProductByCategory from './pages/ProductByCategory'
// import Error from './component/Error2'
// import Login2 from './component/Admin/Login2'
// import Error2 from './component/Admin/Error2'

const App = () => {
  return (
    <div>
    <Toaster/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/cart'} element={<Cart/>}/>
        <Route path={'/productInfo/:id'} element={<ProductInfo/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/signup2'} element={<Signup2/>}/>
        <Route path={'/search'} element={<SearchProduct/>}/>
        <Route path={'/Login2'} element={<Login2/>} />
        <Route path={'/category/:id'} element={<ProductByCategory/>} />

        
        <Route path={'/admin/'} element={<Admin />}>
          <Route path={'dashboard'} element={<AdminPanel />} />
          <Route path={'users'} element={<Users />} />
          <Route path={'shops'} element={<Shops />} />
          {/* <Route path={'Error2'} element={<Error2/>} /> */}


        </Route>


      </Routes>
    </div>
  )
}

export default App