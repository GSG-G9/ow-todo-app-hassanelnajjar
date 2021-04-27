import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { arrayOf, element } from 'prop-types';
import { deleteTodo, getTodos } from '../../services';

const context = createContext();

const todoReducer = (todos, action) => {
  const {
    type,
    payload: { list },
  } = action;

  switch (type) {
    case 'set-todos': {
      return list;
    }
    case 'get-todo':
      return list;
    case 'get-active-todos':
      return todos.filter((todo) => todo.checked === false);
    case 'add-todo':
      return list;
    case 'delete-todo': {
      // const todosList = await deleteTodo(id);
      return list;
    }
    case 'delete-completed':
      return list;
    case 'check-todo':
      return list;
    case 'check-all-todo':
      return list;
    case 'clear-completed-todos':
      return list;
    default:
      throw new Error();
  }
};

export const Provider = ({ children }) => {
  const todosState = useReducer(todoReducer, []);

  useEffect(() => {
    (async () => {
      const data = await fetch('/api/getTodos');
      const { todos } = await data.json();
      await todosState[1]({ type: 'set-todos', payload: { list: todos } });
    })();
  }, []);

  return <context.Provider value={todosState}>{children}</context.Provider>;
};

Provider.propTypes = {
  children: arrayOf(element).isRequired,
};

export const useTodos = () => useContext(context);
