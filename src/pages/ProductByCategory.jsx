



import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../component/Sheared/Layout';
import styles from '../styles/ProductByCategory.module.css';
import masala from '../assets/categoryimages/masala.jpeg';
import ProductCard from '../component/Home/ProductCard';

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
  ];

  const products = [
    { id: 1, title: 'Cheese', price: '3.00', img: masala },
    { id: 2, title: 'Butter', price: '1.80', img: masala },
    { id: 3, title: 'Masala', price: '2.50', img: masala },
    { id: 4, title: 'Yogurt', price: '1.20', img: masala },
    { id: 5, title: 'Cream', price: '4.50', img: masala },
    { id: 6, title: 'Kefir', price: '2.80', img: masala },
    { id: 7, title: 'Ghee', price: '5.00', img: masala },
    { id: 1, title: 'Cheese', price: '3.00', img: masala },
    { id: 2, title: 'Butter', price: '1.80', img: masala },
    { id: 3, title: 'Masala', price: '2.50', img: masala },
    { id: 4, title: 'Yogurt', price: '1.20', img: masala },
    { id: 5, title: 'Cream', price: '4.50', img: masala },
    { id: 6, title: 'Kefir', price: '2.80', img: masala },
    { id: 7, title: 'Ghee', price: '5.00', img: masala },
  ];

  const menuItem = [
    { name: 'Vegetables & Fruits' },
    { name: 'Cold Drinks' },
    { name: 'Munchies' },
    { name: 'Vegetables & Fruits' },
    { name: 'Cold Drinks' },
    { name: 'Munchies' },
  ];

  const { id } = useParams();

  return (
    <><Layout>
      <div className={styles.wrapper}>
        {/* Menubar */}
        <div className={styles.menubar}>
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
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
</>
  );
}

export default ProductByCategory;

