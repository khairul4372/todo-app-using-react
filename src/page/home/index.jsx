import React, { useEffect, useState } from "react";
import "./styles.css";
import TodoList from "../../components/todoList";
import Form from "../../components/form";

export default function Home() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [todoEditableItem, setTodoEditableItem] = useState(null);
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  const filterItem = {
    all: "all",
    isComplete: true,
  };
  const [todoFilter, setTodoFilter] = useState(filterItem.all);

  const fetchTodo = () => {
    fetch("http://localhost:3000/todoapp/")
      .then((res) => res.json())
      .then((data) => setTodoList(data));
  };
  useEffect(() => {
    fetchTodo();
  }, []);

  const handleClear = () => {
    //setTodoTitle("");
    console.log("clear");
  };

  /*  if (filterItem.isComplete) {
    setFilteredTodoList(todoList.filter((item) => item.isComplete === true));
  } else if (!filterItem.isComplete) {
    setFilteredTodoList(todoList.filter((item) => item.isComplete == false));
  } else {
    setFilteredTodoList(todoList);
  } */

  return (
    <div className="container">
      <Form
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        todoEditableItem={todoEditableItem}
        setTodoEditableItem={setTodoEditableItem}
        setEditMode={setEditMode}
        editMode={editMode}
        fetchTodo={fetchTodo}
      />
      <TodoList
        todoList={todoList}
        fetchTodo={fetchTodo}
        setTodoTitle={setTodoTitle}
        setTodoEditableItem={setTodoEditableItem}
        setEditMode={setEditMode}
      />
    </div>
  );
}
