import { graphql, useStaticQuery } from 'gatsby'
import { ImageDataLike } from 'gatsby-plugin-image'

const postQuery = graphql`
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

export type PostType = {
  frontmatter: {
    title: string
    description: string
    author: string
    date: string
    image: ImageDataLike
    tags: string[]
  }
  slug: string
}
type PostQueryType = {
  allMdx: {
    nodes: PostType[]
  }
}

const GetPosts = (tag?: string) => {
  const data: PostQueryType = useStaticQuery(postQuery)
  return tag ? data.allMdx.nodes.filter(node => node.frontmatter.tags.includes(tag)) : data.allMdx.nodes
}
export default GetPosts
