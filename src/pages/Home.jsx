import React, { useEffect, useState } from 'react'
import HeroSection from '../component/Home/HeroSection'
import ProductSection from '../component/Home/ProductSection'
import Layout from '../component/Sheared/Layout'
import { FaArrowUpLong } from "react-icons/fa6";
import styles from '../styles/home.module.css'


const Home = () => {

  const [showBtn, setShowBtn] = useState(false);


  useEffect(() => {
    const handleVisibilityOfBtn = () => {
      if(window.scrollY > 200){
        setShowBtn(true);
      }else{
        setShowBtn(false);
      }
    }

    window.addEventListener('scroll', handleVisibilityOfBtn);

    return () =>  window.removeEventListener('scroll', handleVisibilityOfBtn)

  }, []);


  const gotoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  return (
    <Layout>
      <HeroSection />
      <ProductSection />

      {
        showBtn &&
        <div onClick={gotoTop} className={styles.moveToTopBtn}>
          <FaArrowUpLong className={styles.toTopBtn}/>
        </div>
      }
    </Layout>
  )
}

export default Home