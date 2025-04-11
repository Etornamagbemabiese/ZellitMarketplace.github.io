'use client'

import { motion, VariantLabels, TargetAndTransition, Transition } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  initial?: VariantLabels | TargetAndTransition
  animate?: VariantLabels | TargetAndTransition
  transition?: Transition
  whileInView?: VariantLabels | TargetAndTransition
  viewport?: { once?: boolean; amount?: number }
  delay?: number
}

export default function AnimatedSection({
  children,
  className = '',
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
  whileInView,
  viewport = { once: true, amount: 0.1 },
  delay = 0
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={{ ...transition, delay }}
      whileInView={whileInView}
      viewport={viewport}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  )
} 