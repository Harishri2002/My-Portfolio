import styles from "./Experience.module.css"
import skills from "../../data/skills.json"
import { getImageUrl } from "../../utils"
import backend from "../../data/backend.json"
import programming from "../../data/programming.json"
import TechTools from "../../data/TechTools.json"

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {/* //FrontEnd */}
        <div className={styles.phase}>
          <h2 className={styles.subtitle}>FrontEnd()</h2>
          <div className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              )
            })}
          </div>
        </div>
        {/* Backend */}
        <div className={styles.phase}>
          <h2 className={styles.subtitle}>BackEnd()</h2>
          <div className={styles.skills}>
            {backend.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Languages */}
        <div className={styles.phase}>
          <h2 className={styles.subtitle}>Programming()</h2>
          <div className={styles.skills}>
            {programming.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              )
            })}
          </div>
        </div>
        {/* Tech-Tools */}
        <div className={styles.phase}>
          <h2 className={styles.subtitle}>TechTools()</h2>
          <div className={styles.skills}>
            {TechTools.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              )
            })}
          </div>
        </div>
        {/* <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul> */}
      </div>
    </section>
  )
}
