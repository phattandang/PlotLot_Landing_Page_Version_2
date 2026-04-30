import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { Coverage } from "@/components/coverage"
import { CTAFooter } from "@/components/cta-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4efe7]">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Coverage />
      <CTAFooter />
    </main>
  )
}
