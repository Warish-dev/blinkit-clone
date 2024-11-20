import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
// import 'swiper/swiper-bundle.min.css'; // Import Swiper's styles
// import 'swiper/swiper.min.css'; 
// import 'swiper/css'; // Correct import for Swiper v8 and above
import 'swiper/css';


// import { Rating } from 'react-rating-stars-component';
import { FaStar } from 'react-icons/fa'; // Full star icon
import { CiStar } from 'react-icons/ci'; // Empty star icon
import styles from '../../styles/review.module.css'; // Adjust import as necessary
import Rating from 'react-rating';
import war from '../../assets/warish.jpg'


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
        },
    ]

    return (
        <div>
            <h1 className={styles.head}>Testimonials</h1>
            <div className={styles.box}>
                {/* Swiper Container for Image Slider */}
                <Swiper
                    spaceBetween={10} // Space between slides
                    slidesPerView={3} // Number of slides visible at once
                    // loop={true} // Loop through slides
                    // autoplay={{ delay: 1000, disableOnInteraction: false }} // Auto slide with delay
                    autoplay={true}
                    className={styles.swiperContainer}
                >
                    {data.map((user, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.container}>
                                <div className={styles.container2}>
                                    <div className={styles.image}>
                                        <img src={user.image} alt={user.name} />
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
                                        fullSymbol={<FaStar />}    // full star icon
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    );
};

export default Review;