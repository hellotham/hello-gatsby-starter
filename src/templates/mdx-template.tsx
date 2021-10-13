import * as React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { getImage, ImageDataLike } from 'gatsby-plugin-image'

import Layout from '@/components/layout'
import SEO from '@/components/seo'
import PostHero from '@/components/PostHero'

import { Link } from 'gatsby'

interface LayoutProps {
  pageContext: {
    frontmatter: {
      title: string
      description: string
      author: string
      date: string
      image: ImageDataLike
      tags: string[]
    }
  }
  children: React.ReactNode
}

const components = { Link }

const MDXTemplate = ({ pageContext, children }: LayoutProps) => {
  const frontmatter = pageContext.frontmatter
  console.log(frontmatter)

  return (
    <Layout>
      <SEO type="page" title={frontmatter.title} description={frontmatter.description} />
      <main className="mt-10">
        <article className="post">
          <header>
            <PostHero
              title={frontmatter.title}
              description={frontmatter.description}
              author={frontmatter.author}
              date={frontmatter.date}
              image={getImage(frontmatter.image)}
              tags={frontmatter.tags}
            />
          </header>
          <section className="px-4 lg:px-0 mt-12 mb-24 max-w-screen-lg mx-auto prose prose-purple lg:prose-lg">
            <MDXProvider components={components}>{children}</MDXProvider>
          </section>
        </article>
      </main>
    </Layout>
  )
}

export default MDXTemplate
