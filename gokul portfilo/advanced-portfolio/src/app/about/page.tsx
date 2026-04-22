export default function About() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h1>
      <div className="max-w-4xl mx-auto animate-slide-up">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto flex items-center justify-center">
              <span className="text-4xl">GR</span>
            </div>
          </div>
          <div className="md:w-2/3 prose prose-lg dark:prose-invert">
            <p>
              Computer Science Engineering student from Bengaluru with strong programming skills in Python, Java, and C. 
              Experienced in backend development, debugging, and building reliable software systems through academic projects and internship.
            </p>
            <h2 className="text-2xl font-bold mt-8">Technical Interests</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Backend Engineering &amp; REST APIs</li>
              <li>Production Operations &amp; Infrastructure Reliability</li>
              <li>System Monitoring &amp; Application Performance</li>
              <li>Data Structures, Algorithms &amp; Database Management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

