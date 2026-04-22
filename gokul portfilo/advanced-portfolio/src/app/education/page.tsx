export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      school: 'Sri Venkateshwara College of Engineering, Bengaluru',
      years: '2022 – 2026'
    },
    {
      degree: 'Pre-University Course (PCMB)',
      school: '1st PUC – Narayana PU College, 2nd PUC – Rock Valley PU College, Bengaluru',
    }
  ]

  const certifications = [
    'Learning Python – LinkedIn Learning (2026)',
    'Machine Learning with Python – freeCodeCamp',
    'Python Bootcamp – Udemy',
    'Emotional Intelligence and Communication Skills – Udemy'
  ]

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">Education &amp; Certifications</h1>
      <div className="max-w-4xl mx-auto space-y-12">
        <div>
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-8 p-6 border border-border rounded-xl">
              <h3 className="text-2xl font-bold">{edu.degree}</h3>
              <p className="text-lg text-muted-foreground">{edu.school}</p>
              {edu.years && <p className="font-semibold mt-1">{edu.years}</p>}
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="p-6 border border-border rounded-xl hover:shadow-md transition-all">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

