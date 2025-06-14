
import '../../CSS/reviwes.css'
import React from 'react';

export const Reviwes = () => {
    const reviews = [
        {
            img: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=500&auto=format&fit=crop&q=60",
            name: "Mlen",
            time: "1 day ago",
            rating: 5,
            comment: "I absolutely love my new dress from Clothify! The fit is perfect, and the quality is amazing. The delivery was fast, and the customer service team was so helpful. I’ll definitely be shopping here again!"
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60",
            name: "Alex",
            time: "10 days ago",
            rating: 4,
            comment: "Great selection of clothes at affordable prices. My shirt arrived on time, and it looked just like the picture. One of the buttons came off after a few wears, but overall, I’m happy with my purchase."
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1705018501151-4045c97658a3?w=500&auto=format&fit=crop&q=60",
            name: "Mari",
            time: "2 weeks ago",
            rating: 5,
            comment: "Clothify has quickly become my go-to online store. The clothes are stylish and comfortable, and I love the wide variety of sizes. I always find something I like, and the shopping experience is smooth and easy."
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?w=500&auto=format&fit=crop&q=60",
            name: "Livena",
            time: "1 year ago",
            rating: 5,
            comment: "Fantastic experience! The jacket I ordered is high-quality, and it fits perfectly. The site is super easy to navigate, and I love the fast shipping. Highly recommend Clothify!"
        }
    ];

    return (
        <div className="reviews-page">
            <div className="reviews-header">
                <h1><u>REVIEWS</u></h1>
            </div>

            <div className="reviews-list">
                {reviews.map((review, index) => (
                    <article className="review-card" key={index}>
                        <div className="review-top">
                            <img src={review.img} alt={review.name} width="50" height="50" />
                            <div>
                                <h3>{review.name}</h3>
                                <span className="review-time">{review.time}</span>
                            </div>
                        </div>

                        <div className="review-rating">
                            {"⭐".repeat(review.rating)}
                        </div>
                        <hr />
                        <p className="review-comment">"{review.comment}"</p>
                    </article>
                ))}
            </div>
        </div>
    );
};
