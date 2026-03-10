import React from 'react';
import Link from 'next/link';

export default async function page() {
   const course = await fetch("https://dummyjson.com/products");
   const coursepost = await course.json();
  return (
    <div>
      {
        coursepost.result.map(cor=>(
          <Link key={cor.title} href={`/courses/${cor.courses.title}`}>
           <h3>{cor.category}</h3>
           <h4>{cor.tags}</h4>
           <p>{cor.description}</p>
          </Link>
        )

        )
      }
    </div>
  )
}
