'use client'

import React from 'react'
import Image from 'next/image'
import AnimatedSection from '../components/AnimatedSection'

export default function TeamPage() {
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
              <a href="/team" className="text-primary-600">Team</a>
              <a href="/contact" className="text-secondary-600 hover:text-primary-600 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </AnimatedSection>

      <div className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <AnimatedSection>
            <h1 className="text-3xl font-bold text-secondary-900 mb-12 text-center">Our Team</h1>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <AnimatedSection delay={0.1} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-4xl text-primary-600">JD</span>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">John Doe</h3>
              <p className="text-primary-600 font-medium mb-4">Founder & CEO</p>
              <p className="text-secondary-600">Visionary leader with a passion for sustainable commerce and student empowerment.</p>
            </AnimatedSection>

            {/* Team Member 2 */}
            <AnimatedSection delay={0.2} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-4xl text-primary-600">AS</span>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Alice Smith</h3>
              <p className="text-primary-600 font-medium mb-4">CTO</p>
              <p className="text-secondary-600">Tech innovator driving the platform's development and user experience.</p>
            </AnimatedSection>

            {/* Team Member 3 */}
            <AnimatedSection delay={0.3} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-4xl text-primary-600">MJ</span>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Michael Johnson</h3>
              <p className="text-primary-600 font-medium mb-4">Head of Operations</p>
              <p className="text-secondary-600">Ensuring smooth operations and exceptional user support across campuses.</p>
            </AnimatedSection>
          </div>

          {/* Join Us Section */}
          <AnimatedSection delay={0.4} className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">Join Our Team</h2>
            <p className="text-secondary-600 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals to join our mission of connecting students through sustainable commerce.
            </p>
            <a href="/contact" className="btn-primary">
              Get in Touch
            </a>
          </AnimatedSection>
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