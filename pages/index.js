import React, { useState } from 'react';
import style from '../styles/Home.module.css';
import Image from 'next/image';

import { Provider, useTodos } from '../components/Provider';

const darkImageBackground = '/assets/images/bg-desktop-dark.jpg';
const lightImageBackground = '/assets/images/bg-desktop-light.jpg';

const Todo = ({ content, addTodo }) => {
	const [value, setValue] = useState('');
	return (
		<form className={style.todoItem} onSubmit={addTodo}>
			<input type='checkbox' />
			<input
				type='text'
				value={value || content}
				onChange={(e) => setValue(e.target.value)}
			/>
		</form>
	);
};
const TodoList = () => {
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

const Home = () => {
	const [lightMode, setLightMode] = useState(true);
	return (
		<Provider>
			<div
				className={`${
					lightMode
						? style.containerBackgroundLight
						: style.containerBackgroundDark
				} ${style.container} `}
			>
				<div className={style.imageContainerDiv}>
					<div className={style.imageContainer}>
						<Image
							src={lightMode ? lightImageBackground : darkImageBackground}
							alt='background image'
							layout='fill'
						/>
					</div>
				</div>
				<div className={style.todoContainer}>
					<header className={style.header}>
						<h1 className={style.title}>Todo</h1>
						<button
							type='button'
							onClick={() => setLightMode((light) => !light)}
						>
							Light/Dark
						</button>
					</header>
					<div>
						<input type='text' />
					</div>
					<TodoList />
				</div>
			</div>
		</Provider>
	);
};
export default Home;
