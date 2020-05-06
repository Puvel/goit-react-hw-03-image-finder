import React from 'react';
import PropTypes from 'prop-types';
import style from './searchBar.module.css';

const Searchbar = ({ query, handleChange, handleSubmit }) => (
  <header className={style.Searchbar}>
    <form className={style.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={style.SearchFormButton}>
        <span className={style.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        className={style.SearchFormInput}
        type="text"
        autoComplete="off"
        value={query}
        // eslint-disable-next-line jsx-a11y/no-autofocus
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
export default Searchbar;
