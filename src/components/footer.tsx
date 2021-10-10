import { graphql, Link, useStaticQuery } from "gatsby"
import * as React from "react"

import HelloTham from "@/svg/hellotham.svg"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          social {
            facebook
            instagram
            twitter
            linkedin
            github
          }
        }
      }
    }
  `)
  const social = data.site.siteMetadata.social

  return (
    <footer className="text-gray-600">
      <div className="container fixed bottom-0 inset-x-0 bg-pink-100 px-4 py-4 mx-auto flex items-center sm:flex-row flex-col">
        <Link className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" to="/">
          <img src={HelloTham} alt="Footer Logo" width="150" />
          <span className="sr-only">Hello Tham</span>
        </Link>
        <p className="text-sm text-gray-600 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-pink-300 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} Hello Tham Pty Ltd
          <Link to="/contactus" className="text-purple-600 ml-1" rel="noopener noreferrer" target="_blank">
            (Contact Us)
          </Link>
        </p>
        <p className="text-sm text-gray-600 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-pink-300 sm:py-2 sm:mt-0 mt-4">
          <Link to="/pages/privacy" className="text-purple-600 ml-1" rel="noopener noreferrer" target="_blank">
            Privacy Policy
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            className="text-purple-600 hover:text-pink-600"
            href={social.facebook}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="sr-only">Facebook</span>
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a
            className="ml-3 text-purple-600 hover:text-pink-600"
            href={social.twitter}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="sr-only">Twitter</span>
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a
            className="ml-3 text-purple-600 hover:text-pink-600"
            href={social.instagram}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="sr-only">Instagram</span>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a
            className="ml-3 text-purple-600 hover:text-pink-600"
            href={social.linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  )
}
