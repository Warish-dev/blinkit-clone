import React from 'react'
import styles from "../../styles/footer.module.css"
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";




const Footer = () => {
    const categoryArr1 = [
        "Fresh Vegetables",
        "Fresh Fruits",
        "Dairy & Eggs",
        "Rice, Flour & Grains",
        "Pulses & Lentils",
        "Cooking Oils & Ghee",
        "Spices & Masalas",
        "Salt, Sugar & Jaggery",
        "Dry Fruits & Nuts",
        "Organic Staples"
    ];

    const categoryArr2 = [
        "Cleaning Supplies",
        "Dishwashing",
        "Laundry Detergents",
        "Paper & Disposables",
        "Air Fresheners",
        "Toilet & Tissue Rolls",
        "Pest Control",
        "Batteries & Light Bulbs",
        "Kitchen Tools",
        "Storage & Organizers"
    ];

    const categoryArr3 = [
        "Hair Care",
        "Skin Care",
        "Oral Care",
        "Bath & Body",
        "Health & Hygiene",
        "Men's Grooming",
        "Women's Hygiene",
        "Fragrances & Deodorants",
        "Shaving Needs",
        "Baby Care"
    ];
    const categoryArr5 = [
        "About us",
        "History",
        "Testimonials",
        "Contact Us",
        
        

    ];
    
   


    return (
       
           <div className={styles.wrapper}>
             <div className={styles.categoryContainer1}> 
            <img  src={logo} alt=""/>  
            <div className={styles.categorycontainer1a}>
                <p>Shop on the go and get anything delivered in minutes. Buy everything from groceries to fresh fruits & vegetables, cakes and bakery items, to meats & seafood, cosmetics, mobiles & accessories, electronics, baby care products and much more. We get it delivered at your doorstep in the fastest and the safest way possible..</p>
               <Link className={styles.links} ><FiInstagram /></Link> 
               <Link className={styles.links} > <FaFacebookF /></Link>
               <Link className={styles.links}> <FaXTwitter /></Link> 

            </div>
            <div className={styles.usefulLinks}> 
                <h3>company</h3>
                <div className={styles.categoryList2}>
                    {
                        categoryArr5.map((category, index) => (
                            <Link key={index}>{category}</Link>
                        ))
                    }
                </div>

            </div>
            <div className={styles.usefulLinks}> 
                {/* <h3>Useful Links</h3> */}
                <div className={styles.categoryList2}>
                    {/* <p> <b>Office Location </b></p> */}
                    <p>H 59 D Block noida(up)</p> <br />
                    <p><b>send a message</b> </p>
                    <p>bcloud@gmail.com</p><br />
                    <p> <b>make a phone call</b></p>
                    <p>6201809101</p>
                </div>

            </div>
                      
                 </div>
                 <div className={styles.heading}>
                 <h3>Categories</h3>
                 <Link>see all</Link>
                </div>
            <div className={styles.categoryContainer2}>  
                <div className={styles.categoryList}>
                    {
                        categoryArr1.map((category, index) => (
                            <Link key={index}>{category}</Link>
                        ))
                    }
                </div>
                <div className={styles.categoryList}>
                    {
                        categoryArr2.map((category, index) => (
                            <Link key={index}>{category}</Link>
                        ))
                    }
                </div>
                <div className={styles.categoryList}>
                    {
                        categoryArr3.map((category, index) => (
                            <Link key={index}>{category}</Link>
                        ))
                    }
                </div>
                {/* <div className={styles.categoryList}>
                    {
                        categoryArr4.map((category, index) => (
                            <Link>{category}</Link>
                        ))
                    }
                </div> */}
               
            </div>
        </div>
        
    )
}

export default Footer