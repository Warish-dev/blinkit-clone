
// import React, { useState, useEffect } from 'react';
// import styles from '../../styles/subcategory.module.css';
// import { callAPI } from '../../services/callAPIFunction';
// import { subCategoryEndPoints } from '../../services/apiEndPoints';
// import { IoSearch } from 'react-icons/io5';
// import { HiOutlineDotsVertical } from 'react-icons/hi';
// import SubCategoryForm from './SubCategoryForm';

// const { VITE_API_BASE_URL } = import.meta.env;

// function subCategory() {
//   const [shops, setShops] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);

//   const shopsPerPage = 10;

//   // Load subcategories from localStorage or API on component mount
//   useEffect(() => {
//     const storedShops = localStorage.getItem('shops');
//     if (storedShops) {
//       setShops(JSON.parse(storedShops));
//     } else {
//       fetchSubCategories();
//     }
//   }, []);

//   // Save subcategories to localStorage whenever they are updated
//   useEffect(() => {
//     localStorage.setItem('shops', JSON.stringify(shops));
//   }, [shops]);

//   const fetchSubCategories = async () => {
//     const apiUrl = `${VITE_API_BASE_URL}${subCategoryEndPoints.getSubCategories}`;
//     try {
//       const response = await callAPI('GET', apiUrl);
//       if (response.status === 200) {
//         setShops(response.data); // Assuming the response data is an array of subcategories
//       } else {
//         alert(`Error fetching subcategories: ${response.statusText}`);
//       }
//     } catch (error) {
//       console.error('Error fetching subcategories:', error);
//       alert('Failed to fetch subcategories!');
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

//   const addSubCategory = (newSubCategory) => {
//     setShops((prevShops) => [newSubCategory, ...prevShops]);
//     setIsFormOpen(false);
//   };

//   return (
//     <div>
//       {isFormOpen && <SubCategoryForm setIsFormOpen={setIsFormOpen} addSubCategory={addSubCategory} />}

//       <h1 className={styles.heading}>Sub Category Table</h1>
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
//                 <th>Main Category</th>
//                 <th>Subtitle</th>
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
//                   <td>{shop.categoryId}</td>
//                   <td>{shop.description}</td>
//                   <td>
//                     <img src={shop.images} alt={shop.name} className={styles.img} />
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

// export default subCategory;







// import React, { useState, useEffect } from 'react';
// import styles from '../../styles/subcategory.module.css';
// import { callAPI } from '../../services/callAPIFunction';
// import { subCategoryEndPoints } from '../../services/apiEndPoints';
// import { IoSearch } from 'react-icons/io5';
// import { HiOutlineDotsVertical } from 'react-icons/hi';
// import SubCategoryForm from './SubCategoryForm';

// const { VITE_API_BASE_URL } = import.meta.env;

// function SubCategory() {
//   const [shops, setShops] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);

//   const shopsPerPage = 10;

//   // Load subcategories from localStorage or API on component mount
//   useEffect(() => {
//     const storedShops = localStorage.getItem('shops');
//     if (storedShops) {
//       setShops(JSON.parse(storedShops)); // Use the data from localStorage if available
//     } else {
//       fetchSubCategories(); // Fetch data from the API if not available in localStorage
//     }
//   }, []);

//   // Save subcategories to localStorage whenever they are updated
//   useEffect(() => {
//     if (shops.length > 0) {
//       localStorage.setItem('shops', JSON.stringify(shops)); // Save updated shops to localStorage
//     }
//   }, [shops]);

//   const fetchSubCategories = async () => {
//     const apiUrl = `${VITE_API_BASE_URL}${subCategoryEndPoints.getSubCategoryById}`;
//     try {
//       const response = await callAPI('GET', apiUrl);
//       if (response.status === 200) {
//         setShops(response.data); // Assuming the response data is an array of subcategories
//         localStorage.setItem('shops', JSON.stringify(response.data)); // Save fetched data to localStorage
//       } else {
//         alert(`Error fetching subcategories: ${response.statusText}`);
//       }
//     } catch (error) {
//       console.error('Error fetching subcategories:', error);
//       alert('Failed to fetch subcategories!');
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
//     // Save the updated list to localStorage after deletion
//     localStorage.setItem('shops', JSON.stringify(updatedShops));
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1);
//   };

//   // Update filteredShops with the null/undefined check on shop.name
//   const filteredShops = shops.filter((shop) =>
//     shop.name && shop.name.toLowerCase().includes(searchTerm.toLowerCase())
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

//   const addSubCategory = (newSubCategory) => {
//     setShops((prevShops) => {
//       const updatedShops = [newSubCategory, ...prevShops];
//       localStorage.setItem('shops', JSON.stringify(updatedShops)); // Save new subcategory to localStorage
//       return updatedShops;
//     });
//     setIsFormOpen(false);
//   };

//   return (
//     <div>
//       {isFormOpen && <SubCategoryForm setIsFormOpen={setIsFormOpen} addSubCategory={addSubCategory} />}

//       <h1 className={styles.heading}>Sub Category Table</h1>
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
//                 <th>Main Category</th>
//                 <th>Subtitle</th>
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
//                   <td>{shop.categoryId}</td>
//                   <td>{shop.description}</td>
//                   <td>
//                     <img src={shop.images} alt={shop.name} className={styles.img} />
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

