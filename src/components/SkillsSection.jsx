import './SkillsSection.css'

const GROUPS = [
  { label: 'Programming Languages', items: ['Java', 'Python', 'JavaScript'] },
  { label: 'Frontend', items: ['HTML', 'CSS', 'React.js', 'Bootstrap', 'Tailwind CSS'] },
  { label: 'Backend', items: ['Spring Boot', 'Node.js'] },
  {
    label: 'Cloud & DevOps',
    items: ['AWS', 'EC2', 'S3', 'Lambda', 'RDS', 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'GitHub', 'GitLab CI/CD'],
  },
  { label: 'API & Data', items: ['RESTful APIs', 'GraphQL', 'SQL', 'SQL Server', 'MySQL', 'MongoDB'] },
  { label: 'Methodologies', items: ['Agile', 'Scrum'] },
]

const PROJECTS = [
  {
    title: 'FinTech Loan & Credit Platform',
    summary: 'Built secure microservices for loan origination, credit approvals, and transaction processing.',
    tech: 'Java, Spring Boot, SQL Server, Kafka, AWS',
    image: 'projects/fintech-loan-credit.svg',
  },
  {
    title: 'FHIR/HL7 Integration Gateway',
    summary: 'Developed APIs and integration flows for claims, scheduling, and patient interoperability.',
    tech: 'Spring Boot, REST APIs, HL7, FHIR, SQL',
    image: 'projects/fhir-hl7-gateway.svg',
  },
  {
    title: 'CI/CD Delivery Blueprint',
    summary: 'Automated build-test-deploy workflow to improve release speed and reliability.',
    tech: 'Jenkins, GitHub, Docker, Kubernetes, AWS',
    image: 'projects/cicd-delivery-blueprint.svg',
  },
]

export default function SkillsSection() {
  const base = import.meta.env.BASE_URL

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <h2 className="skills__title">Technical Skills</h2>
        <div className="skills__grid">
          {GROUPS.map((g) => (
            <div key={g.label} className="skills__group">
              <h3 className="skills__group-label">{g.label}</h3>
              <ul className="skills__tags">
                {g.items.map((item) => (
                  <li key={item} className="skills__tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="skills__projects">
          <h3 className="skills__projects-title">Projects</h3>
          <div className="skills__projects-grid">
            {PROJECTS.map((project) => (
              <article key={project.title} className="skills__project-card">
                <div className="skills__project-media">
                  <img
                    src={`${base}${project.image}`}
                    alt={project.title}
                    className="skills__project-image"
                    onError={(e) => {
                      e.target.src = `${base}projects/placeholder.svg`
                      e.target.alt = 'Project placeholder image'
                    }}
                  />
                </div>
                <div className="skills__project-content">
                  <h4 className="skills__project-title">{project.title}</h4>
                  <p className="skills__project-summary">{project.summary}</p>
                  <p className="skills__project-tech">{project.tech}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
