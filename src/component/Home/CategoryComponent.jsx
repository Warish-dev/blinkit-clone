import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/categoryComponent.module.css'
// import masala from '../assets/logo3.png'
// import masalas2 from '../assets/logo2.png'
// import masala from '../assets/logo2.jpg'
import masala from '../../assets/categoryimages/masala.jpeg'







function CategoryComponent() {
    const data = [
        { name: 'milk', image: masala },
        { name: 'milk', image: masala },
        { name: 'milk', image: masala },
        { name: 'milk', image: masala },
        { name: 'milk', image: masala },
        { name: 'milk', image: masala },
        { name: 'milk', image: masala },
        { name: 'milk', image: masala },
        { name: 'milk', image: masala },
        

    ];

    const data2 = [
        { name2: 'milk', image2: masala },
        { name2: 'milk', image2: masala },
        { name2: 'milk', image2: masala },
        { name2: 'milk', image2: masala },
        { name2: 'milk', image2: masala },
        { name2: 'milk', image2: masala },
        { name2: 'milk', image2: masala },
        { name2: 'milk', image2: masala },
        { name2: 'milk', image2: masala },
    ];

    return (
        <div className={styles.maincategory}>
            <div className={styles.subcategory}>
                {data.map((user, index) => (
                    <Link to='/category/1' key={index} className={styles.categoryDetails}>
                        <div className={styles.image}>
                            <img src={user.image} alt={user.name} />
                        </div>
                        <div className={styles.fix}>
                            <p>{user.name}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className={styles.subcategory2}>
                {data2.map((user, index) => (
                    <Link to='/category/1' key={index} className={styles.categoryDetails2}>
                        <div className={styles.image}>
                            <img src={user.image2} alt={user.name2} />
                        </div>
                        <div className={styles.fix}>
                            <p>{user.name2}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CategoryComponent;
