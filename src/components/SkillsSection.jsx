import './SkillsSection.css'

const GROUPS = [
  { label: 'Languages', items: ['Core Java', 'JavaScript', 'Python', 'TypeScript', 'SQL', 'C/C++', 'Golang'] },
  {
    label: 'Technologies',
    items: ['React', 'React Native', 'Angular', 'Next.js', 'Node.js', 'Express.js', 'Flask', 'FastAPI', 'HTML', 'CSS', 'Redux', 'Spring Boot', 'Spring Security', 'Spring MVC', 'Hibernate', 'J2EE', 'JDBC', 'GraphQL', 'Jest', 'RESTful API', 'Microservices'],
  },
  { label: 'Databases', items: ['MySQL', 'SQL Server', 'PostgreSQL', 'NoSQL', 'MongoDB', 'Redis'] },
  {
    label: 'Cloud Platforms',
    items: ['AWS (EC2, S3, Lambda, Redshift, RDS)', 'Microsoft Azure', 'GCP'],
  },
  {
    label: 'Machine Learning',
    items: ['Supervised & Unsupervised Learning', 'Deep Learning', 'NLP', 'RAG', 'LLMs', 'Transformer Models', 'Generative AI'],
  },
  {
    label: 'DevOps',
    items: ['CI/CD Pipelines', 'Docker', 'Kubernetes', 'Jenkins', 'Spark', 'Kafka', 'MLOps', 'Git', 'GitHub Actions'],
  },
  {
    label: 'Other Skills',
    items: ['Jira', 'Android', 'NPM', 'UML', 'Maven', 'Gradle', 'JUnit', 'Agile', 'Scrum', 'HIPAA Compliance', 'EHR', 'EMR', 'HL7'],
  },
]

const PROJECTS = [
  {
    title: 'Food Recognition & Nutrition Analysis',
    summary: 'Trained a Deep Learning model with TensorFlow and EfficientNetB0 for food image recognition achieving 87% accuracy, integrated Edamam Food API into a Flutter app for real-time nutritional info.',
    tech: 'TensorFlow, EfficientNetB0, Flutter, Edamam API, Deep Learning',
    image: 'projects/food-recognition.svg',
  },
  {
    title: 'Employee Attrition Prediction',
    summary: 'Built from the ground up with React, Bootstrap, and Tailwind CSS for the frontend. Developed backend RESTful APIs, structured database models using MySQL, and deployed using Docker and AWS EC2.',
    tech: 'React, Bootstrap, Tailwind CSS, MySQL, Docker, AWS EC2',
    image: 'projects/employee-attrition.svg',
  },
  {
    title: 'Payment Transaction Microservices',
    summary: 'Built scalable Java FinTech microservices using Spring Boot for secure, high-volume transaction processing. Containerized with Docker, improving deployment efficiency by 40%.',
    tech: 'Java, Spring Boot, Docker, Microservices, FinTech',
    image: 'projects/payment-microservices.svg',
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
