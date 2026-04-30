"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTAFooter() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #b45309 0%, #92400e 100%)',
            boxShadow: '0 25px 60px rgb(180 83 9 / 0.3)'
          }}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute -top-24 -right-24 w-96 h-96 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(254, 243, 199, 0.15), transparent 70%)' }}
            />
            <div 
              className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(254, 243, 199, 0.1), transparent 70%)' }}
            />
          </div>

          <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mx-auto mb-8"
            >
              <MapPin className="w-8 h-8 text-white" />
            </motion.div>

            <h2 className="font-serif text-4xl sm:text-5xl text-white mb-6 text-balance">
              Start your first lookup free
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-10">
              No credit card required. Get instant zoning analysis and see what you can build on any property in our coverage area.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-[#b45309] hover:bg-[#fef3c7] px-8 py-6 h-auto rounded-xl text-base font-medium group"
              >
                Try It Free
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 h-auto rounded-xl text-base font-medium bg-transparent"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-[#e5dbcf]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#b45309]">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="font-serif text-xl text-[#1c1917]">PlotLot</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-[#8b7f75]">
              <a href="#" className="hover:text-[#1c1917] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#1c1917] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#1c1917] transition-colors">Contact</a>
            </div>

            <p className="text-sm text-[#8b7f75]">
              © 2024 PlotLot. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
