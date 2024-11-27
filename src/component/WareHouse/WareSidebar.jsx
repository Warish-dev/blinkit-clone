

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
    { label: "Pending", count: 6, color: "#f1c40f", border: "#FFF455", Link: "pendingOrders"},
    { label: "Confirm", count: 0, color: "#3498db", border: "#7BD3EA", Link: "confirmOrder" },
    { label: "Processing", count: 0, color: "#9b59b6", border: "#9694FF", Link: "processingOrder"},
    { label: "Pickup", count: 0, color: "#1abc9c", border: "#00FF9C", Link: "pickupOrder" },
    { label: "On The Way", count: 0, color: "#2ecc71", border: "#73EC8B", Link: "onTheWay" },
    { label: "Delivered", count: 1, color: "#27ae60", border: "#06D001", Link: "delivered" },
    { label: "Cancelled", count: 0, color: "#e74c3c", border: "#FFAAAA", Link: "cancelled"  },
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
             <Link to={`/warehouse/${status.Link}`} key={index}>
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
              </Link>
            ))}
          </ul>
        )}

        {/* Additional Links */}
        
        <Link to={"/WareHouse/product"}>
          <li className={styles.sidebarListItem}>
            <BsFillGrid3X3GapFill className={styles.icon} /> Product Manages
          </li>
        </Link>
        <Link to={"/WareHouse/profile"}>
          <li className={styles.sidebarListItem}>
            <BsPeopleFill className={styles.icon} /> Profile
          </li>
        </Link>
        <Link to={"/WareHouse/withdraw"}>
          <li className={styles.sidebarListItem}>
            <MdOutlineBoy className={styles.icon} /> Withdraw
          </li>
        </Link>
      </ul>
    </aside>
  );
}

export default Sidebar;
