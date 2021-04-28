// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { deleteTodos, getActiveTodos } from '../../src/database/queries';

export default async (req, res) => {
  await deleteTodos();
  const { rows: todos } = await getActiveTodos();
  res.status(200).json({ todos });
};
