import React from 'react'

import styles from "./about.module.css";
export default function about() {
  return (
    <div className={styles.box}>
      <h2>About SkillForge</h2>
      <p>SkillForge is a micro-learning platform designed to help learners
          gain real-world skills through short, focused lessons.</p>
      <img className={styles.img1}src="/about.png"></img>
    </div>
  )
}
