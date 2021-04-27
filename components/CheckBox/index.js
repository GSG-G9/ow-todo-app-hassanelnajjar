import { bool, number } from 'prop-types';
import { useTodos } from '../Provider';
import style from '../../styles/CheckBox.module.css';

const CheckBox = ({ id, checked, checkAll }) => {
  const [, dispatch] = useTodos();
  const handleCheck = (todoId) => (e) => {
    dispatch({
      type: checkAll ? 'check-all-todo' : 'check-todo',
      payload: { id: todoId, checked: e.target.checked },
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
