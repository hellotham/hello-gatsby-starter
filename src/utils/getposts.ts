import { graphql, useStaticQuery } from 'gatsby'
import { ImgType } from '@/components/img'

const postQuery = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { slug: { regex: "/^post/" }, frontmatter: { published: { eq: true } } }
    ) {
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
            extension
            publicURL
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
    image: ImgType
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
  const posts = data.allMdx.nodes.filter(node => new Date(node.frontmatter.date) <= new Date())
  return tag ? posts.filter(node => node.frontmatter.tags.includes(tag)) : posts
}
export default GetPosts
