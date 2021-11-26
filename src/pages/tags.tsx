import React from 'react'

// Utilities
import kebabCase from 'lodash/kebabCase'

// Components
import Layout from '@/components/layout'
import SEO from '@/components/seo'
import PageHero from '@/components/PageHero'
import { Link } from 'gatsby'
import {
  jupiter,
  cutout,
  pianoMan,
  pieFactory,
  graphPaper,
  charlieBrown,
  autumn,
  temple,
  deathStar,
  churchOnSunday,
  overlappingHexagons,
  bamboo,
  bathroomFloor,
  corkScrew,
  happyIntersection,
  kiwi,
  lips,
  lisbon,
  steelBeams,
  tinyCheckers,
  fancyRectangles,
  heavyRain,
  cage,
  connections,
  flippedDiamonds,
  houndstooth,
  morphingDiamonds,
  zigZag,
  aztec,
  bankNote,
  boxes,
  diagonalLines,
  endlessClouds,
  eyes,
  groovy,
  melt,
  parkayFloor,
  pixelDots,
  signal,
  wallpaper,
} from 'hero-patterns'

import GetTags from '@/utils/gettags'

import Image from '@/svg/undraw/undraw_Windows_re_uo4w.svg'
import OGImage from '@/images/undraw/undraw_Windows_re_uo4w.png'

const patterns = [
  steelBeams('#9c92ac', 0.5),
  jupiter('#9c92ac', 0.5),
  cutout('#9c92ac', 0.5),
  pianoMan('#9c92ac', 0.5),
  pieFactory('#9c92ac', 0.5),
  graphPaper('#9c92ac', 0.5),
  charlieBrown('#9c92ac', 0.5),
  autumn('#9c92ac', 0.5),
  temple('#9c92ac', 0.5),
  deathStar('#9c92ac', 0.5),
  churchOnSunday('#9c92ac', 0.5),
  overlappingHexagons('#9c92ac', 0.5),
  bamboo('#9c92ac', 0.5),
  bathroomFloor('#9c92ac', 0.5),
  corkScrew('#9c92ac', 0.5),
  happyIntersection('#9c92ac', 0.5),
  kiwi('#9c92ac', 0.5),
  lips('#9c92ac', 0.5),
  lisbon('#9c92ac', 0.5),
  tinyCheckers('#9c92ac', 0.5),
  fancyRectangles('#9c92ac', 0.5),
  heavyRain('#9c92ac', 0.5),
  cage('#9c92ac', 0.5),
  connections('#9c92ac', 0.5),
  flippedDiamonds('#9c92ac', 0.5),
  houndstooth('#9c92ac', 0.5),
  morphingDiamonds('#9c92ac', 0.5),
  zigZag('#9c92ac', 0.5),
  aztec('#9c92ac', 0.5),
  bankNote('#9c92ac', 0.5),
  boxes('#9c92ac', 0.5),
  diagonalLines('#9c92ac', 0.5),
  endlessClouds('#9c92ac', 0.5),
  eyes('#9c92ac', 0.5),
  groovy('#9c92ac', 0.5),
  melt('#9c92ac', 0.5),
  parkayFloor('#9c92ac', 0.5),
  pixelDots('#9c92ac', 0.5),
  signal('#9c92ac', 0.5),
  wallpaper('#9c92ac', 0.5),
]

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
        type="page"
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
        <div className="mt-6 mb-24 grid grid-cols-2 gap-y-4 sm:grid-cols-3 md:grid-cols-4 gap-x-4 lg:grid-cols-5 xl:grid-cols-6 xl:gap-y-6 xl:gap-x-6">
          {tags
            .sort((a, b) => b.count - a.count)
            .map((tag, i) => (
              <Link key={tag.tag} to={`/tags/${kebabCase(tag.tag)}/`} className="group">
                <section
                  className="relative w-full h-24 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
                  style={{
                    backgroundColor: '#dfdbe5',
                    // backgroundImage: `url(${OGImage})`,
                    backgroundImage: patterns[i % patterns.length],
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                  <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                    <h3 className="text-center text-white text-2xl font-bold">
                      <span className="absolute inset-0"></span>
                      {tag.tag}
                    </h3>
                    <p className="text-center text-gray-200 text-sm font-medium">&nbsp;({tag.count})</p>
                  </div>
                </section>
              </Link>
            ))}
        </div>
      </main>
    </Layout>
  )
}

export default Tags
