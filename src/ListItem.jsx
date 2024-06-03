import { Button } from "./Button";
import { highlight } from "./utils";

export const ListItem = ({ user, isActive, handleActivate }) => {
  let name = user.name;
  if (user?.highlight) {
    name = highlight(user.name, user.highlight, user.hightlightLen);
  }

  return (
    <li>
      <span>{name}</span>
      {!isActive ? <Button text="set active" onClick={handleActivate} /> : <></>}
    </li>
  );
};