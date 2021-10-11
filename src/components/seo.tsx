/* eslint-disable prettier/prettier */
import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

interface SEOProps {
  description?: string
  lang?: string
  image?: {
    src: string
    height: number
    width: number
  }
  meta?: {
    property: string
    content: string
  }[]
  keywords?: string[]
  title: string
  pathname?: string
}
function SEO({ description = "", lang = "en", image, meta = [], keywords = [], title, pathname = "" }: SEOProps) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || data.site.siteMetadata.description
        const metaImage = image && image.src ? `${data.site.siteMetadata.siteUrl}${image.src}` : null
        const metaUrl = `${data.site.siteMetadata.siteUrl}${pathname}`
        const canonical = pathname ? `${data.site.siteMetadata.siteUrl}${pathname}` : null
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            link={canonical ? [{ rel: "canonical", href: canonical }] : []}
            meta={[
              {
                name: "description",
                content: metaDescription,
              },
              {
                property: "og:title",
                content: title,
              },
              {
                property: "og:url",
                content: metaUrl,
              },
              {
                property: "og:description",
                content: metaDescription,
              },
              {
                property: "og:type",
                content: "website",
              },
              {
                name: "twitter:creator",
                content: `@${data.site.siteMetadata.social.twitter}`,
              },
              {
                name: "twitter:title",
                content: title,
              },
              {
                name: "twitter:description",
                content: metaDescription,
              },
              // {
              //   name: "google-site-verification",
              //   content: "QlRmuLQWttdkbKlZ0ZwIBX3xv0M8ouqTW3wE2Eg_jKI",
              // },
            ]
              .concat(
                metaImage
                  ? [
                    { property: "og:image", content: metaImage },
                    { property: "og:image:alt", content: title },
                    { property: "og:image:width", content: image!.width },
                    { property: "og:image:height", content: image!.height },
                    { name: "twitter:card", content: "summary_large_image" },
                  ]
                  : [{ name: "twitter:card", content: "summary" }]
              )
              .concat(keywords.length > 0 ? { name: "keywords", content: keywords.join(", ") } : [])
              .concat(meta)}
          />
        )
      }}
    />
  )
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        siteUrl
        description
        author {
          name
          summary
        }
        social {
          twitter
        }
      }
    }
  }
`
