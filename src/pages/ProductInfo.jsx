import React, { useContext, useEffect, useState, useRef } from 'react';
import { productData } from '../utils/cardData';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../styles/productInfo.module.css';
import Layout from '../component/Sheared/Layout';
import { BiLeftArrowAlt } from "react-icons/bi";
import MyContext from '../context/MyContext';
import ProductCard from '../component/Home/ProductCard';
import masala from '../assets/categoryimages/masala.jpeg';
import img1 from '../assets/images/delivery1.png';
import img2 from '../assets/images/offer.png';
import img3 from '../assets/images/boy.png';

const ProductInfo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [showProduct, setShowProduct] = useState();
    const [selectedImage, setSelectedImage] = useState(null); 

    const { cart, setCart } = useContext(MyContext);

    useEffect(() => {
        (function () {
            productData.forEach((data) => {
                data.products.forEach((product) => {
                    if (product.id == id) {
                        setShowProduct(product);
                        setSelectedImage(product.img); 
                    }
                });
            });
        })();
    }, [id]);

    const addToCart = () => {
        setCart([...cart, showProduct]);
    };

    const product = [
        { id: 1, title: 'Cheese', price: '3.00', img: masala },
        { id: 2, title: 'Butter', price: '1.80', img: masala },
        { id: 3, title: 'Masala', price: '2.50', img: masala },
        { id: 4, title: 'Yogurt', price: '1.20', img: masala },
        { id: 5, title: 'Cream', price: '4.50', img: masala },
    ];

    const relatedImages = [
        masala, 
        img1, 
        img2, 
        img3, 
        showProduct?.img 
    ];

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <img src={selectedImage} alt={showProduct?.title} className={styles.mainImage} />
                    
                    <div className={styles.smallImgContainer}>
                        {relatedImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Related ${index}`}
                                className={`${styles.smallImg} ${
                                    selectedImage === image ? styles.activeThumbnail : ''
                                }`}
                                onClick={() => setSelectedImage(image)} 
                            />
                        ))}
                    </div>

                    <div className={styles.headingContainer}>
                        <p><strong>Product Details</strong></p>
                    </div>
                    <div className={styles.detailContainer}>
                        <strong>Key Features</strong> <p><span>{showProduct?.key?.description}</span></p>
                        <strong>Type</strong> <p><span>{showProduct?.key?.ptype}</span></p>
                        <strong>Shelf Life</strong> <p><span>{showProduct?.key?.life}</span></p>
                        <strong>Seller</strong> <p><span>{showProduct?.key?.seller}</span></p>
                        <strong>Return Policy</strong> <p><span>{showProduct?.key?.return}</span></p>
                    </div>
                </div>

                <div className={styles.productInfoContainer}>
                    <p>{showProduct?.title}</p>
                    <div className={styles.priceContainer}>
                        <p>Rs. {showProduct?.price}</p>
                        <p>{showProduct?.quantity}</p>
                    </div>
                    <div className={styles.btnContainer}>
                        <button onClick={addToCart} className={styles.addCartBtn}>
                            Add to Cart
                        </button>
                        <div
                            className={styles.mrp}
                            onClick={() => alert(`MRP: ${showProduct?.mrp}, Quantity: ${showProduct?.quantity}`)}
                        >
                             {showProduct?.quantity || 'N/A'} MRP Rs.   {showProduct?.mrp || 'N/A'} 
                        </div>
                    </div>
                    <div className={styles.desc}>
                        <h3>Why Shop from Bijli?</h3>
                        <div className={styles.descContainer}>
                            <div className={styles.descCard}>
                                <div className={styles.descImg}>
                                    <img src={img1} alt="Superfast Delivery" />
                                </div>
                                <div className={styles.descContent}>
                                    <h5>Superfast Delivery</h5>
                                    <p>Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
                                </div>
                            </div>
                            <div className={styles.descCard}>
                                <div className={styles.descImg}>
                                    <img src={img2} alt="Wide Range of Products" />
                                </div>
                                <div className={styles.descContent}>
                                    <h5>Wide Range of Products</h5>
                                    <p>Choose from a vast selection of quality items to meet your everyday needs.</p>
                                </div>
                            </div>
                            <div className={styles.descCard}>
                                <div className={styles.descImg}>
                                    <img src={img3} alt="Exclusive Discounts" />
                                </div>
                                <div className={styles.descContent}>
                                    <h5>Exclusive Discounts</h5>
                                    <p>Enjoy amazing deals and offers specially curated for you every day.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back Button */}
                <div onClick={() => { navigate(-1); }} className={styles.backBtnContainer}>
                    <BiLeftArrowAlt className={styles.backBtn} />
                </div>
            </div>
            <div className={styles.suggestion}>
                <h4>Similar Items</h4>
                <div className={styles.suggestedItems}>
                    {product.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default ProductInfo;
