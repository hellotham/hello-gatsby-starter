import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

type FileImageProps = {
  filename: string
  alt: string
  className?: string
}

const FileImage = ({ filename, alt, className }: FileImageProps) => (
  <StaticQuery
    query={graphql`
      query {
        images: allImageSharp {
          nodes {
            parent {
              ... on File {
                name
                relativePath
              }
            }
            gatsbyImageData(width: 240)
          }
        }
      }
    `}
    render={data => {
      const image = data.images.nodes.find((n: { parent: { relativePath: string | string[] } }) => {
        return n.parent.relativePath.includes(filename)
      })

      return image ? <GatsbyImage alt={alt} image={getImage(image)!} imgClassName={className!} /> : null
    }}
  />
)
export default FileImage
