import type { Project } from '../../data/profile'
import './ProjectCard.css'

type ProjectCardProps = {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <article
      className="project-card card glass glass--pink"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="project-card__image">
        <span className="project-card__emoji anim-float">{project.emoji}</span>
      </div>
      <div className="project-card__body">
        <div className="project-card__top">
          <h3 className="project-card__title">{project.title}</h3>
          {project.isNew && <span className="badge">✨ Novo</span>}
        </div>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
