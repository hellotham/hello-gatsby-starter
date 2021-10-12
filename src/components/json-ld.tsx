import * as React from 'react'

import { Article, BreadcrumbList, ListItem, Organization, Person, WebSite } from 'schema-dts'
import { helmetJsonLdProp } from 'react-schemaorg'
import useSiteMetadata from '@/components/metadata'

import Logo from '@/images/logo.png'
import { Helmet } from 'react-helmet'

interface ArticleJsonLDProps {
  lang?: string
  title: string
  description: string
  type: string
  date?: string
  lastUpdated?: string
  keywords?: string[]
  image?: string
  pathname?: string
}

export default function ArticleJsonLD({
  lang = 'en',
  title,
  description,
  type,
  date,
  lastUpdated,
  keywords,
  image,
  pathname,
}: ArticleJsonLDProps) {
  const metadata = useSiteMetadata()
  const canonical = metadata.siteUrl + '/' + type + '/' + pathname
  const email = metadata.social.email.replace('mailto:', '')
  const year = lastUpdated ? parseInt(lastUpdated.slice(0, 4)) : 2021
  let itemList: ListItem[] = [
    {
      '@type': 'ListItem',
      item: {
        '@id': metadata.siteUrl,
        name: 'Homepage',
      },
      position: 1,
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': metadata.siteUrl + '/' + type,
        name: type,
      },
      position: 2,
    },
  ]
  if (type === 'posts' || type === 'pages') {
    itemList = itemList.concat([
      {
        '@type': 'ListItem',
        item: {
          '@id': canonical,
          name: title,
        },
        position: 3,
      },
    ])
  }

  return (
    <>
      {type == 'posts' || type == 'pages' ? (
        <Helmet
          script={[
            helmetJsonLdProp<Article>({
              '@context': 'https://schema.org',
              '@type': 'Article',
              articleSection: type,
              author: {
                '@id': metadata.siteUrl,
              },
              copyrightHolder: {
                '@id': metadata.siteUrl,
              },
              copyrightYear: year,
              creativeWorkStatus: 'Published',
              creator: {
                '@id': metadata.siteUrl,
              },
              dateCreated: date,
              dateModified: lastUpdated,
              datePublished: lastUpdated,
              description: description,
              headline: title,
              keywords: keywords ? keywords.join(', ') : type,
              image: {
                '@type': 'ImageObject',
                url: image,
              },
              inLanguage: lang,
              mainEntityOfPage: canonical,
              name: title,
              publisher: {
                '@id': metadata.siteUrl,
              },
              url: canonical,
            }),
          ]}
        />
      ) : (
        ''
      )}
      <Helmet
        script={[
          helmetJsonLdProp<WebSite>({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            about: {
              '@id': metadata.siteUrl,
            },
            audience: 'public',
            abstract: metadata.description,
            author: {
              '@id': metadata.siteUrl,
            },
            copyrightHolder: {
              '@id': metadata.siteUrl,
            },
            copyrightYear: year,
            creator: {
              '@id': metadata.siteUrl,
            },
            description: metadata.description,
            image: {
              '@type': 'ImageObject',
              url: image,
            },
            inLanguage: 'en',
            name: metadata.title,
            publisher: {
              '@id': metadata.siteUrl,
            },
            url: metadata.siteUrl,
          }),
          helmetJsonLdProp<Organization>({
            '@context': 'https://schema.org',
            '@id': metadata.siteUrl,
            '@type': 'Organization',
            address: metadata.location,
            contactPoint: {
              '@type': 'ContactPoint',
              email: email,
              telephone: metadata.social.phone.replace('tel:', ''),
            },
            description: metadata.description,
            email: email,
            founder: {
              '@id': metadata.siteUrl + '/consultants#ChrisTham',
            },
            location: metadata.location,
            image: {
              '@type': 'ImageObject',
              url: image,
            },
            logo: {
              '@type': 'ImageObject',
              url: Logo,
            },
            name: metadata.title,
            sameAs: Object.values(metadata.social),
            url: metadata.siteUrl,
          }),
          helmetJsonLdProp<BreadcrumbList>({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            description: 'Breadcrumbs list',
            itemListElement: itemList,
            numberOfItems: type === 'posts' || type === 'pages' ? 3 : 2,
            name: 'Breadcrumbs',
          }),
          helmetJsonLdProp<Person>({
            '@context': 'https://schema.org',
            '@type': 'Person',
            '@id': metadata.siteUrl + '/consultants#ChrisTham',
            name: metadata.author.name,
            worksFor: {
              '@id': metadata.siteUrl,
            },
          }),
        ]}
      />
    </>
  )
}
