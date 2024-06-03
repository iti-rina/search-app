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
    <div className="my-0 mx-auto w-1/5 mt-14 flex flex-col gap-3">
      <SearchBar query={query} onChange={handleChangeQuery}/>
      {filteredUsers.length >= 1 ? <List users={filteredUsers} /> : <></>}
    </div>
  );
}

