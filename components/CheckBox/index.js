import { bool, number } from 'prop-types';
import { useTodos } from '../Provider';
import style from '../../styles/CheckBox.module.css';
import { checkTodo, checkAllTodos } from '../../services';

const CheckBox = ({ id, checked, checkAll }) => {
  const [, dispatch] = useTodos();
  const handleCheck = (todoId) => async () => {
    const checkRequest = checkAll ? checkAllTodos() : checkTodo(todoId);
    const todoList = await checkRequest;
    dispatch({
      type: 'check-todo',
      payload: { list: todoList },
    });
  };
  return (
    <label className={style.container}>
      <input type="checkbox" onChange={handleCheck(id)} checked={checked} />{' '}
      <span className={style.checkmark} />
    </label>
  );
};

CheckBox.defaultProps = {
  id: 0,
  checked: undefined,
  checkAll: false,
};

CheckBox.propTypes = {
  id: number,
  checkAll: bool,
  checked: bool,
};

export { CheckBox };
