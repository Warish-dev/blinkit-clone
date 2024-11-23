import React, { useContext, useEffect, useState } from 'react'
import HeroSection from '../component/Home/HeroSection'
import Bannar from '../component/Home/Bannar'
import ProductSection from '../component/Home/ProductSection'
import Layout from '../component/Sheared/Layout'
import { FaArrowUpLong } from "react-icons/fa6";
import styles from '../styles/home.module.css'
import UserLogin from '../component/Home/UserLogin'


import Contact from '../component/Home/Contact';

import Review from '../component/Home/Review';
import CategoryComponent from '../component/Home/CategoryComponent';
import PosterSection from '../component/Home/PosterSection';
import GetUserLocation from '../component/Home/GetUserLocation';
import MyContext from '../context/MyContext'
import Cart from '../component/Home/Cart'



const Home = () => {

  const [showBtn, setShowBtn] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isLocation, setIsLocation] = useState(true);
  // const [isCartOpen, setIsCartOpen] = useState(false);
  const {isCartOpen, setIsCartOpen} = useContext(MyContext)
  


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


      {
        isCartOpen && 
        <Cart setIsCartOpen={setIsCartOpen}/>
      }
     
      <Layout>

        <HeroSection />
        <PosterSection />
        <CategoryComponent />
        <Bannar/>


        <ProductSection />

 {/* <Review /> */}

        <Contact />

        {
          showBtn &&
          <div onClick={gotoTop} className={styles.moveToTopBtn}>
            <FaArrowUpLong className={styles.toTopBtn} />
          </div>
        }
      </Layout>





    </div>
  )
}

export default Home    