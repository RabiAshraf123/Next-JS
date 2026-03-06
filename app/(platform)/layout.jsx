import styles from "../(marketing)/layout.module.css"
export default function platform({children}) {
  return (
     <div>
          <header className={styles.header}>
            <h2 className={styles.head}>SkillForge</h2>
            <nav className={styles.navbar}>
               <a href='/home'>Home</a>
               <a href='/about'>About</a>
               <a href='/pricing'>Pricing</a>
               <a href='/dashboard'>Dashboard</a>
            </nav>
        </header>
    
        {children}
        <footer className={styles.footer}>
          <h3>contact us: skillforge@gmail.com</h3>
        </footer>
    
        </div>
      )
    }
        
    
    

