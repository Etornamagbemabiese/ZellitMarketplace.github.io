import React from 'react'
import HeroSection from './components/HeroSection'
import AnimatedSection from './components/AnimatedSection'
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  LightBulbIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <AnimatedSection className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <nav className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary-600">Zellit</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-secondary-600 hover:text-primary-600 transition-colors">About</a>
              <a href="#motivation" className="text-secondary-600 hover:text-primary-600 transition-colors">Our Motivation</a>
              <a href="#plan" className="text-secondary-600 hover:text-primary-600 transition-colors">Our Plan</a>
              <a href="/team" className="text-secondary-600 hover:text-primary-600 transition-colors">Team</a>
              <a href="/contact" className="text-secondary-600 hover:text-primary-600 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </AnimatedSection>

      <HeroSection />

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-secondary-900 mb-8">About Zellit</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection delay={0.1} className="p-6 bg-primary-50 rounded-lg">
                <AcademicCapIcon className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-secondary-900">Student-Driven Commerce</h3>
                <p className="text-secondary-600">A platform built by students, for students, facilitating easy exchange of goods and services.</p>
              </AnimatedSection>
              <AnimatedSection delay={0.2} className="p-6 bg-primary-50 rounded-lg">
                <UserGroupIcon className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-secondary-900">Community Focused</h3>
                <p className="text-secondary-600">Fostering connections and building a strong university community through commerce.</p>
              </AnimatedSection>
              <AnimatedSection delay={0.3} className="p-6 bg-primary-50 rounded-lg">
                <LightBulbIcon className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-secondary-900">Sustainable Exchange</h3>
                <p className="text-secondary-600">Promoting reuse and recycling while making student life more affordable.</p>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Motivation Section */}
      <section id="motivation" className="section-padding bg-secondary-50">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-secondary-900 mb-8">Our Motivation</h2>
            <div className="max-w-3xl">
              <p className="text-lg text-secondary-600 mb-6">
                Zellit was born from a simple observation: university students face unique challenges when it comes to buying and selling items. Traditional marketplaces often don't cater to the specific needs of the student community.
              </p>
              <ul className="space-y-4">
                <AnimatedSection delay={0.1} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary-600">•</div>
                  <p className="ml-3 text-secondary-600">Creating a trusted platform for student-to-student transactions</p>
                </AnimatedSection>
                <AnimatedSection delay={0.2} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary-600">•</div>
                  <p className="ml-3 text-secondary-600">Promoting sustainable consumption within university communities</p>
                </AnimatedSection>
                <AnimatedSection delay={0.3} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary-600">•</div>
                  <p className="ml-3 text-secondary-600">Building a stronger sense of community across campuses</p>
                </AnimatedSection>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Plan Section */}
      <section id="plan" className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-secondary-900 mb-8">Our Plan & Roadmap</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.1} className="p-6 bg-primary-50 rounded-lg">
                <ChartBarIcon className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-secondary-900">Current Phase</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="flex-shrink-0 h-6 w-6 text-primary-600">✓</div>
                    <p className="ml-3 text-secondary-600">UNC Marketplace Launch</p>
                  </li>
                </ul>
              </AnimatedSection>
              <AnimatedSection delay={0.2} className="p-6 bg-primary-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-secondary-900">Upcoming Universities</h3>
                <ul className="space-y-3">
                  <AnimatedSection delay={0.3} className="flex items-center">
                    <div className="flex-shrink-0 h-6 w-6 text-secondary-400">•</div>
                    <p className="ml-3 text-secondary-600">NC State University</p>
                  </AnimatedSection>
                  <AnimatedSection delay={0.4} className="flex items-center">
                    <div className="flex-shrink-0 h-6 w-6 text-secondary-400">•</div>
                    <p className="ml-3 text-secondary-600">Duke University</p>
                  </AnimatedSection>
                  <AnimatedSection delay={0.5} className="flex items-center">
                    <div className="flex-shrink-0 h-6 w-6 text-secondary-400">•</div>
                    <p className="ml-3 text-secondary-600">NC Central University</p>
                  </AnimatedSection>
                </ul>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* University Pages Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-secondary-900 mb-8">University Marketplaces</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection delay={0.1} className="p-6 bg-white rounded-lg shadow-md opacity-50">
                <h3 className="text-xl font-semibold mb-4 text-secondary-900">UNC Chapel Hill</h3>
                <p className="text-secondary-600 mb-4">Coming Soon</p>
                <div className="px-4 py-2 bg-secondary-100 text-secondary-600 rounded-lg inline-block">Coming Soon</div>
              </AnimatedSection>
              <AnimatedSection delay={0.2} className="p-6 bg-white rounded-lg shadow-md opacity-50">
                <h3 className="text-xl font-semibold mb-4 text-secondary-900">NC State</h3>
                <p className="text-secondary-600 mb-4">Coming Soon</p>
                <div className="px-4 py-2 bg-secondary-100 text-secondary-600 rounded-lg inline-block">Coming Soon</div>
              </AnimatedSection>
              <AnimatedSection delay={0.3} className="p-6 bg-white rounded-lg shadow-md opacity-50">
                <h3 className="text-xl font-semibold mb-4 text-secondary-900">Duke</h3>
                <p className="text-secondary-600 mb-4">Coming Soon</p>
                <div className="px-4 py-2 bg-secondary-100 text-secondary-600 rounded-lg inline-block">Coming Soon</div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

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
                  <li><a href="#about" className="text-secondary-300 hover:text-white transition-colors">About</a></li>
                  <li><a href="#motivation" className="text-secondary-300 hover:text-white transition-colors">Our Motivation</a></li>
                  <li><a href="#plan" className="text-secondary-300 hover:text-white transition-colors">Our Plan</a></li>
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