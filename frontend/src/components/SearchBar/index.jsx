/* eslint-disable react/prop-types */
import "./styles.css";

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className="searchBar-wrap">
    <form onSubmit={formSubmit}>
      <input
        type="text"
        placeholder="Procure pela Categoria"
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button>Ir!</button>
    </form>
  </div>
);

export default SearchBar;
