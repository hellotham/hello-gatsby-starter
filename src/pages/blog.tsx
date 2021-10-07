import * as React from "react"
import { graphql } from "gatsby"

import Layout from "@/components/layout"
import Seo from "@/components/seo"
import PostHero from "@/components/PostHero"
import { getImage, ImageDataLike } from "gatsby-plugin-image"
import BlogCard from "@/components/blogcard"

interface BlogPageProps {
  data: {
    allMdx: {
      nodes: {
        frontmatter: {
          title: string
          description: string
          author: string
          date: string
          image: ImageDataLike
          tags: string[]
        }
        id: string
        slug: string
        fields: {
          source: string
        }
      }[]
    }
    allFile: {
      nodes: ImageDataLike[]
    }
  }
}

const BlogPage = ({ data }: BlogPageProps) => {
  return (
    <Layout>
      <Seo title="Blog Posts" />
      <main className="mt-10">
        <article className="post">
          <header>
            <PostHero title="Blog Posts" image={getImage(data.allFile.nodes[0])!} />
          </header>
        </article>
        <div className="mt-6 space-y-12 lg:space-y-0 flex flex-wrap lg:gap-x-6 mb-24">
          {data.allMdx.nodes
            .filter((node) => node.fields.source === "posts")
            .map((node) => (
              <BlogCard
                href={`/${node.fields.source}/${node.slug}`}
                title={node.frontmatter.title}
                description={node.frontmatter.description}
                author={node.frontmatter.author}
                date={node.frontmatter.date}
                image={node.frontmatter.image}
                tags={node.frontmatter.tags}
                key={node.slug}
              />
            ))}
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          description
          author
          date(formatString: "YYYY-MM-DD")
          image {
            childImageSharp {
              gatsbyImageData(width: 1024)
            }
          }
          tags
        }
        id
        slug
        fields {
          source
        }
      }
    }
    allFile(filter: {name: {eq: "blog"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(width: 2048)
        }
      }
    }
  }
`

export default BlogPage
