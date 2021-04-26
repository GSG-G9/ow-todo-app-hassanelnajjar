import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import style from '../styles/Home.module.css';

import { Provider, useTodos } from '../components/Provider';

import { TodosList } from '../components/TodosList';

const darkImageBackground = '/assets/images/bg-desktop-dark.jpg';
const lightImageBackground = '/assets/images/bg-desktop-light.jpg';

const Home = () => {
  const [lightMode, setLightMode] = useState(true);
  return (
    <Provider>
      <Head>
        <title>Todo App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
              alt="background image"
              layout="fill"
            />
          </div>
        </div>
        <div className={style.todoContainer}>
          <header className={style.header}>
            <h1 className={style.title}>Todo</h1>
            <button
              type="button"
              onClick={() => setLightMode((light) => !light)}
            >
              Light/Dark
            </button>
          </header>
          <div>
            <input type="text" />
          </div>
          <TodosList />
        </div>
      </div>
    </Provider>
  );
};
export default Home;
