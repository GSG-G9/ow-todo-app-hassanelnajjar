export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  const paths = data.map((item) => ({ params: { id: item.id.toString() } }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await res.json();
  return { props: { data } };
};

const Details = ({ data }) => <h1>{data.title}</h1>;
export default Details;
