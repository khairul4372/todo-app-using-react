import React, { useState } from "react";
import "./styles.css";
import TodoList from "../../components/todoList";

export default function Home() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [todoEditableItem, setTodoEditableItem] = useState(null);
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  const filterItem = {
    all: "all",
    isComplete: true,
    isComplete: false,
  };
  const [todoFilter, setTodoFilter] = useState(filterItem.all);

  const handleTodo = (event) => {
    setTodoTitle(event.target.value);
    console.log(event.target.value);
  };

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

  const cancelHandler = () => {
    setEditMode(false);
    setTodoTitle("");
    setTodoEditableItem(null);
  };

  const handleClear = () => {
    //setTodoTitle("");
    console.log("clear");
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
  /*  if (filterItem.isComplete) {
    setFilteredTodoList(todoList.filter((item) => item.isComplete === true));
  } else if (!filterItem.isComplete) {
    setFilteredTodoList(todoList.filter((item) => item.isComplete == false));
  } else {
    setFilteredTodoList(todoList);
  } */

  return (
    <TodoList
      todoTitle={todoTitle}
      todoList={todoList}
      editMode={editMode}
      handleTodo={handleTodo}
      addTodo={addTodo}
      deleteHandler={deleteHandler}
      editHandler={editHandler}
      updateHandler={updateHandler}
      cancelHandler={cancelHandler}
      clearHandler={handleClear}
    />
  );
}
