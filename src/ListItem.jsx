import { Button } from "./Button";
import { highlight } from "./utils";

export const ListItem = ({ user, isActive, handleActivate }) => {
  let name = user.name;
  if (user?.highlight) {
    name = highlight(user.name, user.highlight, user.hightlightLen);
  }

  let isActiveClass = isActive ? 'flex items-center space-x-3 before:inline-block before:size-2 before:bg-green before:rounded-full before:mr-1' : 'ml-3 space-x-3';

  return (
    <li className={isActiveClass}>
      <span>{name}</span>
      {!isActive ? <Button text="set active" onClick={handleActivate} /> : <></>}
    </li>
  );
};