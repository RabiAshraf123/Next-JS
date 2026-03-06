import React from 'react';
import Link from 'next/link';
import styles from "./board.module.css"
export default function Platform() {
  return (
    <div className={styles.box}>
      <aside>
      <nav className={styles.navbar}>
      <Link href='/blog' className={styles.link}>Blogs</Link>
      <Link href='/categories'className={styles.link}>Categories</Link>
      <Link href='/courses'className={styles.link}>Course</Link>
      <Link href='/mentors'className={styles.link}>Mentors</Link>
      <Link href='/paths'className={styles.link}>Paths</Link>
      </nav>
    </aside>
    <img className={styles.img1}src="/welcome.png"></img>
    </div>
  )
}
