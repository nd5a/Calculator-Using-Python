import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import galleryImages from '../Image-gallery/galleryImage'; // Adjust the import path as needed
import "../Image-gallery/MasonryImagesGallery.css"


const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: 1, 992: 4}}>
      <Masonry gutter="1rem">
        {galleryImages.map((item, index) => (
          <div key={index} className="masonry__item">
            <img
              className="masonry__img"
              src={item.src}
              alt={`gallery img ${index + 1}`}
              style={{ width: '100%', display: 'block', borderRadius: '10px' }}
            />
            <p className="masonry__title">{item.title}</p>
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImagesGallery;

