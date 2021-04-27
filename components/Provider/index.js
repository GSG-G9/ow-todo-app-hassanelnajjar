import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { arrayOf, element } from 'prop-types';

const context = createContext();

const todoReducer = (todos, action) => {
  const {
    type,
    payload: { id, content, checked },
  } = action;
  const todosCount = todos.length;
  const currentTodoItem = todos.find((todo) => todo.id === id);
  const remindingTodos = todos.filter((todo) => todo.id !== id);
  switch (type) {
    case 'set-todos':
      return [...action.payload];
    case 'get-todo':
      return [...todos];
    case 'get-active-todos':
      return todos.filter((todo) => todo.checked === false);
    case 'add-todo':
      return [...todos, { id: todosCount + 1, content, checked: false }];
    case 'delete-todo':
      return todos.filter((todo) => todo.id !== id);
    case 'delete-completed':
      return todos.filter((todo) => todo.checked === false);
    case 'check-todo':
      return [
        ...remindingTodos,
        { ...currentTodoItem, checked: !currentTodoItem.checked },
      ].sort((a, b) => a.id - b.id);
    case 'check-all-todo':
      return todos.map((todo) => ({ ...todo, checked }));
    case 'clear-completed-todos':
      return [...todos];
    default:
      throw new Error();
  }
};

export const Provider = ({ children }) => {
  const todosState = useReducer(todoReducer, []);

  useEffect(() => {
    (async () => {
      const data = await fetch('/api/getTodos');
      const res = await data.json();
      todosState[1]({ type: 'set-todos', payload: res.todos });
    })();
  }, []);

  return <context.Provider value={todosState}>{children}</context.Provider>;
};

Provider.propTypes = {
  children: arrayOf(element).isRequired,
};

export const useTodos = () => useContext(context);
