import * as React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Image from '@/svg/undraw/undraw_page_not_found_re_e9o6.svg'
import OGImage from '@/images/undraw/undraw_Page_not_found_re_e9o6.png'

const NotFoundPage = () => (
  <Layout>
    <SEO
      type="404"
      title="404: Not found"
      description="You just hit a route that doesn&#39;t exist... the sadness."
      image={OGImage}
      pathname="/"
    />
    <PageHero
      title="404: Not Found"
      description="You just hit a route that doesn&#39;t exist... the sadness."
      image={Image}
    />
  </Layout>
)

export default NotFoundPage
