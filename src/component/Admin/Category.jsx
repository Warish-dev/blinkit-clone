//  import React from 'react'
// import styles from '../../styles/category.module.css';
// import React, { useState } from 'react';
// import pic from '../../assets/product2.jpg'
// import { IoSearch } from 'react-icons/io5';
// import { HiOutlineDotsVertical } from 'react-icons/hi';
// import CategoryForm from './CategoryForm';

// // import { Link, useNavigate } from "react-router-dom";


//   const initialShops = [
//     { id: 1, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 2, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 3, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 4, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 5, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 6, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 7, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 8, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 9, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 10, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 11, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 12, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 13, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 14, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 15, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 16, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 17, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 18, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 19, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 20, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 21, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 22, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 23, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 24, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 25, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 26, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 27, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 28, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 29, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 30, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 31, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
// ];


// function Category() {

//   // const [isFormOpen, setIsFormOpen] = useState(false);

//   // Function to toggle form visibility
//   const toggleForm = () => {
//     setIsFormOpen(true);
//   };

//   // const navigate = useNavigate();

//   // const goToNextPage = () => {
//   //   navigate("/categoryform");
//   // };



//   const [shops, setShops] = useState(initialShops);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);

//   const shopsPerPage = 10;

//   const toggleBlockShop = (id) => {
//     setShops((prevShops) =>
//       prevShops.map((shop) =>
//         shop.id === id ? { ...shop, blocked: !shop.blocked } : shop
//       )
//     );
//   };

//   const deleteShop = (id) => {
//     setShops((prevShops) => prevShops.filter((shop) => shop.id !== id));
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1);
//   };

//   const filteredShops = shops.filter((shop) =>
//     shop.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexOfLastShop = currentPage * shopsPerPage;
//   const indexOfFirstShop = indexOfLastShop - shopsPerPage;
//   const currentShops = filteredShops.slice(indexOfFirstShop, indexOfLastShop);

//   const totalPages = Math.ceil(filteredShops.length / shopsPerPage);

//   const goToPage = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const toggleMenu = (id) => {
//     setActiveMenu(activeMenu === id ? null : id);
//   };

//   return (

   

//     <div>


//  {
//       isFormOpen &&
//       <CategoryForm setIsFormOpen={setIsFormOpen}/>
//      } 
       
      

//       <h1 className={styles.heading}>Category Table</h1>
//       <div className={styles.container}>
//         <div className={styles.topContainer}>
//           <div className={styles.searchContainer}>
//             <IoSearch />
//             <input
//               type="text"
//               placeholder="Search by shop name"
//               className={styles.searchBox}
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//           </div>
//           <button onClick={() => setIsFormOpen(true)}>Add Form
            
//           </button>
          
//         </div>

//         <div className={styles.tableContainer}>
//           <table className={styles.shopTable}>
//             <thead>
//               <tr>
//                 <th>Sr No.</th>
//                 <th> Name</th>
//                 <th>Title</th>
//                 <th>img</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//   {currentShops.map((shop, index) => (
//     <tr key={index}>
//       <td>{index + 1 + (currentPage - 1) * shopsPerPage}</td>
//       <td>{shop.name}</td>
//       <td>{shop.title}</td>
//       <td>
//         <img 
//           src={shop.img} 
//           alt={shop.name} 
//           className={styles.img}
//         />
//       </td>
//       <td>{shop.status}</td>
//       <td className={styles.actionCell}>
//         <button
//           onClick={() => toggleBlockShop(shop.id)}
//             className={`${styles.actionButton} ${shop.blocked ? styles.unblock : styles.block}`}
//         >
//           {shop.blocked ? 'Unblock' : 'Block'}
//         </button>
//         <button onClick={() => deleteShop(shop.id)} className={styles.deleteButton}>
//           Delete
//         </button>
//         <span className={styles.actionMenuButton} onClick={() => toggleMenu(shop.id)}>
//           <HiOutlineDotsVertical />
//           {activeMenu === shop.id && (
//             <div className={styles.actionMenu}>
//               <ul>
//                 <li onClick={() => toggleBlockShop(shop.id)}>{shop.blocked ? 'Unblock' : 'Block'}</li>
//                 <li onClick={() => deleteShop(shop.id)}>Delete</li>
//               </ul>
//             </div>
//           )}
//         </span>
//       </td>
//     </tr>
//   ))}
// </tbody>
//           </table>
//         </div>

//         <div className={styles.pagination}>
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i + 1}
//               onClick={() => goToPage(i + 1)}
//               className={`${styles.pageButton} ${currentPage === i + 1 ? styles.activePage : ''}`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Category;














// import React, { useState, useEffect } from 'react';
// import styles from '../../styles/category.module.css';
// import { callAPI } from '../../services/callAPIFunction';
// import { categoryEndPoints } from '../../services/apiEndPoints';
// import pic from '../../assets/product2.jpg';
// import { IoSearch } from 'react-icons/io5';
// import { HiOutlineDotsVertical } from 'react-icons/hi';
// import CategoryForm from './CategoryForm';

// const { VITE_API_BASE_URL } = import.meta.env;

// function Category() {
//   const [shops, setShops] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);

//   const shopsPerPage = 10;

//   // Load categories from API or localStorage
//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     const apiUrl = `${VITE_API_BASE_URL}${categoryEndPoints.getCategories}`;
//     try {
//       const response = await callAPI('GET', apiUrl);
//       if (response.status === 200) {
//         setShops(response.data); // Assuming the response data is an array of categories
//       } else {
//         alert(`Error fetching categories: ${response.statusText}`);
//       }
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//       alert('Failed to fetch categories!');
//     }
//   };

//   const toggleBlockShop = (id) => {
//     setShops((prevShops) =>
//       prevShops.map((shop) =>
//         shop.id === id ? { ...shop, blocked: !shop.blocked } : shop
//       )
//     );
//   };

//   const deleteShop = (id) => {
//     const updatedShops = shops.filter((shop) => shop.id !== id);
//     setShops(updatedShops);
//     // No API call required here as it's just updating local state
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1);
//   };

