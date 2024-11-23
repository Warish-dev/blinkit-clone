import React, { useContext, useEffect, useState, useRef } from 'react';
import { productData } from '../utils/cardData';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../styles/productInfo.module.css';
import Layout from '../component/Sheared/Layout';
import { BiLeftArrowAlt } from "react-icons/bi";
import MyContext from '../context/MyContext';
import ProductCard from '../component/Home/ProductCard'
import masala from '../assets/categoryimages/masala.jpeg'

const ProductInfo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [showProduct, setShowProduct] = useState();
    const [isImgContainerScrolledToBottom, setIsImgContainerScrolledToBottom] = useState(false);

    const { cart, setCart } = useContext(MyContext);

    // Refs for both containers
    const imgContainerRef = useRef(null);
    const productInfoContainerRef = useRef(null);

    useEffect(() => {
        (function () {
            productData.forEach((data) => {
                data.products.forEach((product) => {
                    if (product.id == id) {
                        setShowProduct(product);
                    }
                });
            });
        })();
    }, [id]);

    // useEffect(() => {
    //     window.scrollTo(1, 0);
    // }, []);

    // // Sync scroll positions for imgContainer
    // const syncScroll = () => {
    //     if (imgContainerRef.current) {
    //         const isScrolledToBottom = imgContainerRef.current.scrollHeight - imgContainerRef.current.scrollTop === imgContainerRef.current.clientHeight;
    //         setIsImgContainerScrolledToBottom(isScrolledToBottom);
    //     }
    // };

    const addToCart = () => {
        setCart([...cart, showProduct]);
    };
    const product = [
        { id: 1, title: 'Cheese', price: '3.00', img: masala },
        { id: 2, title: 'Butter', price: '1.80', img: masala },
        { id: 3, title: 'masala', price: '2.50', img: masala },
        { id: 4, title: 'Yogurt', price: '1.20', img: masala },
        { id: 5, title: 'Cream', price: '4.50', img: masala },
        { id: 5, title: 'Cream', price: '4.50', img: masala },


    ]

    return (
        <Layout>
            <div className={styles.container}>
                {/* Image Container - Only scrollable container */}
                <div
                    
                    className={styles.imgContainer}
                    
                    
                >
                    <img src={showProduct?.img} alt={showProduct?.title} />
                    <div className={styles.detailContainer}>
                        <strong>Key Features</strong> <p><span>{showProduct?.key?.description}</span></p>
                        <strong>Type</strong> <p><span>{showProduct?.key?.ptype}</span></p>
                        <strong>Shelf Life</strong> <p><span>{showProduct?.key?.life}</span></p>
                        <strong>Seller</strong> <p><span>{showProduct?.key?.seller}</span></p>
                        <strong>Return Policy</strong> <p><span>{showProduct?.key?.return}</span></p>
                    </div>
                </div>

                {/* Product Info Container - Fixed, no scroll until imgContainer is fully scrolled */}
                <div
                    ref={productInfoContainerRef}
                    className={styles.productInfoContainer}
                    style={{ overflowY: isImgContainerScrolledToBottom ? 'auto' : 'hidden' }} // Disable scrolling until imgContainer is fully scrolled
                >
                    <p>{showProduct?.title}</p>
                    <div className={styles.headingContainer}><p><strong>Product Details</strong></p></div>

                    <div className={styles.priceContainer}>
                        <p>Rs. {showProduct?.price}</p>
                        <p>{showProduct?.quantity}</p>
                    </div>

                    <div className={styles.btnContainer}>
                        <button onClick={addToCart} className={styles.addCartBtn}>Add to Cart</button>
                    </div>
                </div>

                {/* Back Button */}
                <div onClick={() => { navigate(-1); }} className={styles.backBtnContainer}>
                    <BiLeftArrowAlt className={styles.backBtn} />
                </div>
            </div>
            <div className={styles.suggestion}>
                <h4>similar items</h4>
                <div className={styles.suggestedItems}>
                    {product.map((product) => (
                        <ProductCard product={product} />
                    ))}
                </div>


            </div>
        </Layout>
    );
};

export default ProductInfo;
