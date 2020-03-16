import React, { FunctionComponent } from "react";
import TodoItemVo from "../vo/TodoItemVo";

interface itemInnerProps {
  todoItemVo: TodoItemVo;
  onComplete(): void;
  onRemove(): void;
}

const TodoItem: FunctionComponent<itemInnerProps> = (props: itemInnerProps) => {
  return (
    <li>
      <b>
        {props.todoItemVo.id} - {props.todoItemVo.text} -{" "}
        {props.todoItemVo.done === true ? (
          <span>완료</span>
        ) : (
          <span>해야함</span>
        )}
      </b>
      <button
        onClick={props.onComplete}
        style={{ all: "unset", marginLeft: "0.5rem" }}
      >
        {props.todoItemVo.done === false ? (
          <span>[완료하기]</span>
        ) : (
          <span>[완료되었습니다]</span>
        )}
      </button>
      <button
        onClick={props.onRemove}
        style={{ all: "unset", marginLeft: "0.5rem" }}
      >
        [지우기]
      </button>
    </li>
  );
};

export default TodoItem;
