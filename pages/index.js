import React, { useState } from 'react';
import Image from 'next/image';
import style from '../styles/Home.module.css';

import { Todo } from '../components/Todo';
import { TodosList } from '../components/TodosList';

const darkImageBackground = '/assets/images/bg-desktop-dark.jpg';
const lightImageBackground = '/assets/images/bg-desktop-light.jpg';

const Home = () => {
  const [lightMode, setLightMode] = useState(true);
  return (
    <>
      <div
        className={`${lightMode ? 'lightMode' : 'darkMode'} ${
          style.container
        } `}
      >
        <div className={style.imageContainerDiv}>
          <div className={style.imageContainer}>
            <Image
              src={lightMode ? lightImageBackground : darkImageBackground}
              alt="background image"
              layout="fill"
              objectFit="cover"
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
              <img
                src={
                  lightMode
                    ? '/assets/images/icon-moon.svg'
                    : '/assets/images/icon-sun.svg'
                }
                alt=""
              />
            </button>
          </header>
          <Todo />
          <TodosList />
        </div>
      </div>
    </>
  );
};
export default Home;
