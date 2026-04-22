export default function Experience() {
  const experience = [
    {
      title: 'Software Development Intern',
      company: 'MindMatrix',
      description: 'Assisted in developing backend software components and debugging application issues. Worked with Python and Java to implement application logic and perform testing. Participated in monitoring application performance and identifying system issues. Collaborated with development team members to improve application stability and reliability.'
    }
  ]

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">Experience</h1>
      <div className="max-w-4xl mx-auto space-y-12">
        {experience.map((exp, index) => (
          <div key={index} className="animate-slide-up" style={{animationDelay: `${index * 200}ms`}}>
            <div className="bg-card border rounded-xl p-8 hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold mb-2">{exp.title}</h2>
              <p className="text-primary font-semibold text-xl mb-4">{exp.company}</p>
              <p className="text-lg leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

