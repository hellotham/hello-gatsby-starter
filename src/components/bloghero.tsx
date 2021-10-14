import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import PostHero from '@/components/PostHero'

export default function BlogHero() {
  const imagequery = useStaticQuery(graphql`
    query BlogImageQuery {
      allFile(filter: { name: { eq: "blog" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(width: 2048)
          }
        }
      }
    }
  `)

  return <PostHero url="/posts" title="Blog Posts" image={getImage(imagequery.allFile.nodes[0])!} />
}
