'use client'

import React, { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', description: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <AnimatedSection className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <nav className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary-600">Zellit</div>
            <div className="hidden md:flex space-x-8">
              <a href="/#about" className="text-secondary-600 hover:text-primary-600 transition-colors">About</a>
              <a href="/#motivation" className="text-secondary-600 hover:text-primary-600 transition-colors">Our Motivation</a>
              <a href="/#plan" className="text-secondary-600 hover:text-primary-600 transition-colors">Our Plan</a>
              <a href="/contact" className="text-primary-600">Contact</a>
            </div>
          </div>
        </nav>
      </AnimatedSection>

      <div className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection>
              <h1 className="text-3xl font-bold text-secondary-900 mb-8">Contact Us</h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="bg-white rounded-lg shadow-md p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-secondary-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary-900 text-white py-12">
        <div className="container-custom">
          <AnimatedSection>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Zellit</h3>
                <p className="text-secondary-300">Connecting students across campuses through sustainable commerce.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/#about" className="text-secondary-300 hover:text-white transition-colors">About</a></li>
                  <li><a href="/#motivation" className="text-secondary-300 hover:text-white transition-colors">Our Motivation</a></li>
                  <li><a href="/#plan" className="text-secondary-300 hover:text-white transition-colors">Our Plan</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-secondary-300 hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-secondary-300 hover:text-white transition-colors">Terms of Service</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <p className="text-secondary-300 mb-2">Email: zellitmarketplace@gmail.com</p>
                <a href="/contact" className="text-secondary-300 hover:text-white transition-colors">Send us a message</a>
              </div>
            </div>
            <div className="border-t border-secondary-800 mt-8 pt-8 text-center text-secondary-300">
              <p>© 2024 Zellit. All rights reserved.</p>
            </div>
          </AnimatedSection>
        </div>
      </footer>
    </main>
  )
} 