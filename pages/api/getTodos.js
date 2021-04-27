// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getTodos } from '../../src/database/queries';

const getTodosRoute = async (req, res) => {
  const { rows: todos } = await getTodos();
  res.status(200).json({ todos });
};

export default getTodosRoute;
