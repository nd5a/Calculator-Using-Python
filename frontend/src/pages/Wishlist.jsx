import React, { useState, useEffect } from 'react';
import '../styles/Gallery.css';
import CommonSection from '../shared/CommonSection';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (image) => {
    const updatedWishlist = wishlist.filter((item) => item.src !== image.src);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div id="wishlist" className="py-4">
      <CommonSection title={"My Wishlist"} />
      <div className="container">
        <div className="title-wrap text-center">
          <h1><span className="sm-title">Your Favorite Picks</span></h1>
        </div>
        <div className="gallery-row">
          {wishlist.length > 0 ? (
            wishlist.map((item, index) => (
              <div key={index} className="gallery-item shadow">
                <img src={item.src} alt={`wishlist img ${index + 1}`} />
                <p className="gallery-title">{item.title}</p>
                <button className="wishlist-btn wishlisted" onClick={() => removeFromWishlist(item)}>
                  ❌
                </button>
              </div>
            ))
          ) : (
            <p className="text-center">No items in your wishlist yet!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
