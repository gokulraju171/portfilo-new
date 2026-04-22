export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 mt-20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground mb-4">
          © 2024 Gokul R. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 text-muted-foreground">
          <a href="https://github.com/gokulraju171" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/gokul2008" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:gokulraju171@gmail.com">
            Email
          </a>
          <a href="tel:9972471155">
            Phone
          </a>
        </div>
      </div>
    </footer>
  )
}

