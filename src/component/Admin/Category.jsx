// import React from 'react'
import styles from '../../styles/category.module.css';
import React, { useState } from 'react';
import pic from '../../assets/product2.jpg'
import { IoSearch } from 'react-icons/io5';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import CategoryForm from './CategoryForm';
// import { Link, useNavigate } from "react-router-dom";


  const initialShops = [
    { id: 1, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 2, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 3, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 4, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 5, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 6, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 7, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 8, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 9, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 10, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 11, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 12, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 13, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 14, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 15, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 16, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 17, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 18, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 19, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 20, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 21, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 22, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 23, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 24, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 25, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 26, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 27, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 28, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 29, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 30, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
    { id: 31, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
];


function Category() {

  // const [isFormOpen, setIsFormOpen] = useState(false);

  // Function to toggle form visibility
  const toggleForm = () => {
    setIsFormOpen(true);
  };

  // const navigate = useNavigate();

  // const goToNextPage = () => {
  //   navigate("/categoryform");
  // };



  const [shops, setShops] = useState(initialShops);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const shopsPerPage = 10;

  const toggleBlockShop = (id) => {
    setShops((prevShops) =>
      prevShops.map((shop) =>
        shop.id === id ? { ...shop, blocked: !shop.blocked } : shop
      )
    );
  };

  const deleteShop = (id) => {
    setShops((prevShops) => prevShops.filter((shop) => shop.id !== id));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredShops = shops.filter((shop) =>
    shop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastShop = currentPage * shopsPerPage;
  const indexOfFirstShop = indexOfLastShop - shopsPerPage;
  const currentShops = filteredShops.slice(indexOfFirstShop, indexOfLastShop);

  const totalPages = Math.ceil(filteredShops.length / shopsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  return (

   

    <div>


 {
      isFormOpen &&
      <CategoryForm setIsFormOpen={setIsFormOpen}/>
     } 
        
      

      <h1 className={styles.heading}>Category Table</h1>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <div className={styles.searchContainer}>
            <IoSearch />
            <input
              type="text"
              placeholder="Search by shop name"
              className={styles.searchBox}
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <button onClick={() => setIsFormOpen(true)}>Add Form
            
          </button>
          
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.shopTable}>
            <thead>
              <tr>
                <th>Sr No.</th>
                <th> Name</th>
                <th>Title</th>
                <th>img</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
  {currentShops.map((shop, index) => (
    <tr key={index}>
      <td>{index + 1 + (currentPage - 1) * shopsPerPage}</td>
      <td>{shop.name}</td>
      <td>{shop.title}</td>
      <td>
        <img 
          src={shop.img} 
          alt={shop.name} 
          className={styles.img}
        />
      </td>
      <td>{shop.status}</td>
      <td className={styles.actionCell}>
        <button
          onClick={() => toggleBlockShop(shop.id)}
          className={`${styles.actionButton} ${shop.blocked ? styles.unblock : styles.block}`}
        >
          {shop.blocked ? 'Unblock' : 'Block'}
        </button>
        <button onClick={() => deleteShop(shop.id)} className={styles.deleteButton}>
          Delete
        </button>
        <span className={styles.actionMenuButton} onClick={() => toggleMenu(shop.id)}>
          <HiOutlineDotsVertical />
          {activeMenu === shop.id && (
            <div className={styles.actionMenu}>
              <ul>
                <li onClick={() => toggleBlockShop(shop.id)}>{shop.blocked ? 'Unblock' : 'Block'}</li>
                <li onClick={() => deleteShop(shop.id)}>Delete</li>
              </ul>
            </div>
          )}
        </span>
      </td>
    </tr>
  ))}
</tbody>
          </table>
        </div>

        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => goToPage(i + 1)}
              className={`${styles.pageButton} ${currentPage === i + 1 ? styles.activePage : ''}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
