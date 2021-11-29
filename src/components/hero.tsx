import * as React from 'react'

// Images (SVG)
import FeaturedImage from '@/svg/undraw/undraw_design_inspiration_fmjm.svg'
import { Link } from 'gatsby'

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <main className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="text-center sm:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl text-left">
                <span className="block xl:inline">hello</span>{' '}
                <span className="block text-purple-700 xl:inline">Gatsby Starter</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Hello Gatsby Starter is a full featured corporate/marketing/blog starter theme written in Typescript,
                TailwindCSS and Gatsby. It supports MDX based pages and blog posts.
              </p>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                It has full SEO support for Facebook (Open Graph) tags, Twitter Cards and Schema/JSON-LD metadata. It
                also features fully auto generated RSS feed and sitemap for search engine indexing.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/about"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
                  >
                    About
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://github.com/sponsors/hellotham"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-800 bg-purple-100 hover:bg-purple-200 md:py-4 md:text-lg md:px-10"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Sponsor Us
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-purple-100">
        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={FeaturedImage} alt="" />
      </div>
    </div>
  )
}
