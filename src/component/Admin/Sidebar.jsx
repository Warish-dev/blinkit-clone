import React from 'react'
import {
    BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
     BsMenuButtonWideFill, BsFillGearFill
}
    from 'react-icons/bs'
    import { MdOutlineBoy } from "react-icons/md";
import styles from '../../styles/admin.module.css'
import { Link } from 'react-router-dom'




function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id={styles.sidebar} className={openSidebarToggle ? `${styles.sidebarResponsive}` : ""}>
            <div className={styles.sidebarTitle}>
                <div className={styles.sidebarBrand}>
                    <BsCart3 className={styles.iconHeader} /> SHOP
                </div>
                <span className={`${styles.icon} ${styles.closeIcon}`} onClick={OpenSidebar}>X</span>
            </div>

            <ul className={styles.sidebarList}>
                <Link to={'/admin/dashboard'}>
                    <li className={styles.sidebarListItem}>
                        <BsGrid1X2Fill className={styles.icon} /> Home
                    </li>
                </Link>

                <Link to={'/admin/shops'}>
                    <li className={styles.sidebarListItem}>
                        <BsFillArchiveFill className={styles.icon} /> Shops
                    </li>
                </Link>

                <Link to={'/admin/category'}>
                    <li className={styles.sidebarListItem}>
                        <BsFillGrid3X3GapFill className={styles.icon} /> Categories
                    </li>
                </Link>

                <Link to={'/admin/Subcategory'}>
                    <li className={styles.sidebarListItem}>
                        <BsFillGrid3X3GapFill className={styles.icon} /> Sub Category
                    </li>
                </Link>

                <Link to={'/admin/users'}>
                    <li className={styles.sidebarListItem}>
                        <BsPeopleFill className={styles.icon} /> Users
                    </li>
                </Link>

                <Link to={'/admin/deliveryboy'}>
                    <li className={styles.sidebarListItem}>
                        <MdOutlineBoy className={styles.icon} /> Delivery Boy
                    </li>
                </Link>

                
                
                
            </ul>
        </aside>
    )
}

export default Sidebar