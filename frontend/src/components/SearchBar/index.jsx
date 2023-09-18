/* eslint-disable react/prop-types */

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className=" bg-[#f0f0f0] w-fit mt-10 mb-16 mx-auto p-2 rounded-[5px]">
    <form onSubmit={formSubmit} className="flex items-center">
      <input
        type="text"
        placeholder="Procure pela Categoria"
        value={value}
        onChange={handleSearchKey}
        className=" bg-[#f0f0f0] border-[none] outline-none"
      />
      {value && (
        <span onClick={clearSearch} className="cursor-pointer pr-2">
          X
        </span>
      )}
      <button className="btn  mt-0 px-4 py-[0.3rem] rounded-[5px] border-[none] outline-none">
        Ir!
      </button>
    </form>
  </div>
);

export default SearchBar;
