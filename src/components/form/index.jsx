import React from "react";
import { GiNotebook } from "react-icons/gi";

export default function Form(props) {
  const {
    todoTitle,
    editMode,
    setEditMode,
    setTodoTitle,
    todoEditableItem,
    setTodoEditableItem,
    fetchTodo,
  } = props;

  const handleTodo = (event) => {
    setTodoTitle(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    if (todoTitle.length > 0) {
      const todo = {
        id: Date.now(),
        title: todoTitle,
        isComplete: false,
      };
      //setTodoList([...todoList, todo]);
      fetch("http://localhost:3000/todoapp/", {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          fetchTodo();
          setTodoTitle("");
        });
    } else {
      alert("Enter a valid todo title");
    }
  };

  const updateHandler = (event) => {
    event.preventDefault();

    /* const filteredTodo = todoList.map((item) => {
      if (item.id === todoEditableItem.id) {
        item.title = todoTitle;
      }
      return item;
    });
    setTodoList(filteredTodo); */
    fetch(`http://localhost:3000/todoapp/${todoEditableItem.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: todoTitle,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => {
        fetchTodo();
        setEditMode(false);
        setTodoTitle("");
        setTodoEditableItem(null);
      });
  };

  const cancelHandler = () => {
    setEditMode(false);
    setTodoTitle("");
    setTodoEditableItem(null);
  };

  return (
    <>
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
    </>
  );
}
