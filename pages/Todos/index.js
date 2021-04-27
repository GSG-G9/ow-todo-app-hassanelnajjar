import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return { props: { data } };
};

const Todos = ({ data }) => (
  <div>
    {data.map((todo) => (
      <Link key={todo.id} href={`/Todos/${todo.id}`}>
        <a>{todo.id}</a>
      </Link>
    ))}
  </div>
);

export default Todos;
