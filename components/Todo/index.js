import { useState } from 'react';
import style from '../../styles/Todo.module.css';
import { useTodos } from '../Provider';
import { CheckBox } from '../CheckBox';
import { addTodo } from '../../services';

const Todo = () => {
  const [, dispatch] = useTodos();
  const [value, setValue] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const todoList = await addTodo(value);
    dispatch({
      type: 'add-todo',
      payload: { list: todoList },
    });
    setValue('');
  };

  return (
    <form className={style.addTodoDiv} onSubmit={handleSubmit}>
      <CheckBox checkAll />
      <input
        className={style.todoInput}
        placeholder="Create a new todo..."
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export { Todo };
