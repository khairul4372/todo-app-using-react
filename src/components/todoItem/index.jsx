import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrCheckbox } from "react-icons/gr";
import { FiEdit, FiCheckSquare } from "react-icons/fi";

export default function TodoItem(props) {
  const { editHandler, deleteHandler, todo } = props;
  return (
    <div key={Math.random()} className="todoItem">
      <span id={todo.id}>{todo.title}</span>
      <div>
        <p onClick={() => {}}>
          <GrCheckbox className="complete" />
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
