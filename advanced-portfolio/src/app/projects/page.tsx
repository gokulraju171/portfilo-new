export default function Projects() {
  const projects = [
    {
      name: 'FIR History and Case Tracking System',
      description: 'Developed a backend system to manage FIR records and case status tracking. Implemented database structures for storing and retrieving case data. Built application workflows to ensure reliable case updates and monitoring.',
      github: 'https://github.com/gokulraju171',
      tech: ['Python', 'SQL', 'Backend']
    },
    {
      name: 'Student Data Management System',
      description: 'Built a platform to manage student academic records and attendance. Designed database structures for storing student information. Implemented modules for administrative record management.',
      github: 'https://github.com/gokulraju171',
      tech: ['Database', 'Admin Panel']
    },
    {
      name: 'IoT Gas Detection Monitoring System',
      description: 'Developed an IoT-based system for monitoring hazardous gas levels. Integrated sensor monitoring to detect environmental risks. Implemented alert mechanisms to notify users.',
      github: 'https://github.com/gokulraju171',
      tech: ['IoT', 'Sensors', 'Alerts']
    },
    {
      name: 'Biometric Analysis Dashboard',
      description: 'Built a dashboard for analyzing biometric authentication activity. Implemented processing of authentication logs for system monitoring. Designed structured storage for biometric data.',
      github: 'https://github.com/gokulraju171',
      tech: ['Dashboard', 'Logs', 'Monitoring']
    },
    {
      name: 'Python REST API Service',
      description: 'Developed a REST API service using Python to manage application data. Implemented CRUD operations. Designed modular backend architecture.',
      github: 'https://github.com/gokulraju171',
      tech: ['Python', 'REST API', 'CRUD']
    }
  ]

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group border border-border rounded-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
            <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.name}</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 bg-muted text-sm rounded-full">{t}</span>
              ))}
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

