export default function Skills() {
  const skills = [
    { name: 'Python', category: 'Languages' },
    { name: 'Java', category: 'Languages' },
    { name: 'C', category: 'Languages' },
    { name: 'REST APIs', category: 'Backend' },
    { name: 'SQL', category: 'Database' },
    { name: 'Git/GitHub', category: 'Tools' },
    { name: 'Data Structures', category: 'Concepts' },
    { name: 'Algorithms', category: 'Concepts' },
  ]

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">Skills &amp; Technologies</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="group p-8 border border-border rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{skill.name}</h3>
            <p className="text-muted-foreground">{skill.category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

