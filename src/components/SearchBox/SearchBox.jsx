import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "@reduxjs/toolkit";

function SearchBox() {
  const changeFilterAF = createAction("filters/changeFilter");
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleChange = (event) => {
    dispatch(changeFilterAF(event.target.value));
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
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
