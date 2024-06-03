import { ListItem } from "./ListItem";

export const App = () => {
  const [activeElement, setActiveElement] = useState(0);

  return (
    <div>
      <ul>
        {(usersList || [{}]).map((user, index) => (
          <ListItem
            key={index}
            user={{ ...user, active: activeElement === index }}
            onSetActiveClick={() => {
              setActiveElement(index);
            }}
          />
        ))}
      </ul>
    </div>
  );
}

