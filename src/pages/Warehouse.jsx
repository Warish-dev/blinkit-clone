import React from 'react'
import { useState } from 'react'
import WareHeader from '../component/WareHouse/WareHeader'
import WareSidebar from '../component/WareHouse/WareSidebar'
import styles from '../styles/warehouse.module.css'
import { Outlet } from 'react-router-dom'

const Admin = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    return (

        <div className={styles.gridContainer}>
            <WareHeader OpenSidebar={OpenSidebar} />
            <WareSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <Outlet/>
        </div>
    )
}

export default Admin