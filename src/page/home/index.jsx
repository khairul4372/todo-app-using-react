import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GiNotebook } from "react-icons/gi";
import { GrCheckbox } from "react-icons/gr";
import { FiEdit, FiCheckSquare } from "react-icons/fi";
import "./styles.css";

export default function Home() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [todoEditableItem, setTodoEditableItem] = useState(null);

  const handleTodo = (event) => {
    setTodoTitle(event.target.value);
    console.log(event.target.value);
  };
  console.log("global" + todoTitle);
  const addTodo = (event) => {
    event.preventDefault();
    const todo = {
      id: Date.now(),
      title: todoTitle,
      isComplete: false,
    };
    setTodoList([todo, ...todoList]);
    setTodoTitle("");
  };

  const deleteHandler = (id) => {
    const filterdItem = todoList.filter((todo) => todo.id != id);
    setTodoList(filterdItem);
  };

  const editHandler = (id) => {
    const filteredTodo = todoList.find((item) => {
      if (item.id === id) {
        return item;
      }
    });
    setEditMode(true);
    setTodoEditableItem(filteredTodo);
    setTodoTitle(filteredTodo.title);
  };

  const updateHandler = (event) => {
    console.log("update");

    event.preventDefault();

    const filteredTodo = todoList.map((item) => {
      if (item.id === todoEditableItem.id) {
        item.title = todoTitle;
      }
      return item;
    });
    setTodoList(filteredTodo);
    setEditMode(false);
    setTodoTitle("");
    setTodoEditableItem(null);
  };

  const completeHandler = (id) => {
    /* const filteredTodo = todoList.map((item) => {
      if (item.id === id) {
        console.log((document.getElementById(id).fontStyle = "italic"));
      }
      return item;
    });
    setTodoList(filteredTodo); */
  };

  return (
    <div className="container">
      <h2>Todo Input</h2>
      <form action="">
        <GiNotebook className="note" />
        <input
          type="text"
          name="todoTitle"
          placeholder="Enter your task"
          value={todoTitle}
          onChange={(event) => handleTodo(event)}
        />
        <button
          onClick={
            editMode
              ? (event) => updateHandler(event)
              : (event) => addTodo(event)
          }
        >
          {editMode ? "Update Task" : "Add New Task"}
        </button>
      </form>
      <div className="todoItemContainer">
        <h2>Todo List</h2>
        {todoList.map((todo) => {
          return (
            <div key={Math.random()} className="todoItem">
              <span id={todo.id}>{todo.title}</span>
              <div>
                <p className="complete" onClick={() => {}}>
                  <GrCheckbox />
                </p>
                <p className="edit" onClick={() => editHandler(todo.id)}>
                  <FiEdit />
                </p>
                <p
                  className="delete"
                  onClick={() => {
                    deleteHandler(todo.id);
                  }}
                >
                  <RiDeleteBin6Line />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
