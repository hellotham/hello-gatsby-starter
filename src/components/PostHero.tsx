import * as React from "react"
import { StaticImage, GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import Tags from "@/components/tags"

interface PostHeroProps {
  title: string
  description?: string
  author?: string
  date?: string
  image?: IGatsbyImageData
  tags?: string[]
}

const PostHero = ({
  title,
  description,
  author,
  date,
  image,
  tags,
}: PostHeroProps) => (
  <div
    className="mb-4 md:mb-0 w-full max-w-screen-xl mx-auto relative"
    style={{ height: "24em" }}
  >
    <div
      className="absolute left-0 bottom-0 w-full h-full z-10"
      style={{
        backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
      }}
    ></div>
    <GatsbyImage
      image={image!}
      alt="featured image"
      loading="eager"
      className="absolute left-0 top-0 w-full h-full z-0 object-cover"
    />
    <div className="p-4 absolute bottom-0 left-0 z-20">
      {tags ? <Tags tags={tags} /> : ''}
      <h2 className="text-4xl font-bold text-white leading-tight">{title}</h2>
      <h2 className="text-xl font-medium italic text-pink-200">
        {description}
      </h2>
      {author ? (
        <div className="flex mt-3">
          <StaticImage
            src="../images/profile-pic.jpg"
            alt="Author profile"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full mr-2 object-cover"
          />
          <div>
            <p className="font-semibold text-pink-200 text-sm">{author}</p>
            <p className="font-semibold text-pink-400 text-xs">{date}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  </div>
)
export default PostHero
