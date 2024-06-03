import { USER_LIST } from "./data";
import { List } from "./List";
import { SearchBar } from "./SearchBar";
import { useState } from "react";

export const App = () => {
  let [query, setQuery] = useState('');

  function handleChangeQuery(e) {
    setQuery(e.target.value);
  }
  
  return (
    <div>
      <SearchBar query={query} onChange={handleChangeQuery}/>
      <List users={USER_LIST} />
    </div>
  );
}

