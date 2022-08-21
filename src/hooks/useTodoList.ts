import { useCallback, useState } from 'react';

export const useTodoList = () => {
  // メモ一覧のstate
  const [todos, setTodos] = useState<string[]>([]);

  // タスク追加
  const addTodo = useCallback(
    (todo: string) => {
      const newMemos = [...todos];
      newMemos.push(todo);
      setTodos(newMemos);
    },
    [todos]
  );

  // タスク削除
  const deleteTodo = useCallback(
    (index: number) => {
      const newMemos = [...todos];
      newMemos.splice(index, 1);
      setTodos(newMemos);
    },
    [todos]
  );

  return { todos, addTodo, deleteTodo };
};
