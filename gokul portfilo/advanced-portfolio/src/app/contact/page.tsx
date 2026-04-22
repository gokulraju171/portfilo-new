'use client'

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">Get In Touch</h1>
      <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-12 items-start animate-slide-up">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-muted-foreground">gokulraju171@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-muted-foreground">+91 9972471155</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-muted-foreground">Bengaluru, Karnataka, India</p>
          </div>
          <div className="flex space-x-4 pt-4">
            <a href="https://github.com/gokulraju171" className="text-2xl hover:text-primary transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/gokul2008" className="text-2xl hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input type="text" className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea rows={5} className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical" />
          </div>
          <button type="submit" className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-all">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

