// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { checkTodo, getTodos } from '../../src/database/queries';

export default async (req, res) => {
  const {
    body: { id },
  } = req;
  await checkTodo(id);
  const { rows: todos } = await getTodos();
  res.status(200).json({ todos });
};
