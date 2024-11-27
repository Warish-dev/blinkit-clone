// import React, { useContext } from 'react'
// import styles from '../../styles/productCard.module.css'
// import { Link } from 'react-router-dom'
// import toast from 'react-hot-toast'
// import MyContext from '../../context/MyContext'

// const ProductCard = ({ product }) => {


//   const { cart, setCart } = useContext(MyContext);


//   const addToCart = (e) => {
//     e.stopPropagation();
//     e.preventDefault()
//     setCart([...cart, product]);
//     toast.success('Add item to Cart', {
//       duration: 1500,
//     })
//   }

//   return (
//     <Link to={`/productInfo/${product.id}`}>

//       <div className={styles.container}>

//         <div className={styles.imgContainer}>
//           <img src={product.img} alt="" />
//         </div>

//         <div className={styles.productDeatils}>
//           <p>{product.title}</p>

//           <div className={styles.line}></div>

//           <div className={styles.priceConatiner}>
//             <p>{product.quantity}</p>
//             <p>Rs. {product.price}</p>
//           </div>

//           <div className={styles.line}></div>

//           <button onClick={addToCart} className={styles.actionButton}>Add to Cart</button>


//         </div>
//       </div>
//     </Link>
//   )
// }

// export default ProductCard










import React, { useContext, useState } from 'react';
import styles from '../../styles/productCard.module.css';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import MyContext from '../../context/MyContext';

const ProductCard = ({ product }) => {
  const { cart, setCart } = useContext(MyContext);
  const [quantity, setQuantity] = useState(0);

  const addToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (quantity === 0) {
      setQuantity(1); 
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success('Added item to Cart', {
        duration: 1500,
      });
    }
  };

  const incrementQuantity = (e) => {
    e.stopPropagation();
    e.preventDefault();

    setQuantity(quantity + 1);
    updateCartQuantity(product.id, quantity + 1);
  };

  const decrementQuantity = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateCartQuantity(product.id, quantity - 1);
    } else if (quantity === 1) {
      setQuantity(0);
      removeFromCart(product.id);
    }
  };

  const updateCartQuantity = (id, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    toast('Item removed from Cart', { duration: 1500 });
  };

  return (
    <Link to={`/productInfo/${product.id}`}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={product.img} alt="" />
        </div>

        <div className={styles.productDeatils}>
          <p>{product.title}</p>

          <div className={styles.line}></div>

          <div className={styles.priceConatiner}>
            <p>{product.quantity}</p>
            <p>Rs. {product.price}</p>
          </div>

          <div className={styles.line}></div>

          {quantity === 0 ? (
            <button onClick={addToCart} className={styles.actionButton}>
              Add to Cart
            </button>
          ) : (
            <div className={styles.quantityControl}>
              <button onClick={decrementQuantity} className={styles.decrement}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={incrementQuantity} className={styles.increment}>
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
