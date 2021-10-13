import React from 'react'

// Utilities
import kebabCase from 'lodash/kebabCase'

// Components
import Layout from '@/components/layout'
import SEO from '@/components/seo'
import PageHero from '@/components/PageHero'

import Image from '@/svg/undraw/undraw_Windows_re_uo4w.svg'
import { Link } from 'gatsby'

import OGImage from '@/images/undraw_Windows_re_uo4w.png'
import GetTags from '@/utils/gettags'

const Tags = () => {
  const tags = GetTags()
  const ogimage = {
    src: OGImage,
    width: 1342,
    height: 1024,
  }

  return (
    <Layout>
      <SEO
        type="pages"
        title="Blog Tags"
        description="Click on each tag to view blog posts containing tag."
        image={ogimage}
        pathname="/tags"
      />
      <main className="mt-10">
        <article className="post">
          <header>
            <PageHero
              title="Blog Tags"
              description="Click on each tag to view blog posts containing tag."
              image={Image}
            />
          </header>
        </article>
        <div className="mt-6 mb-24 grid grid-cols-2 gap-y-10 sm:grid-cols-3 md:grid-cols-4 gap-x-6 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8">
          {tags
            .sort((a, b) => b.count - a.count)
            .map(tag => (
              <Link key={tag.tag} to={`/tags/${kebabCase(tag.tag)}/`} className="group">
                <div className="w-full aspect-w-2 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={Image}
                    alt={tag.tag + ' tag'}
                    className="w-full h-full object-center object-contain group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-1 text-lg font-medium text-purple-600 hover:text-pink-600">
                  {tag.tag}
                  <span className="mt-4 text-sm font-base text-gray-500"> ({tag.count})</span>
                </h3>
              </Link>
            ))}
        </div>
      </main>
    </Layout>
  )
}

export default Tags
