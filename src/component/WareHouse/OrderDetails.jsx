// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "../../styles/orderRecipt.module.css";
// import logo from "../../assets/logo2.jpg";

// const OrderDetails = ({/*{ setIsFormOpen }*/}) => {
//   const navigate = useNavigate(); // Initialize the navigate hook

//  const toggleForm = () => {
// setIsFormOpen(false);  };

//   const handleNavigate = () => {
//     const orderData = {
//       orderId: "#RC000006",
//       orderDate: "05 Oct, 2024 03:24 PM",
//       totalPrice: 1800,
//       shippingAddress: {
//         name: "Muhammadpur",
//         phone: "1234567890",
//         area: "Shymoli",
//         road: "Flat No.: 19",
//         postCode: "1209",
//         addressLine: "Shekertek",
//         addressLine2: "Adabor Thana",
//       },
//       customerInfo: {
//         name: "User",
//         phone: "01600000001",
//       },
//       products: [
//         {
//           id: 1,
//           name: "Sony A6400 Mirrorless Camera With 18-135mm Lens",
//           quantity: 1,
//           color: "Black",
//           price: 1800,
//           total: 1800,
//           image: logo,
//         },
//       ],
//     };

//     // Navigate to the new page with order data
//     navigate("/orderReceipt", { state: orderData });
//   };

//   return (
//     <div className={styles.container1}>
//       <button onClick={handleNavigate} className={styles.eyeButton}>
//         View Order Receipt
//       </button>
//       <p className={styles.cross} onClick={toggleForm}>
//         X
//       </p>
//       <div className={styles.header}>
//         <h2>Order Details</h2>
//         <button className={styles.printButton}>Print Invoice</button>
//       </div>
//       <div className={styles.orderInfo}>
//         <h4>
//           Order Id: <p style={{ display: "inline" }}>#RC000006</p>
//         </h4>
//         <h4>05 Oct, 2024 03:24 PM</h4>
//       </div>
//       <div className={styles.tableWrapper}>
//         <table className={styles.table}>
//           <thead>
//             <tr>
//               <th>SL</th>
//               <th>Product</th>
//               <th>Quantity</th>
//               <th>Size</th>
//               <th>Color</th>
//               <th>Price</th>
//               <th>Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1</td>
//               <td>
//                 <img
//                   className={styles.productImage}
//                   src={logo}
//                   alt="Sony A6400"
//                 />
//                 <span>Sony A6400 Mirrorless Camera With 18-135mm Lens</span>
//               </td>
//               <td>1</td>
//               <td>Black</td>
//               <td>N/A</td>
//               <td>$1800</td>
//               <td>$1800</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       {/* The rest of your component */}
//     </div>
//   );
// };

// export default OrderDetails;
