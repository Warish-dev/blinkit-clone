import React from "react";
import vegies from '../assets/images/vegies.png'
import baked from '../assets/images/baked.png'
import tomato from '../assets/images/tomato.png'
import carrot from '../assets/images/carrot.png'
import onion from '../assets/images/onion.png'
import styles from "../styles/posteritem.module.css"
// import ProductCard from "../component/Home/ProductCard";


const productData = [
  {
    id: 1,
    discount: 25,
    img: vegies,
    name: "Hybrid Tomato",
    localName: "Tamatar",
    time: "8 MINS",
    variants: "500 g",
    currentPrice: 44,
    originalPrice: 55,
  },
  // {
  //   id: 2,
  //   discount: 29,
  //   img: tomato,
  //   name: "Tomato",
  //   localName: "Pyaz",
  //   time: "8 MINS",
  //   variants: ["1 kg" , "2 kg"],
  //   currentPrice: 89,
  //   originalPrice: 120,
  // },
  // {
  //   id: 3,
  //   discount: 25,
  //   img: carrot,
  //   name: "Carrot",
  //   localName: "Pyaz",
  //   time: "8 MINS",
  //   variants: ["0.95 - 1.05 kg"],
  //   currentPrice: 89,
  //   originalPrice: 120,
  // },
  // {
  //   id: 4,
  //   discount: 25,
  //   img: onion,
  //   name: "Onion",
  //   localName: "Pyaz",
  //   time: "8 MINS",
  //   variants: ["0.95 - 1.05 kg"],
  //   currentPrice: 89,
  //   originalPrice: 120,
  // },
  // {
  //   id: 5,
  //   discount: 25,
  //   img: "onion.jpg",
  //   name: "Onion",
  //   localName: "Pyaz",
  //   time: "8 MINS",
  //   variants: ["0.95 - 1.05 kg"],
  //   currentPrice: 89,
  //   originalPrice: 120,
  // },
  // {
  //   id: 5,
  //   discount: 25,
  //   img: "onion.jpg",
  //   name: "Onion",
  //   localName: "Pyaz",
  //   time: "8 MINS",
  //   variants: ["0.95 - 1.05 kg"],
  //   currentPrice: 89,
  //   originalPrice: 120,
  // },
  // {
  //   id: 6,
  //   discount: 25,
  //   img: "onion.jpg",
  //   name: "Onion",
  //   localName: "Pyaz",
  //   time: "8 MINS",
  //   variants: ["0.95 - 1.05 kg"],
  //   currentPrice: 89,
  //   originalPrice: 120,
  // },
  // {
  //   id: 7,
  //   discount: 25,
  //   img: "onion.jpg",
  //   name: "Onion",
  //   localName: "Pyaz",
  //   time: "8 MINS",
  //   variants: ["0.95 - 1.05 kg"],
  //   currentPrice: 89,
  //   originalPrice: 120,
  // },
  // {
  //   id: 8,
  //   discount: 25,
  //   img: "onion.jpg",
  //   name: "Onion",
  //   localName: "Pyaz",
  //   time: "8 MINS",
  //   variants: ["0.95 - 1.05 kg"],
  //   currentPrice: 89,
  //   originalPrice: 120,
  // },
  // {
  //   id: 9,
  //   discount: 25,
  //   img: "onion.jpg",
  //   name: "Onion",
  //   localName: "Pyaz",
  //   time: "8 MINS",
  //   variants: ["0.95 - 1.05 kg"],
  //   currentPrice: 89,
  //   originalPrice: 120,
  // },
  
  // Add more product objects here as needed...
];

const PosterItem = () => {
  return (
    <div className={styles.productGrid}>
      {productData.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <div className={styles.badge}>{product.discount}% OFF</div>
          <img
            src={product.img}
            alt={product.name}
            className={styles.productImage}
          />
          
          <div className={styles.time}>
            <span>⏱ {product.time}</span>
          </div>
          <h3 className={styles.name}>
            {product.name} ({product.localName})
          </h3>
          <div className={styles.quantity}>
  <p>{product.variants}</p>
</div>

          {/* <p className={styles.quantity}>{product.weight}</p> */}

          <div className={styles.price}>
            <span className={styles.currentPrice}>
              ₹{product.currentPrice}
            </span>
            <span className={styles.originalPrice}>
              ₹{product.originalPrice}
            </span>
          </div>
          <button className={styles.addToCart}>ADD</button>
        </div>
        // <ProductCard product={productData}/>
      ))}
    </div>
  );
};

export default PosterItem;