//   const filteredShops = shops.filter((shop) =>
//     shop.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexOfLastShop = currentPage * shopsPerPage;
//   const indexOfFirstShop = indexOfLastShop - shopsPerPage;
//   const currentShops = filteredShops.slice(indexOfFirstShop, indexOfLastShop);

//   const totalPages = Math.ceil(filteredShops.length / shopsPerPage);

//   const goToPage = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const toggleMenu = (id) => {
//     setActiveMenu(activeMenu === id ? null : id);
//   };

//   const addCategory = (newCategory) => {
//     setShops((prevShops) => [newCategory, ...prevShops]);
//     setIsFormOpen(false);
//   };

//   return (
//     <div>
//       {isFormOpen && <CategoryForm setIsFormOpen={setIsFormOpen} addCategory={addCategory} />}

//       <h1 className={styles.heading}>Category Table</h1>
//       <div className={styles.container}>
//         <div className={styles.topContainer}>
//           <div className={styles.searchContainer}>
//             <IoSearch />
//             <input
//               type="text"
//               placeholder="Search by shop name"
//               className={styles.searchBox}
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//           </div>
//           <button onClick={() => setIsFormOpen(true)}>Add Form</button>
//         </div>

//         <div className={styles.tableContainer}>
//           <table className={styles.shopTable}>
//             <thead>
//               <tr>
//                 <th>Sr No.</th>
//                 <th>Name</th>
//                 <th>Title</th>
//                 <th>Image</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentShops.map((shop, index) => (
//                 <tr key={shop.id}>
//                   <td>{indexOfFirstShop + index + 1}</td>
//                   <td>{shop.name}</td>
//                   <td>{shop.title}</td>
//                   <td>
//                     <img src={shop.img || pic} alt={shop.name} className={styles.img} />
//                   </td>
//                   <td>{shop.status}</td>
//                   <td className={styles.actionCell}>
//                     <button
//                       onClick={() => toggleBlockShop(shop.id)}
//                       className={`${styles.actionButton} ${shop.blocked ? styles.unblock : styles.block}`}
//                     >
//                       {shop.blocked ? 'Unblock' : 'Block'}
//                     </button>
//                     <button onClick={() => deleteShop(shop.id)} className={styles.deleteButton}>
//                       Delete
//                     </button>
//                     <span className={styles.actionMenuButton} onClick={() => toggleMenu(shop.id)}>
//                       <HiOutlineDotsVertical />
//                       {activeMenu === shop.id && (
//                         <div className={styles.actionMenu}>
//                           <ul>
//                             <li onClick={() => toggleBlockShop(shop.id)}>
//                               {shop.blocked ? 'Unblock' : 'Block'}
//                             </li>
//                             <li onClick={() => deleteShop(shop.id)}>Delete</li>
//                           </ul>
//                         </div>
//                       )}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className={styles.pagination}>
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i + 1}
//               onClick={() => goToPage(i + 1)}
//               className={`${styles.pageButton} ${currentPage === i + 1 ? styles.activePage : ''}`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Category;





// import React, { useState, useEffect } from 'react';
// import styles from '../../styles/category.module.css';
// import { callAPI } from '../../services/callAPIFunction';
// import { categoryEndPoints } from '../../services/apiEndPoints';
// import pic from '../../assets/product2.jpg';
// import { IoSearch } from 'react-icons/io5';
// import { HiOutlineDotsVertical } from 'react-icons/hi';
// import CategoryForm from './CategoryForm';

// const { VITE_API_BASE_URL } = import.meta.env;

// function Category() {
//   const [shops, setShops] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);

//   const shopsPerPage = 10;

//   // Load categories from API or localStorage
//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     const apiUrl = `${VITE_API_BASE_URL}${categoryEndPoints.getCategories}`;
//     try {
//       const response = await callAPI('GET', apiUrl);
//       if (response.status === 200) {
//         setShops(response.data); // Assuming the response data is an array of categories
//       } else {
//         alert(`Error fetching categories: ${response.statusText}`);
//       }
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//       alert('Failed to fetch categories!');
//     }
//   };

//   const toggleBlockShop = (id) => {
//     setShops((prevShops) =>
//       prevShops.map((shop) =>
//         shop.id === id ? { ...shop, blocked: !shop.blocked } : shop
//       )
//     );
//   };

//   const deleteShop = (id) => {
//     const updatedShops = shops.filter((shop) => shop.id !== id);
//     setShops(updatedShops);
//     // No API call required here as it's just updating local state
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1);
//   };

//   // Updated filtering logic to handle undefined shop.name
//   const filteredShops = shops.filter((shop) =>
//     (shop.name || '').toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexOfLastShop = currentPage * shopsPerPage;
//   const indexOfFirstShop = indexOfLastShop - shopsPerPage;
//   const currentShops = filteredShops.slice(indexOfFirstShop, indexOfLastShop);

//   const totalPages = Math.ceil(filteredShops.length / shopsPerPage);

//   const goToPage = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const toggleMenu = (id) => {
//     setActiveMenu(activeMenu === id ? null : id);
//   };

//   const addCategory = (newCategory) => {
//     setShops((prevShops) => [newCategory, ...prevShops]);
//     setIsFormOpen(false);
//   };

//   return (
//     <div>
//       {isFormOpen && <CategoryForm setIsFormOpen={setIsFormOpen} addCategory={addCategory} />}

//       <h1 className={styles.heading}>Category Table</h1>
//       <div className={styles.container}>
//         <div className={styles.topContainer}>
//           <div className={styles.searchContainer}>
//             <IoSearch />
//             <input
//               type="text"
//               placeholder="Search by shop name"
//               className={styles.searchBox}
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//           </div>
//           <button onClick={() => setIsFormOpen(true)}>Add Form</button>
//         </div>

