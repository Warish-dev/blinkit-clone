import React, { useState } from 'react'
import MyContext from './MyContext'

const MyState = ({ children }) => {


    const [cart, setCart] = useState([]);



    return (
        <MyContext.Provider value={{ cart, setCart }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyState