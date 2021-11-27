import * as React from 'react'
import { Link } from 'gatsby'

import SiteMetadata from '@/utils/sitemetadata'
import A from '@/components/a'
import Logo from '@/svg/gatsby/Gatsby_Logo.svg'

import LinkedIn from '@/svg/icons/linkedin.inline.svg'
import Facebook from '@/svg/icons/facebook.inline.svg'
import Instagram from '@/svg/icons/instagram.inline.svg'
import Twitter from '@/svg/icons/twitter.inline.svg'
import Github from '@/svg/icons/github.inline.svg'

export default function Footer() {
  const metadata = SiteMetadata().siteMetadata
  const social = metadata.social

  const socialLinks = [
    { name: 'LinkedIn', link: 'linkedin' in social ? social.linkedin : null, image: LinkedIn },
    { name: 'Facebook', link: 'facebook' in social ? social.facebook : null, image: Facebook },
    { name: 'Instagram', link: 'instagram' in social ? social.instagram : null, image: Instagram },
    { name: 'Twitter', link: 'twitter' in social ? social.twitter : null, image: Twitter },
    { name: 'Github', link: 'github' in social ? social.github : null, image: Github },
  ]

  return (
    <footer className="text-gray-600">
      <div className="container fixed bottom-0 inset-x-0 bg-gray-100 px-4 py-4 mx-auto flex items-center md:flex-row flex-col">
        <Link className="flex title-font font-medium items-center lg:justify-start justify-center text-gray-900" to="/">
          <img src={Logo} alt="Footer Logo" width="150" />
          <span className="sr-only">Logo</span>
        </Link>
        <p className="text-sm text-gray-600 md:ml-4 md:pl-4 md:border-l-2 md:border-purple-300 md:py-2 md:mt-0 mt-4">
          © {new Date().getFullYear()} 0BSD licence
          <A href="https://hellotham.com" className="ml-1" external>
            Hello Tham Pty Ltd
          </A>
        </p>
        <p className="text-sm text-gray-600 md:ml-4 md:pl-4 md:border-l-2 md:border-purple-300 md:py-2 md:mt-0 mt-4">
          <A href="/privacy" className="ml-1">
            Privacy Policy
          </A>
        </p>
        <p className="text-sm text-gray-600 md:ml-4 md:pl-4 md:border-l-2 md:border-purple-300 md:py-2 md:mt-0 mt-4">
          <A href="/rss.xml" className="ml-1" external>
            RSS
          </A>
        </p>
        <p className="text-sm text-gray-600 md:ml-4 md:pl-4 md:border-l-2 md:border-purple-300 md:py-2 md:mt-0 mt-4">
          <A href="/sitemap/sitemap-index.xml" className="ml-1" external>
            Sitemap
          </A>
        </p>
        <span className="inline-flex md:ml-auto md:mt-0 mt-4 justify-center md:justify-start">
          {socialLinks.map(s =>
            s.link ? (
              <A href={s.link} className="ml-3" external>
                <s.image className=" h-5 w-5" />
                <span className="sr-only">{s.name}</span>
              </A>
            ) : (
              ''
            )
          )}
        </span>
      </div>
    </footer>
  )
}
