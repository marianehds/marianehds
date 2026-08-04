import { courses } from '../../data/profile'
import { Reveal } from '../Reveal/Reveal'
import './Courses.css'

export function Courses() {
  return (
    <section id="cursos" className="section courses">
      <Reveal>
        <div className="section__header">
          <h2 className="section__title">Cursos</h2>
          <p className="section__subtitle">Formação contínua e certificações</p>
        </div>
      </Reveal>

      {courses.length === 0 ? (
        <Reveal delay={120}>
          <p className="courses__empty">Em breve — envie seus cursos para listarmos aqui.</p>
        </Reveal>
      ) : (
        <div className="courses__grid">
          {courses.map((course, i) => (
            <Reveal key={course.id} delay={i * 80} variant="scale">
              <article className="courses__card card glass glass--pink">
                <div className="courses__top">
                  <span className="badge badge--outline">{course.platform}</span>
                  {course.year && <span className="courses__year">{course.year}</span>}
                </div>
                {course.url ? (
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noreferrer"
                    className="courses__title courses__title--link"
                  >
                    {course.title}
                  </a>
                ) : (
                  <h3 className="courses__title">{course.title}</h3>
                )}
                {course.tags && course.tags.length > 0 && (
                  <ul className="courses__tags">
                    {course.tags.map((tag) => (
                      <li key={tag} className="courses__tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  )
}
