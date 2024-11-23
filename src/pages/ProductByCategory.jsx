import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../component/Sheared/Layout'
import styles from '../styles/ProductByCategory.module.css'
// import masala5 from '../assets/categoryimages/masala5.jpeg'
// import masala3 from '../assets/categoryimages/masala3.jpeg'
// import masala4 from '../assets/categoryimages/masala4.jpeg'
// import masala from '../assets/categoryimages/masala.jpg'
import masala from '../assets/categoryimages/masala.jpeg'
import ProductCard from '../component/Home/ProductCard'

function ProductByCategory() {
  const data = [
    { name: 'masala', img: masala },
    { name: 'cheese', img: masala },
    { name: 'butter', img: masala },
    { name: 'yogurt', img: masala },
    { name: 'cream', img: masala },
    { name: 'kefir', img: masala },
    { name: 'ghee', img: masala },
    { name: 'paneer', img: masala },
    { name: 'ice-cream', img: masala },
    { name: 'lactose-free', img: masala },
    { name: 'masala', img: masala },
    { name: 'cheese', img: masala },
    { name: 'butter', img: masala },
    { name: 'yogurt', img: masala },
    { name: 'cream', img: masala },
    { name: 'kefir', img: masala },
    { name: 'ghee', img: masala },
    { name: 'paneer', img: masala },
    { name: 'ice-cream', img: masala },
    { name: 'lactose-free', img: masala },
  ];

  const products = [
    { id: 1, title: 'Cheese', price: '3.00', img: masala },
    { id: 2, title: 'Butter', price: '1.80', img: masala },
    { id: 3, title: 'masala', price: '2.50', img: masala },
    { id: 4, title: 'Yogurt', price: '1.20', img: masala },
    { id: 5, title: 'Cream', price: '4.50', img: masala },
    { id: 6, title: 'Kefir', price: '2.80', img: masala },
    { id: 7, title: 'Ghee', price: '5.00', img: masala },
    { id: 8, title: 'Ghee', price: '5.00', img: masala },
    { id: 9, title: 'Paneer', price: '3.50', img: masala },
    { id: 10, title: 'Ice Cream', price: '6.00', img: masala },
    { id: 11, title: 'Lactose-Free masala', price: '3.20', img:masala },
    { id: 12, title: 'Almond masala', price: '4.00', img: masala },
    { id: 13, title: 'Cashew masala', price: '4.30', img: masala },
    { id: 14, title: 'masala', price: '2.50', img: masala },
    { id: 15, title: 'Cheese', price: '3.00', img: masala },
    { id: 16, title: 'Butter', price: '1.80', img: masala },
    { id: 17, title: 'Yogurt', price: '1.20', img: masala },
    { id: 18, title: 'Cream', price: '4.50', img: masala },
    { id: 19, title: 'Kefir', price: '2.80', img: masala },
    { id: 20, title: 'Ghee', price: '5.00', img: masala },
    { id: 21, title: 'Paneer', price: '3.50', img: masala },
    { id: 22, title: 'Ice Cream', price: '6.00', img: masala },
    { id: 23, title: 'Lactose-Free masala', price: '3.20', img: masala },
    { id: 24, title: 'Almond masala', price: '4.00', img: masala },
    { id: 25, title: 'Cashew masala', price: '4.30', img: masala },
    { id: 26, title: 'Soy masala', price: '2.90', img: masala },
    { id: 27, title: 'Rice masala', price: '3.10', img: masala },
    { id: 28, title: 'Coconut masala', price: '3.50', img: masala },
    { id: 29, title: 'Feta Cheese', price: '5.50', img: masala },
    { id: 30, title: 'Mozzarella', price: '4.20', img: masala },
    { id: 31, title: 'Mozzarella', price: '4.20', img: masala },
    { id: 32, title: 'Mozzarella', price: '4.20', img: masala },
    { id: 33, title: 'Mozzarella', price: '4.20', img: masala },
    { id: 34, title: 'Paneer', price: '3.50', img: masala },
    { id: 35, title: 'Ice Cream', price: '6.00', img: masala },
    { id: 36, title: 'Lactose-Free masala', price: '3.20', img: masala },
    { id: 37, title: 'Almond masala', price: '4.00', img: masala },
    { id: 38, title: 'Cashew masala', price: '4.30', img: masala },
    { id: 39, title: 'Soy masala', price: '2.90', img: masala },
    { id: 40, title: 'Rice masala', price: '3.10', img: masala },
    { id: 41, title: 'Coconut masala', price: '3.50', img: masala },
    { id: 42, title: 'Feta Cheese', price: '5.50', img: masala },
    { id: 43, title: 'Mozzarella', price: '4.20', img: masala },
    { id: 44, title: 'Mozzarella', price: '4.20', img: masala },
    { id: 45, title: 'Mozzarella', price: '4.20', img: masala },
    { id: 46, title: 'Mozzarella', price: '4.20', img: masala },

  ]
  const menuItem = [
    { name: 'Vegetables & Fruits' },
    { name: 'Cold Drinks' },
    { name: 'Munchies' },
    { name: 'Vegetables & Fruits' },
    { name: 'Cold Drinks' },
    { name: 'Munchies' },
    { name: 'Vegetables & Fruits' },
    { name: 'Cold Drinks' },
    { name: 'Munchies' },
  ];

  const { id } = useParams();

  return (
    <Layout>
      <div className={styles.wrapper}>

        {/* Menubar */}
        <div  className={styles.menubar}>
          {menuItem.map((item, index) => (
            <div key={index} className={styles.linkname}>
              <p>{item.name}</p>
            </div>
          ))}
        </div>

        <div className={styles.container}>

          {/* Sidebar */}
          <div className={styles.sidebar}>
            {data.map((item, index) => (
              <div key={index} className={styles.categoryName}>
                <div className={styles.image}>
                  <img src={item.img} alt={item.name} />
                </div>
                <div className={styles.fix}>
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Product Section */}
          <div className={styles.productsSection}>
            {products.map((product) => (
              // <div key={product.id} className={styles.productCard}>
              //   <div className={styles.productImage}>
              //     <img src={product.image || '/default-image.jpg'} alt={product.name} />
              //   </div>
              //   <div className={styles.productInfo}>
              //     <p className={styles.productName}>{product.title}</p>
              //     <p className={styles.productPrice}>{product.price}</p>
              //   </div>
              // </div>

              <ProductCard product={product} />

            ))}
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default ProductByCategory;
