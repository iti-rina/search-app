import { USER_LIST } from "./data";
import { List } from "./List";

export const App = () => {
  return (
    <div>
      <List users={USER_LIST} />
    </div>
  );
}