//         <div className={styles.tableContainer}>
//           <table className={styles.shopTable}>
//             <thead>
//               <tr>
//                 <th>Sr No.</th>
//                 <th>Name</th>
//                 <th>Title</th>
//                 <th>Image</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentShops.map((shop, index) => (
//                 <tr key={shop.id}>
//                   <td>{indexOfFirstShop + index + 1}</td>
//                   <td>{shop.name}</td>
//                   <td>{shop.title}</td>
//                   <td>
//                     <img src={shop.img || pic} alt={shop.name} className={styles.img} />
//                   </td>
//                   <td>{shop.status}</td>
//                   <td className={styles.actionCell}>
//                     <button
//                       onClick={() => toggleBlockShop(shop.id)}
//                       className={`${styles.actionButton} ${shop.blocked ? styles.unblock : styles.block}`}
//                     >
//                       {shop.blocked ? 'Unblock' : 'Block'}
//                     </button>
//                     <button onClick={() => deleteShop(shop.id)} className={styles.deleteButton}>
//                       Delete
//                     </button>
//                     <span className={styles.actionMenuButton} onClick={() => toggleMenu(shop.id)}>
//                       <HiOutlineDotsVertical />
//                       {activeMenu === shop.id && (
//                         <div className={styles.actionMenu}>
//                           <ul>
//                             <li onClick={() => toggleBlockShop(shop.id)}>
//                               {shop.blocked ? 'Unblock' : 'Block'}
//                             </li>
//                             <li onClick={() => deleteShop(shop.id)}>Delete</li>
//                           </ul>
//                         </div>
//                       )}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className={styles.pagination}>
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i + 1}
//               onClick={() => goToPage(i + 1)}
//               className={`${styles.pageButton} ${currentPage === i + 1 ? styles.activePage : ''}`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Category;






// import React, { useState, useEffect } from 'react';
// import styles from '../../styles/category.module.css';
// import { callAPI } from '../../services/callAPIFunction';
// import { categoryEndPoints } from '../../services/apiEndPoints';
// import pic from '../../assets/product2.jpg';
// import { IoSearch } from 'react-icons/io5';
// import { HiOutlineDotsVertical } from 'react-icons/hi';
// import CategoryForm from './CategoryForm';

// const { VITE_API_BASE_URL } = import.meta.env;

// function Category() {
//   const [shops, setShops] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);

//   const shopsPerPage = 10;

//   // Load categories from API or localStorage
//   useEffect(() => {
//     const storedShops = localStorage.getItem('shops');
//     if (storedShops) {
//       setShops(JSON.parse(storedShops));
//     } else {
//       fetchCategories();
//     }
//     // fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     const apiUrl = `${VITE_API_BASE_URL}${categoryEndPoints.getCategories}`;
//     try {
//       const response = await callAPI('GET', apiUrl);
//       if (response.status === 200) {
//         setShops(response.data); // Assuming the response data is an array of categories
//       } else {
//         alert(`Error fetching categories: ${response.statusText}`);
//       }
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//       alert('Failed to fetch categories!');
//     }
//   };

//   const toggleBlockShop = (id) => {
//     setShops((prevShops) =>
//       prevShops.map((shop) =>
//         shop.id === id ? { ...shop, blocked: !shop.blocked } : shop
//       )
//     );
//   };

//   const deleteShop = (id) => {
//     const updatedShops = shops.filter((shop) => shop.id !== id);
//     setShops(updatedShops);
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1);
//   };

//   const filteredShops = shops.filter((shop) =>
//     (shop.name || '').toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexOfLastShop = currentPage * shopsPerPage;
//   const indexOfFirstShop = indexOfLastShop - shopsPerPage;
//   const currentShops = filteredShops.slice(indexOfFirstShop, indexOfLastShop);

//   const totalPages = Math.ceil(filteredShops.length / shopsPerPage);

//   const goToPage = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const toggleMenu = (id) => {
//     setActiveMenu(activeMenu === id ? null : id);
//   };

//   const addCategory = (newCategory) => {
//     setShops((prevShops) => [newCategory, ...prevShops]);
//     setIsFormOpen(false);
//   };

//   return (
//     <div>
//       {isFormOpen && <CategoryForm setIsFormOpen={setIsFormOpen} addCategory={addCategory} />}

//       <h1 className={styles.heading}>Category Table</h1>
//       <div className={styles.container}>
//         <div className={styles.topContainer}>
//           <div className={styles.searchContainer}>
//             <IoSearch />
//             <input
//               type="text"
//               placeholder="Search by shop name"
//               className={styles.searchBox}
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//           </div>
//           <button onClick={() => setIsFormOpen(true)}>Add Form</button>
//         </div>

//         <div className={styles.tableContainer}>
//           <table className={styles.shopTable}>
//             <thead>
//               <tr>
//                 <th>Sr No.</th>
//                 <th>Name</th>
//                 <th>Title</th>
//                 <th>Image</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentShops.map((shop, index) => (
//                 <tr key={shop.id}>
//                   <td>{indexOfFirstShop + index + 1}</td>
//                   <td>{shop.name}</td>
//                   <td>{shop.title}</td>
//                   <td>
//                     <img src={shop.img || pic} alt={shop.name} className={styles.img} />
//                   </td>
//                   <td>{shop.status}</td>
//                   <td className={styles.actionCell}>
//                     <button
//                       onClick={() => toggleBlockShop(shop.id)}
//                       className={`${styles.actionButton} ${shop.blocked ? styles.unblock : styles.block}`}
//                     >
//                       {shop.blocked ? 'Unblock' : 'Block'}
//                     </button>
//                     <button onClick={() => deleteShop(shop.id)} className={styles.deleteButton}>
//                       Delete
//                     </button>
//                     <span className={styles.actionMenuButton} onClick={() => toggleMenu(shop.id)}>
//                       <HiOutlineDotsVertical />
//                       {activeMenu === shop.id && (
//                         <div className={styles.actionMenu}>
//                           <ul>
//                             <li onClick={() => toggleBlockShop(shop.id)}>{shop.blocked ? 'Unblock' : 'Block'}</li>
//                             <li onClick={() => deleteShop(shop.id)}>Delete</li>
//                           </ul>
//                         </div>
//                       )}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className={styles.pagination}>
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i + 1}
//               onClick={() => goToPage(i + 1)}
//               className={`${styles.pageButton} ${currentPage === i + 1 ? styles.activePage : ''}`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Category;






