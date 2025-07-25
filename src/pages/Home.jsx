import React, { useEffect, useState } from 'react'
import HeroSection from '../component/Home/HeroSection'
import ProductSection from '../component/Home/ProductSection'
import Layout from '../component/Sheared/Layout'
import { FaArrowUpLong } from "react-icons/fa6";
import styles from '../styles/home.module.css'
import UserLogin from '../component/Home/UserLogin'
import Bannar from '../component/Home/Bannar'

// import contact from '../pages/Contact'
// import Review from '../component/Home/Review';
import CategoryComponent from '../component/Home/CategoryComponent';
import PosterSection from '../component/Home/PosterSection';
import GetUserLocation from '../component/Home/GetUserLocation';
import Cart from '../component/Home/Cart';
// import stationary from '../assets/stationary.jpeg';
import fruits from '../assets/fruits.jpeg';
import Offer from './Offer';

// import DarkModeToggle from '../component/Sheared/DarkMode';
// import '../App.css';

import Brand from '../component/Sheared/Brand';





const Home = () => {

  const [showBtn, setShowBtn] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isLocation, setIsLocation] = useState(true);



  useEffect(() => {
    const handleVisibilityOfBtn = () => {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    }
    

    window.addEventListener('scroll', handleVisibilityOfBtn);

    return () => window.removeEventListener('scroll', handleVisibilityOfBtn)

  }, []);



  const gotoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  return (
    <div>
      {
        isLogin &&
        <UserLogin setIsLogin={setIsLogin} />
      }

      {!isLogin && isLocation &&
        <GetUserLocation setIsLocation={setIsLocation} />
      }

      <Layout>
        {/* <DarkModeToggle/> */}
        <HeroSection />
        <PosterSection />
        <img src={fruits} className={styles.offer}/>
        {/* <img src={stationary} className={styles.offer}/> */}
        <Offer/>

        <CategoryComponent />
        
        <Bannar/>
        <ProductSection />
        

        {
          showBtn &&
          <div onClick={gotoTop} className={styles.moveToTopBtn}>
            <FaArrowUpLong className={styles.toTopBtn} />
          </div>
        }

<Cart/>

<Brand />
      </Layout>





    </div>
  )
}

export default Home    