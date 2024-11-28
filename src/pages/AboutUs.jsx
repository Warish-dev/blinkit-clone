import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/images/logo.png';
import Styles from '../styles/aboutUs.module.css';
import image from '../assets/aboutUs/img4.jpeg'
import img1 from '../assets/aboutUs/pic1.jpeg';
import img2 from '../assets/aboutUs/pic2.jpeg';
import banner from '../assets/images/bannar.png';
import TopBar from '../component/Sheared/TopBar.jsx'

import Footer from '../component/Sheared/Footer.jsx';

function AboutUs() {
    

    return (
        <div>
           <TopBar/>

            <div className={Styles.aboutusHero}>
                <img src={image} alt="" />

            </div>
            {/* <div className={Styles.aboutHero}></div> */}

            <div className={Styles.container1}>
                <div className={Styles.namefield}>
                    <h2>100x retail in 5 years</h2>
                    <p className={Styles.namefieldpara}>
                        Imagine needing something when you are at home and getting it before you have tied your
                        shoelaces to step out. We are revolutionizing e-commerce by making the stuff most important 
                         to you, available to you in a blink of your eye. <br />
                        We want our customers to focus on the more important things for themselves and not need to
                        plan for the little things that life needs on an everyday basis.
                        We are here to get your chores out of your way. <br />
                        Our mission is – “instant commerce indistinguishable from magic”.
                        Using a backbone of technology, data sciences, and rich customer insights,
                        we've built a dense and fast network of partner stores enabling lightning fast deliveries in 
                         minutes. <br />
                        We are already one of the largest e-grocery companies in India.
                        Our ambition however, is to be 100x this size in the next five years. <br />
                        In order to become one of the most important e-retail companies of our generation,
                        we need builders who can think on their feet, take extreme ownership and
                        commit to making outcomes happen.
                        If you are ambitious, smart, and don’t have an ego about it, we’d love
                        to hear from you. <br />
                        Opportunities to create $100 billion businesses in India are rare.
                        We are on the way and looking for the hungry. <br />
                        <span> "Bijli" is owned & managed by "Bijli Commerce Private Limited”
                            (formerly known as Bijli India Private Limited) and is not related, linked or
                            interconnected in whatsoever manner or nature, to “BIJLI.COM” which is a
                            real estate services business operated by “Redstone Consultancy Services
                            Private Limited” </span>
                    </p>

                    <div className={Styles.philosophy}>
                        <div className={Styles.philosophyHeading}><h2>Our shared philosophy</h2></div>
                        <div className={Styles.philodiv}>
                            <div className={Styles.philosophyimg}>
                                <img src={img1} alt="" /> <h4>Mindsets & leverage points</h4>
                                <p>We believe that being a leader is a mindset, much more than it is a title. And
                                    are codifying the operating principles that leaders at Blinkit follow at all
                                    times. Learn about how we lead here</p>
                            </div>
                            <div className={Styles.philosophyimg}>
                                <img src={img2} alt="" /> <h4>Learning organisation</h4>
                                <p>We are a group of people who are constantly learning the skills we need, and
                                    continuously improving upon ourselves to create the future we desire. Learn about what we value here</p>
                            </div>
                        </div>
                    </div>

                    <div className={Styles.lastcontainer}>
                        <div className={Styles.lasthead}> <h2>Sustainability conscious </h2></div>
                        <img src={banner} alt="" />
                        <p>There is no viable path forward that does not take into account the needs of the future generations. The concept of sustainability entails that we live and work in the present in a manner that does not jeopardise the future. Learn about our sustainability commitment here</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default AboutUs;
