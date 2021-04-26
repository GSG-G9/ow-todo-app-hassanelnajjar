import { useState } from 'react';
import style from '../../styles/Todo.module.css';
import { useTodos } from '../Provider';
import { CheckBox } from '../CheckBox';

const Todo = () => {
  const [, dispatch] = useTodos();
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'add-todo',
      payload: { content: value },
    });
    setValue('');
  };

  return (
    <form className={style.addTodoDiv} onSubmit={handleSubmit}>
      <CheckBox />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export { Todo };