// import styles from '../../styles/category.module.css';
// import React, { useState } from 'react';
// import pic from '../../assets/product2.jpg'
// import { IoSearch } from 'react-icons/io5';
// import { HiOutlineDotsVertical } from 'react-icons/hi';
// import CategoryForm from './CategoryForm';

// // import { Link, useNavigate } from "react-router-dom";


//   const initialShops = [
//     { id: 1, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 2, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 3, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 4, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 5, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 6, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 7, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 8, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 9, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 10, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 11, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 12, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 13, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 14, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 15, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 16, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 17, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 18, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 19, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 20, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 21, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 22, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 23, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 24, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 25, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 26, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 27, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 28, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 29, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 30, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
//     { id: 31, name: 'Baby Needs', title: 'Baby Needs', img: pic, status: 'Active', blocked: false},
// ];


// function Category() {

  
//   const toggleForm = () => {
//     setIsFormOpen(true);
//   };

  

//   const [shops, setShops] = useState(initialShops);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);

//   const shopsPerPage = 10;

//   const toggleBlockShop = (id) => {
//     setShops((prevShops) =>
//       prevShops.map((shop) =>
//         shop.id === id ? { ...shop, blocked: !shop.blocked } : shop
//       )
//     );
//   };

//   const deleteShop = (id) => {
//     setShops((prevShops) => prevShops.filter((shop) => shop.id !== id));
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1);
//   };

//   const filteredShops = shops.filter((shop) =>
//     shop.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexOfLastShop = currentPage * shopsPerPage;
//   const indexOfFirstShop = indexOfLastShop - shopsPerPage;
//   const currentShops = filteredShops.slice(indexOfFirstShop, indexOfLastShop);

//   const totalPages = Math.ceil(filteredShops.length / shopsPerPage);

//   const goToPage = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const toggleMenu = (id) => {
//     setActiveMenu(activeMenu === id ? null : id);
//   };

//   return (

   

//     <div>


//  {
//       isFormOpen &&
//       <CategoryForm setIsFormOpen={setIsFormOpen}/>
//      } 
       
      

//       <h1 className={styles.heading}>Category Table</h1>
//       <div className={styles.container}>
//         <div className={styles.topContainer}>
//           <div className={styles.searchContainer}>
//             <IoSearch />
//             <input
//               type="text"
//               placeholder="Search by shop name"
//               className={styles.searchBox}
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//           </div>
//           <button onClick={() => setIsFormOpen(true)}>Add Form
            
//           </button>
          
//         </div>

//         <div className={styles.tableContainer}>
//           <table className={styles.shopTable}>
//             <thead>
//               <tr>
//                 <th>Sr No.</th>
//                 <th> Name</th>
//                 <th>Title</th>
//                 <th>img</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//   {currentShops.map((shop, index) => (
//     <tr key={index}>
//       <td>{index + 1 + (currentPage - 1) * shopsPerPage}</td>
//       <td>{shop.name}</td>
//       <td>{shop.title}</td>
//       <td>
//         <img 
//           src={shop.img} 
//           alt={shop.name} 
//           className={styles.img}
//         />
//       </td>
//       <td>{shop.status}</td>
//       <td className={styles.actionCell}>
//         <button
//           onClick={() => toggleBlockShop(shop.id)}
//             className={`${styles.actionButton} ${shop.blocked ? styles.unblock : styles.block}`}
//         >
//           {shop.blocked ? 'Unblock' : 'Block'}
//         </button>
//         <button onClick={() => deleteShop(shop.id)} className={styles.deleteButton}>
//           Delete
//         </button>
//         <span className={styles.actionMenuButton} onClick={() => toggleMenu(shop.id)}>
//           <HiOutlineDotsVertical />
//           {activeMenu === shop.id && (
//             <div className={styles.actionMenu}>
//               <ul>
//                 <li onClick={() => toggleBlockShop(shop.id)}>{shop.blocked ? 'Unblock' : 'Block'}</li>
//                 <li onClick={() => deleteShop(shop.id)}>Delete</li>
//               </ul>
//             </div>
//           )}
//         </span>
//       </td>
//     </tr>
//   ))}
// </tbody>
//           </table>
//         </div>

//         <div className={styles.pagination}>
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i + 1}
//               onClick={() => goToPage(i + 1)}
//               className={`${styles.pageButton} ${currentPage === i + 1 ? styles.activePage : ''}`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Category;







// import React, { useState, useEffect } from 'react';
// import styles from '../../styles/category.module.css';
// import pic from '../../assets/product2.jpg';
// import { IoSearch } from 'react-icons/io5';
// import { HiOutlineDotsVertical } from 'react-icons/hi';
// import CategoryForm from './CategoryForm';
// import { callAPI } from '../../services/callAPIFunction'; // Import API call function
// import { categoryEndPoints } from '../../services/apiEndPoints'; // Import endpoint config

// const { VITE_API_BASE_URL } = import.meta.env;

// function Category() {
//   const [shops, setShops] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const shopsPerPage = 10;

//   useEffect(() => {
//     const fetchShops = async () => {
//       try {
//         const response = await callAPI('GET', `${VITE_API_BASE_URL}${categoryEndPoints.getCategories}`);
//         if (response.status === 200) {
//           setShops(response.data.categories || []);
//         } else {
//           console.error('Failed to fetch shops:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Error fetching shops:', error);
//       }
//     };
//     fetchShops();
//   }, []);

//   const addCategory = (newCategory) => {
//     setShops((prevShops) => [newCategory, ...prevShops]);
//   };

//   const toggleBlockShop = async (id) => {
//     const updatedShops = shops.map((shop) =>
//       shop.id === id ? { ...shop, blocked: !shop.blocked } : shop
//     );
//     setShops(updatedShops);
//     // Optionally send block/unblock status to API
//   };

//   const deleteShop = async (id) => {
//     try {
//       const response = await callAPI('DELETE', `${VITE_API_BASE_URL}${categoryEndPoints.deleteCategory}/${id}`);
//       if (response.status === 200) {
//         setShops((prevShops) => prevShops.filter((shop) => shop.id !== id));
//       } else {
//         console.error('Failed to delete shop:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error deleting shop:', error);
//     }
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1);
//   };

