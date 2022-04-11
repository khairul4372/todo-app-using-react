import React from "react";
import { GiNotebook } from "react-icons/gi";
import TodoItem from "../todoItem";

export default function TodoList(props) {
  const {
    todoTitle,
    todoList,
    editMode,
    handleTodo,
    addTodo,
    deleteHandler,
    editHandler,
    updateHandler,
    cancelHandler,
    clearHandler,
  } = props;
  return (
    <div className="container">
      <h2>Todo Input</h2>
      <form action="">
        <div className="input-container">
          <GiNotebook className="note" />
          <input
            id="input"
            type="text"
            name="todoTitle"
            placeholder="Enter your task"
            value={todoTitle}
            onChange={(event) => handleTodo(event)}
          />
        </div>
        <button
          onClick={
            editMode
              ? (event) => updateHandler(event)
              : (event) => addTodo(event)
          }
        >
          {editMode ? "Update Task" : "Add New Task"}
        </button>

        {editMode && (
          <div className="cancelClearContainer">
            <button className="cancel" onClick={cancelHandler}>
              Cancel
            </button>
            {/* <button className="clear" onClick={clearHandler}>
              Clear
            </button> */}
          </div>
        )}
      </form>
      <div className="todoItemContainer">
        <h2>Todo List</h2>
        {todoList.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              editHandler={editHandler}
              deleteHandler={deleteHandler}
            />
          );
        })}
      </div>
    </div>
  );
}
