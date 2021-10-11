import React from "react"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import Layout from "@/components/layout"
import Seo from "@/components/seo"
// import { ImageDataLike } from "gatsby-plugin-image"
// import BlogCard from "@/components/blogcard"
import PageHero from "@/components/PageHero"

import Image from "@/svg/undraw_Windows_re_uo4w.svg"
import { Link, graphql } from "gatsby"

import OGImage from "../images/undraw_Windows_re_uo4w.png"

interface TagsProps {
  data: {
    allMdx: {
      group: {
        fieldValue: string
        totalCount: number
      }[]
    }
  }
}

const Tags = ({ data }: TagsProps) => {
  const ogimage = {
    src: OGImage,
    width: 1342,
    height: 1024,
  }

  return (
    <Layout>
      <Seo title="Blog Tags" description="Click on each tag to view blog posts containing tag." image={ogimage} />
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
          {data.allMdx.group
            .sort((a, b) => b.totalCount - a.totalCount)
            .map(tag => (
              <Link key={tag.fieldValue} to={`/tags/${kebabCase(tag.fieldValue)}/`} className="group">
                <div className="w-full aspect-w-2 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={Image}
                    alt={tag.fieldValue + " tag"}
                    className="w-full h-full object-center object-contain group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-1 text-lg font-medium text-gray-900">
                  {tag.fieldValue}
                  <span className="mt-4 text-sm text-gray-700"> ({tag.totalCount})</span>
                </h3>
              </Link>
            ))}
        </div>
      </main>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
