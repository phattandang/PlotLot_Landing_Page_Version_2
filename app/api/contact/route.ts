import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, email, company, role, phone, goal, timeline, contactPreference } = body

  if (!name || !email || !company || !role || !goal || !timeline) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: "PlotLot <onboarding@resend.dev>",
    to: ["dangtanphat2003@gmail.com"],
    replyTo: email,
    subject: `PlotLot early access request — ${name}`,
    text: [
      "New early customer request",
      "(Forward to: earlperry562@gmail.com)",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Role: ${role}`,
      `Phone: ${phone || "Not provided"}`,
      `Timeline: ${timeline}`,
      `Preferred contact: ${contactPreference}`,
      "",
      "What they are trying to solve:",
      goal,
    ].join("\n"),
  })

  if (error) {
    console.error("Resend error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
