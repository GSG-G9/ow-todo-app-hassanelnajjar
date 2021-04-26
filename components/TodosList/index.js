import { useTodos } from '../Provider';
import { Todo } from '../Todo';

export const TodosList = () => {
  const [todos] = useTodos();
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo content={todo.content} />
        </li>
      ))}
    </ul>
  );
};
