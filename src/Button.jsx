export const Button = ({ text, onClick }) => {
  console.log("button rerender");

  return <button onClick={onClick} className="inline-block border border-green/75 rounded px-1 uppercase font-semibold text-green-text text-sm">{text}</button>;
};