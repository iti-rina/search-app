export const Button = ({ text, onClick }) => {
  console.log("button rerender");

  return <button onClick={onClick}>{text}</button>;
};