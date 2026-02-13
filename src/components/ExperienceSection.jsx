import './ExperienceSection.css'

const JOBS = [
  {
    company: 'US Anesthesia Partners',
    role: 'Software Engineer',
    period: 'July 2025 – Present',
    tech: 'Java, Spring Boot, RESTful APIs, React.js, AWS, EC2, S3, RDS, Docker, Kubernetes, Jenkins, GitHub, GitLab CI/CD, SQL, Postman, HL7, FHIR',
    bullets: [
      'Architected HIPAA-compliant microservices to support perioperative patient data, billing, and provider workflows, improving clinical data processing efficiency by 30%.',
      'Developed secure RESTful APIs for scheduling, claims integration, and patient-facing platforms using Java and Spring Boot, enhancing system interoperability and data accuracy.',
      'Resolved performance bottlenecks in high-volume patient data pipelines by optimizing database queries and service orchestration, reducing API response times by 35%.',
      'Collaborated with clinicians, product managers, and QA teams across a 10-member Agile team, accelerating feature delivery while maintaining compliance and production stability.',
      'Implemented CI/CD pipelines and containerized deployments using Docker, Kubernetes, Jenkins, and AWS, reducing deployment errors by 40% and improving release reliability.',
    ],
  },
  {
    company: 'M&T Bank',
    role: 'Software Engineer',
    period: 'May 2024 – Aug 2024',
    tech: 'Java, Spring Boot, Microservices, Agile, SDLC, Multithreading, Kafka, JavaScript, React JS, CI/CD, Git, GitHub',
    bullets: [
      'Developed secure Java microservices using Spring Boot, Spring MVC, and REST APIs for loan processing and credit approvals, reducing transaction latency by 35%.',
      'Assisted in requirement analysis, design, development, and testing of Agile/Scrum-based applications across the full Software Development Life Cycle (SDLC).',
      'Improved financial data accuracy and synchronization by 30% by optimizing data integration workflows using Kafka, Spring Batch, MongoDB, and SQL Server.',
      'Managed version control and collaborative development using GIT, GitHub, and GitLab with branching strategies.',
      'Automated CI/CD pipelines using Jenkins to streamline builds, testing, and deployments for Java applications, improving release efficiency and reliability.',
    ],
  },
  {
    company: 'IBM, Inc.',
    role: 'Software Engineer',
    period: 'December 2021 – July 2023',
    tech: 'Java, J2EE, JSP, Spring Boot, Spring MVC, React, Next.js, HTML, CSS, Bootstrap, AWS, Kubernetes, CI/CD, Apache Kafka, Caching, Multithreading, Database Indexing',
    bullets: [
      'Engineered strong Java-based microservices using Spring Boot and J2EE, enhancing system reliability and boosting processing throughput by 30%.',
      'Crafted responsive front-end solutions using React, Next.js, HTML, CSS, and Bootstrap, improving user engagement and portal adoption across banking modules.',
      'Optimized backend performance bottlenecks through caching, multithreading, and database indexing, reducing API response times for critical operations by 25%.',
      'Cooperated with product managers, QA, and cross-functional teams in a 12-member Agile environment, streamlining feature delivery and maintaining application reliability.',
      'Executed containerized applications and automated pipelines with Docker, Kubernetes, Jenkins, and AWS, improving release efficiency by 40%.',
    ],
  },
  {
    company: 'Optum Inc.',
    role: 'Associate Software Engineer',
    period: 'June 2019 – November 2021',
    tech: 'Java, Spring Boot, React JS, HTML5, CSS3, Bootstrap, AWS Lambda, Docker, Kubernetes, RESTful APIs',
    bullets: [
      'Architected scalable Java-based solutions for clinical and administrative healthcare platforms, reducing system deployment time across many facilities by 30%.',
      'Designed containerized Spring Boot microservices for syndicated lending and healthcare applications, improving API throughput.',
      'Implemented full-stack workflows using React JS and Java, integrating front-end and back-end features to boost application usability and operational efficiency.',
      'Collaborated with cross-functional teams including QA, product managers, and developers across 8+ projects, ensuring timely delivery and platform stability.',
      'Automated serverless functions and workflows leveraging AWS Lambda, improving deployment speed and reducing manual intervention by 25%.',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <h2 className="experience__title">Experience</h2>
        <div className="experience__list">
          {JOBS.map((job) => (
            <article key={job.company} className="experience__card">
              <div className="experience__head">
                <div>
                  <h3 className="experience__company">{job.company}</h3>
                  <p className="experience__role">{job.role}</p>
                </div>
                <span className="experience__period">{job.period}</span>
              </div>
              <p className="experience__tech">{job.tech}</p>
              <ul className="experience__bullets">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