//   const filteredShops = shops.filter((shop) =>
//     shop.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexOfLastShop = currentPage * shopsPerPage;
//   const indexOfFirstShop = indexOfLastShop - shopsPerPage;
//   const currentShops = filteredShops.slice(indexOfFirstShop, indexOfLastShop);

//   const totalPages = Math.ceil(filteredShops.length / shopsPerPage);

//   const goToPage = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const toggleMenu = (id) => {
//     setActiveMenu(activeMenu === id ? null : id);
//   };

//   return (
//     <div>
//       {isFormOpen && <CategoryForm setIsFormOpen={setIsFormOpen} addCategory={addCategory} />}

//       <h1 className={styles.heading}>Category Table</h1>
//       <div className={styles.container}>
//         <div className={styles.topContainer}>
//           <div className={styles.searchContainer}>
//             <IoSearch />
//             <input
//               type="text"
//               placeholder="Search by shop name"
//               className={styles.searchBox}
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//           </div>
//           <button onClick={() => setIsFormOpen(true)}>Add Form</button>
//         </div>

//         <div className={styles.tableContainer}>
//           <table className={styles.shopTable}>
//             <thead>
//               <tr>
//                 <th>Sr No.</th>
//                 <th>Name</th>
//                 <th>Title</th>
//                 <th>Image</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentShops.map((shop, index) => (
//                 <tr key={shop.id}>
//                   <td>{index + 1 + (currentPage - 1) * shopsPerPage}</td>
//                   <td>{shop.name}</td>
//                   <td>{shop.title}</td>
//                   <td>
//                     <img src={shop.img || pic} alt={shop.name} className={styles.img} />
//                   </td>
//                   <td>{shop.status}</td>
//                   <td className={styles.actionCell}>
//                     <button
//                       onClick={() => toggleBlockShop(shop.id)}
//                       className={`${styles.actionButton} ${shop.blocked ? styles.unblock : styles.block}`}
//                     >
//                       {shop.blocked ? 'Unblock' : 'Block'}
//                     </button>
//                     <button onClick={() => deleteShop(shop.id)} className={styles.deleteButton}>
//                       Delete
//                     </button>
//                     <span className={styles.actionMenuButton} onClick={() => toggleMenu(shop.id)}>
//                       <HiOutlineDotsVertical />
//                       {activeMenu === shop.id && (
//                         <div className={styles.actionMenu}>
//                           <ul>
//                             <li onClick={() => toggleBlockShop(shop.id)}>{shop.blocked ? 'Unblock' : 'Block'}</li>
//                             <li onClick={() => deleteShop(shop.id)}>Delete</li>
//                           </ul>
//                         </div>
//                       )}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className={styles.pagination}>
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i + 1}
//               onClick={() => goToPage(i + 1)}
//               className={`${styles.pageButton} ${currentPage === i + 1 ? styles.activePage : ''}`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Category;





// import React, { useState, useEffect } from 'react';
// import styles from '../../styles/category.module.css';
// import pic from '../../assets/product2.jpg';
// import { IoSearch } from 'react-icons/io5';
// import { HiOutlineDotsVertical } from 'react-icons/hi';
// import CategoryForm from './CategoryForm';
// import { callAPI } from '../../services/callAPIFunction';
// import { categoryEndPoints } from '../../services/apiEndPoints';

// const { VITE_API_BASE_URL } = import.meta.env;

// function Category() {
//   const [shops, setShops] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const shopsPerPage = 10;

//   useEffect(() => {
//     const fetchShops = async () => {
//       try {
//         const response = await callAPI('GET', `${VITE_API_BASE_URL}${categoryEndPoints.getCategories}`);
//         if (response.status === 200) {
//           setShops(response.data.categories || []);
//         } else {
//           console.error('Failed to fetch shops:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Error fetching shops:', error);
//       }
//     };
//     fetchShops();
//   }, []);

//   const addCategory = (newCategory) => {
//     setShops((prevShops) => [newCategory, ...prevShops]);
//   };

//   const toggleBlockShop = async (id) => {
//     const updatedShops = shops.map((shop) =>
//       shop.id === id ? { ...shop, blocked: !shop.blocked } : shop
//     );
//     setShops(updatedShops);
//   };

//   const deleteShop = async (id) => {
//     try {
//       const response = await callAPI('DELETE', `${VITE_API_BASE_URL}${categoryEndPoints.deleteCategory}/${id}`);
//       if (response.status === 200) {
//         setShops((prevShops) => prevShops.filter((shop) => shop.id !== id));
//       } else {
//         console.error('Failed to delete shop:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error deleting shop:', error);
//     }
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1);
//   };

//   const filteredShops = shops.filter((shop) =>
//     (shop.categoryName?.toLowerCase() || '').includes(searchTerm.toLowerCase())
//   );

//   const indexOfLastShop = currentPage * shopsPerPage;
//   const indexOfFirstShop = indexOfLastShop - shopsPerPage;
//   const currentShops = filteredShops.slice(indexOfFirstShop, indexOfLastShop);

//   const totalPages = Math.ceil(filteredShops.length / shopsPerPage);

//   const goToPage = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const toggleMenu = (id) => {
//     setActiveMenu(activeMenu === id ? null : id);
//   };

//   return (
//     <div>
//       {isFormOpen && <CategoryForm setIsFormOpen={setIsFormOpen} addCategory={addCategory} />}

//       <h1 className={styles.heading}>Category Table</h1>
//       <div className={styles.container}>
//         <div className={styles.topContainer}>
//           <div className={styles.searchContainer}>
//             <IoSearch />
//             <input
//               type="text"
//               placeholder="Search by shop name"
//               className={styles.searchBox}
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//           </div>
//           <button onClick={() => setIsFormOpen(true)}>Add Form</button>
//         </div>

