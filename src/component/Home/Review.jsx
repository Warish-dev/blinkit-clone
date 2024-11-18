import React from 'react'
import war from "../../assets/warish.jpg";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import Rating from 'react-rating';
import styles from '../../styles/review.module.css';

function Review() {
    const data = [
        {
            name: "Warish Ahmad",
            image: war,
            email: "warish676@gmail.com",
            review: "The Sony WH-1000XM4 headphones deliver outstanding noise cancellation",
            rating: 3
        },
        {
            name: "Warish Ahmad",
            image: war,
            email: "warish676@gmail.com",
            review: "The Sony WH-1000XM4 headphones deliver outstanding noise cancellation",
            rating: 3
        },
        {
            name: "Warish Ahmad",
            image: war,
            email: "warish676@gmail.com",
            review: "The Sony WH-1000XM4 headphones deliver outstanding noise cancellation",
            rating: 3
        }
    ]
    return (
        <div>
            <h1 className={styles.head}>Testimonials</h1>
            <div className={styles.box}>

                {


                    data.map((user,index) => (
                        <div key={index} className={styles.container}>
                            <div className={styles.container2}>

                                <div className={styles.image}>
                                    <img src={user.image} />
                                </div>
                                <div className={styles.fix}>
                                    <h3>{user.name}</h3>
                                    <p>{user.email}</p>

                                </div>
                            </div>
                        
                            <div className={styles.review}>
                                <p>{user.review}</p>
                            </div>
                            <div className={styles.rating}>
                                <Rating
                                    initialRating={user.rating}
                                    readonly={true}
                                    emptySymbol={<CiStar />}   // empty star icon
                                    fullSymbol={<FaStar />} />
                            </div>
                        </div>
                    ))}

            </div>
        </div>
    )
}

export default Review