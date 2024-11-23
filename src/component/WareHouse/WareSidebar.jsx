// // import React from 'react'
// import {
//     BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
//      BsMenuButtonWideFill, BsFillGearFill
// }
//     from 'react-icons/bs'
//     import { AiFillHome } from "react-icons/ai";
//     import { MdOutlineBoy } from "react-icons/md";
// import styles from '../../styles/warehouse.module.css'
// import { Link } from 'react-router-dom'
// import React, { useState } from "react";



// function Sidebar({ openSidebarToggle, OpenSidebar }) {

//     const [isSublistVisible, setIsSublistVisible] = useState(false);

//     // Toggle sublist visibility
//     const toggleSublist = () => {
//       setIsSublistVisible(!isSublistVisible);
//     };

//     const statuses = [
//         { label: "Pending", count: 6, color: "#f1c40f" }, // Yellow
//         { label: "Confirm", count: 0, color: "#3498db" }, // Blue
//         { label: "Processing", count: 0, color: "#9b59b6" }, // Purple
//         { label: "Pickup", count: 0, color: "#1abc9c" }, // Greenish
//         { label: "On The Way", count: 0, color: "#2ecc71" }, // Light Green
//         { label: "Delivered", count: 1, color: "#27ae60" }, // Dark Green
//         { label: "Cancelled", count: 0, color: "#e74c3c" }, // Red
//       ];

//     return (
//         <aside id={styles.sidebar} className={openSidebarToggle ? `${styles.sidebarResponsive}` : ""}>
//             <div className={styles.sidebarTitle}>
//                 <div className={styles.sidebarBrand}>
//                     <AiFillHome className={styles.iconHeader} /> Ware House
//                 </div>
//                 <span className={`${styles.icon} ${styles.closeIcon}`} onClick={OpenSidebar}>X</span>
//             </div>

//             <ul className={styles.sidebarList}>
//                 <Link to={'/Warehouse/dashboard'}>
//                     <li className={styles.sidebarListItem}>
//                         <BsGrid1X2Fill className={styles.icon} /> Home
//                     </li>
//                 </Link>

//                 <Link to={''}>
//                     <li className={styles.sidebarListItem} onClick={toggleSublist}>
//                         <BsFillArchiveFill className={styles.icon} /> 
//                         <span>All Orders</span>
//                         <span className={styles.arrow}>{isSublistVisible ? "▲" : "▼"}</span>
//                     </li>
//                     {isSublistVisible && (
//           <ul className={styles.sublist}>
//                     {statuses.map((status, index) => (
                        
//             <li className={styles.subItem} key={index}>All
//             <span>{status.label}</span>
//             <StatusNumber count={status.count} color={status.color} />
//             </li>
//             <li className={styles.subItem}>Pending <span className={styles.circle1}>11</span></li>
//             <li className={styles.subItem}>Confirm <span className={styles.circle2}>33</span></li>
//             <li className={styles.subItem}>Processing <span className={styles.circle3}>5</span></li>
//             <li className={styles.subItem}>Pickup <span className={styles.circle4}>11</span></li>
//             <li className={styles.subItem}>On The Way <span className={styles.circle5}>52</span></li>
//             <li className={styles.subItem}>Delivered <span className={styles.circle6}>61</span></li>
//             <li className={styles.subItem}>Cancelled <span className={styles.circle7}>3</span></li>
//         ))}
//           </ul>
//         )}
//                 </Link>

//                 <Link to={''}>
//                     <li className={styles.sidebarListItem}>
//                         <BsFillArchiveFill className={styles.icon} /> Product Rank
//                     </li>
//                 </Link>

//                 <Link to={''}>
//                     <li className={styles.sidebarListItem}>
//                         <BsFillGrid3X3GapFill className={styles.icon} /> Product Manages
//                     </li>
//                 </Link>

//                 <Link to={''}>
//                     <li className={styles.sidebarListItem}>
//                         <BsFillGrid3X3GapFill className={styles.icon} /> Store Management
//                     </li>
//                 </Link>

//                 <Link to={''}>
//                     <li className={styles.sidebarListItem}>
//                         <BsPeopleFill className={styles.icon} /> Profile
//                     </li>
//                 </Link>

//                 <Link to={''}>
//                     <li className={styles.sidebarListItem}>
//                         <MdOutlineBoy className={styles.icon} /> Accounts
//                     </li>
//                 </Link>

//                 <Link to={''}>
//                     <li className={styles.sidebarListItem}>
//                         <MdOutlineBoy className={styles.icon} /> Withdraw
//                     </li>
//                 </Link>

                
                
                
//             </ul>
//         </aside>
//     )
// }

// export default Sidebar

import React, { useState } from "react";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsBorderAll,
} from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineBoy } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "../../styles/warehouse.module.css";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [isSublistVisible, setIsSublistVisible] = useState(false);

  const toggleSublist = () => {
    setIsSublistVisible(!isSublistVisible);
  };

  // Status array for dynamic rendering
  const statuses = [
    { label: "Pending", count: 6, color: "#f1c40f", border: "#FFF455"},
    { label: "Confirm", count: 0, color: "#3498db", border: "#7BD3EA" },
    { label: "Processing", count: 0, color: "#9b59b6", border: "#9694FF" },
    { label: "Pickup", count: 0, color: "#1abc9c", border: "#00FF9C" },
    { label: "On The Way", count: 0, color: "#2ecc71", border: "#73EC8B" },
    { label: "Delivered", count: 1, color: "#27ae60", border: "#06D001" },
    { label: "Cancelled", count: 0, color: "#e74c3c", border: "#FFAAAA" },
  ];

  return (
    <aside
      id={styles.sidebar}
      className={openSidebarToggle ? `${styles.sidebarResponsive}` : ""}
    >
      <div className={styles.sidebarTitle}>
        <div className={styles.sidebarBrand}>
          <AiFillHome className={styles.iconHeader} /> Ware House
        </div>
        <span
          className={`${styles.icon} ${styles.closeIcon}`}
          onClick={OpenSidebar}
        >
          X
        </span>
      </div>

      <ul className={styles.sidebarList}>
        {/* Home */}
        <Link to={"/Warehouse/dashboard"}>
          <li className={styles.sidebarListItem}>
            <BsGrid1X2Fill className={styles.icon} /> Home
          </li>
        </Link>

        {/* All Orders */}
        <li
          className={`${styles.sidebarListItem} ${styles.clickable}`}
          onClick={toggleSublist}
        >
          <BsFillArchiveFill className={styles.icon} />
          <span>All Orders</span>
          <span className={styles.arrow}>{isSublistVisible ? "▲" : "▼"}</span>
        </li>

        {/* Sublist for Orders */}
        {isSublistVisible && (
          <ul className={styles.sublist}>
            {statuses.map((status, index) => (
              <li className={styles.subItem} key={index}>
                <span>{status.label}</span>
                <span
                  className={styles.statusNumber}
                  style={{
                    backgroundColor: status.color,
                    color: "#fff",
                    padding: "5px 10px",
                    borderRadius: "50%",
                    fontSize: "12px",
                    border:`4px solid  ${status.border}` ,
                  }}
                >
                  {status.count}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Additional Links */}
        
        <Link to={"/WareHouse/product"}>
          <li className={styles.sidebarListItem}>
            <BsFillGrid3X3GapFill className={styles.icon} /> Product Manages
          </li>
        </Link>
        <Link to={""}>
          <li className={styles.sidebarListItem}>
            <BsPeopleFill className={styles.icon} /> Profile
          </li>
        </Link>
        <Link to={""}>
          <li className={styles.sidebarListItem}>
            <MdOutlineBoy className={styles.icon} /> Accounts
          </li>
        </Link>
      </ul>
    </aside>
  );
}

export default Sidebar;
