import React from 'react'
import Link from 'next/link';

export default async function page() {
  const categorie = await fetch("https://dummyjson.com/products/categories");
  const catepost = await categorie.json();
  return (
    <div>
      {
        catepost.map(pro => (
        <Link key={pro.slug} href={`/categories/${pro.slug}`}>
          <h2>{pro.name}</h2>
          <p>{pro.url}</p>
        </Link>
      ))

      }
    </div>
  )
}
