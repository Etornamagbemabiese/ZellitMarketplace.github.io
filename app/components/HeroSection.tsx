'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Welcome to Zellit – Your University Marketplace
            </h1>
            <p className="text-lg text-secondary-600 mb-8">
              Connecting students across campuses through a sustainable and community-driven marketplace platform.
            </p>
            <a href="#about" className="btn-primary inline-flex items-center">
              Learn More
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
              alt="University students"
              fill
              className="object-cover rounded-lg shadow-xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 