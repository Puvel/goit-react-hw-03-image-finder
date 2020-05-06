import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import style from './modal.module.css';

class Modal extends Component {
  overlayRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code !== 'Escape') return;

    this.props.closeModal();
  };

  handleOverlayClick = e => {
    const { current } = this.overlayRef;

    if (current && e.target !== current) {
      return;
    }

    this.props.closeModal();
  };

  render() {
    const { currentImage } = this.props;
    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        className={style.Overlay}
        ref={this.overlayRef}
        onClick={this.handleOverlayClick}
        onKeyDown={this.handleKeyDown}
      >
        <div className={style.Modal}>
          <img src={currentImage} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;

// const Modal = ({ currentImage }) => (
//   <div className={style.Overlay}>
//     <div className={style.Modal}>
//       <img src={currentImage} alt="" />
//     </div>
//   </div>
// );

Modal.defaultProps = {
  currentImage: '',
};

Modal.propTypes = {
  currentImage: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
};

// export default Modal;
