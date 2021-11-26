import * as React from 'react'

import Layout from '@/components/layout'
import SEO from '@/components/seo'
import PageHero from '@/components/PageHero'
import BlogRoll from '@/components/blogroll'

import Image from '@/svg/undraw/undraw_building_websites_i78t.svg'
import { Link } from 'gatsby'

import OGImage from '@/images/undraw/undraw_building_websites_i78t.png'

interface TagProps {
  pageContext: {
    tag: string
  }
}

const TagPage = ({ pageContext }: TagProps) => {
  const tag = pageContext.tag
  const ogimage = {
    src: OGImage,
    width: 1342,
    height: 1024,
  }

  const title = `Tag: ${tag}`
  return (
    <Layout>
      <SEO
        type="tags"
        title={title}
        description={`Posts with tag [${tag}]`}
        keywords={[tag]}
        image={ogimage}
        pathname={'/tags/' + tag}
      />
      <main className="mt-10">
        <article className="post">
          <header>
            <PageHero title={title} description={`Posts with tag [${tag}]`} image={Image} />
          </header>
        </article>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <Link
              to="/tags"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
            >
              View All Tags
            </Link>
          </div>
        </div>
        <BlogRoll tag={tag} />
      </main>
    </Layout>
  )
}

export default TagPage
