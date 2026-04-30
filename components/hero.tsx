"use client"

import { motion } from "framer-motion"
import { Search, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1]
    }
  })
}

export function Hero() {
  const [address, setAddress] = useState("")

  return (
    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      
      {/* Hero glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.18), transparent 70%)'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fef3c7] text-[#b45309] text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            AI-Powered Land Intelligence
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#1c1917] leading-[1.1] text-balance mb-6"
          >
            Know what you can build{" "}
            <span className="text-[#b45309]">before</span> you make an offer
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="text-lg sm:text-xl text-[#57534e] max-w-2xl mx-auto mb-12 text-pretty"
          >
            Instant zoning analysis, parcel data, and maximum unit calculations for any address. Make smarter land acquisition decisions in seconds.
          </motion.p>

          {/* Search Input */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="max-w-2xl mx-auto"
          >
            <div 
              className="flex flex-col sm:flex-row gap-3 p-3 rounded-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.82)',
                boxShadow: '0 18px 50px rgb(74 48 24 / 0.08)'
              }}
            >
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8b7f75]" />
                <input
                  type="text"
                  placeholder="Enter a property address..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#f4efe7] border border-[#e5dbcf] text-[#1c1917] placeholder:text-[#8b7f75] focus:outline-none focus:ring-2 focus:ring-[#b45309] focus:border-transparent transition-all"
                />
              </div>
              <Button 
                size="lg"
                className="bg-[#b45309] hover:bg-[#92400e] text-white px-8 py-4 h-auto rounded-xl text-base font-medium group"
              >
                Analyze Site
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-sm text-[#8b7f75] mt-4">
              Try: 123 Main St, Miami FL or 456 Oak Ave, Atlanta GA
            </p>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 mt-16 pt-12 border-t border-[#e5dbcf]"
          >
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-serif text-[#1c1917]">88+</p>
              <p className="text-sm text-[#8b7f75]">Municipalities</p>
            </div>
            <div className="w-px h-12 bg-[#e5dbcf] hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-serif text-[#1c1917]">8,000+</p>
              <p className="text-sm text-[#8b7f75]">Ordinance Sections</p>
            </div>
            <div className="w-px h-12 bg-[#e5dbcf] hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-serif text-[#1c1917]">10</p>
              <p className="text-sm text-[#8b7f75]">AI Tools</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
