/* eslint-disable jsx-a11y/label-has-associated-control */
import { bool, number, shape, string } from 'prop-types';
import style from '../../styles/TodoItem.module.css';
import { CheckBox } from '../CheckBox';

const TodoItem = ({ todo: { content, checked, id } }) => (
  <li className={style.todoItem}>
    <CheckBox id={id} checked={checked} />
    <p
      className={`${style.todoContent} ${
        checked ? style.todoContentCheck : ''
      }`}
    >
      {content}
    </p>
  </li>
);

TodoItem.propTypes = {
  todo: shape({
    content: string.isRequired,
    id: number.isRequired,
    checked: bool.isRequired,
  }).isRequired,
};

export { TodoItem };
