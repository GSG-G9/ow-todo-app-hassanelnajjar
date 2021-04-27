import axios from 'axios';

export const getTodos = async () => {
  const {
    data: { todos },
  } = await axios.get('/api/getTodos');
  return todos;
};

export const deleteTodo = async (todoId) => {
  const {
    data: { todos },
  } = await axios.delete('/api/deleteTodo', {
    data: { id: todoId },
  });

  return todos;
};

export const addTodo = async (content) => {
  const {
    data: { todos },
  } = await axios.post('/api/addTodo', {
    content,
  });
  return todos;
};

export const deleteTodos = async () => {
  const {
    data: { todos },
  } = await axios.delete('/api/deleteTodos');
  return todos;
};

export const checkTodo = async (todoId) => {
  const {
    data: { todos },
  } = await axios.patch('/api/checkTodoAsCompleted', { id: todoId });

  return todos;
};

export const checkAllTodos = async () => {
  const {
    data: { todos },
  } = await axios.post('/api/checkAllTodos');

  return todos;
};
