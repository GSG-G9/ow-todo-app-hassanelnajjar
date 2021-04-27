// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getTodos, addTodo } from '../../src/database/queries';

export default async (req, res) => {
  const {
    body: { content },
  } = req;
  console.log(content);
  await addTodo(content);
  const { rows: todos } = await getTodos();
  res.status(200).json({ todos });
};
