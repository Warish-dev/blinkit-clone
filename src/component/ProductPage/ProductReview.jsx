import React, { useState } from 'react'
import styles from '../../styles/productReview.module.css'
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa'; // Full star icon
import { CiStar } from 'react-icons/ci'; // Empty star icon
import war from '../../assets/warish.jpg';
import { SwiperSlide } from 'swiper/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';


const data = [
    { name: "Warish Ahmad", image: war, review: "The Sony WH-1000XM4 headphones deliver outstanding noise cancellation", rating: 3 },
    { name: "John Doe", image: war, review: "Great headphones, very comfortable and great sound quality.", rating: 4 },
    { name: "Jane Smith", image: war, review: "Good noise cancellation, but not the best sound.", rating: 3 },
    { name: "David Johnson", image: war, review: "Absolutely love these headphones. Worth the price!", rating: 5 },
    { name: "Lucy Brown", image: war, review: "Not bad, but could use more bass.", rating: 4 },
    { name: "Michael Lee", image: war, review: "Great value for money, I’m happy with my purchase.", rating: 4 },
    { name: "Sophie Taylor", image: war, review: "Good product, but takes a while to adjust to.", rating: 3 },
    { name: "James Wilson", image: war, review: "Disappointed with the build quality, expected more.", rating: 2 },
    { name: "Olivia White", image: war, review: "Best headphones I’ve ever owned, highly recommend!", rating: 5 },
    { name: "Liam Harris", image: war, review: "Pretty good for the price. Good sound quality.", rating: 4 },
    { name: "Emma Clark", image: war, review: "Battery life could be better, but overall, I like it.", rating: 3 },
    { name: "Mason Young", image: war, review: "Not comfortable for long sessions, but great sound.", rating: 3 },
    { name: "Ava Walker", image: war, review: "Love the noise cancellation feature. Perfect for travel.", rating: 5 },
    { name: "Ethan Scott", image: war, review: "Great sound quality, but they hurt my ears after a while.", rating: 2 },
    { name: "Isabella Hall", image: war, review: "The design is sleek, and the performance is top-notch.", rating: 4 },
    { name: "Oliver Allen", image: war, review: "Wouldn’t recommend for long listening sessions.", rating: 3 },
    { name: "Charlotte King", image: war, review: "Solid headphones, but prefer something more compact.", rating: 3 },
    { name: "Lucas Adams", image: war, review: "Amazing audio quality, just wish they were wireless.", rating: 4 },
    { name: "Amelia Nelson", image: war, review: "A bit overpriced but performs well.", rating: 3 },
    { name: "Henry Carter", image: war, review: "Good sound, but a bit bulky for me.", rating: 3 },
    { name: "Grace Mitchell", image: war, review: "Highly recommend for anyone who needs great sound and noise isolation.", rating: 5 },
];


function ProductReview() {

    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 10;

    const startIndex = (currentPage - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    const currentReviews = data.slice(startIndex, endIndex);

    // Function to load more reviews
    const loadMoreReviews = () => {
        if (currentPage * reviewsPerPage < data.length) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    // Function to go back to previous reviews
    const loadPreviousReviews = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    // Check if there are more reviews to load
    const hasMoreReviews = endIndex < data.length;
    const hasPreviousReviews = currentPage > 1;


  return (
    <div className={styles.reviewsContainer}>
    {currentReviews.map((user, index) => (
        <SwiperSlide key={index}>
            <div className={styles.ratingdiv}>
                <div className={styles.namediv}>
                    <div className={styles.image}>
                        <img src={war} alt='' />
                    </div>
                    <div className={styles.fix}>
                        <h3>{user.name}</h3>
                    </div>
                </div>

                <div className={styles.review1}>
                    <p>{user.review}</p>
                </div>

                <div className={styles.rating}>
                    <Rating
                        initialRating={user.rating}
                        readonly={true}
                        emptySymbol={<CiStar />}
                        fullSymbol={<FaStar />}
                    />
                </div>
            </div>
        </SwiperSlide>
    ))}

    <div className={styles.paginationBtns}>
        {hasPreviousReviews && (
            <button onClick={loadPreviousReviews} className={styles.paginationBtn}>
                <BiLeftArrowAlt /> {/* Previous Icon */}
            </button>
        )}
        {hasMoreReviews && (
            <button onClick={loadMoreReviews} className={styles.paginationBtn}>
                <BiRightArrowAlt /> {/* Next Icon */}
            </button>
        )}
    </div>
</div>
      
    
  )
}

export default ProductReview
