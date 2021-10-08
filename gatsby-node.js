/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// const fs = require(`fs`)
const path = require(`path`)

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
          "@": path.resolve(__dirname, "src")
      }
    }
  });
};

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions

//   createTypes(`
//     type Mdx implements Node {
//       frontmatter: MdxFrontmatter!
//     }
//     type MdxFrontmatter {
//       image: File @fileByRelativePath
//     }
//   `)
// }