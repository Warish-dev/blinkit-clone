import React from 'react'
import {
    BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
    BsListCheck, BsMenuButtonWideFill, BsFillGearFill
}
    from 'react-icons/bs'
import styles from '../../styles/admin.module.css'
import { Link } from 'react-router-dom'




function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id={styles.sidebar} className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className={styles.sidebarTitle}>
                <div className={styles.sidebarBrand}>
                    <BsCart3 className={styles.iconHeader} /> SHOP
                </div>
                <span className={`${styles.icon} ${styles.closeIcon}`} onClick={OpenSidebar}>X</span>
            </div>

            <ul className={styles.sidebarList}>
                <Link to={'/admin/dashboard'}>
                    <li className={styles.sidebarListItem}>
                        <BsGrid1X2Fill className={styles.icon} /> Dashboard
                    </li>
                </Link>

                <Link to={'/admin/shops'}>
                    <li className={styles.sidebarListItem}>
                        <BsFillArchiveFill className={styles.icon} /> Shops
                    </li>
                </Link>
                <Link to={''}>
                    <li className={styles.sidebarListItem}>
                        <BsFillGrid3X3GapFill className={styles.icon} /> Categories
                    </li>
                </Link>
                <Link to={'/admin/users'}>
                    <li className={styles.sidebarListItem}>
                        <BsPeopleFill className={styles.icon} /> Users
                    </li>
                </Link>
                <Link to={''}>
                    <li className={styles.sidebarListItem}>
                        <BsListCheck className={styles.icon} /> Inventory
                    </li>
                </Link>
                <Link to={''}>
                    <li className={styles.sidebarListItem}>
                        <BsMenuButtonWideFill className={styles.icon} /> Reports
                    </li>
                </Link>
                <Link to={''}>
                    <li className={styles.sidebarListItem}>
                        <BsFillGearFill className={styles.icon} /> Setting
                    </li>
                </Link>
            </ul>
        </aside>
    )
}

export default Sidebar
