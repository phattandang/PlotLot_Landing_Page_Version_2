"use client"

import { motion } from "framer-motion"
import { 
  Building2, 
  Calculator, 
  BarChart3, 
  FileSignature, 
  Bot,
  Layers
} from "lucide-react"

const features = [
  {
    icon: Building2,
    title: "Zoning Analysis",
    description: "Instantly identify zoning district, permitted uses, conditional uses, and special requirements for any parcel.",
    highlight: true
  },
  {
    icon: Calculator,
    title: "Max Unit Calculator",
    description: "Calculate maximum allowable units based on lot size, FAR, density limits, and local regulations.",
    highlight: true
  },
  {
    icon: BarChart3,
    title: "Comps + Pro Forma",
    description: "Access comparable sales data and generate residual land value calculations for informed pricing decisions.",
    highlight: false
  },
  {
    icon: FileSignature,
    title: "Document Generation",
    description: "Auto-generate LOIs, PSAs, and other acquisition documents pre-filled with property and deal details.",
    highlight: false
  },
  {
    icon: Bot,
    title: "AI Agent Mode",
    description: "Engage our 10-tool AI agent for deep deal analysis, answering complex questions about any property.",
    highlight: true
  },
  {
    icon: Layers,
    title: "Setbacks & Dimensions",
    description: "View all dimensional standards: setbacks, lot coverage, height limits, parking requirements, and more.",
    highlight: false
  }
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

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-[#fef3c7]/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#b45309] uppercase tracking-wider">Features</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1c1917] mt-4 text-balance">
            Everything you need for land acquisition
          </h2>
          <p className="text-lg text-[#57534e] mt-4 max-w-2xl mx-auto">
            From initial discovery to signed contract, PlotLot equips you with the tools to move faster and smarter.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group"
            >
              <div 
                className="relative p-8 rounded-2xl h-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(255, 255, 255, 0.82)',
                  boxShadow: '0 18px 50px rgb(74 48 24 / 0.08)'
                }}
              >
                {feature.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-medium bg-[#fef3c7] text-[#b45309] rounded-full">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="w-12 h-12 rounded-xl bg-[#fef3c7] flex items-center justify-center mb-5 group-hover:bg-[#b45309] transition-colors">
                  <feature.icon className="w-6 h-6 text-[#b45309] group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="font-serif text-xl text-[#1c1917] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#57534e] leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
