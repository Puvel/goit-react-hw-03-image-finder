import PropTypes from 'prop-types';
import css from './button.module.css';

export const Button = ({ handleClick }) => (
  <button className={css.Button} type="button" onClick={handleClick}>
    Load more
  </button>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
