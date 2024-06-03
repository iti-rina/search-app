import { USER_LIST } from "./data";
import { List } from "./List";
import { SearchBar } from "./SearchBar";
import { useState } from "react";
import { findAllOccurrences } from "./utils";

export const App = () => {
  let [query, setQuery] = useState('');
  function handleChangeQuery(e) {
    setQuery(e.target.value);
  }

  let filteredUsers = USER_LIST;
  if (query) {
    filteredUsers = findAllOccurrences(USER_LIST, query);
  }

  return (
    <div>
      <SearchBar query={query} onChange={handleChangeQuery}/>
      {filteredUsers.length >= 1 ? <List users={filteredUsers} /> : <></>}
    </div>
  );
}

