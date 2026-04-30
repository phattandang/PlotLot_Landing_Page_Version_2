"use client"

import { motion } from "framer-motion"
import { MapPin, FileText, Building, CheckCircle2 } from "lucide-react"

const stats = [
  {
    icon: MapPin,
    value: "88",
    label: "Municipalities",
    description: "Across the Southeast"
  },
  {
    icon: FileText,
    value: "8,000+",
    label: "Ordinance Sections",
    description: "Fully indexed"
  },
  {
    icon: Building,
    value: "5",
    label: "States",
    description: "FL, GA, NC, TX, SC"
  }
]

const states = [
  { name: "Florida", cities: "Miami, Tampa, Orlando, Jacksonville" },
  { name: "Georgia", cities: "Atlanta, Savannah, Augusta" },
  { name: "North Carolina", cities: "Charlotte, Raleigh, Durham" },
  { name: "Texas", cities: "Austin, Dallas, Houston, San Antonio" },
  { name: "South Carolina", cities: "Charleston, Columbia, Greenville" }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
}

export function Coverage() {
  return (
    <section id="coverage" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-[#b45309] uppercase tracking-wider">Coverage</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1c1917] mt-4 mb-6 text-balance">
              Deep local knowledge, instantly accessible
            </h2>
            <p className="text-lg text-[#57534e] mb-12 leading-relaxed">
              {"We've"} indexed thousands of zoning ordinances, land development codes, and comprehensive plans across the Southeast. Our AI understands the nuances of each jurisdiction.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={itemVariants} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#fef3c7] flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-[#b45309]" />
                  </div>
                  <p className="text-3xl font-serif text-[#1c1917]">{stat.value}</p>
                  <p className="text-sm font-medium text-[#57534e]">{stat.label}</p>
                  <p className="text-xs text-[#8b7f75] mt-1">{stat.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - States list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(255, 255, 255, 0.82)',
              boxShadow: '0 18px 50px rgb(74 48 24 / 0.08)'
            }}
          >
            <h3 className="font-serif text-2xl text-[#1c1917] mb-6">Active Coverage Areas</h3>
            <div className="space-y-4">
              {states.map((state) => (
                <div 
                  key={state.name}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#f4efe7]/60 hover:bg-[#fef3c7]/40 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#047857] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-[#1c1917]">{state.name}</p>
                    <p className="text-sm text-[#8b7f75]">{state.cities}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#8b7f75] mt-6 text-center">
              More markets coming soon. Request a market →
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
