import { useState } from 'react';
import { useTodos } from '../Provider';
import { TodoItem } from '../TodoItem';
import { TodoButtons } from '../TodoButtons';
import style from '../../styles/TodosList.module.css';

export const TodosList = () => {
  const [todos] = useTodos();
  const [displayedTodos, setDisplayedTodos] = useState('all');
  return (
    <ul className={style.todosList}>
      {todos
        .filter((todo) => {
          if (displayedTodos === 'active') return todo.checked === false;
          if (displayedTodos === 'completed') return todo.checked === true;
          return todo;
        })
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      <TodoButtons setDisplayedTodos={setDisplayedTodos} />
    </ul>
  );
};
