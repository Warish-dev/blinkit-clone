import React from 'react'
import {
    BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
     BsMenuButtonWideFill, BsFillGearFill
}
    from 'react-icons/bs'
    import { AiFillHome } from "react-icons/ai";
    import { MdOutlineBoy } from "react-icons/md";
import styles from '../../styles/warehouse.module.css'
import { Link } from 'react-router-dom'




function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id={styles.sidebar} className={openSidebarToggle ? `${styles.sidebarResponsive}` : ""}>
            <div className={styles.sidebarTitle}>
                <div className={styles.sidebarBrand}>
                    <AiFillHome className={styles.iconHeader} /> Ware House
                </div>
                <span className={`${styles.icon} ${styles.closeIcon}`} onClick={OpenSidebar}>X</span>
            </div>

            <ul className={styles.sidebarList}>
                <Link to={'/Warehouse/dashboard'}>
                    <li className={styles.sidebarListItem}>
                        <BsGrid1X2Fill className={styles.icon} /> Home
                    </li>
                </Link>

                <Link to={''}>
                    <li className={styles.sidebarListItem}>
                        <BsFillArchiveFill className={styles.icon} /> Orders
                    </li>
                </Link>

                <Link to={''}>
                    <li className={styles.sidebarListItem}>
                        <BsFillArchiveFill className={styles.icon} /> Product Rank
                    </li>
                </Link>

                <Link to={''}>
                    <li className={styles.sidebarListItem}>
                        <BsFillGrid3X3GapFill className={styles.icon} /> Product Manages
                    </li>
                </Link>

                <Link to={''}>
                    <li className={styles.sidebarListItem}>
                        <BsFillGrid3X3GapFill className={styles.icon} /> Store Management
                    </li>
                </Link>

                <Link to={''}>
                    <li className={styles.sidebarListItem}>
                        <BsPeopleFill className={styles.icon} /> Profile
                    </li>
                </Link>

                <Link to={''}>
                    <li className={styles.sidebarListItem}>
                        <MdOutlineBoy className={styles.icon} /> Accounts
                    </li>
                </Link>

                <Link to={''}>
                    <li className={styles.sidebarListItem}>
                        <MdOutlineBoy className={styles.icon} /> Withdraw
                    </li>
                </Link>

                
                
                
            </ul>
        </aside>
    )
}

export default Sidebar