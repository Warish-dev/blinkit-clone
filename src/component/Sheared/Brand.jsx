import React, { useState } from 'react';
import styles from '../../styles/brand.module.css';
import nestle from '../../assets/nestle.png'
import amul from '../../assets/amul.png';
import britania from '../../assets/britania.png';
import hp from '../../assets/hp.png';
import lenovo from '../../assets/lenevo.png';
import mi from '../../assets/mi.png';
import samsung from '../../assets/samsung.png';
import apple from '../../assets/apple.png';
import lg from '../../assets/lg.png';
import zebronics from '../../assets/zebronics.png';
import accer from '../../assets/acer.png'
function Brand() {
  const [isPaused, setIsPaused] = useState(false);

  const data = [
    { img: nestle, link: '/page1' },
    { img: lg, link: '/page2' },
    { img: amul, link: '/page3' },
    { img: britania, link: '/page4' },
    { img: hp, link: '/page5' },
    { img: mi, link: '/page6' },
    { img: samsung, link: '/page7' },
    { img: lenovo, link: '/page8' },
    { img: zebronics, link: '/page9' },
    { img: accer, link: '/page10' },
    { img: apple, link: '/page10' },
  ];

  const handleImageClick = (link) => {
    setIsPaused(true);
    window.location.href = link;
  };

  return (
    <div className={styles.brand}>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marquee}>
          {data.map((image, index) => (
            <img
              key={index}
              src={image.img}
              alt={`Brand ${index + 1}`}
              onClick={() => handleImageClick(image.link)}
              className={styles.image}
            />
          ))}
          {/* Repeat the images for infinite scrolling */}
          {data.map((image, index) => (
            <img
              key={`repeat-${index}`}
              src={image.img}
              alt={`Brand ${index + 1}`}
              onClick={() => handleImageClick(image.link)}
              className={styles.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brand;