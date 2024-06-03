import { Button } from "./Button";

export const ListItem = ({ user, isActive, handleActivate }) => {
  let name = user.name;

  return (
    <li>
      <span>{name}</span>
      {!isActive ? <Button text="set active" onClick={handleActivate} /> : <></>}
    </li>
  );
};