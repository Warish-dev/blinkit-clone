import React from 'react'
import styles from "../styles/footer.module.css"
import { Link } from 'react-router-dom'

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


    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <h3>Categories</h3>
                <Link>see all</Link>
            </div>

            <div className={styles.categoryContainer}>   
                <div className={styles.categoryList}>
                    {
                        categoryArr1.map((category, index) => (
                            <Link>{category}</Link>
                        ))
                    }
                </div>
                <div className={styles.categoryList}>
                    {
                        categoryArr2.map((category, index) => (
                            <Link>{category}</Link>
                        ))
                    }
                </div>
                <div className={styles.categoryList}>
                    {
                        categoryArr3.map((category, index) => (
                            <Link>{category}</Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer