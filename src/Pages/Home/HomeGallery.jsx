import React from "react";
import './HomeGallery.css';

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    review: "Amazing place! Very clean and friendly staff.",
    photo: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Rahul Verma",
    review: "Affordable and great location near the city center.",
    photo: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Sara Kim",
    review: "I had a great experience. Highly recommended!",
    photo: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Mohit Sharma",
    review: "Spacious rooms and good Wi-Fi. Worth the price.",
    photo: "https://i.pravatar.cc/150?img=4",
  },
];

const HomeGallery = () => {
  return (
    <div className="home-gallery">
      {reviews.map((review) => (
        <div key={review.id} className="review-card">
          <img src={review.photo} alt={review.name} className="review-photo" />
          <h3 className="review-name">{review.name}</h3>
          <p className="review-text">"{review.review}"</p>
        </div>
      ))}
    </div>
  );
};

export default HomeGallery;
