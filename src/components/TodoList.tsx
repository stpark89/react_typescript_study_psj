import React, { FunctionComponent, useState } from "react";
import TodoItem from "./TodoItem";
import TodoItemVo, { create as newTodoItemVo } from "../vo/TodoItemVo";

interface todoListInnerProps {}

const TodoList: FunctionComponent<todoListInnerProps> = (
  props: todoListInnerProps
) => {
  const [todoItemVoList, setTmpTodoList] = useState<TodoItemVo[]>([]);
  const [tmpTodo, setTmpTodo] = useState<string>();
  const [numberId, setNumberId] = useState<number>(0);

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value;
    setTmpTodo(value);
  };

  const addTodo = () => {
    const vo: TodoItemVo = {
      id: numberId,
      text: tmpTodo,
      done: false
    };

    setTmpTodoList([...todoItemVoList, newTodoItemVo(vo)]);

    // Input 초기화
    setTmpTodo("");
    setNumberId(numberId + 1);
  };

  // 완료 버튼 클릭시
  const onComplete = (completeId: number) => {
    const completeIndex = todoItemVoList.findIndex(el => el.id === completeId);
    const tmpTodoItemVoList = [...todoItemVoList];
    tmpTodoItemVoList[completeIndex].done = true;
    setTmpTodoList(tmpTodoItemVoList);
  };

  // 삭제버튼 클릭시
  const onRemove = (removeId: number) => {
    console.log("삭제데스" + removeId);
    setTmpTodoList(todoItemVoList.filter(v => v.id !== removeId));
  };

  const todoItemListView: React.ReactElement[] = todoItemVoList.map(v => (
    <TodoItem
      todoItemVo={v}
      onRemove={() => onRemove(v.id)}
      onComplete={() => onComplete(v.id)}
    />
  ));

  return (
    <div>
      <input type="text" onChange={onChange} value={tmpTodo}></input>
      <button type="button" onClick={addTodo}>
        추가
      </button>
      <hr />
      {todoItemListView}
    </div>
  );
};
export default TodoList;
