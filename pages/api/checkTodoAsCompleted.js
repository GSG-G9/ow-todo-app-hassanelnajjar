// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import openDb from '../../src/sqlite';

const checkTodoAsCompleted = async (req, res) => {
  const db = await openDb();
  const todos = await db.all('SELECT * from todos');
  todos.map((todo) => ({ ...todo, checked: !!todo.checked }));
  res.status(200).json({ todos });
};

export default checkTodoAsCompleted;
