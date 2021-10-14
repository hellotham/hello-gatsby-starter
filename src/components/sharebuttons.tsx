import * as React from 'react'

import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share'
import SiteMetadata from '@/utils/sitemetadata'

interface ShareButtonsProps {
  title: string
  description: string
  url: string
  tags: string[]
}
const ShareButtons = ({ title, description, url, tags }: ShareButtonsProps) => {
  // remove any non-alphanumeric characters
  const hashtags = tags.map(t => t.replace(/[^a-zA-Z0-9]+/g, ''))
  const siteMetadata = SiteMetadata().siteMetadata
  const twitterHandle = siteMetadata.social.twitter.replace('https://twitter.com/', '')
  const path = siteMetadata.siteUrl + url

  return (
    <>
      <TwitterShareButton title={title} url={path} via={twitterHandle} hashtags={hashtags} className="mr-2">
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <FacebookShareButton title={title} url={path} quote={description} hashtag={hashtags[0]} className="mr-2">
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <LinkedinShareButton title={title} url={path} summary={description} source={siteMetadata.title} className="mr-2">
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>
      <EmailShareButton title={title} url={path} body={description} subject={title}>
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
    </>
  )
}
export default ShareButtons
