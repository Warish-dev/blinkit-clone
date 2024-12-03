// import React from "react";
// // import { Link } from 'react-router-dom';
// import styles from "../../styles/orderRecipt.module.css";
// import logo from '../../assets/logo2.jpg'


// const OrderDetails = ({ setIsFormOpen }) => {

//   const toggleForm = () => {
//     setIsFormOpen(false);
// };

//   return (
//     <div className={styles.container1}>
    
//       <p className={styles.cross} onClick={toggleForm}>
//           X
//         </p>
//       <div className={styles.header}>
//         <h2>Order Details</h2>
//         <button className={styles.printButton}>Print Invoice</button>
//       </div>
//       <div className={styles.orderInfo}>
//         <h4>Order Id: <p style={{display:"inline"}}>#RC000006</p></h4>
//         <h4>05 Oct, 2024 03:24 PM</h4>
//       </div>
      // <div className={styles.tableWrapper}>
      //   <table className={styles.table}>
      //     <thead>
      //       <tr>
      //         <th>SL</th>
      //         <th>Product</th>
      //         <th>Quantity</th>
      //         <th>Size</th>
      //         <th>Color</th>
      //         <th>Price</th>
      //         <th>Total</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       <tr>
      //         <td>1</td>
      //         <td>
      //           <img
      //             className={styles.productImage}
      //             src={logo}
      //             alt="Sony A6400"
      //           />
      //           <span>Sony A6400 Mirrorless Camera With 18-135mm Lens</span>
      //         </td>
      //         <td>1</td>
      //         <td>Black</td>
      //         <td>N/A</td>
      //         <td>Rs.1800</td>
      //         <td>Rs.1800</td>
      //       </tr>
      //     </tbody>
      //   </table>
      // </div>
      // <div className={styles.summary}>
      //   <div>
      //     <p>Total Price: <strong>Rs.1800</strong></p>
      //     <p>Coupon Discount: <strong>Rs.0</strong></p>
      //     <p>Delivery Charge: <strong>Rs.0</strong></p>
      //     <p className={styles.grandTotal}>Grand Total: <strong>Rs.1800</strong></p>
      //   </div>
      //   <div>
      //     <h3>Order & Shipping Info</h3>
      //     <label>
      //       Change Order Status:
      //       <select className={styles.dropdown}>
      //         <option>Pending</option>
      //         <option>Shipped</option>
      //         <option>Delivered</option>
      //       </select>
      //     </label>
      //     {/* <label>
      //       Payment Status:</label>
      //       <input type="checkbox" className={styles.check}/> */}
          
      //   </div>
      // </div>
      // <div className={styles.shippingInfo}>
      //   <h3>Shipping Address</h3>
      //   <div className={styles.details}>
      //   <p>Name: </p>
      //   <b>Muhammadpur</b>
      //   </div>
      //   <div className={styles.details}>
      //   <p>Phone: </p>
      //   <b>1234567890</b>
      //   </div>
      //   <div className={styles.details}>
      //   <p>Address Type:</p>
      //   <b> Home</b>
      //   </div>
      //   <div className={styles.details}>
      //   <p>Area: </p>
      //   <b>Shymoli</b>
      //   </div>
      //   <div className={styles.details}>
      //   <p>Road No.:</p>
      //   <b>Flat No.: 19</b>  
      //   </div>
      //   <div className={styles.details}>
      //   <p>Post Code:</p>
      //   <b> 1209</b>
      //   </div>
      //   <div className={styles.details}>
      //   <p>Address Line:</p>
      //   <b>Shekertek</b>
      //   </div>
      //   <div className={styles.details}>
      //   <p>Address Line 2:</p>
      //   <b>Adabor Thana</b>
      //   </div>
      // </div>
      // <div className={styles.customerInfo}>
      //   <h3>Customer Info</h3>
      //   <div className={styles.details}>
      //   <p>Name: </p>
      //   <b>User</b>
      //   </div>
      //   <div className={styles.details}>
      //   <p>Phone:</p>
      //   <b> 01600000001</b>
      //   </div>
      // </div>
