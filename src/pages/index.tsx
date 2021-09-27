import * as React from "react"

import Hero from "@/components/hero"
import Features from "@/components/features"
import FindOutMore from "@/components/findoutmore"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <Features />
      <FindOutMore />
      <Footer />
    </div>
  )
}
