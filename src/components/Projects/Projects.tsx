import { projects } from '../../data/profile'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import { Reveal } from '../Reveal/Reveal'
import './Projects.css'

export function Projects() {
  return (
    <section id="projetos" className="section projects">
      <Reveal>
        <div className="section__header">
          <h2 className="section__title">Projetos</h2>
        </div>
      </Reveal>

      <div className="projects__grid">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 100} variant="scale">
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
