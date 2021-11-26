import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Tags from '@/components/tags'
import ShareButtons from '@/components/sharebuttons'
import Img, { ImgType } from '@/components/img'

interface PostHeroProps {
  url: string
  title: string
  description: string
  author: string
  date: string
  image: ImgType
  tags: string[]
}

const PostHero = ({ url, title, description, author, date, image, tags }: PostHeroProps) => (
  <div className="mb-4 md:mb-0 w-full max-w-screen-xl mx-auto relative h-96">
    <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-t from-gray-700"></div>
    <Img
      image={image}
      alt="featured image"
      className="absolute left-0 w-full h-full top-0 z-0"
      imgClassName="object-cover"
    />
    <div className="p-4 absolute bottom-0 left-0 z-20">
      {tags ? <Tags tags={tags} /> : ''}
      <h2 className="text-4xl font-bold text-white leading-tight">{title}</h2>
      <h2 className="text-xl font-medium italic text-purple-200">{description}</h2>
      {author ? (
        <div className="flex mt-3">
          <StaticImage
            src="../images/gatsby/Gatsby_Monogram.png"
            alt="Author profile"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full mr-2 object-cover"
          />
          <div>
            <p className="font-semibold text-purple-200 text-sm">{author}</p>
            <p className="font-semibold text-purple-400 text-xs">{date?.slice(0, 10)}</p>
          </div>
        </div>
      ) : (
        ''
      )}
      <p className="mt-4 font-semibold text-purple-200 text-sm">Share this post on:</p>
      <ShareButtons
        url={url}
        title={title}
        description={description ? description : 'Check out my new post!'}
        tags={tags ? tags : ['Post']}
      />
    </div>
  </div>
)
export default PostHero
