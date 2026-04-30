"use client"

import { motion } from "framer-motion"
import { MapPin, Cpu, FileText, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Enter Any Address",
    description: "Simply type in a property address anywhere in our coverage area. No account required for your first lookup."
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI Pulls Zoning + Parcel Data",
    description: "Our AI instantly retrieves zoning district, setbacks, lot coverage, height limits, and parcel boundaries from local ordinances."
  },
  {
    number: "03",
    icon: FileText,
    title: "Get Full Feasibility Report",
    description: "Receive a comprehensive analysis with maximum allowable units, dimensional standards, and development potential — all in seconds."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#b45309] uppercase tracking-wider">How It Works</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1c1917] mt-4 text-balance">
            From address to analysis in seconds
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(50%+60px)] right-[-40px] h-px">
                  <div className="h-full bg-gradient-to-r from-[#e5dbcf] to-transparent" />
                  <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-[#e5dbcf]" />
                </div>
              )}
              
              <div 
                className="relative p-8 rounded-2xl h-full"
                style={{
                  background: 'rgba(255, 255, 255, 0.82)',
                  boxShadow: '0 18px 50px rgb(74 48 24 / 0.08)'
                }}
              >
                {/* Step number */}
                <span className="absolute top-6 right-6 text-5xl font-serif text-[#e5dbcf]">
                  {step.number}
                </span>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#fef3c7] flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-[#b45309]" />
                </div>
                
                <h3 className="font-serif text-2xl text-[#1c1917] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#57534e] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
