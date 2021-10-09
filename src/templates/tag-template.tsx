import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "@/components/layout"
import Seo from "@/components/seo"
// import { ImageDataLike } from "gatsby-plugin-image"
import BlogCard from "@/components/blogcard"
import PageHero from "@/components/PageHero"

import Image from "@/svg/undraw_Add_post_re_174w.svg"
import { ImageDataLike } from "gatsby-plugin-image"

interface TagProps {
  pageContext: {
    tag: string
  }
}

type QueryType = {
  allMdx: {
    nodes: {
      frontmatter: {
        title: string
        description: string
        author: string
        date: string
        image: {
          publicURL: string
          relativePath: string
          childImageSharp: {
            gatsbyImageData: ImageDataLike
          }
        }
        tags: string[]
      }
      id: string
      slug: string
      fields: {
        source: string
      }
    }[]
  }
}
const TagPage = ({ pageContext }: TagProps) => {
  const tag = pageContext.tag
  const data: QueryType = useStaticQuery(graphql`
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
  `)

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
        <div className="mt-6 space-y-12 lg:space-y-0 flex flex-wrap mb-24">
          {data.allMdx.nodes
            .filter(node => node.frontmatter.tags.includes(tag))
            .map(node => (
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

export default TagPage
