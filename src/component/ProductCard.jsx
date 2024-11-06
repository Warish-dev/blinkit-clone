import React, { useContext } from 'react'
import styles from '../styles/productCard.module.css'
import { Link } from 'react-router-dom'
import MyContext from '../context/MyContext'
import toast from 'react-hot-toast'

const ProductCard = ({ product }) => {


  const {cart, setCart} = useContext(MyContext);


  const addToCart = (e) => {
    e.stopPropagation();
    e.preventDefault()
    setCart([...cart, product]);
    toast.success('Add item to Cart', {
      duration: 1500,
    })
  }

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

        <button onClick={addToCart} className={styles.actionButton}>Add</button>


      </div>
    </div>
    </Link>
  )
}

export default ProductCard