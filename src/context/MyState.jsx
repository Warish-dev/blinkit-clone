import React, { useState } from 'react'
import MyContext from './MyContext'

const MyState = ({ children }) => {


    const [cart, setCart] = useState([]);

    const [isCartOpen, setIsCartOpen] = useState(false);
      const [shops, setShops] = useState([]);

    //  const fetchCategories = async () => {
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


    return (
        <MyContext.Provider value={{ cart, setCart, isCartOpen, setIsCartOpen,shops }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyState