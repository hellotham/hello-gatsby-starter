import * as React from 'react'
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'

export type ImgType = ImageDataLike & {
  childImageSharp: {
    resize: {
      src: string
      width: number
      height: number
      aspectRatio: number
      originalName: string
    }
  }
  extension: string
  publicURL: string
}

interface ImageProps {
  image: ImgType
  alt: string
  className: string
  imgClassName: string
}

const Img = ({ image, alt, className, imgClassName }: ImageProps) => {
  if (image.extension == 'svg') {
    return (
      <div className={className}>
        <img src={image.publicURL} alt={alt} className={imgClassName} />
      </div>
    )
  } else {
    return (
      <GatsbyImage
        image={getImage(image as ImageDataLike)!}
        loading="lazy"
        alt={alt}
        className={className}
        imgClassName={imgClassName}
      />
    )
  }
}
export default Img
