'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button' // Placeholder for shadcn

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            Gokul R
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/#projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/skills" className="hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="/experience" className="hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="/contact">
              <Button>Contact</Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

