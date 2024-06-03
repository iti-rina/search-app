export const SearchBar = ({ query, onChange }) => {
  return (
    <form>
      <label for='searchBar'>Search:</label>
      <input 
        id='searchBar'
        placeholder='Search...'
        value={query}
        onChange={onChange}
      />
    </form>
  );
};