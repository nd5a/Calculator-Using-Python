
import React, { useState, useEffect } from 'react';
import galleryImages from '../components/Image-gallery/galleryImage';
import '../styles/Gallery.css';
import CommonSection from '../shared/CommonSection';

const Gallery = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);

  const toggleWishlist = (image) => {
    let updatedWishlist;
    if (wishlist.some((item) => item.src === image.src)) {
      updatedWishlist = wishlist.filter((item) => item.src !== image.src);
    } else {
      updatedWishlist = [...wishlist, image];
    }
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div id="gallery" className="py-4">
      <CommonSection title={"Gallery"} />
      <div className="container">
        <div className="title-wrap text-center">
          <h1><span className="sm-title">Our Customized Gallery</span></h1>
        </div>
        <div className="gallery-row">
          {galleryImages.map((item, index) => (
            <div key={index} className="gallery-item shadow">
              <img src={item.src} alt={`gallery img ${index + 1}`} />
              <p className="gallery-title">{item.title}</p>
              <button 
                className={`wishlist-btn ${wishlist.some((w) => w.src === item.src) ? 'wishlisted' : ''}`}
                onClick={() => toggleWishlist(item)}
              >
                ❤️
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

