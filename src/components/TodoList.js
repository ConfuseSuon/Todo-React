import { ListItem } from "./ListItem";

import "./TodoList.css";

export const TodoList = ({ todos, removeTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => {
        return (
          <ListItem
            text={todo}
            key={index}
            removeTodo={() => {
              removeTodo(index);
            }}
          />
        );
      })}
    </div>
  );
};
