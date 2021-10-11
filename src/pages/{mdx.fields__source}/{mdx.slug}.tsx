import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { getImage, ImageDataLike } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Layout from "@/components/layout"
import Seo from "@/components/seo"
import PostHero from "@/components/PostHero"

const components = { Link }

interface BlogPostProps {
  data: {
    mdx: {
      frontmatter: {
        title: string
        description: string
        author: string
        date: string
        image: ImageDataLike
        tags: string[]
      }
      body: string
    }
  }
}

const BlogPost = ({ data }: BlogPostProps) => {
  const frontmatter = data.mdx.frontmatter
  const image = getImage(frontmatter.image)

  return (
    <Layout>
      <Seo title={frontmatter.title} description={frontmatter.description} />
      <main className="mt-10">
        <article className="post">
          <header>
            <PostHero
              title={frontmatter.title}
              description={frontmatter.description}
              author={frontmatter.author}
              date={frontmatter.date}
              image={image}
              tags={frontmatter.tags}
            />
          </header>
          <section className="px-4 lg:px-0 mt-12 mb-24 max-w-screen-lg mx-auto prose prose-purple lg:prose-xl">
            <MDXRenderer localImages={frontmatter.image} components={components}>
              {data.mdx.body}
            </MDXRenderer>
          </section>
        </article>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        author
        date(formatString: "YYYY-MM-DD")
        image {
          childImageSharp {
            gatsbyImageData(width: 2048)
          }
        }
        tags
      }
      body
    }
  }
`

export default BlogPost
