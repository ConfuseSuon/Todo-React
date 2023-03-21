import "./ListItem.css";

export const ListItem = ({ text, removeTodo }) => {
  return (
    <div className="list-item">
      <p>{text}</p>
      <button className="check-box" onClick={removeTodo}></button>
    </div>
  );
};
