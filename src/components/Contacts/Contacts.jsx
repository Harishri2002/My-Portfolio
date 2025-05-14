import styles from "./Contacts.module.css"
export const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <h1>Contact Me</h1>
        <p>Feel Free to Reach Out!</p>
      </div>
      <div className={styles.links}>
        <ul>
          <li className={styles.link}>
            <img src="/contact/emailIcon.png" alt="Email Icon" className={styles.mail} />
            <a href="harishribr4@gmail.com">harishribr4@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img src="/contact/githubIcon.png" alt="Github Icon" />
            <a href="https://github.com/Harishri2002">Harishri B R</a>
          </li>
          <li className={styles.link}>
            <img src="/contact/linkedinIcon.png" alt="Linked Icon" />
            <a href="www.linkedin.com/in/harishri-b-r">Harishri</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
