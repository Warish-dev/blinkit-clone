import React, { useState } from 'react';
import styles from '../../styles/subcategory.module.css';
import Img from '../../assets/product2.jpg';
import { IoSearch } from 'react-icons/io5';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import SubCategoryForm from './SubCategoryForm';

const initialShops = [
  { id: 1, name: 'cake',   subName: 'brownie',        title: 'cake',   img: Img, status: 'Active', blocked: false },
  { id: 2, name: 'pie',    subName: 'apple',          title: 'pie',    img: Img, status: 'Active', blocked: false },
  { id: 3, name: 'cookie', subName: 'chocolate chip', title: 'cookie', img: Img, status: 'Active', blocked: false },
  { id: 4, name: 'cookie', subName: 'chocolate chip', title: 'cookie', img: Img, status: 'Active', blocked: false },
  { id: 5, name: 'cookie', subName: 'chocolate chip', title: 'cookie', img: Img, status: 'Active', blocked: false },
  { id: 6, name: 'cookie', subName: 'chocolate chip', title: 'cookie', img: Img, status: 'Active', blocked: false },
  { id: 7, name: 'cookie', subName: 'chocolate chip', title: 'cookie', img: Img, status: 'Active', blocked: false },
  { id: 8, name: 'cookie', subName: 'chocolate chip', title: 'cookie', img: Img, status: 'Active', blocked: false },
  { id: 9, name: 'cookie', subName: 'chocolate chip', title: 'cookie', img: Img, status: 'Active', blocked: false },
  { id: 10, name: 'cookie', subName: 'chocolate chip', title: 'cookie', img: Img, status: 'Active', blocked: false },
  { id: 11, name: 'cookie', subName: 'chocolate chip', title: 'cookie', img: Img, status: 'Active', blocked: false },
  { id: 12, name: 'cookie', subName: 'chocolate chip', title: 'cookie', img: Img, status: 'Active', blocked: false },
  { id: 13, name: 'cookie', subName: 'chocolate chip', title: 'cookie', img: Img, status: 'Active', blocked: false },
  { id: 14, name: 'cookie', subName: 'chocolate chip', title: 'cookie', img: Img, status: 'Active', blocked: false },
  { id: 15, name: 'cookie', subName: 'chocolate chip', title: 'cookie', img: Img, status: 'Active', blocked: false },
  { id: 16, name: 'cookie', subName: 'chocolate chip', title: 'cookie', img: Img, status: 'Active', blocked: false },
  { id: 17, name: 'cookie', subName: 'chocolate chip', title: 'cookie', img: Img, status: 'Active', blocked: false },
  { id: 18, name: 'cookie', subName: 'chocolate chip', title: 'cookie', img: Img, status: 'Active', blocked: false },
  { id: 19, name: 'cookie', subName: 'chocolate chip', title: 'cookie', img: Img, status: 'Active', blocked: false },
  { id: 20, name: 'cookie', subName: 'chocolate chip', title: 'cookie', img: Img, status: 'Active', blocked: false },
  { id: 21, name: 'cookie', subName: 'chocolate chip', title: 'cookie', img: Img, status: 'Active', blocked: false },
  { id: 22, name: 'cookie', subName: 'chocolate chip', title: 'cookie', img: Img, status: 'Active', blocked: false },
  { id: 23, name: 'cookie', subName: 'chocolate chip', title: 'cookie', img: Img, status: 'Active', blocked: false },
  { id: 24, name: 'cookie', subName: 'chocolate chip', title: 'cookie', img: Img, status: 'Active', blocked: false },
  { id: 25, name: 'cookie', subName: 'chocolate chip', title: 'cookie', img: Img, status: 'Active', blocked: false },

];

function Category() {
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
      {isFormOpen && <SubCategoryForm setIsFormOpen={setIsFormOpen} />}

      <h1 className={styles.heading}>Sub Category Table</h1>
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
          <button onClick={() => setIsFormOpen(true)}>Add Form</button>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.shopTable}>
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Main Category</th>
                <th>Subtitle</th>
                <th>Image</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentShops.map((shop) => (
                <tr key={shop.id}>
                  <td>{shop.id}</td>
                  <td>{shop.name}</td>
                  <td>{shop.subName}</td>
                  <td>{shop.title}</td>
                  <td>
                    <img src={shop.img} alt={shop.name} className={styles.img} />
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
