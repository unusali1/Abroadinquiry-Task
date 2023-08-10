import { useDispatch, useSelector } from "react-redux";
import "./search.css";
import { setSearch } from "../../../redux/features/Country/countrySlice";

const Search = () => {
  const { search } = useSelector((state) => state.country);
  const dispatch = useDispatch();

  const handleInputValueChange = (e) => {
    dispatch(setSearch(e.target.value.toLowerCase()));
  }

  return (
    <section className="search-container">
      <div className="search-icon">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <input
        type="text"
        placeholder="Search for a country"
        className="search-input"
        value={search}
        onChange={handleInputValueChange}
      />
    </section>
  );
};

export default Search;