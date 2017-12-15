
module.exports = {
  siteMetadata: {
    title: `covered in slime`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'todos',
        path: `${__dirname}/src/todos`,
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
