/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
//   const data: any = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

  // const siteTitle: string = data.site.siteMetadata?.title || `Title`

  return (
    <>
      <Header />
      <div className="max-w-screen-xl mx-auto">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
