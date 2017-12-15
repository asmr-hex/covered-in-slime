module.exports = {
  siteMetadata: {
    title: `covered in slime`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-katex`,
          `gatsby-remark-prismjs`,
        ],
      },
    },
  ],
  pathPrefix: `/covered-in-slime`,
}
