import { useState } from "react";
import ReactDOM from "react-dom/client";

const usersList = [
  { name: "Julie Crawford" },
  { name: "Billy Williams" },
  { name: "Melvin Smith" },
  { name: "AdolElaine Myersf" },
  { name: "Dennis Lynch" },
  { name: "Grace Walker" },
  { name: "Catherine Martinez" },
];

function App() {
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

const ListItem = ({ user, onSetActiveClick }) => {
  return (
    <li>
      {user.name} {user.active && "(active)"}
      <Button text="set active" onClick={onSetActiveClick} />
    </li>
  );
};

const Button = ({ text, onClick }) => {
  console.log("button rerender");

  return <button onClick={onClick}>{text}</button>;
};

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);