module.exports = {
  siteMetadata: {
    title: "Hello Tham",
    author: {
      name: "Hello Tham",
      url: "https://hellotham.com",
      summary: "a boutique management and strategy consulting company",
    },
    description:
      "Hello Tham is a boutique management consulting firm. We deliver consulting services to clients around the world. We specialise in Business and IT strategies, operating models, strategic roadmaps, enterprise architecture, analytics and business process design. We also assist our clients in implementing our recommendations, models and strategies.",
    siteUrl: "https://hellotham.com/",
    social: {
      facebook: "https://www.facebook.com/HelloThamCom",
      instagram: "https://www.instagram.com/HelloThamCom/",
      twitter: "https://twitter.com/HelloThamCom",
      linkedin: "https://www.linkedin.com/company/17950469",
      github: "https://github.com/hellotham",
    },
  },
  plugins: [
    "gatsby-plugin-svgr-svgo",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx-source-name",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages/`,
        ignore: ["__generated__/*"],
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        // defaultLayouts: {
        //   posts: require.resolve("./src/templates/mdx-template.tsx"),
        //   default: require.resolve("./src/templates/mdx-template.tsx"),
        // },
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 2048,
              linkImagesToOriginal: false,
            },
          },
          { resolve: "gatsby-remark-copy-linked-files" },
          { resolve: "gatsby-remark-smartypants" },
        ],
        remarkPlugins: [{ resolve: "remark-slug" }, { resolve: "@mapbox/rehype-prism" }],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Hello Tham",
        short_name: "HelloTham",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#660099",
        display: "minimal-ui",
        icon: "src/images/logo.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-robots-txt",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
