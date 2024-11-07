import React from 'react'
import productImg from '../assets/HeroSec.png'
import product2 from '../assets/product2.jpg'
import ProductRow from './ProductRow'
import { productData } from '../utils/cardData'
import styles from '../styles/productSection.module.css'


const ProductSection = () => {

    

  return (
    <div className={styles.wrapper}>
        {
            productData.map((data, index) => (
                <ProductRow key={index} data={data}/>
            ))
        }

    </div>
  )
}

export default ProductSection