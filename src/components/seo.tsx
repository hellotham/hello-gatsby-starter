/* eslint-disable indent */
import React from 'react'
import Helmet from 'react-helmet'
import useSiteMetadata from '@/utils/metadata'
import JsonLD from '@/utils/jsonld'

interface SEOProps {
  type: string
  title: string
  description?: string
  date?: string
  lastUpdated?: string
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
  pathname?: string
  lang?: string
}
function SEO({
  type,
  title,
  description = '',
  date,
  lastUpdated,
  image,
  meta = [],
  keywords,
  pathname = '',
  lang = 'en',
}: SEOProps) {
  const metadata = useSiteMetadata()
  const metaDescription = description || metadata.description
  const metaImage = image && image.src ? `${metadata.siteUrl}${image.src}` : null
  const metaUrl = `${metadata.siteUrl}${pathname}`
  const canonical = pathname ? `${metadata.siteUrl}${pathname}` : null

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${metadata.title}`}
      link={canonical ? [{ rel: 'canonical', href: canonical }] : []}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:url',
          content: metaUrl,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:creator',
          content: `@${metadata.social.twitter}`,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
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
                { property: 'og:image', content: metaImage },
                { property: 'og:image:alt', content: title },
                { property: 'og:image:width', content: image!.width.toString() },
                { property: 'og:image:height', content: image!.height.toString() },
                { name: 'twitter:card', content: 'summary_large_image' },
              ]
            : [{ name: 'twitter:card', content: 'summary' }]
        )
        .concat(keywords && keywords.length > 0 ? { name: 'keywords', content: keywords.join(', ') } : [])
        .concat(meta)}
      script={JsonLD({
        title: title,
        description: metaDescription,
        type: type,
        date: date,
        lastUpdated: lastUpdated,
        image: image,
        keywords: keywords,
        pathname: pathname,
      })}
    />
  )
}

export default SEO
