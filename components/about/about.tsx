"use client"
import { getImageUrl } from "@/lib/utils"
import styles from "./about.module.css"

export function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png") || "/placeholder.png"} alt="Cursor image" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>I am a Full stack Developer with the experience to build fully functional websites.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png") || "/placeholder.png"} alt="Cursor image" />
            <div className={styles.aboutItemText}>
              <h3>Mobile App Development</h3>
              <p>I create Mobile applications which is powered by react native.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png") || "/placeholder.png"} alt="Cursor image" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX</h3>
              <p>
                I have expertise in UI/UX design, creating intuitive and engaging interfaces, and have also worked on 3D
                modeling projects, applying my skills in both areas separately.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
