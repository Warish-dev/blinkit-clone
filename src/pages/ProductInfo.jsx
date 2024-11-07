import React, { useContext, useEffect, useState } from 'react'
import { productData } from '../utils/cardData'
import { useNavigate, useParams } from 'react-router-dom'
import styles from '../styles/productInfo.module.css'
import Layout from '../component/Sheared/Layout'
import { BiLeftArrowAlt } from "react-icons/bi";
import MyContext from '../context/MyContext'


const ProductInfo = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [showProduct, setShowProduct] = useState();

    const {cart, setCart} = useContext(MyContext);

    useEffect(() => {
        (function () {
            productData.forEach((data) => {
                data.products.forEach((product) => {
                    if (product.id == id) {
                        setShowProduct(product);
                    }
                })
            })
        })()
    }, [id])


    const addToCart = (e) => {
        setCart([...cart, showProduct])
    }

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <img src={showProduct?.img} />
                </div>

                <div className={styles.productInfoContainer}>
                    <p>{showProduct?.title}</p>

                    <div className={styles.priceContainer}>
                        <p>Rs. {showProduct?.price}</p>
                        <p>{showProduct?.quantity}</p>
                    </div>

                    <div className={styles.btnContainer}>
                        <button className={styles.buyBtn}>Buy Now</button>
                        <button onClick={addToCart} className={styles.addCartBtn}>Add to Cart</button>
                    </div>
                </div>

                <div onClick={() => {navigate(-1)}} className={styles.backBtnContainer}>
                    <BiLeftArrowAlt className={styles.backBtn} />
                </div>

            </div>

           
        </Layout>
    )
}

export default ProductInfo