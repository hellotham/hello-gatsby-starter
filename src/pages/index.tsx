import * as React from "react"

import Hero from "@/components/hero"
import Features from "@/components/features"
import FindOutMore from "@/components/findoutmore"
import Footer from "@/components/footer"
import Seo from "@/components/seo"

export default function Home() {
  return (
    <div className="font-sans">
      <Seo title="Home Page" />
      <Hero />
      <Features />
      <FindOutMore />
      <div className="p-12 bg-white" />
      <Footer />
    </div>
  )
}
