// import React, { useContext, useEffect, useState } from 'react'
// import Layout from '../component/Sheared/Layout'
// import MyContext from '../context/MyContext'
// import styles from '../styles/cart.module.css'
// import { RxCross2 } from "react-icons/rx";
// import toast from 'react-hot-toast';
// import { Link } from 'react-router-dom';

// const Cart = () => {

//   const { cart, setCart } = useContext(MyContext);
//   const [total, setTotal] = useState(0);
//   const [gst, setGst] = useState(0);
//   const [grandTotal, setGrandTotal] = useState(0);


//   useEffect(() => {
//     let tempTotal = 0
//     cart.forEach(item => {
//       tempTotal += Number(item.price)
//     });

//     setTotal(tempTotal);

//     let tempGST = tempTotal * 0.05;

//     setGst(tempGST);

//     setGrandTotal(tempTotal + tempGST);
//   }, [cart])


//   const removeFromCart = (index) => {
//     const temp = cart.filter((item, indx) => indx != index)
//     setCart([...temp]);
//     toast.success('Remove item from cart', {
//       duration: 1500,
//     })
//   }


//   return (
//     <div className={styles.topWraper}>
//       {
//         cart.length > 0 ?
//           <div className={styles.wraper}>
//             <div className={styles.itemContainer}>
//               {
//                 cart.map((item, index) => (
//                   <div key={item.id} className={styles.itemCard}>
//                     <div className={styles.imgContainer}>
//                       <img src={item.img} />
//                     </div>
//                     <div className={styles.itemDetails}>
//                       <p>{item.title}</p>
//                       <div className={styles.priceContainer}>
//                         <p>Rs. {item.price}</p>
//                         <p>{item.quantity}</p>
//                       </div>
//                     </div>
//                     <div onClick={() => removeFromCart(index)} className={styles.deleteContainer}>
//                       <RxCross2 />
//                     </div>
//                   </div>
//                 ))
//               }
//             </div>


//             <div className={styles.totalContainer}>

//               <div className={styles.totalItemContainer}>
//                 <p>Total Item</p>
//                 <p>{cart.length}</p>
//               </div>

//               <div className={styles.totalItemContainer}>
//                 <p>Total</p>
//                 <p>Rs. {total}</p>
//               </div>


//               <div className={styles.totalItemContainer}>
//                 <p>GST 5%</p>
//                 <p>Rs. {gst}</p>
//               </div>

//               <div className={styles.separator} />

//               <div className={styles.totalItemContainer}>
//                 <p>Grant Total</p>
//                 <p>Rs. {grandTotal}</p>
//               </div>

//             </div>
//           </div>
//           : <div className={styles.noItemWraper}>
//             <p>No item in your cart</p>
//             <Link to={'/'}>Go for shopping</Link>
//           </div>
//       }
//     </div>
//   )
// }

// export default Cart








// import React, { useContext, useEffect, useState } from 'react';
// import Layout from '../component/Sheared/Layout';
// import MyContext from '../context/MyContext';
// import styles from '../styles/cart.module.css';
// import { RxCross2 } from "react-icons/rx";
// import toast from 'react-hot-toast';

// const Cart = () => {
//   const { cart, setCart } = useContext(MyContext);
//   const [total, setTotal] = useState(0);
//   const [gst, setGst] = useState(0);
//   const [grandTotal, setGrandTotal] = useState(0);
//   const [isCartOpen, setIsCartOpen] = useState(false); // State for sidebar visibility

//   useEffect(() => {
//     let tempTotal = 0;
//     cart.forEach(item => {
//       tempTotal += Number(item.price);
//     });

//     setTotal(tempTotal);
//     let tempGST = tempTotal * 0.05;
//     setGst(tempGST);
//     setGrandTotal(tempTotal + tempGST);
//   }, [cart]);

//   const removeFromCart = (index) => {
//     const temp = cart.filter((item, indx) => indx !== index);
//     setCart([...temp]);
//     toast.success('Removed item from cart', { duration: 1500 });
//   };

//   return (
//     <div>
//       <button onClick={() => setIsCartOpen(true)} className={styles.openCartBtn}>
//         Open Cart
//       </button>

//       {isCartOpen && (
//         <div className={styles.cartSidebar}>
//           <div className={styles.cartHeader}>
//             <h2>My Cart</h2>
//             <RxCross2 onClick={() => setIsCartOpen(false)} className={styles.closeIcon} />
//           </div>
//           {cart.length > 0 ? (
//             <div className={styles.wraper}>
//               <div className={styles.itemContainer}>
//                 {cart.map((item, index) => (
//                   <div key={item.id} className={styles.itemCard}>
//                     <div className={styles.imgContainer}>
//                       <img src={item.img} alt={item.title} />
//                     </div>
//                     <div className={styles.itemDetails}>
//                       <p>{item.title}</p>
//                       <div className={styles.priceContainer}>
//                         <p>Rs. {item.price}</p>
//                         <p>{item.quantity}</p>
//                       </div>
//                     </div>
//                     <div onClick={() => removeFromCart(index)} className={styles.deleteContainer}>
//                       <RxCross2 />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className={styles.totalContainer}>
//                 <div className={styles.totalItemContainer}>
//                   <p>Total Item</p>
//                   <p>{cart.length}</p>
//                 </div>
//                 <div className={styles.totalItemContainer}>
//                   <p>Total</p>
//                   <p>Rs. {total}</p>
//                 </div>
//                 <div className={styles.totalItemContainer}>
//                   <p>GST 5%</p>
//                   <p>Rs. {gst}</p>
//                 </div>
//                 <div className={styles.separator} />
//                 <div className={styles.totalItemContainer}>
//                   <p>Grand Total</p>
//                   <p>Rs. {grandTotal}</p>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className={styles.noItemWraper}>
//               <p>No items in your cart</p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
