import { func } from 'prop-types';
import { useTodos } from '../Provider';
import style from '../../styles/TodoButtons.module.css';
import { deleteTodos } from '../../services';

const TodoButtons = ({ setDisplayedTodos }) => {
  const [todos, dispatch] = useTodos();
  const unCheckedTodos = todos.filter((todo) => todo.checked === false).length;

  const handleAllTodos = () => setDisplayedTodos('all');
  const handleActiveTodos = () => setDisplayedTodos('active');
  const handleCompletedTodos = () => setDisplayedTodos('completed');
  const handleClearCompleted = async () => {
    const todosList = await deleteTodos();
    dispatch({ type: 'delete-completed', payload: { list: todosList } });
  };
  return (
    <li className={style.todoButtonFooter}>
      <span className={style.todoButtonTotalItems}>
        {unCheckedTodos} items left
      </span>
      <div className={style.todoButtonDiv}>
        <button
          className={style.todoButton}
          type="button"
          onClick={handleAllTodos}
        >
          All
        </button>
        <button
          className={style.todoButton}
          type="button"
          onClick={handleActiveTodos}
        >
          Active
        </button>
        <button
          className={style.todoButton}
          type="button"
          onClick={handleCompletedTodos}
        >
          Completed
        </button>
      </div>
      <button
        className={style.todoButton}
        type="button"
        onClick={handleClearCompleted}
      >
        Clear Completed
      </button>
    </li>
  );
};

TodoButtons.propTypes = {
  setDisplayedTodos: func.isRequired,
};
export { TodoButtons };
