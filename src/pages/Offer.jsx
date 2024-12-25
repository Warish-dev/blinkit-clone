import React from 'react'
import styles from '../styles/offer.module.css'
import { Link } from 'react-router-dom'
import kitchen from '../assets/offer/kitchen.jpeg'
import electronics from '../assets/offer/electronics.jpeg'
import baby from '../assets/offer/baby.jpeg'
import makeup from '../assets/offer/makeup.jpeg'
import toys from '../assets/offer/toys.jpeg'
// import { Link } from 'react-router-dom'


function Offer() {
  const offerimg = [
    { id: 1, img: kitchen },
    { id: 1, img: electronics },
    { id: 1, img: baby },
    { id: 1, img: makeup },
    { id: 1, img: toys }

  ]
  return (
    <div>
      <div className={styles.mainOffer}>
        {offerimg.map((item, index) =>
          <div key={index} className={styles.offergroup}>

            <Link to='/category/1' key={index} > <img src={item.img} alt="" /> </Link>
          </div>
        )}


      </div>

    </div>
  )
}

export default Offer
