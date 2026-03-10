import Link from 'next/link';
import React from 'react'

export default async function page() {
  const blog = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogpost = await blog.json();
  return (
    <div>
      {
        blogpost.map(blg=>(
          <Link key={blg.id} href={`/paths /$ /{blg.pathsid}`}>
            <h3>{blg.title}</h3>
            <p>{blg.body}</p>
          </Link>

        ))
        
      }
    </div>
  )
}
