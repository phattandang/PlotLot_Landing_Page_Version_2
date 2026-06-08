"use client"

import { FormEvent, useState } from "react"
import { ArrowRight, CheckCircle2, Clock, Mail, Users } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

type FormState = {
  name: string
  email: string
  company: string
  role: string
  phone: string
  goal: string
  timeline: string
  contactPreference: string
}

type SubmitStatus = "idle" | "loading" | "success" | "error"

const initialFormState: FormState = {
  name: "",
  email: "",
  company: "",
  role: "",
  phone: "",
  goal: "",
  timeline: "",
  contactPreference: "Email",
}

const fieldClassName =
  "w-full rounded-xl border border-[#e5dbcf] bg-[#f4efe7] px-4 py-3 text-[#1c1917] placeholder:text-[#8b7f75] transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#b45309]"

const highlights = [
  {
    icon: Users,
    title: "Only 5 early customer spots",
    description: "A focused onboarding group so we can learn fast and support each team closely.",
  },
  {
    icon: Clock,
    title: "Fast follow-up",
    description: "Share your acquisition workflow and we will reach out with the right next step.",
  },
  {
    icon: CheckCircle2,
    title: "Built around real deals",
    description: "Early customers help shape the zoning, parcel, and feasibility workflows that matter most.",
  },
]

export function EarlyCustomerForm() {
  const [formState, setFormState] = useState<FormState>(initialFormState)
  const [status, setStatus] = useState<SubmitStatus>("idle")

  const updateField = (field: keyof FormState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }))
    if (status === "error") setStatus("idle")
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })

      if (!response.ok) throw new Error("Request failed")

      setStatus("success")
      setFormState(initialFormState)
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="early-customers" className="py-24 sm:py-32 bg-[#fef3c7]/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-[#b45309]">
              Early Customers
            </span>
            <h2 className="mt-4 font-serif text-4xl text-[#1c1917] text-balance sm:text-5xl">
              Become one of our first 5 customers
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#57534e]">
              We are onboarding a small group of land buyers, developers, and acquisition teams to
              help shape PlotLot around real site-selection and feasibility decisions.
            </p>

            <div className="mt-10 space-y-5">
              {highlights.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white">
                    <item.icon className="h-5 w-5 text-[#b45309]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1c1917]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#57534e]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: "rgba(255, 255, 255, 0.82)",
              boxShadow: "0 18px 50px rgb(74 48 24 / 0.08)",
            }}
          >
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fef3c7]">
                <Mail className="h-6 w-6 text-[#b45309]" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-[#1c1917]">Request early access</h3>
                <p className="mt-1 text-sm text-[#57534e]">
                  Tell us who you are and what you need to solve first.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-[#1c1917]">
                  Name
                  <input
                    required
                    type="text"
                    value={formState.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    className={fieldClassName}
                    placeholder="Your name"
                  />
                </label>
                <label className="space-y-2 text-sm font-medium text-[#1c1917]">
                  Email
                  <input
                    required
                    type="email"
                    value={formState.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    className={fieldClassName}
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-[#1c1917]">
                  Company
                  <input
                    required
                    type="text"
                    value={formState.company}
                    onChange={(event) => updateField("company", event.target.value)}
                    className={fieldClassName}
                    placeholder="Company or organization"
                  />
                </label>
                <label className="space-y-2 text-sm font-medium text-[#1c1917]">
                  Role
                  <input
                    required
                    type="text"
                    value={formState.role}
                    onChange={(event) => updateField("role", event.target.value)}
                    className={fieldClassName}
                    placeholder="Acquisitions, developer, broker..."
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-[#1c1917]">
                  Phone number
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    className={fieldClassName}
                    placeholder="Optional"
                  />
                </label>
                <label className="space-y-2 text-sm font-medium text-[#1c1917]">
                  Timeline
                  <select
                    required
                    value={formState.timeline}
                    onChange={(event) => updateField("timeline", event.target.value)}
                    className={fieldClassName}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="This week">This week</option>
                    <option value="This month">This month</option>
                    <option value="Next quarter">Next quarter</option>
                    <option value="Exploring for later">Exploring for later</option>
                  </select>
                </label>
              </div>

              <label className="block space-y-2 text-sm font-medium text-[#1c1917]">
                What are you trying to solve?
                <textarea
                  required
                  value={formState.goal}
                  onChange={(event) => updateField("goal", event.target.value)}
                  className={`${fieldClassName} min-h-32 resize-y`}
                  placeholder="Example: We need faster zoning checks before making offers on infill lots."
                />
              </label>

              <label className="block space-y-2 text-sm font-medium text-[#1c1917]">
                Best way to contact you
                <select
                  value={formState.contactPreference}
                  onChange={(event) => updateField("contactPreference", event.target.value)}
                  className={fieldClassName}
                >
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                  <option value="Either email or phone">Either email or phone</option>
                </select>
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  size="lg"
                  className="h-auto rounded-xl bg-[#b45309] px-8 py-4 text-base font-medium text-white hover:bg-[#92400e] disabled:opacity-60"
                >
                  {status === "loading" ? "Sending…" : "Apply to Be an Early Customer"}
                  {status !== "loading" && <ArrowRight className="h-4 w-4" />}
                </Button>
                {status === "success" && (
                  <p className="text-sm text-[#047857]">
                    Request received! We will be in touch shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
