// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { checkAllTodos, getTodos } from '../../src/database/queries';

export default async (req, res) => {
  await checkAllTodos();
  const { rows: todos } = await getTodos();
  res.status(200).json({ todos });
};
