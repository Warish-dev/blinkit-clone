import React, { useRef } from 'react'
import ProductCard from './ProductCard'
import styles from '../../styles/productRow.module.css'
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";


const ProductRow = ({data}) => {

    const productRow = useRef();

    const handleScroll = (scrollOffset) => {
        productRow.current.scrollTo({
            left: productRow.current.scrollLeft + scrollOffset,
            behavior: 'smooth'
        });
    }

  return (
    <div className={styles.container}>
        <div className={styles.categoryTitle}>
            <p>{data.category}</p>

            <div className={styles.scrollBtnContainer}>
                <span onClick={() => {handleScroll(-500)}}><BiSolidLeftArrow/></span>
                <span onClick={() => {handleScroll(500)}}><BiSolidRightArrow/></span>
            </div>
        </div>

        <div className={styles.productContainer} ref={productRow}>
            {
                data.products.map((product, index) => (
                    <ProductCard key={index} product={product}/>
                ))
            }
        </div>

    </div>
  )
}

export default ProductRow