//         <div className={styles.tableContainer}>
//           <table className={styles.shopTable}>
//             <thead>
//               <tr>
//                 <th>Sr No.</th>
//                 <th>Name</th>
//                 <th>Title</th>
//                 <th>Image</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentShops.map((shop, index) => (
//                 <tr key={shop.id}>
//                   <td>{index + 1 + (currentPage - 1) * shopsPerPage}</td>
//                   <td>{shop.categoryName}</td>
//                   <td>{shop.description}</td>
//                   <td>
//                     <img src={shop.categoryImage || pic} alt={shop.name} className={styles.img} />
//                   </td>
//                   <td>{shop.status}</td>
//                   <td className={styles.actionCell}>
//                     <button
//                       onClick={() => toggleBlockShop(shop.id)}
//                       className={`${styles.actionButton} ${shop.blocked ? styles.unblock : styles.block}`}
//                     >
//                       {shop.blocked ? 'Unblock' : 'Block'}
//                     </button>
//                     <button onClick={() => deleteShop(shop.id)} className={styles.deleteButton}>
//                       Delete
//                     </button>
//                     <span className={styles.actionMenuButton} onClick={() => toggleMenu(shop.id)}>
//                       <HiOutlineDotsVertical />
//                       {activeMenu === shop.id && (
//                         <div className={styles.actionMenu}>
//                           <ul>
//                             <li onClick={() => toggleBlockShop(shop.id)}>{shop.blocked ? 'Unblock' : 'Block'}</li>
//                             <li onClick={() => deleteShop(shop.id)}>Delete</li>
//                           </ul>
//                         </div>
//                       )}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className={styles.pagination}>
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i + 1}
//               onClick={() => goToPage(i + 1)}
//               className={`${styles.pageButton} ${currentPage === i + 1 ? styles.activePage : ''}`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Category;







// import React, { useState, useEffect } from 'react';
// import styles from '../../styles/category.module.css';
// import pic from '../../assets/product2.jpg';
// import { IoSearch } from 'react-icons/io5';
// import { HiOutlineDotsVertical } from 'react-icons/hi';
// import CategoryForm from './CategoryForm';

// function Category() {
//   const [shops, setShops] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const shopsPerPage = 10;

//   // Load data from localStorage on mount
//   useEffect(() => {
//     const savedShops = localStorage.getItem('shops');
//     if (savedShops) {
//       setShops(JSON.parse(savedShops));
//     }
//   }, []);

//   // Save data to localStorage whenever `shops` changes
//   useEffect(() => {
//     localStorage.setItem('shops', JSON.stringify(shops));
//   }, [shops]);

//   const addCategory = (newCategory) => {
//     setShops((prevShops) => [newCategory, ...prevShops]);
//   };

//   const toggleBlockShop = (id) => {
//     const updatedShops = shops.map((shop) =>
//       shop.id === id ? { ...shop, blocked: !shop.blocked, status: shop.blocked ? 'Active' : 'Blocked' } : shop
//     );
//     setShops(updatedShops);
//   };

//   const deleteShop = (id) => {
//     setShops((prevShops) => prevShops.filter((shop) => shop.id !== id));
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1);
//   };

//   const filteredShops = shops.filter((shop) =>
//     (shop.categoryName?.toLowerCase() || '').includes(searchTerm.toLowerCase())
//   );

//   const indexOfLastShop = currentPage * shopsPerPage;
//   const indexOfFirstShop = indexOfLastShop - shopsPerPage;
//   const currentShops = filteredShops.slice(indexOfFirstShop, indexOfLastShop);

//   const totalPages = Math.ceil(filteredShops.length / shopsPerPage);

//   const goToPage = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const toggleMenu = (id) => {
//     setActiveMenu(activeMenu === id ? null : id);
//   };

//   return (
//     <div>
//       {isFormOpen && <CategoryForm setIsFormOpen={setIsFormOpen} addCategory={addCategory} />}

//       <h1 className={styles.heading}>Category Table</h1>
//       <div className={styles.container}>
//         <div className={styles.topContainer}>
//           <div className={styles.searchContainer}>
//             <IoSearch />
//             <input
//               type="text"
//               placeholder="Search by shop name"
//               className={styles.searchBox}
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//           </div>
//           <button onClick={() => setIsFormOpen(true)}>Add Form</button>
//         </div>

//         <div className={styles.tableContainer}>
//           <table className={styles.shopTable}>
//             <thead>
//               <tr>
//                 <th>Sr No.</th>
//                 <th>Name</th>
//                 <th>Title</th>
//                 <th>Image</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentShops.map((shop, index) => (
//                 <tr key={shop.id}>
//                   <td>{index + 1 + (currentPage - 1) * shopsPerPage}</td>
//                   <td>{shop.categoryName}</td>
//                   <td>{shop.description}</td>
//                   <td>
//                     <img src={shop.categoryImage || pic} alt={shop.name} className={styles.img} />
//                   </td>
//                   <td>{shop.status}</td>
//                   <td className={styles.actionCell}>
//                     <button
//                       onClick={() => toggleBlockShop(shop.id)}
//                       className={`${styles.actionButton} ${shop.blocked ? styles.unblock : styles.block}`}
//                     >
//                       {shop.blocked ? 'Unblock' : 'Block'}
//                     </button>
//                     <button onClick={() => deleteShop(shop.id)} className={styles.deleteButton}>
//                       Delete
//                     </button>
//                     <span className={styles.actionMenuButton} onClick={() => toggleMenu(shop.id)}>
//                       <HiOutlineDotsVertical />
//                       {activeMenu === shop.id && (
//                         <div className={styles.actionMenu}>
//                           <ul>
//                             <li onClick={() => toggleBlockShop(shop.id)}>{shop.blocked ? 'Unblock' : 'Block'}</li>
//                             <li onClick={() => deleteShop(shop.id)}>Delete</li>
//                           </ul>
//                         </div>
//                       )}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className={styles.pagination}>
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i + 1}
//               onClick={() => goToPage(i + 1)}
//               className={`${styles.pageButton} ${currentPage === i + 1 ? styles.activePage : ''}`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Category;






