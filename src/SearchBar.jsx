export const SearchBar = ({ query, onChange }) => {
  return (
    <form className="grow ml-3 h-9">
      <label htmlFor="searchBar" className="hidden">Search:</label>
      <input 
        id="searchBar"
        placeholder="Search..."
        value={query}
        onChange={onChange}
        className="border border-grey w-full h-full rounded-md pl-3 placeholder-grey"
      />
    </form>
  );
};