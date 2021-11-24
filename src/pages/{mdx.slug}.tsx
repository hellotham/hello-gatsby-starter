import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'

import Layout from '@/components/layout'
import SEO from '@/components/seo'
import PostHero from '@/components/PostHero'
import { ImgType } from '@/components/img'

const components = { Link }

interface BlogPostProps {
  data: {
    mdx: {
      frontmatter: {
        title: string
        description: string
        author: string
        date: string
        image: ImgType
        tags: string[]
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
  const pathname = '/' + data.mdx.slug

  return (
    <Layout>
      <SEO
        type={data.mdx.slug.slice(0, 5) === 'post/' ? 'post' : 'page'}
        title={frontmatter.title}
        description={frontmatter.description}
        date={frontmatter.date}
        lastUpdated={data.mdx.parent.modifiedTime}
        image={frontmatter.image.childImageSharp.resize}
        keywords={frontmatter.tags}
        pathname={pathname}
      />
      <main className="mt-10">
        <article className="post">
          <header>
            <PostHero
              url={pathname}
              title={frontmatter.title}
              description={frontmatter.description}
              author={frontmatter.author}
              date={frontmatter.date}
              image={frontmatter.image}
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
