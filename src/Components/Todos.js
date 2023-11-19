import React from "react";
import Todo from "./Todo";

export default function Todos(props) {
  return (
    <div className="container text-start">
      <h2 className="mt-5 text-start">To-dos List</h2>
      {props.todos.length === 0
        ? "No pending work."
        : props.todos.map((todo) => {
            return (
              <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
}
