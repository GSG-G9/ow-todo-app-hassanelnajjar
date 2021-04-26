import React, { createContext, useContext, useReducer } from 'react';
const context = createContext();

const initialState = [
	{ content: 'First item', id: 1 },
	{ content: '2 item', id: 2 },
	{ content: '3 item', id: 3 },
	{ content: '4 item', id: 4 },
];
const todoReducer = (state, action) => {
	switch (action.type) {
		case 'get-todo':
			return [...state];
		case 'add-todo':
			return [...state, action.payload];
		case 'delete-todo':
			return [...state];
		case 'check-todo':
			return [...state];
		case 'clear-completed-todos':
			return [...state];
		default:
			throw new Error();
	}
};

export const Provider = ({ children }) => {
	const todosState = useReducer(todoReducer, initialState);
	return <context.Provider value={todosState}>{children}</context.Provider>;
};

export const useTodos = () => useContext(context);
