module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tldd`,
    title:`my First Gatsby Site`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ],
}
