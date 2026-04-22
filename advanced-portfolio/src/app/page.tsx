export default function Home() {
  return (
    <div className="container mx-auto px-6 py-20">
      <section className="text-center animate-fade-in">
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
          Gokul R
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
          Backend Developer
        </p>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Computer Science Engineering student passionate about building scalable backend systems, 
          REST APIs, and reliable software infrastructure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all animate-slide-up"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-input rounded-lg font-semibold hover:bg-accent/50 transition-all animate-slide-up"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  )
}
