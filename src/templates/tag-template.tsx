import * as React from "react"

import Layout from "@/components/layout"
import Seo from "@/components/seo"
import PageHero from "@/components/PageHero"
import BlogRoll from "@/components/blogroll"

import Image from "@/svg/undraw_Add_post_re_174w.svg"

interface TagProps {
  pageContext: {
    tag: string
  }
}

const TagPage = ({ pageContext }: TagProps) => {
  const tag = pageContext.tag

  const title = `Tag: ${tag}`
  return (
    <Layout>
      <Seo title={title} />
      <main className="mt-10">
        <article className="post">
          <header>
            <PageHero title={title} description={`Posts with tag [${tag}]`} image={Image} />
          </header>
        </article>
        <BlogRoll tag={tag} />
      </main>
    </Layout>
  )
}

export default TagPage
