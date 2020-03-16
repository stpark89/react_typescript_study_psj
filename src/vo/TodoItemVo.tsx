export interface ITodoItemVo {
  id: number;
  text: string | undefined;
  done: boolean | undefined;
}

export default class TodoItemVo implements ITodoItemVo {
  public id: number = 0;
  public text: string | undefined;
  public done: boolean | undefined;
}

export const create = ({ id, text, done }: TodoItemVo) => {
  const next = new TodoItemVo();
  next.id = id;
  next.text = text;
  next.done = done;
  return next;
};
