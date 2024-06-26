import { useState } from "react";
import { ListItem } from "./ListItem";

export const List = ({ users }) => {
  let [activeUser, setActiveUser] = useState(users[0].id);

  return (
    <ul className="flex flex-col gap-2">
      {users.map(user => (
        <ListItem 
          user={user}
          isActive={user.id === activeUser}
          handleActivate={() => setActiveUser(user.id)}
          key={user.id}
        />
      ))}
    </ul>
  );
}