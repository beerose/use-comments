module.exports = {
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-code-buttons',
            options: {
              toasterText: 'Copied! 📋',
            },
          },
        ],
      },
    },
  ],
};
