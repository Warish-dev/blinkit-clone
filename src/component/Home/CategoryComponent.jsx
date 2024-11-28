import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/categoryComponent.module.css'
import masala from '../../assets/categoryimages/masala.jpeg'
import paan from '../../assets/categoryimages/paan.jpg'
import fruits from '../../assets/categoryimages/fruits.jpg'
import colddrinks from '../../assets/categoryimages/colddrinks.jpg'
import snacks from '../../assets/categoryimages/snacks.jpg'
import tea from '../../assets/categoryimages/tea.jpg'
import sweet from '../../assets/categoryimages/sweet.jpg'
import bakery from '../../assets/categoryimages/bakery.jpg'
import breakfast from '../../assets/categoryimages/breakfast.jpg'
import groceries from '../../assets/categoryimages/groceries.jpg'
import home from '../../assets/categoryimages/home.jpg'
import cleaning from '../../assets/categoryimages/cleaning.jpg'
import pharma from '../../assets/categoryimages/pharma.jpg'
import pet from '../../assets/categoryimages/pet.jpg'
import pc from '../../assets/categoryimages/pc.jpeg'

function CategoryComponent() {
    const data = [
        { name: 'masala,oil and more', image: masala },
        { name: 'paan', image: paan },
        { name: 'fruits & vegetables', image: fruits },
        { name: 'cold drinks & juices', image: colddrinks },
        { name: 'snacks & munchies', image: snacks },
        { name: 'tea, coffee', image: tea },
        { name: 'breakfast & instant food', image: breakfast },
        { name: 'sweet tooth', image:sweet  },
        { name: 'Bakery and biscuits', image: bakery },
    ];

    const data2 = [
        { name2: 'Groceries', image2: groceries },
        { name2: 'Home & office', image2: home },
        { name2: 'Cleaning essentials', image2: cleaning },
        { name2: 'Pharma & wellness', image2: pharma },
        { name2: 'Pet care', image2: pet },
        { name2: 'Electronics', image2: pc },
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
