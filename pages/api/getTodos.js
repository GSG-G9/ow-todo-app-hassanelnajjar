// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import openDb from '../../src/sqlite';

// const getTodos = async (req, res) => {
//   const db = await openDb();
//   const todos = await db.all('SELECT * from todos');
//   todos.map((todo) => ({ ...todo, checked: !!todo.checked }));
//   res.status(200).json({ todos });
// };

// export default getTodos;

import getTodos from '../../src/database/queries/getTodos';

const getTodosRoute = async (req, res) => {
  const { rows: todos } = await getTodos();
  res.status(200).json({ todos });
};

export default getTodosRoute;