// import React, { useState, useEffect } from 'react';
// import styles from '../../styles/category.module.css';
// import pic from '../../assets/product2.jpg'; // Default placeholder image
// import { IoSearch } from 'react-icons/io5';
// import { HiOutlineDotsVertical } from 'react-icons/hi';
// import CategoryForm from './CategoryForm';

// function Category() {
//   const [shops, setShops] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const shopsPerPage = 10;

//   useEffect(() => {
//     const savedShops = localStorage.getItem('shops');
//     if (savedShops) {
//       setShops(JSON.parse(savedShops));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('shops', JSON.stringify(shops));
//   }, [shops]);

//   const addCategory = (newCategory) => {
//     setShops((prevShops) => [newCategory, ...prevShops]);
//   };

//   const toggleBlockShop = (id) => {
//     const updatedShops = shops.map((shop) =>
//       shop.id === id ? { ...shop, blocked: !shop.blocked, status: shop.blocked ? 'Active' : 'Blocked' } : shop
//     );
//     setShops(updatedShops);
//   };

//   const deleteShop = (id) => {
//     setShops((prevShops) => prevShops.filter((shop) => shop.id !== id));
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1);
//   };

//   const filteredShops = shops.filter((shop) =>
//     (shop.categoryName?.toLowerCase() || '').includes(searchTerm.toLowerCase())
//   );

//   const indexOfLastShop = currentPage * shopsPerPage;
//   const indexOfFirstShop = indexOfLastShop - shopsPerPage;
//   const currentShops = filteredShops.slice(indexOfFirstShop, indexOfLastShop);

//   const totalPages = Math.ceil(filteredShops.length / shopsPerPage);

//   const goToPage = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const toggleMenu = (id) => {
//     setActiveMenu(activeMenu === id ? null : id);
//   };

//   return (
//     <div>
//       {isFormOpen && <CategoryForm setIsFormOpen={setIsFormOpen} addCategory={addCategory} />}

//       <h1 className={styles.heading}>Category Table</h1>
//       <div className={styles.container}>
//         <div className={styles.topContainer}>
//           <div className={styles.searchContainer}>
//             <IoSearch />
//             <input
//               type="text"
//               placeholder="Search by shop name"
//               className={styles.searchBox}
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//           </div>
//           <button onClick={() => setIsFormOpen(true)}>Add Form</button>
//         </div>

//         <div className={styles.tableContainer}>
//           <table className={styles.shopTable}>
//             <thead>
//               <tr>
//                 <th>Sr No.</th>
//                 <th>Name</th>
//                 <th>Title</th>
//                 <th>Image</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentShops.map((shop, index) => (
//                 <tr key={shop.id}>
//                   <td>{index + 1 + (currentPage - 1) * shopsPerPage}</td>
//                   <td>{shop.categoryName}</td>
//                   <td>{shop.description}</td>
//                   <td>
//                     <img
//                       src={shop.categoryImage || pic}
//                       alt={shop.categoryName}
//                       className={styles.img}
//                     />
//                   </td>
//                   <td>{shop.status}</td>
//                   <td className={styles.actionCell}>
//                     <button
//                       onClick={() => toggleBlockShop(shop.id)}
//                       className={`${styles.actionButton} ${shop.blocked ? styles.unblock : styles.block}`}
//                     >
//                       {shop.blocked ? 'Unblock' : 'Block'}
//                     </button>
//                     <button onClick={() => deleteShop(shop.id)} className={styles.deleteButton}>
//                       Delete
//                     </button>
//                     <span className={styles.actionMenuButton} onClick={() => toggleMenu(shop.id)}>
//                       <HiOutlineDotsVertical />
//                       {activeMenu === shop.id && (
//                         <div className={styles.actionMenu}>
//                           <ul>
//                             <li onClick={() => toggleBlockShop(shop.id)}>{shop.blocked ? 'Unblock' : 'Block'}</li>
//                             <li onClick={() => deleteShop(shop.id)}>Delete</li>
//                           </ul>
//                         </div>
//                       )}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className={styles.pagination}>
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i + 1}
//               onClick={() => goToPage(i + 1)}
//               className={`${styles.pageButton} ${currentPage === i + 1 ? styles.activePage : ''}`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Category;





// import React, { useState, useEffect } from 'react';
// import styles from '../../styles/category.module.css';
// import { callAPI } from '../../services/callAPIFunction';
// import { categoryEndPoints } from '../../services/apiEndPoints';
// import { IoSearch } from 'react-icons/io5';
// import { HiOutlineDotsVertical } from 'react-icons/hi';
// import CategoryForm from './CategoryForm';

// const { VITE_API_BASE_URL } = import.meta.env;

// function Category() {
//   const [shops, setShops] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);

//   const shopsPerPage = 10;

//   // Fetch categories on mount
//   useEffect(() => {
//     const storedShops = localStorage.getItem('shops');
//     if (storedShops) {
//       setShops(JSON.parse(storedShops));
//     } else {
//       fetchCategories();
//     }
//   }, []);

//   // Save categories to localStorage when they change
//   useEffect(() => {
//     localStorage.setItem('shops', JSON.stringify(shops));
//   }, [shops]);

//   const fetchCategories = async () => {
//     const apiUrl = `${VITE_API_BASE_URL}${categoryEndPoints.getCategories}`;
//     try {
//       const response = await callAPI('GET', apiUrl);
//       if (response.status === 200) {
//         setShops(response.data); // Assuming response data is an array of categories
//       } else {
//         alert(`Error fetching categories: ${response.statusText}`);
//       }
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//       alert('Failed to fetch categories!');
//     }
//   };

//   const toggleBlockShop = (id) => {
//     setShops((prevShops) =>
//       prevShops.map((shop) =>
//         shop.id === id ? { ...shop, blocked: !shop.blocked } : shop
//       )
//     );
//   };

//   const deleteShop = (id) => {
//     const updatedShops = shops.filter((shop) => shop.id !== id);
//     setShops(updatedShops);
//     // No need to call API here since we're using localStorage
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1);
//   };

//   const filteredShops = shops.filter((shop) =>
//     (shop.categoryName?.toLowerCase() || '').includes(searchTerm.toLowerCase())
//   );

