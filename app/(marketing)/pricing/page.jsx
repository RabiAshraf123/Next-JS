import React from 'react'
import styles from "./pricing.module.css";

export default function page() {
  return (
    <div className={styles.main}>
      <h1>Pricing</h1>
      <div className={styles.price}>
        <h3>Free Plan</h3>
        <h4>Price: $0</h4>
        <li>Access to free courses</li>
        <li>Limited lessons per course</li>
        <li>Community support</li>
      </div>
      <div className={styles.price}>
        <h3>Pro Plan</h3>
        <h4>Price: $9/month</h4>
        <li>All courses unlocked</li>
        <li>Downloadable resources</li>
        <li>Certificates</li>
      </div>
      <div className={styles.price}>
        <h3>Premiun Plan</h3>
        <h4>Price: $19/month</h4>
        <li>Everything in Pro</li>
        <li>Career roadmap</li>
        <li>Early access courses</li>
      </div>
    </div>
  )
}
