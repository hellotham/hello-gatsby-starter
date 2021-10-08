import * as React from "react"

import { Link } from "gatsby"
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"
import { CalendarIcon, UserCircleIcon } from "@heroicons/react/outline"

import Tags from "@/components/tags"

interface BlogCardProps {
  href: string
  title: string
  description: string
  author: string
  date: string
  image: ImageDataLike
  tags: string[]
}

const BlogCard = ({ href, title, description, author, date, image, tags }: BlogCardProps) => {
  return (
    <section className="p-4 md:w-1/2 lg:w-1/3">
      <Link to={href}>
        <a>
          <div className="h-full border-1 border-pink-200 bg-white rounded-lg shadow-xl overflow-hidden p-2">
            <div className="relative w-full h-48 bg-white rounded-lg overflow-hidden group-hover:opacity-75 aspect-w-3 aspect-h-2 sm:h-40">
              <GatsbyImage
                image={getImage(image)!}
                loading="eager"
                alt={title + " featured image"}
                imgClassName="w-full h-full object-center object-cover"
              />
            </div>
            <div className="p-6">
              {tags ? <Tags tags={tags} /> : ""}
              <h1 className="title-font text-2xl font-bold text-rosely10 hover:text-rosely9 mt-2">{title}</h1>
              <div className="flex items-center flex-wrap ">
                <span className="text-rosely1 mr-3 inline-flex items-center leading-none text-xs pr-3 py-1 border-r-2 border-rosely7">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  {date}
                </span>
                <span className="text-rosely1 inline-flex items-center leading-none text-xs">
                  <UserCircleIcon className="w-4 h-4 mr-1" />
                  {author}
                </span>
              </div>

              <p className="mt-3 italic text-sm text-rosely1">{description}</p>
            </div>
          </div>
        </a>
      </Link>
    </section>
  )
}
export default BlogCard
