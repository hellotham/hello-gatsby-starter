import * as React from "react"
import { graphql } from "gatsby"

import Layout from "@/components/layout"
import Seo from "@/components/seo"
// import { ImageDataLike } from "gatsby-plugin-image"
import BlogCard from "@/components/blogcard"
import PageHero from "@/components/PageHero"

import Image from "@/svg/undraw_design_components_9vy6-2.svg"

type QueryType = {
  allMdx: {
    nodes: {
      frontmatter: {
        title: string
        description: string
        author: string
        date: string
        image: { publicURL: string }
        // image: ImageDataLike
        tags: string[]
      }
      id: string
      slug: string
      fields: { source: string }
    }[]
  }
}

const BlogPage = ({ data }: { data: QueryType }) => {
  return (
    <Layout>
      <Seo title="Blog Posts" />
      <main className="mt-10">
        <article className="post">
          <header>
            <PageHero title="Blog Posts" description="Articles published from time to time" image={Image} />
          </header>
        </article>
        <div className="mt-6 space-y-12 lg:space-y-0 flex flex-wrap mb-24">
          {data.allMdx.nodes.map(node => (
            <BlogCard
              key={node.slug}
              href={`/${node.fields.source}/${node.slug}`}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              author={node.frontmatter.author}
              date={node.frontmatter.date}
              image={node.frontmatter.image}
              tags={node.frontmatter.tags}
            />
          ))}
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(filter: { fields: { source: { eq: "posts" } } }, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          description
          author
          date(formatString: "YYYY-MM-DD")
          image {
            publicURL
            relativePath
            childImageSharp {
              gatsbyImageData
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

export default BlogPage
