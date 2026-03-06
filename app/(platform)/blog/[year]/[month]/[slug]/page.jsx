async function getSlug(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) throw new Error("Post not found");

  return res.json();
}

export default async function Blogpost({ params }) {
  const { year, month, slug } = await params;

  // const post = await getSlug(params.slug);
  const post = await getSlug(slug);

  return (
    <div>
      <p>Year: {year}</p>
      <p>Month: {month}</p>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}