//     </div>
//   );
// };

// export default OrderDetails;


import React, { useRef } from "react";
import styles from "../../styles/orderRecipt.module.css";
import Invoice from "./Invoice";
import logo from '../../assets/logo2.jpg'

const OrderDetails = ({ setIsFormOpen }) => {
  const invoiceRef = useRef();

  const toggleForm = () => {
    setIsFormOpen(false);
  };

  const printInvoice = () => {
    const printContents = invoiceRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    // Replace the body content with the invoice content
    document.body.innerHTML = printContents;

    // Trigger print
    window.print();

    // Restore the original content
    document.body.innerHTML = originalContents;
    window.location.reload(); // Reload to restore the app state
  };

  return (
    <div className={styles.container1}>
      <p className={styles.cross} onClick={toggleForm}>
        X
      </p>
      <div className={styles.header}>
        <h2>Order Details</h2>
        <button onClick={printInvoice} className={styles.printButton}>
          Print Invoice
        </button>
      </div>
      <div className={styles.orderInfo}>
        <h4>
          Order Id: <p style={{ display: "inline" }}>#RC000006</p>
        </h4>
        <h4>05 Oct, 2024 03:24 PM</h4>
      </div>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>SL</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Size</th>
              <th>Color</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <img
                  className={styles.productImage}
                  src={logo}
                  alt="Sony A6400"
                />
                <span>Sony A6400 Mirrorless Camera With 18-135mm Lens</span>
              </td>
              <td>1</td>
              <td>Black</td>
              <td>N/A</td>
              <td>Rs.1800</td>
              <td>Rs.1800</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.summary}>
        <div>
          <p>Total Price: <strong>Rs.1800</strong></p>
          <p>Coupon Discount: <strong>Rs.0</strong></p>
          <p>Delivery Charge: <strong>Rs.0</strong></p>
          <p className={styles.grandTotal}>Grand Total: <strong>Rs.1800</strong></p>
        </div>
        <div>
          <h3>Order & Shipping Info</h3>
          <label>
            Change Order Status:
            <select className={styles.dropdown}>
              <option>Pending</option>
              <option>Shipped</option>
              <option>Delivered</option>
            </select>
          </label>
          {/* <label>
            Payment Status:</label>
            <input type="checkbox" className={styles.check}/> */}
          
        </div>
      </div>
      <div className={styles.shippingInfo}>
        <h3>Shipping Address</h3>
        <div className={styles.details}>
        <p>Name: </p>
        <b>Muhammadpur</b>
        </div>
        <div className={styles.details}>
        <p>Phone: </p>
        <b>1234567890</b>
        </div>
        <div className={styles.details}>
        <p>Address Type:</p>
        <b> Home</b>
        </div>
        <div className={styles.details}>
        <p>Area: </p>
        <b>Shymoli</b>
        </div>
        <div className={styles.details}>
        <p>Road No.:</p>
        <b>Flat No.: 19</b>
        </div>
        <div className={styles.details}>
        <p>Post Code:</p>
        <b> 1209</b>
        </div>
        <div className={styles.details}>
        <p>Address Line:</p>
        <b>Shekertek</b>
        </div>
        <div className={styles.details}>
        <p>Address Line 2:</p>
        <b>Adabor Thana</b>
        </div>
      </div>
      <div className={styles.customerInfo}>
        <h3>Customer Info</h3>
        <div className={styles.details}>
        <p>Name: </p>
        <b>User</b>
        </div>
        <div className={styles.details}>
        <p>Phone:</p>
        <b> 01600000001</b>
        </div>
      </div>
      {/* ...other components */}
      
      {/* Hidden Invoice */}
      <div style={{ display: "none" }} ref={invoiceRef}>
        <Invoice setIsFormOpen={setIsFormOpen} />
      </div>
    </div>
  );
};

export default OrderDetails;