//   const indexOfLastShop = currentPage * shopsPerPage;
//   const indexOfFirstShop = indexOfLastShop - shopsPerPage;
//   const currentShops = filteredShops.slice(indexOfFirstShop, indexOfLastShop);

//   const totalPages = Math.ceil(filteredShops.length / shopsPerPage);

//   const goToPage = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const toggleMenu = (id) => {
//     setActiveMenu(activeMenu === id ? null : id);
//   };

//   const addCategory = (newCategory) => {
//     setShops((prevShops) => [newCategory, ...prevShops]);
//     setIsFormOpen(false);
//   };

//   return (
//     <div>
//       {isFormOpen && <CategoryForm setIsFormOpen={setIsFormOpen} addCategory={addCategory} />}

//       <h1 className={styles.heading}>Category Table</h1>
//       <div className={styles.container}>
//         <div className={styles.topContainer}>
//           <div className={styles.searchContainer}>
//             <IoSearch />
//             <input
//               type="text"
//               placeholder="Search by shop name"
//               className={styles.searchBox}
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//           </div>
//           <button onClick={() => setIsFormOpen(true)}>Add Form</button>
//         </div>

//         <div className={styles.tableContainer}>
//           <table className={styles.shopTable}>
//             <thead>
//               <tr>
//                 <th>Sr No.</th>
//                 <th>Name</th>
//                 <th>Title</th>
//                 <th>Image</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentShops.map((shop, index) => (
//                 <tr key={shop.id}>
//                   <td>{indexOfFirstShop + index + 1}</td>
//                   <td>{shop.categoryName}</td>
//                   <td>{shop.categoryTitle}</td>
//                   <td>
//                     <img src={shop.categoryImage} alt={shop.categoryName} className={styles.img} />
//                   </td>
//                   <td>{shop.blocked ? 'Blocked' : 'Active'}</td>
//                   <td className={styles.actionCell}>
//                     <button
//                       onClick={() => toggleBlockShop(shop.id)}
//                       className={`${styles.actionButton} ${shop.blocked ? styles.unblock : styles.block}`}
//                     >
//                       {shop.blocked ? 'Unblock' : 'Block'}
//                     </button>
//                     <button onClick={() => deleteShop(shop.id)} className={styles.deleteButton}>
//                       Delete
//                     </button>
//                     <span className={styles.actionMenuButton} onClick={() => toggleMenu(shop.id)}>
//                       <HiOutlineDotsVertical />
//                       {activeMenu === shop.id && (
//                         <div className={styles.actionMenu}>
//                           <ul>
//                             <li onClick={() => toggleBlockShop(shop.id)}>{shop.blocked ? 'Unblock' : 'Block'}</li>
//                             <li onClick={() => deleteShop(shop.id)}>Delete</li>
//                           </ul>
//                         </div>
//                       )}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className={styles.pagination}>
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i + 1}
//               onClick={() => goToPage(i + 1)}
//               className={`${styles.pageButton} ${currentPage === i + 1 ? styles.activePage : ''}`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Category;





import React, { useState, useEffect } from 'react';
import styles from '../../styles/category.module.css';
import { callAPI } from '../../services/callAPIFunction';
import { categoryEndPoints } from '../../services/apiEndPoints';
import { IoSearch } from 'react-icons/io5';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import CategoryForm from './CategoryForm';

const { VITE_API_BASE_URL } = import.meta.env;

function Category() {
  const [shops, setShops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const shopsPerPage = 10;

  // Fetch categories from localStorage or API on mount
  useEffect(() => {
    const storedShops = localStorage.getItem('shops');
    if (storedShops) {
      setShops(JSON.parse(storedShops));
    } else {
      fetchCategories();
    }
  }, []);

  // Save categories to localStorage when they change
  useEffect(() => {
    if (shops.length > 0) {
      localStorage.setItem('shops', JSON.stringify(shops));
    }
  }, [shops]);

  const fetchCategories = async () => {
    const apiUrl = `${VITE_API_BASE_URL}${categoryEndPoints.getCategories}`;
    try {
      const response = await callAPI('GET', apiUrl);
      if (response.status === 200) {
        setShops(response.data); // Assuming response data is an array of categories
      } else {
        alert(`Error fetching categories: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
      alert('Failed to fetch categories!');
    }
  };

  const toggleBlockShop = (id) => {
    setShops((prevShops) => {
      const updatedShops = prevShops.map((shop) =>
        shop.id === id ? { ...shop, blocked: !shop.blocked } : shop
      );
      // Save the updated shops to localStorage
      localStorage.setItem('shops', JSON.stringify(updatedShops));
      return updatedShops;
    });
  };

  const deleteShop = (id) => {
    const updatedShops = shops.filter((shop) => shop.id !== id);
    setShops(updatedShops);
    // Save the updated shops to localStorage
    localStorage.setItem('shops', JSON.stringify(updatedShops));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredShops = shops.filter((shop) =>
    (shop.categoryName?.toLowerCase() || '').includes(searchTerm.toLowerCase())
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

  const addCategory = (newCategory) => {
    setShops((prevShops) => {
      const updatedShops = [newCategory, ...prevShops];
      // Save the updated shops to localStorage
      localStorage.setItem('shops', JSON.stringify(updatedShops));
      return updatedShops;
    });
    setIsFormOpen(false);
  };

  return (
    <div>
      {isFormOpen && <CategoryForm setIsFormOpen={setIsFormOpen} addCategory={addCategory} />}

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
          <button onClick={() => setIsFormOpen(true)}>Add Form</button>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.shopTable}>
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Title</th>
                <th>Image</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentShops.map((shop, index) => (
                <tr key={shop.id}>
                  <td>{indexOfFirstShop + index + 1}</td>
                  <td>{shop.categoryName}</td>
                  <td>{shop.categoryTitle}</td>
                  <td>
                    <img src={shop.categoryImage} alt={shop.categoryName} className={styles.img} />
                  </td>
                  <td>{shop.blocked ? 'Blocked' : 'Active'}</td>
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
