import React from 'react'
import { useState } from 'react'
import Header from '../component/Admin/Header'
import Sidebar from '../component/Admin/Sidebar'
import Home from '../component/Admin/Home'
import styles from '../styles/admin.module.css'

const Admin = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }
    return (

        <div className={styles.grid-container}>
            <Header OpenSidebar={OpenSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <Home />
        </div>
    )
}

export default Admin

