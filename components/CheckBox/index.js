import { bool, number } from 'prop-types';
import { useTodos } from '../Provider';
import style from '../../styles/CheckBox.module.css';

const CheckBox = ({ id, checked }) => {
  const [, dispatch] = useTodos();
  const handleCheck = (todoId) => () => {
    dispatch({
      type: 'check-todo',
      payload: { id: todoId },
    });
  };
  return (
    <label className={style.container}>
      <input type="checkbox" onChange={handleCheck(id)} checked={checked} />{' '}
      <span className={style.checkmark} />
    </label>
  );
};

CheckBox.propTypes = {
  id: number.isRequired,
  checked: bool.isRequired,
};

export { CheckBox };
