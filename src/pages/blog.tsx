import * as React from "react"
import { graphql } from "gatsby"

import Layout from "@/components/layout"
import Seo from "@/components/seo"
import { ImageDataLike } from "gatsby-plugin-image"
import BlogCard from "@/components/blogcard"
import BlogHero from "@/components/bloghero"

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

export default function BlogPage ({ data }: BlogPageProps) {
  return (
    <Layout>
      <Seo title="Blog Posts" />
      <main className="mt-10">
        <article className="post">
          <header>
            <BlogHero />
          </header>
        </article>
        <div className="mt-6 space-y-12 lg:space-y-0 flex flex-wrap mb-24">
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
  }
`