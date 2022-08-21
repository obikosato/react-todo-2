import { FC, memo } from 'react';
import { Button } from './Button';

type Props = {
  todos: string[];
  onClickDelete: (index: number) => void;
};

const listStyle = {
  margin: '3px',
  display: 'flex',
  alignItems: 'center',
};

export const TodoList: FC<Props> = memo((props: Props) => {
  const { todos, onClickDelete } = props;

  return (
    <>
      <p>タスク一覧</p>
      <ol>
        {todos.map((todo, index) => {
          const todoId = `todo-item-${index + 1}`;
          const completeId = `complete-button-${index + 1}`;
          return (
            <li key={todoId} style={listStyle}>
              <p id={todoId}>{todo}</p>
              <Button id={completeId} onClick={() => onClickDelete(index)}>
                完了
              </Button>
            </li>
          );
        })}
      </ol>
    </>
  );
});
