import PropTypes from 'prop-types';
import css from './imageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, openModal }) => (
  <li className={css.ImageGalleryItem}>
    <a href={image.largeImage} onClick={openModal}>
      <img
        src={image.smallImage}
        alt=""
        data-large={image.largeImage}
        className={css.ImageGalleryItemImage}
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
