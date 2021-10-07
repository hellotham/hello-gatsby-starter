import * as React from "react"
import { MDXProvider } from "@mdx-js/react"

import Layout from "@/components/layout"
import Seo from "@/components/seo"
import PostHero from "@/components/PostHero"

import { Link } from "gatsby"

interface LayoutProps {
  pageContext: any
  children: React.ReactNode
}

const components = { Link }

const MDXTemplate = ({ pageContext, children }: LayoutProps) => {
  const frontmatter = pageContext.frontmatter

  return (
    <Layout>
      <Seo title={frontmatter.title} description={frontmatter.description} />
      <main className="mt-10">
        <article className="post">
          <header>
            <PostHero title={frontmatter.title} author={frontmatter.author} />
          </header>
          <section className="px-4 lg:px-0 mt-12 mb-24 max-w-screen-lg mx-auto prose lg:prose-lg">
            <MDXProvider components={components}>{children}</MDXProvider>
          </section>
        </article>
      </main>
    </Layout>
  )
}

export default MDXTemplate
