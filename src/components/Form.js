import "./Form.css";
import { useState } from "react";
export const Form = ({ addTodo }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="text-field"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input type="submit" value="Add" className="submit-btn" />
    </form>
  );
};
