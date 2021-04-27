import { useTodos } from '../Provider';

const TodoButtons = ({ setDisplayedTodos }) => {
  const [todos, dispatch] = useTodos();
  const unCheckedTodos = todos.filter((todo) => todo.checked === false).length;

  const handleAllTodos = () => setDisplayedTodos('all');
  const handleActiveTodos = () => setDisplayedTodos('active');
  const handleCompletedTodos = () => setDisplayedTodos('completed');
  const handleClearCompleted = () =>
    dispatch({ type: 'delete-completed', payload: {} });
  return (
    <li>
      <span>{unCheckedTodos} items left</span>
      <div>
        <button type="button" onClick={handleAllTodos}>
          All
        </button>
        <button type="button" onClick={handleActiveTodos}>
          Active
        </button>
        <button type="button" onClick={handleCompletedTodos}>
          Completed
        </button>
      </div>
      <button type="button" onClick={handleClearCompleted}>
        Clear Completed
      </button>
    </li>
  );
};

export { TodoButtons };
