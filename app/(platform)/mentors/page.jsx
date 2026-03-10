import Link from 'next/link';
import React from 'react'

export default async function page() {
  const mentor = await fetch("https://randomuser.me/api/?results=5");
  const mentorpost = await mentor.json();
  return (
    <div>
      {
        mentorpost.results.map(pre=>(
          <Link key={pre.email} href={`/mentors/${pre.mentorId}`}>
          <h2>{pre.name.first} {pre.name.last}  </h2>
          </Link>
        ) 
        )
      }
    </div>
  )
}

  