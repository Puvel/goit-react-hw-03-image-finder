import PropTypes from 'prop-types';
import css from './imageGallery.module.css';
import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images = [], openModal }) => (
  <ul className={css.ImageGallery}>
    {images.map(image => (
      <ImageGalleryItem key={image.id} image={image} openModal={openModal} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.array,
  openModal: PropTypes.func.isRequired,
};