// export default SubCategory;





import React, { useState, useEffect } from 'react';
import styles from '../../styles/subcategory.module.css';
import { callAPI } from '../../services/callAPIFunction';
import { subCategoryEndPoints } from '../../services/apiEndPoints';
import { IoSearch } from 'react-icons/io5';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import SubCategoryForm from './SubCategoryForm';

const { VITE_API_BASE_URL } = import.meta.env;

function SubCategory() {
  const [subCategories, setSubCategories] = useState([]); // Renamed to subCategories for clarity
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const subCategoriesPerPage = 10; // renamed variable for consistency

  // Load subcategories from localStorage or API on component mount
  useEffect(() => {
    const storedSubCategories = localStorage.getItem('subCategories'); // Ensure it stores as 'subCategories'
    if (storedSubCategories) {
      setSubCategories(JSON.parse(storedSubCategories)); // Use the data from localStorage if available
    } else {
      fetchSubCategories(); // Fetch data from the API if not available in localStorage
    }
  }, []);

  // Save subcategories to localStorage whenever they are updated
  useEffect(() => {
    if (subCategories.length > 0) {
      localStorage.setItem('subCategories', JSON.stringify(subCategories)); // Save updated subcategories to localStorage
    }
  }, [subCategories]);

  const fetchSubCategories = async () => {
    const apiUrl = `${VITE_API_BASE_URL}${subCategoryEndPoints.getSubCategoryById}`;
    try {
      const response = await callAPI('GET', apiUrl);
      if (response.status === 200) {
        setSubCategories(response.data); // Assuming the response data is an array of subcategories
        localStorage.setItem('subCategories', JSON.stringify(response.data)); // Save fetched data to localStorage
      } else {
        alert(`Error fetching subcategories: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error fetching subcategories:', error);
      alert('Failed to fetch subcategories!');
    }
  };

  const toggleBlockSubCategory = (id) => {
    setSubCategories((prevSubCategories) =>
      prevSubCategories.map((subCategory) =>
        subCategory.id === id ? { ...subCategory, blocked: !subCategory.blocked } : subCategory
      )
    );
  };

  const deleteSubCategory = (id) => {
    const updatedSubCategories = subCategories.filter((subCategory) => subCategory.id !== id);
    setSubCategories(updatedSubCategories);
    // Save the updated list to localStorage after deletion
    localStorage.setItem('subCategories', JSON.stringify(updatedSubCategories));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredSubCategories = subCategories.filter((subCategory) =>
    subCategory.name && subCategory.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastSubCategory = currentPage * subCategoriesPerPage;
  const indexOfFirstSubCategory = indexOfLastSubCategory - subCategoriesPerPage;
  const currentSubCategories = filteredSubCategories.slice(indexOfFirstSubCategory, indexOfLastSubCategory);

  const totalPages = Math.ceil(filteredSubCategories.length / subCategoriesPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  const addSubCategory = (newSubCategory) => {
    setSubCategories((prevSubCategories) => {
      const updatedSubCategories = [newSubCategory, ...prevSubCategories];
      localStorage.setItem('subCategories', JSON.stringify(updatedSubCategories)); // Save new subcategory to localStorage
      return updatedSubCategories;
    });
    setIsFormOpen(false);
  };

  return (
    <div>
      {isFormOpen && <SubCategoryForm setIsFormOpen={setIsFormOpen} addSubCategory={addSubCategory} />}

      <h1 className={styles.heading}>Sub Category Table</h1>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <div className={styles.searchContainer}>
            <IoSearch />
            <input
              type="text"
              placeholder="Search by subcategory name"
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
              {currentSubCategories.map((subCategory, index) => (
                <tr key={subCategory.id}>
                  <td>{indexOfFirstSubCategory + index + 1}</td>
                  <td>{subCategory.name}</td>
                  <td>{subCategory.categoryId}</td>
                  <td>{subCategory.description}</td>
                  <td>
                    <img src={subCategory.images} alt={subCategory.name} className={styles.img} />
                  </td>
                  <td>{subCategory.blocked ? 'Blocked' : 'Active'}</td>
                  <td className={styles.actionCell}>
                    <button
                      onClick={() => toggleBlockSubCategory(subCategory.id)}
                      className={`${styles.actionButton} ${subCategory.blocked ? styles.unblock : styles.block}`}
                    >
                      {subCategory.blocked ? 'Unblock' : 'Block'}
                    </button>
                    <button onClick={() => deleteSubCategory(subCategory.id)} className={styles.deleteButton}>
                      Delete
                    </button>
                    <span className={styles.actionMenuButton} onClick={() => toggleMenu(subCategory.id)}>
                      <HiOutlineDotsVertical />
                      {activeMenu === subCategory.id && (
                        <div className={styles.actionMenu}>
                          <ul>
                            <li onClick={() => toggleBlockSubCategory(subCategory.id)}>{subCategory.blocked ? 'Unblock' : 'Block'}</li>
                            <li onClick={() => deleteSubCategory(subCategory.id)}>Delete</li>
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

export default SubCategory;
