
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Home from './pages/Home';
import ProductInfo from './pages/ProductInfo';
// import Cart from './pages/Cart';
import Login2 from './pages/Login2';
import Signup2 from './pages/Signup2';
import SearchProduct from './pages/SearchProduct';
import Admin from './pages/Admin';
import AdminPanel from './component/Admin/AdminPanel';
import Users from './component/Admin/Users';
import Shops from './component/Admin/Shops';
import DeliveryBoy from './component/Admin/DeliveryBoy';
import Category from './component/Admin/Category';
import Subcategory from './component/Admin/Subcategory';

import Login from './pages/Login';
import ProductByCategory from './pages/ProductByCategory';
import PosterItem from './pages/PosterItem';

import Warehouse from './pages/Warehouse';
import WarehousePanel from './component/WareHouse/WarehousePanel';

import Contact from './pages/contact/Contact';

import AboutUs from './pages/AboutUs';
import Product from './component/WareHouse/Product';
import CategoryForm from './component/Admin/CategoryForm';
import Profile from './component/WareHouse/Profile';

const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/productInfo/:id" element={<ProductInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup2" element={<Signup2 />} />
        <Route path="/search" element={<SearchProduct />} />
        <Route path="/Login2" element={<Login2 />} />
        <Route path="/category/:id" element={<ProductByCategory />} />
        <Route path="/PosterItem" element={<PosterItem />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />



        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />}>
          <Route path="dashboard" element={<AdminPanel />} />
          <Route path="users" element={<Users />} />
          <Route path="shops" element={<Shops />} />
          <Route path="category" element={<Category />} />
          <Route path="categoryform" element={<CategoryForm />} />
          <Route path="deliveryboy" element={<DeliveryBoy />} />
          <Route path="subcategory" element={<Subcategory />} />
    
        </Route>

        {/* Warehouse Routes */}
        <Route path="/WareHouse" element={<Warehouse />}>
          <Route path="dashboard" element={<WarehousePanel />} />
          <Route path="product" element={<Product />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
