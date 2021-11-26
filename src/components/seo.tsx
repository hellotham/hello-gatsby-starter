/* eslint-disable indent */
import React from 'react'
import Helmet from 'react-helmet'
import SiteMetadata from '@/utils/sitemetadata'
import JsonLD from '@/utils/jsonld'

import defaultImage from '@/images/undraw/undraw_design_components_9vy6.png'

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

const SEO = ({
  type,
  title,
  description,
  date,
  lastUpdated,
  image,
  meta = [],
  keywords,
  pathname,
  lang = 'en',
}: SEOProps) => {
  const { siteMetadata, buildTime } = SiteMetadata()
  const metaTitle = type == 'homepage' ? title : title + ' | ' + siteMetadata.title
  const metaDescription = description || siteMetadata.description
  const metaDate = date ? date : buildTime
  const metaLastUpdated = lastUpdated ? lastUpdated : buildTime
  const metaImage = {
    src: image ? `${siteMetadata.siteUrl}${image.src}` : defaultImage,
    width: (image ? image.width : 1342).toString(),
    height: (image ? image.height : 1024).toString(),
  }
  const metaUrl = `${siteMetadata.siteUrl}${pathname}`
  const canonical = pathname ? `${siteMetadata.siteUrl}${pathname}` : siteMetadata.siteUrl

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      link={canonical ? [{ rel: 'canonical', href: canonical }] : []}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: metaTitle,
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
          property: 'og:updated_time',
          content: metaLastUpdated,
        },
        {
          name: 'twitter:creator',
          content: `@${siteMetadata.social.twitter}`,
        },
        {
          name: 'twitter:title',
          content: metaTitle,
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
                { property: 'og:image', content: metaImage.src },
                { property: 'og:image:alt', content: title },
                { property: 'og:image:width', content: metaImage.width },
                { property: 'og:image:height', content: metaImage.height },
                { name: 'twitter:image', content: metaImage.src },
                { name: 'twitter:imagealt', content: title },
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
        date: metaDate,
        lastUpdated: metaLastUpdated,
        image: metaImage,
        keywords: keywords ? keywords : [type],
        pathname: canonical,
      })}
    />
  )
}

export default SEO
