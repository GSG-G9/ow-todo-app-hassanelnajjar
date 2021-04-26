import { useState } from 'react';
import { string } from 'prop-types';
import style from '../../styles/Todo.module.css';

const Todo = ({ content }) => {
  const [value, setValue] = useState('');
  return (
    <form className={style.todoItem}>
      <input type="checkbox" />
      <input
        type="text"
        value={value || content}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

Todo.propTypes = {
  content: string.isRequired,
};

export { Todo };
