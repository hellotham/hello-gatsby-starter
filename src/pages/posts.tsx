import * as React from "react"

import Layout from "@/components/layout"
import Seo from "@/components/seo"
import PageHero from "@/components/PageHero"
import BlogRoll from "@/components/blogroll"

import Image from "@/svg/undraw_Add_post_re_174w.svg"

const BlogPage = () => {
  return (
    <Layout>
      <Seo title="Blog Posts" />
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
