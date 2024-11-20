import React, { useContext, useEffect, useState } from 'react';
import { productData } from '../utils/cardData';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../styles/productInfo.module.css';
import Layout from '../component/Sheared/Layout';
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"; // import right arrow for forward navigation
import MyContext from '../context/MyContext';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa'; // Full star icon
import { CiStar } from 'react-icons/ci'; // Empty star icon
import war from '../assets/warish.jpg';
import { SwiperSlide } from 'swiper/react';
import ProductReview from '../component/ProductPage/ProductReview';


const ProductInfo = () => {
    // Dummy review data for demonstration
    

    const { id } = useParams();
    const navigate = useNavigate();
    const [showProduct, setShowProduct] = useState();
    

    const { cart, setCart } = useContext(MyContext);

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const addToCart = () => {
        setCart([...cart, showProduct]);
    };

    // Calculate which reviews to show based on currentPage
    
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <img src={showProduct?.img} alt={showProduct?.title} />
                </div>

                <div className={styles.productInfoContainer}>
                    <p>{showProduct?.title}</p>
                   <div className={styles.headingContainer}><p> <strong>Product Details</strong> </p></div>
                    <div className={styles.detailContainer}>
                        <div>
                            <strong></strong>
                        
                        </div>
                        <strong>Key Features</strong> <p> <span>{showProduct?.key?.description}</span> </p>
                        <strong>Type</strong> <p> <span>{showProduct?.key?.ptype}</span></p>
                        <strong>Shelf Life</strong> <p><span>{showProduct?.key?.life}</span></p>   
                        <strong>Seller</strong> <p><span>{showProduct?.key?.seller}</span></p> 
                        <strong>Return Policy</strong> <p><span>{showProduct?.key?.return}</span></p>
                    </div>
                    

                    <div className={styles.priceContainer}>
                        <p>Rs. {showProduct?.price}</p>
                        <p>{showProduct?.quantity}</p>
                        
                    </div>

                    <div className={styles.btnContainer}>
                        <button className={styles.buyBtn}>Buy Now</button>
                        <button onClick={addToCart} className={styles.addCartBtn}>Add to Cart</button>
                    </div>
                </div>

                <div onClick={() => { navigate(-1); }} className={styles.backBtnContainer}>
                    <BiLeftArrowAlt className={styles.backBtn} />
                </div>
            </div>

           <ProductReview/>
        </Layout>

);
};

export default ProductInfo;
