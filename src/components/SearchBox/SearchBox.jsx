import s from "./SearchBox.module.css";

function SearchBox({ search, handleSearch }) {
  return (
    <div>
      <label htmlFor="searchInput" className={s.label}>
        <span>find contacts by name</span>
        <input
          type="text"
          value={search}
          id="searchInput"
          onChange={handleSearch}
        />
      </label>
    </div>
  );
}

export default SearchBox;
