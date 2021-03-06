import { bool, number, shape, string } from 'prop-types';
import { deleteTodo } from '../../services';
import style from '../../styles/TodoItem.module.css';
import { CheckBox } from '../CheckBox';
import { useTodos } from '../Provider';

const TodoItem = ({ todo: { content, checked, id } }) => {
  const [, dispatch] = useTodos();
  const handleDeleteTodoItem = (todoId) => async () => {
    const todoList = await deleteTodo(todoId);
    dispatch({ type: 'delete-todo', payload: { list: todoList } });
  };

  return (
    <li className={style.todoItem}>
      <CheckBox id={id} checked={checked} />
      <p
        className={`${style.todoContent} ${
          checked ? style.todoContentCheck : ''
        }`}
      >
        {content}
      </p>
      <button
        className={style.todoItemDeleteButton}
        onClick={handleDeleteTodoItem(id)}
        type="button"
      >
        X
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: shape({
    content: string.isRequired,
    id: number.isRequired,
    checked: bool.isRequired,
  }).isRequired,
};

export { TodoItem };
