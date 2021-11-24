import * as React from 'react'
import { Link } from 'gatsby'

import Tags from '@/components/tags'
import Img from '@/components/img'

import GetPosts from '@/utils/getposts'

export default function LatestArticles() {
  const posts = GetPosts()
  const post = posts[0]
  const otherPosts = posts.slice(1, 5)

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-8 sm:py-12 lg:py-16 lg:max-w-none">
          <div className="flex flex-row items-center">
            <h2 className="text-2xl md:text-4xl font-extrabold text-purple-800">Our Latest Articles</h2>
            <Link
              to={'/blog'}
              className="inline-block px-2 py-2 md:px-6 md:py-3 mt-2 ml-4 rounded-md bg-purple-600 hover:bg-pink-600 text-white font-bold text-base md:text-lg"
            >
              All Articles
            </Link>
            <Link
              to={'/tags'}
              className="inline-block px-2 py-2 md:px-6 md:py-3 mt-2 ml-4 rounded-md bg-purple-600 hover:bg-pink-600 text-white font-bold text-base md:text-lg"
            >
              Tags
            </Link>
          </div>
          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-6">
            <div className="mb-4 lg:mb-0  p-4 lg:p-0 relative rounded block xl:col-span-2">
              <Link to={`/${post.slug}`}>
                <span className="sr-only">{post.frontmatter.title}</span>
                <Img
                  image={post.frontmatter.image}
                  alt={post.frontmatter.title + ' featured image'}
                  className="rounded-md"
                  imgClassName="w-full h-64 md:h-80"
                />
              </Link>
              <div className="mt-4">
                <Tags tags={post.frontmatter.tags} />
              </div>
              <Link to={`/${post.slug}`}>
                <h1 className="text-purple-600 hover:text-pink-600 text-4xl font-bold mt-2 mb-2 leading-tight">
                  {post.frontmatter.title}
                </h1>
              </Link>
              <p className="text-gray-600 mb-4">{post.frontmatter.description}</p>
              <Link
                to={`/${post.slug}`}
                className="inline-block px-6 py-3 mt-2 rounded-md bg-purple-600 hover:bg-pink-600 text-white"
              >
                Read more
                <span className="sr-only">{post.frontmatter.title}</span>
              </Link>
            </div>
            <div className="w-full">
              {otherPosts.map(post => (
                <Link to={`/${post.slug}`}>
                  <div className="rounded w-full md:grid md:grid-cols-3 mb-10">
                    <Img
                      image={post.frontmatter.image}
                      alt={post.frontmatter.title + ' featured image'}
                      className="block lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                      imgClassName="object-fit"
                    />
                    <div className="bg-white rounded px-4 md:col-span-2">
                      <Tags tags={post.frontmatter.tags} />
                      <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-2">{post.frontmatter.title}</div>
                      <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                        {post.frontmatter.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
