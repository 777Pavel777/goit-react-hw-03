import css from './SearchBox.module.css';

export default function SearchBox({ value, onSearch }) {
  return (
    <>
      <div className={css.searchContainer}>
        <p className={css.titleSearch}>Find contacts by name</p>
        <input
          className={css.searchBox}
          type="text"
          value={value}
          onChange={onSearch}
        />
      </div>
    </>
  );
}
