import { ChangeEvent, FC, memo, useCallback, useState } from 'react';

import './App.css';
import { Button } from './components/Button';
import { TodoList } from './components/TodoList';
import { useTodoList } from './hooks/useTodoList';

const App: FC = memo(() => {
  const { todos, addTodo, deleteTodo } = useTodoList();
  const [todo, setTodo] = useState<string>('');

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setTodo(e.target.value);

  const onClickAdd = () => {
    addTodo(todo);
    setTodo('');
  };

  const onClickDelete = useCallback(
    (index: number) => deleteTodo(index),
    [deleteTodo]
  );

  return (
    <>
      <div className='App'>
        <header className='App-header'>TODO App</header>
        <TodoList todos={todos} onClickDelete={onClickDelete} />
        <input
          id='todo-input'
          placeholder='タスクを入力...'
          type='text'
          value={todo}
          onChange={onChangeText}
        ></input>
        <Button id='add-button' onClick={onClickAdd} disabled={!todo}>
          追加
        </Button>
      </div>
    </>
  );
});

export default App;
