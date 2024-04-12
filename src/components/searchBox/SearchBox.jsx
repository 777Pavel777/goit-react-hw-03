import css from './SearchBox.module.css';

export default function SearchBox({ value, onSearch }) {
  return (
    <>
      <div className={css.searchContainer}>
        <p>Find contacts by name</p>
        <input type="text" value={value} onChange={onSearch} />
      </div>
    </>
  );
}
