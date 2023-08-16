async function getPosts() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await res.json();
  return response;
}

export default async function Page() {
  const results = await getPosts();
  return (
    <div className="customPage">
      <h2>Blog Posts</h2>
      {results &&
        results.map((index: { id: string; title: string }) => {
          return <li key={`blog-page-${index.id}`}>{index.title}</li>;
        })}
    </div>
  );
}
