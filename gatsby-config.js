module.exports = {
  siteMetadata: {
    title: `Hello Tham`,
    author: {
      name: `Hello Tham`,
      summary: `a boutique management and strategy consulting company`,
    },
    description: `Hello Tham is a boutique management consulting firm. We deliver consulting services to clients around the world. We specialise in Business and IT strategies, operating models, strategic roadmaps, enterprise architecture, analytics and business process design. We also assist our clients in implementing our recommendations, models and strategies.`,
    siteUrl: `https://hellotham.com/`,
    social: {
      twitter: `HelloThamCom`,
      linkedin: `company/hellotham`,
      github: `hellotham`,
    },
  },
  plugins: [
    `gatsby-plugin-svgr-svgo`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hello Tham`,
        short_name: `HelloTham`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#660099`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
