import { Button } from "./Button";

export const ListItem = ({ user, onSetActiveClick }) => {
  return (
    <li>
      {user.name} {user.active && "(active)"}
      <Button text="set active" onClick={onSetActiveClick} />
    </li>
  );
};