// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { deleteTodo } from '../../src/database/queries';

const getTodosRoute = async (req, res) => {
  const {
    query: { id },
  } = req;
  const { rows: todos } = await deleteTodo(id);
  res.status(200).json({ todos });
};

export default getTodosRoute;
