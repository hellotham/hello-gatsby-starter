import * as React from 'react'

import SEO from '@/components/seo'
import Hero from '@/components/hero'
import Features from '@/components/features'
import FindOutMore from '@/components/findoutmore'
import LatestArticles from '../components/latestarticles'
import Footer from '@/components/footer'

import OGImage from '../images/undraw_ideas_flow_cy7b.png'

export default function Home() {
  const ogimage = {
    src: OGImage,
    width: 1342,
    height: 1024,
  }

  return (
    <div className="font-sans">
      <SEO
        type="homepage"
        title="Hello Tham"
        description="A boutique management and strategy consulting company."
        image={ogimage}
      />
      <Hero />
      <Features />
      <FindOutMore />
      <LatestArticles />
      <div className="p-24 md:p-12 bg-white" />
      <Footer />
    </div>
  )
}
