import * as React from 'react'

import Layout from '@/components/layout'
import SEO from '@/components/seo'
import PageHero from '@/components/PageHero'
import BlogRoll from '@/components/blogroll'

import Image from '@/svg/undraw/undraw_Add_post_re_174w.svg'
import OGImage from '../images/undraw_ideas_flow_cy7b.png'

const BlogPage = () => {
  const ogimage = {
    src: OGImage,
    width: 1342,
    height: 1024,
  }

  return (
    <Layout>
      <SEO
        type="pages"
        title="Blog Posts"
        description="Articles published from time to time"
        image={ogimage}
        pathname="/posts"
      />
      <main className="mt-10">
        <article className="post">
          <header>
            <PageHero title="Blog Posts" description="Articles published from time to time" image={Image} />
          </header>
        </article>
        <BlogRoll />
      </main>
    </Layout>
  )
}

export default BlogPage
