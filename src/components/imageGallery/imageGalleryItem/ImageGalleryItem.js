import React from 'react';
import PropTypes from 'prop-types';
import style from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ image, openModal }) => (
  <li className={style.ImageGalleryItem}>
    <a href={image.largeImage} onClick={openModal}>
      <img
        src={image.smallImage}
        alt=""
        data-large={image.largeImage}
        className={style.ImageGalleryItemImage}
      />
    </a>
  </li>
);

ImageGalleryItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  image: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]).isRequired,
};

export default ImageGalleryItem;
