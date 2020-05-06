import React from 'react';
import PropTypes from 'prop-types';
import style from './imageGallery.module.css';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, openModal }) => (
  <ul className={style.ImageGallery}>
    {images.map(image => (
      <ImageGalleryItem key={image.id} image={image} openModal={openModal} />
    ))}
  </ul>
);

ImageGallery.defaultProps = {
  images: [],
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
