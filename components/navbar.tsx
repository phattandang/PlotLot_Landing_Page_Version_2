"use client"

import { motion } from "framer-motion"
import { MapPin, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <div 
          className="flex items-center justify-between px-6 py-4 rounded-2xl"
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(22px)',
            WebkitBackdropFilter: 'blur(22px)',
            boxShadow: '0 4px 30px rgba(74, 48, 24, 0.05)'
          }}
        >
          {/* Logo */}
          <a href="./" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#b45309]">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="font-serif text-2xl text-[#1c1917]">PlotLot</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-[#57534e] hover:text-[#1c1917] transition-colors text-sm font-medium">
              How It Works
            </a>
            <a href="#features" className="text-[#57534e] hover:text-[#1c1917] transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#coverage" className="text-[#57534e] hover:text-[#1c1917] transition-colors text-sm font-medium">
              Coverage
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-[#57534e] hover:text-[#1c1917] hover:bg-[#fef3c7]/50">
              Sign In
            </Button>
            <Button className="bg-[#b45309] hover:bg-[#92400e] text-white">
              Start Free
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1c1917]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1c1917]" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 p-4 rounded-2xl"
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(22px)',
            }}
          >
            <div className="flex flex-col gap-4">
              <a href="#how-it-works" className="text-[#57534e] hover:text-[#1c1917] transition-colors text-sm font-medium py-2">
                How It Works
              </a>
              <a href="#features" className="text-[#57534e] hover:text-[#1c1917] transition-colors text-sm font-medium py-2">
                Features
              </a>
              <a href="#coverage" className="text-[#57534e] hover:text-[#1c1917] transition-colors text-sm font-medium py-2">
                Coverage
              </a>
              <hr className="border-[#e5dbcf]" />
              <Button variant="ghost" className="justify-start text-[#57534e] hover:text-[#1c1917]">
                Sign In
              </Button>
              <Button className="bg-[#b45309] hover:bg-[#92400e] text-white">
                Start Free
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
