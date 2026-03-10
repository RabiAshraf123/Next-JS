import Link from 'next/link';
import React from 'react';

export default async function page() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts?limit=5");
  const blogPost  = await data.json();
  return (
    <div>
    {
      blogPost.map(post => (
        <Link key={post.id} href={`/blog/2025/12/${post.id}`}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </Link>
      ))
    }
    </div>
  )
}
