/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
actions.setWebpackConfig({
    resolve: {
    alias: {
        "@": path.resolve(__dirname, "src")
    }
    }
});
};
