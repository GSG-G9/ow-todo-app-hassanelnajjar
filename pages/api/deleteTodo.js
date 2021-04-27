// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import openDb from '../../src/sqlite';

const deleteTodo = async (req, res) => {
  const { id } = req.query;
  const db = await openDb();
  const todos = await db.exec('Delete * from todos where id');
  todos.map((todo) => ({ ...todo, checked: !!todo.checked }));
  res.status(200).json({ todos });
};

export default deleteTodo;
