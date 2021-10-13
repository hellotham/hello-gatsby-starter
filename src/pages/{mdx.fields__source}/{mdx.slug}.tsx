import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { getImage, ImageDataLike } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import Layout from '@/components/layout'
import SEO from '@/components/seo'
import PostHero from '@/components/PostHero'

const components = { Link }

type ResizeType = {
  childImageSharp: {
    resize: {
      src: string
      width: number
      height: number
      aspectRatio: number
      originalName: string
    }
  }
}

interface BlogPostProps {
  data: {
    mdx: {
      frontmatter: {
        title: string
        description: string
        author: string
        date: string
        image: ImageDataLike | ResizeType
        tags: string[]
      }
      fields: {
        source: string
      }
      slug: string
      parent: {
        modifiedTime: string
      }
      body: string
    }
  }
}

const BlogPost = ({ data }: BlogPostProps) => {
  const frontmatter = data.mdx.frontmatter
  const image = getImage(frontmatter.image as ImageDataLike)

  return (
    <Layout>
      <SEO
        type={data.mdx.fields.source}
        title={frontmatter.title}
        description={frontmatter.description}
        date={frontmatter.date}
        lastUpdated={data.mdx.parent.modifiedTime}
        image={(frontmatter.image as ResizeType).childImageSharp.resize}
        keywords={frontmatter.tags}
        pathname={'/' + data.mdx.fields.source + '/' + data.mdx.slug}
      />
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
            resize(width: 1200) {
              src
              width
              height
              aspectRatio
              originalName
            }
          }
        }
        tags
      }
      fields {
        source
      }
      slug
      parent {
        ... on File {
          modifiedTime
        }
      }
      body
    }
  }
`

export default BlogPost
