import PropTypes from 'prop-types';
import css from './searchBar.module.css';

export const Searchbar = ({ query, handleChange, handleSubmit }) => (
  <header className={css.Searchbar}>
    <form className={css.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={css.SearchFormButton}>
        <span className={css.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        className={css.SearchFormInput}
        type="text"
        autoComplete="off"
        value={query}
        autoFocus
        placeholder="Search images and photos"
        onChange={handleChange}
      />
    </form>
  </header>
);

Searchbar.defaultProps = { query: '' };

Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  query: PropTypes.string,
};
