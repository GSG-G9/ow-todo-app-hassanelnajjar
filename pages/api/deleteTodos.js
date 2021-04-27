// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { deleteTodos } from '../../src/database/queries';

export default async (req, res) => {
  await deleteTodos();
  res.status(200).json({ todos: [] });
};
