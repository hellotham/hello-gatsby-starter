import { Article, BreadcrumbList, ListItem, Organization, Person, WebSite } from 'schema-dts'
import { helmetJsonLdProp } from 'react-schemaorg'
import useSiteMetadata from '@/utils/metadata'

import Logo from '@/images/logo.png'
import defaultImage from '@/images/home.jpg'

interface JsonLDProps {
  type: string
  title: string
  description: string
  date?: string
  lastUpdated?: string
  keywords?: string[]
  image?: {
    src: string
    height: number
    width: number
  }
  pathname?: string
  lang?: string
}

export default function JsonLD({
  type,
  title,
  description,
  date,
  lastUpdated,
  image,
  keywords,
  pathname,
  lang = 'en',
}: JsonLDProps) {
  const metadata = useSiteMetadata()
  const canonical = metadata.siteUrl + '/' + type + '/' + pathname
  const email = metadata.social.email.replace('mailto:', '')
  const year = lastUpdated ? parseInt(lastUpdated.slice(0, 4)) : 2021
  const metaImage = image ? image.src : defaultImage
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
  let jsonld = [
    helmetJsonLdProp<WebSite>({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      about: {
        '@id': metadata.siteUrl,
      },
      audience: 'public',
      abstract: metadata.description,
      author: {
        '@id': metadata.author.url,
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
        url: metaImage,
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
        '@id': metadata.author.url,
      },
      location: metadata.location,
      image: {
        '@type': 'ImageObject',
        url: metaImage,
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
      '@id': metadata.author.url,
      name: metadata.author.name,
      worksFor: {
        '@id': metadata.siteUrl,
      },
    }),
  ]
  if (type == 'posts' || type == 'pages') {
    jsonld = [
      helmetJsonLdProp<Article>({
        '@context': 'https://schema.org',
        '@type': 'Article',
        articleSection: type,
        author: {
          '@id': metadata.author.url,
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
          url: metaImage,
        },
        inLanguage: lang,
        mainEntityOfPage: canonical,
        name: title,
        publisher: {
          '@id': metadata.siteUrl,
        },
        url: canonical,
      }),
    ].concat(jsonld)
  }

  return jsonld
}
