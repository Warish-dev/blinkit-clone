







import React, { useState, useEffect } from "react";
import styles from "../../styles/category.module.css";
import pic from "../../assets/product2.jpg";
import { IoSearch } from "react-icons/io5";
import CategoryForm from "./CategoryForm";
import { callAPI } from "../../services/callAPIFunction";
import { categoryEndPoints } from "../../services/apiEndPoints";

const { VITE_API_BASE_URL } = import.meta.env;

function Category() {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const categoriesPerPage = 10;

  const fetchCategories = async () => {
    try {
      const response = await callAPI(
        "GET",
        `${VITE_API_BASE_URL}${categoryEndPoints.getCategories}`
      );
      if (response.status === 200) {
        const fetchedCategories = response.data;
        setCategories(fetchedCategories);
        localStorage.setItem("categories", JSON.stringify(fetchedCategories)); // Save to localStorage
      } else {
        alert("Failed to fetch categories");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    const storedCategories = localStorage.getItem("categories");
    if (storedCategories) {
      setCategories(JSON.parse(storedCategories)); // Load from localStorage
    } else {
      fetchCategories(); // Fetch from API if no data in localStorage
    }
  }, []);

  const addCategory = (newCategory) => {
    const updatedCategories = [newCategory, ...categories];
    setCategories(updatedCategories);
    localStorage.setItem("categories", JSON.stringify(updatedCategories)); // Update localStorage
  };

  const deleteCategory = (id) => {
    const updatedCategories = categories.filter(
      (category) => category.id !== id
    );
    setCategories(updatedCategories);
    localStorage.setItem("categories", JSON.stringify(updatedCategories)); // Update localStorage
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = filteredCategories.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  const totalPages = Math.ceil(filteredCategories.length / categoriesPerPage);

  return (
    <div>
      {isFormOpen && (
        <CategoryForm
          setIsFormOpen={setIsFormOpen}
          addCategory={addCategory}
        />
      )}
      <h1 className={styles.heading}>Category Table</h1>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <div className={styles.searchContainer}>
            <IoSearch />
            <input
              type="text"
              placeholder="Search by category name"
              className={styles.searchBox}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button onClick={() => setIsFormOpen(true)}>Add Category</button>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.shopTable}>
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Title</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentCategories.map((category, index) => (
                <tr key={category.id}>
                  <td>{index + 1 + (currentPage - 1) * categoriesPerPage}</td>
                  <td>{category.name}</td>
                  <td>{category.description}</td>
                  <td>
                    <img
                      src={category.image || pic}
                      alt={category.name}
                      className={styles.img}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => deleteCategory(category.id)}
                      className={styles.deleteButton}
                    >
                      Delete
                    </button>
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
              onClick={() => setCurrentPage(i + 1)}
              className={`${styles.pageButton} ${
                currentPage === i + 1 ? styles.activePage : ""
              }`}
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






// import React, { useState, useEffect } from "react";
// import styles from "../../styles/category.module.css";
// import pic from "../../assets/product2.jpg";
// import { IoSearch } from "react-icons/io5";
// import CategoryForm from "./CategoryForm";
// import { callAPI } from "../../services/callAPIFunction";
// import { categoryEndPoints } from "../../services/apiEndPoints";

// const { VITE_API_BASE_URL } = import.meta.env;

// function Category() {
//   const [categories, setCategories] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isFormOpen, setIsFormOpen] = useState(false);

//   const categoriesPerPage = 10;

//   const fetchCategories = async () => {
//     try {
//       const response = await callAPI(
//         "GET",
//         `${VITE_API_BASE_URL}${categoryEndPoints.getCategories}`
//       );
//       if (response.status === 200) {
//         const fetchedCategories = response.data;
//         setCategories(fetchedCategories);
//         localStorage.setItem("categories", JSON.stringify(fetchedCategories));
//       } else {
//         alert("Failed to fetch categories");
//       }
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     }
//   };

//   useEffect(() => {
//     const storedCategories = localStorage.getItem("categories");
//     if (storedCategories) {
//       setCategories(JSON.parse(storedCategories));
//     } else {
//       fetchCategories();
//     }
//   }, []);

//   const addCategory = (newCategory) => {
//     const updatedCategories = [newCategory, ...categories];
//     setCategories(updatedCategories);
//     localStorage.setItem("categories", JSON.stringify(updatedCategories));
//   };

//   const deleteCategory = async (id) => {
//     try {
//       const response = await callAPI(
//         "DELETE",
//         `${VITE_API_BASE_URL}${categoryEndPoints.deleteCategory}/${id}`
//       );
//       if (response.status === 200) {
//         const updatedCategories = categories.filter(
//           (category) => category.id !== id
//         );
//         setCategories(updatedCategories);
//         localStorage.setItem(
//           "categories",
//           JSON.stringify(updatedCategories)
//         );
//       } else {
//         alert("Failed to delete category");
//       }
//     } catch (error) {
//       console.error("Error deleting category:", error);
//     }
//   };

//   const filteredCategories = categories.filter((category) =>
//     category.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexOfLastCategory = currentPage * categoriesPerPage;
//   const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
//   const currentCategories = filteredCategories.slice(
//     indexOfFirstCategory,
//     indexOfLastCategory
//   );

//   const totalPages = Math.ceil(filteredCategories.length / categoriesPerPage);

//   return (
//     <div>
//       {isFormOpen && (
//         <CategoryForm
//           setIsFormOpen={setIsFormOpen}
//           addCategory={addCategory}
//         />
//       )}
//       <h1 className={styles.heading}>Category Table</h1>
//       <div className={styles.container}>
//         <div className={styles.topContainer}>
//           <div className={styles.searchContainer}>
//             <IoSearch />
//             <input
//               type="text"
//               placeholder="Search by category name"
//               className={styles.searchBox}
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//           <button onClick={() => setIsFormOpen(true)}>Add Category</button>
//         </div>

//         <div className={styles.tableContainer}>
//           <table className={styles.shopTable}>
//             <thead>
//               <tr>
//                 <th>Sr No.</th>
//                 <th>Name</th>
//                 <th>Description</th>
//                 <th>Image</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentCategories.map((category, index) => (
//                 <tr key={category.id}>
//                   <td>{index + 1 + (currentPage - 1) * categoriesPerPage}</td>
//                   <td>{category.name}</td>
//                   <td>{category.description}</td>
//                   <td>
//                     <img
//                       src={category.image || pic}
//                       alt={category.name}
//                       className={styles.img}
//                     />
//                   </td>
//                   <td>
//                     <button
//                       onClick={() => deleteCategory(category.id)}
//                       className={styles.deleteButton}
//                     >
//                       Delete
//                     </button>
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
//               onClick={() => setCurrentPage(i + 1)}
//               className={`${styles.pageButton} ${
//                 currentPage === i + 1 ? styles.activePage : ""
//               }`}
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

