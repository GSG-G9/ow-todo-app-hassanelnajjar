import React, { createContext, useContext, useReducer } from 'react';
import { element } from 'prop-types';

const context = createContext();

const initialState = [
  { content: 'First item', id: 1, checked: false },
  { content: '2 item', id: 2, checked: false },
  { content: '3 item', id: 3, checked: false },
  { content: '4 item', id: 4, checked: false },
];
const todoReducer = (todos, action) => {
  const {
    type,
    payload: { id, content, checked },
  } = action;
  const todosCount = todos.length;
  const currentTodoItem = todos.find((todo) => todo.id === id);
  const remindingTodos = todos.filter((todo) => todo.id !== id);
  switch (type) {
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
  const todosState = useReducer(todoReducer, initialState);
  return <context.Provider value={todosState}>{children}</context.Provider>;
};

Provider.propTypes = {
  children: element.isRequired,
};

export const useTodos = () => useContext(context);
