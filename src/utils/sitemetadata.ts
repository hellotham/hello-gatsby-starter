import { graphql, useStaticQuery } from 'gatsby'

export type SiteMetadataType = {
  siteMetadata: {
    title: string
    author: {
      name: string
      url: string
      summary: string
    }
    description: string
    siteUrl: string
    location: string
    social: {
      email: string
      phone: string
      facebook: string
      instagram: string
      twitter: string
      linkedin: string
      github: string
    }
  }
  buildTime: string
}

const SiteMetadata = (): SiteMetadataType => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            author {
              name
              url
              summary
            }
            description
            siteUrl
            location
            social {
              email
              phone
              facebook
              instagram
              twitter
              linkedin
              github
            }
          }
          buildTime
        }
      }
    `
  )
  return site
}

export default SiteMetadata
