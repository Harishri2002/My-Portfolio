import styles from "./Projects.module.css"

import projects from "../../data/Projects.json"
import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
  return (
    <section className={styles.container} id="project">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />
        })}
      </div>
    </section>
  )
}
