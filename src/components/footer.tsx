import * as React from 'react'
import { Link } from 'gatsby'

import useSiteMetadata from '@/utils/metadata'
import HelloTham from '@/svg/logo/hellotham.svg'

export default function Footer() {
  const metadata = useSiteMetadata().siteMetadata
  const social = metadata.social

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
          <a
            className="ml-3 text-purple-600 hover:text-pink-600"
            href={social.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="sr-only">LinkedIn</span>
            <svg fill="currentColor" stroke="currentColor" className="w-5 h-5" viewBox="0 0 480 512">
              <path
                fill="currentColor"
                d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"
              ></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  )
}
