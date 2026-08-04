import type { Project } from '../../data/profile'
import './ProjectCard.css'

type ProjectCardProps = {
  project: Project
  index?: number
}

function projectImageSrc(path: string) {
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const normalized = path.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${normalized}`
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <article
      className="project-card card glass glass--pink"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="project-card__image">
        {project.image ? (
          <img
            src={projectImageSrc(project.image)}
            alt={`Preview do projeto ${project.title}`}
            className="project-card__photo"
            loading="lazy"
          />
        ) : (
          <span className="project-card__placeholder">{project.title.charAt(0)}</span>
        )}
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
        <div className="project-card__actions">
          {project.viewUrl ? (
            <a
              href={project.viewUrl}
              target="_blank"
              rel="noreferrer"
              className="project-card__btn"
            >
              View
            </a>
          ) : (
            <span className="project-card__btn project-card__btn--disabled">View</span>
          )}
          {project.codeUrl ? (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="project-card__btn project-card__btn--outline"
            >
              Code
            </a>
          ) : (
            <span className="project-card__btn project-card__btn--outline project-card__btn--disabled">
              Code
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
