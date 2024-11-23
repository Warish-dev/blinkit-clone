import React, { useState } from 'react'
import MyContext from './MyContext'

const MyState = ({ children }) => {


    const [cart, setCart] = useState([]);

    const [isCartOpen, setIsCartOpen] = useState(false);



    return (
        <MyContext.Provider value={{ cart, setCart, isCartOpen, setIsCartOpen }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyState