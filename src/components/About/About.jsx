"use client"
import styles from "./About.module.css"
import { getImageUrl } from "../../utils"
import { Canvass } from "../WorkStation/Canvass"

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="my siting image" /> */}
        <Canvass className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor image" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>I am a Full stack Develeoper with the experoience to build fully functional websites.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Cursor image" />
            <div className={styles.aboutItemText}>
              <h3>Mobile App Develeopment</h3>
              <p>I create Mobile applications which is powered by react native.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Cursor image" />
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
