import React from "react";

function Todo({ text, setTodos, todos, todo }) {
  const deleteHandler = () => {
    const updatedTodoList = todos.filter((element) => element.id !== todo.id);

    setTodos(updatedTodoList);
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }

        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className={`fas ${todo.completed ? "fa-undo-alt" : "fa-check"}`}></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
