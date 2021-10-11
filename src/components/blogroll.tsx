import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"
import { CalendarIcon, UserCircleIcon } from "@heroicons/react/outline"

import Tags from "@/components/tags"

const query = graphql`
  query {
    allMdx(filter: { fields: { source: { eq: "posts" } } }, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          description
          author
          date(formatString: "YYYY-MM-DD")
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          tags
        }
        slug
      }
    }
  }
`

type NodeType = {
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
      fields: { source: string }
    }[]
  }
}

interface BlogRollProps {
  tag?: string
}

const BlogRoll = ({ tag }: BlogRollProps) => {
  const data: NodeType = useStaticQuery(query)
  const posts = tag ? data.allMdx.nodes.filter(node => node.frontmatter.tags.includes(tag)) : data.allMdx.nodes

  return (
    <div className="mt-6 space-y-12 lg:space-y-0 flex flex-wrap mb-24">
      {posts.map(node => (
        <section className="p-4 md:w-1/2 lg:w-1/3">
          <div className="h-full border-1 border-pink-200 bg-white rounded-lg shadow-xl overflow-hidden p-2">
            <GatsbyImage
              image={getImage(node.frontmatter.image)!}
              loading="lazy"
              alt={node.frontmatter.title + " featured image"}
              className="relative w-full h-48 bg-white rounded-lg overflow-hidden group-hover:opacity-75 aspect-w-3 aspect-h-2 sm:h-40"
              imgClassName="w-full h-full object-center object-cover"
            />
            <div className="p-6">
              {node.frontmatter.tags ? <Tags tags={node.frontmatter.tags} /> : ""}
              <Link to={`/posts/${node.slug}`}>
                <h1 className="title-font text-xl font-bold text-purple-600 hover:text-pink-600 mt-2">
                  {node.frontmatter.title}
                </h1>
              </Link>
              <div className="flex items-center flex-wrap ">
                <span className="text-gray-500 mr-3 inline-flex items-center leading-none text-xs pr-3 py-1 border-r-2 border-pink-200">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  {node.frontmatter.date}
                </span>
                <span className="text-gray-500 inline-flex items-center leading-none text-xs">
                  <UserCircleIcon className="w-4 h-4 mr-1" />
                  {node.frontmatter.author}
                </span>
              </div>

              <p className="mt-3 italic text-sm text-gray-600">{node.frontmatter.description}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
export default BlogRoll
