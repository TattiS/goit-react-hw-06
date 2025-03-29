import css from "./SearchBox.module.css";

function SearchBox({ inputValue, setInputValue }) {
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className={css.searchBoxContainer}>
      <label className={css.searchBoxLabel} htmlFor="searchBoxInput">
        Find contacts by name:
      </label>
      <input
        id="searchBoxInput"
        className={css.searchBoxInput}
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
