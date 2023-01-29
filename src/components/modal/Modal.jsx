import { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import css from './modal.module.css';

export class Modal extends Component {
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
      <div
        className={css.Overlay}
        ref={this.overlayRef}
        onClick={this.handleOverlayClick}
        onKeyDown={this.handleKeyDown}
      >
        <div className={css.Modal}>
          <img src={currentImage} alt="" />
        </div>
      </div>
    );
  }
}

Modal.defaultProps = {
  currentImage: '',
};

Modal.propTypes = {
  currentImage: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
};
