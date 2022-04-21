import React from "react";
import TodoItem from "../todoItem";

export default function TodoList(props) {
  const {
    todoList,
    fetchTodo,
    setEditMode,
    setTodoTitle,
    setTodoEditableItem,
  } = props;
  return (
    <div className="todoItemContainer">
      <h2>Todo List</h2>
      {todoList.map((todo) => {
        return (
          <TodoItem
            todoList={todoList}
            key={todo.id}
            todo={todo}
            setTodoTitle={setTodoTitle}
            setTodoEditableItem={setTodoEditableItem}
            setEditMode={setEditMode}
            fetchTodo={fetchTodo}
          />
        );
      })}
    </div>
  );
}
