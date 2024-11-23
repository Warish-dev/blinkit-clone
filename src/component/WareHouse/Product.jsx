
import React, { useState } from 'react';
import styles from "../../styles/ProductTable.module.css";
import newImg from "../../assets/logo2.jpg"
import ProductForm from "../WareHouse/ProductForm";
const ProductTable = () => {
  const products = [
    {
      id: 1,
      thumbnail: newImg,
      name: "Sony A6400 Mirrorless Camera With 18-135mm Lens",
      price: "$1800",
      discountPrice: "$0",
      verifyStatus: "Approved",
      status: true,
    },
    {
      id: 2,
      thumbnail: newImg,
      name: "Dahua DH-SD49225I-HC 2MP PTZ Night Vision Color Camera",
      price: "$2800",
      discountPrice: "$2500",
      verifyStatus: "Approved",
      status: true,
    },
    {
        id: 3,
        thumbnail: newImg,
        name: "Dahua DH-SD49225I-HC 2MP PTZ Night Vision Color Camera",
        price: "$2800",
        discountPrice: "$2500",
        verifyStatus: "Approved",
        status: true,
      },
      {
        id: 4,
        thumbnail: newImg,
        name: "Dahua DH-SD49225I-HC 2MP PTZ Night Vision Color Camera",
        price: "$2800",
        discountPrice: "$2500",
        verifyStatus: "Approved",
        status: true,
      },
      {
        id: 5,
        thumbnail: newImg,
        name: "Dahua DH-SD49225I-HC 2MP PTZ Night Vision Color Camera",
        price: "$2800",
        discountPrice: "$2500",
        verifyStatus: "Approved",
        status: true,
      },
      {
        id: 6,
        thumbnail: newImg,
        name: "Dahua DH-SD49225I-HC 2MP PTZ Night Vision Color Camera",
        price: "$2800",
        discountPrice: "$2500",
        verifyStatus: "Approved",
        status: true,
      },
      {
        id: 7,
        thumbnail: newImg,
        name: "Dahua DH-SD49225I-HC 2MP PTZ Night Vision Color Camera",
        price: "$2800",
        discountPrice: "$2500",
        verifyStatus: "Approved",
        status: true,
      },
      {
        id: 8,
        thumbnail: newImg,
        name: "Dahua DH-SD49225I-HC 2MP PTZ Night Vision Color Camera",
        price: "$2800",
        discountPrice: "$2500",
        verifyStatus: "Approved",
        status: true,
      },
      {
        id: 8,
        thumbnail: newImg,
        name: "Dahua DH-SD49225I-HC 2MP PTZ Night Vision Color Camera",
        price: "$2800",
        discountPrice: "$2500",
        verifyStatus: "Approved",
        status: true,
      },
      {
        id: 8,
        thumbnail: newImg,
        name: "Dahua DH-SD49225I-HC 2MP PTZ Night Vision Color Camera",
        price: "$2800",
        discountPrice: "$2500",
        verifyStatus: "Approved",
        status: true,
      },
      {
        id: 8,
        thumbnail: newImg,
        name: "Dahua DH-SD49225I-HC 2MP PTZ Night Vision Color Camera",
        price: "$2800",
        discountPrice: "$2500",
        verifyStatus: "Approved",
        status: true,
      },
      {
        id: 8,
        thumbnail: newImg,
        name: "Dahua DH-SD49225I-HC 2MP PTZ Night Vision Color Camera",
        price: "$2800",
        discountPrice: "$2500",
        verifyStatus: "Approved",
        status: true,
      },
      {
        id: 8,
        thumbnail: newImg,
        name: "Dahua DH-SD49225I-HC 2MP PTZ Night Vision Color Camera",
        price: "$2800",
        discountPrice: "$2500",
        verifyStatus: "Approved",
        status: true,
      },
      {
        id: 8,
        thumbnail: newImg,
        name: "Dahua DH-SD49225I-HC 2MP PTZ Night Vision Color Camera",
        price: "$2800",
        discountPrice: "$2500",
        verifyStatus: "Approved",
        status: true,
      },
      {
        id: 8,
        thumbnail: newImg,
        name: "Dahua DH-SD49225I-HC 2MP PTZ Night Vision Color Camera",
        price: "$2800",
        discountPrice: "$2500",
        verifyStatus: "Approved",
        status: true,
      },
      {
        id: 8,
        thumbnail: newImg,
        name: "Dahua DH-SD49225I-HC 2MP PTZ Night Vision Color Camera",
        price: "$2800",
        discountPrice: "$2500",
        verifyStatus: "Approved",
        status: true,
      },
      {
        id: 8,
        thumbnail: newImg,
        name: "Dahua DH-SD49225I-HC 2MP PTZ Night Vision Color Camera",
        price: "$2800",
        discountPrice: "$2500",
        verifyStatus: "Approved",
        status: true,
      },
      {
        id: 8,
        thumbnail: newImg,
        name: "Dahua DH-SD49225I-HC 2MP PTZ Night Vision Color Camera",
        price: "$2800",
        discountPrice: "$2500",
        verifyStatus: "Approved",
        status: true,
      },
      {
        id: 8,
        thumbnail: newImg,
        name: "Dahua DH-SD49225I-HC 2MP PTZ Night Vision Color Camera",
        price: "$2800",
        discountPrice: "$2500",
        verifyStatus: "Approved",
        status: true,
      },
      {
        id: 8,
        thumbnail: newImg,
        name: "Dahua DH-SD49225I-HC 2MP PTZ Night Vision Color Camera",
        price: "$2800",
        discountPrice: "$2500",
        verifyStatus: "Approved",
        status: true,
      },
      {
        id: 8,
        thumbnail: newImg,
        name: "Dahua DH-SD49225I-HC 2MP PTZ Night Vision Color Camera",
        price: "$2800",
        discountPrice: "$2500",
        verifyStatus: "Approved",
        status: true,
      },
    // Add the remaining products here...
  ];

  const [isFormOpen, setIsFormOpen] = useState(false);

// Function to toggle form visibility
const toggleForm = () => {
  setIsFormOpen(true);
};

  return (

    <div className={styles.tableContainer}>


{
      isFormOpen &&
      <ProductForm setIsFormOpen={setIsFormOpen}/>
    } 

      <div className={styles.tableHeader}>
        <input
          type="text"
          placeholder="Search by product name"
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>Search</button>
        <button className={styles.createButton} onClick={toggleForm} >+ Create New</button>
      </div>

      <table className={styles.productTable}>
        <thead>
          <tr>
            <th>SL</th>
            <th>Thumbnail</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Discount Price</th>
            <th>Verify Status</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  className={styles.thumbnail}
                />
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.discountPrice}</td>
              <td>
                <span
                  className={
                    product.verifyStatus === "Approved"
                      ? styles.approvedStatus
                      : styles.pendingStatus
                  }
                >
                  {product.verifyStatus}
                </span>
              </td>
              <td>
                <label className={styles.switch}>
                  <input type="checkbox" checked={product.status} readOnly />
                  <span className={styles.slider}></span>
                </label>
              </td>
              <td className={styles.actionIcons}>
                <button className={styles.viewIcon}>👁</button>
                <button className={styles.editIcon}>✏️</button>
                <button className={styles.deleteIcon}>🗑</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
