import React from "react";

function Form({ inputText, setInputText, todos, setTodos, status, setStatus }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();

    if (inputText.trim()) {
      setTodos([
        ...todos,
        {
          text: inputText,
          id: Math.round(Math.random() * 10000),
          completed: false,
        },
      ]);

      setInputText("");
    }
  };

  const filterChangeHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitTodoHandler}>
        <input
          onChange={inputTextHandler}
          value={inputText}
          type="text"
          className="todo-input"
        />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select
            name="todos"
            className="filter-todo"
            onChange={filterChangeHandler}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
