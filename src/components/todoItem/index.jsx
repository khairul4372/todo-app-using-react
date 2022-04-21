import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrCheckbox } from "react-icons/gr";
import { FiEdit, FiCheckSquare } from "react-icons/fi";

export default function TodoItem(props) {
  const {
    fetchTodo,
    todoList,
    todo,
    setEditMode,
    setTodoTitle,
    setTodoEditableItem,
  } = props;

  const deleteHandler = (id) => {
    /* const filterdItem = todoList.filter((todo) => todo.id != id);
    setTodoList(filterdItem); */
    fetch(`http://localhost:3000/todoapp/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => fetchTodo());
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

  const completeHandler = (id) => {
    /* const filteredTodo = todoList.map((item) => {
      if (item.id === id) {
        console.log((document.getElementById(id).fontStyle = "italic"));
      }
      return item;
    });
    setTodoList(filteredTodo); */
    fetch(`http://localhost:3000/todoapp/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        isComplete: true,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => {
        fetchTodo();
      });
  };

  return (
    <div className="todoItem">
      <span
        id={todo.id}
        style={{
          textDecorationLine: todo.isComplete ? "line-through" : null,
        }}
      >
        {todo.title}
      </span>
      <div>
        <p
          onClick={() => {
            completeHandler(todo.id);
          }}
        >
          {todo.isComplete ? (
            <FiCheckSquare className="complete" />
          ) : (
            <GrCheckbox />
          )}
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
          <RiDeleteBin6Line className="deleteIcon">
            <span className="show">delete</span>
          </RiDeleteBin6Line>
        </p>
      </div>
    </div>
  );
}
