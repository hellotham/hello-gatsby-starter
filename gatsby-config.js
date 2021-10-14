module.exports = {
  siteMetadata: {
    title: 'Hello Tham',
    author: {
      name: 'Chris Tham',
      url: 'https://christham.net',
      summary: 'Founder of Hello Tham',
    },
    description:
      'Hello Tham is a boutique management consulting firm. We specialise in Business and IT strategies, operating models, strategic roadmaps, enterprise architecture, analytics and business process design.',
    siteUrl: 'https://hellotham.gatsbyjs.io',
    location: 'Sydney, NSW, Australia',
    social: {
      email: 'mailto:info@hellotham.com',
      phone: 'tel:+61413008577',
      facebook: 'https://www.facebook.com/HelloThamCom',
      instagram: 'https://www.instagram.com/HelloThamCom/',
      twitter: 'https://twitter.com/HelloThamCom',
      linkedin: 'https://www.linkedin.com/company/17950469',
      github: 'https://github.com/hellotham',
    },
  },
  plugins: [
    'gatsby-plugin-svgr-svgo',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx-source-name',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages/`,
        ignore: ['__generated__/*'],
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        // defaultLayouts: {
        //   posts: require.resolve("./src/templates/mdx-template.tsx"),
        //   default: require.resolve("./src/templates/mdx-template.tsx"),
        // },
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2048,
              linkImagesToOriginal: false,
            },
          },
          { resolve: 'gatsby-remark-copy-linked-files' },
          { resolve: 'gatsby-remark-smartypants' },
        ],
        remarkPlugins: [{ resolve: 'remark-slug' }, { resolve: '@mapbox/rehype-prism' }],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Hello Tham',
        short_name: 'HelloTham',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#660099',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-feed-mdx',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                author {
                  name
                }
                siteUrl
                site_url: siteUrl
              }
              buildTime
            }
            allFile(filter: {relativePath: {eq: "hellotham_logo.png"}}) {
              nodes {
                childImageSharp {
                  resize(width: 1200) {
                    src
                  }
                }
              }
            }
          }
        `,
        setup(options) {
          return Object.assign({}, options.query, {
            title: options.query.site.siteMetadata.title,
            feed_url: options.query.site.siteMetadata.siteUrl + '/rss.xml',
            image_url:
              options.query.site.siteMetadata.siteUrl + options.query.allFile.nodes[0].childImageSharp.resize.src,
            author: options.query.site.siteMetadata.author.name,
            managingEditor: options.query.site.siteMetadata.author.name,
            webMaster: options.query.site.siteMetadata.author.name,
            copyright: options.query.site.buildTime.slice(0, 4) + ' ' + options.query.site.siteMetadata.title,
            language: 'en',
            pubDate: options.query.site.buildTime,
          })
        },
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  author: edge.node.frontmatter.author,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + '/posts/' + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + '/posts/' + edge.node.slug,
                  enclosure: {
                    url: site.siteMetadata.siteUrl + edge.node.frontmatter.image.childImageSharp.resize.src,
                  },
                  categories: edge.node.frontmatter.tags,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
              {
                allMdx(
                  filter: { fields: { source: { eq: "posts" } } }
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      frontmatter {
                        title
                        description
                        author
                        date
                        image {
                          childImageSharp {
                            resize(width: 1200) {
                              src
                            }
                          }
                        }
                        tags
                      }
                      html
                      slug
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            // match: '^/posts/',
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
    'gatsby-plugin-gatsby-cloud',
  ],
}
