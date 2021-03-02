module.exports = {
  siteMetadata: {
    title: 'my-blog',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: '',
        spaceId: '',
      },
    },
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    //'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    //'gatsby-plugin-sitemap',
    //'gatsby-transformer-sharp',
    `gatsby-plugin-typescript`,
    `gatsby-plugin-material-ui`
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'images',
    //     path: './src/images/',
    //   },
    //   __key: 'images',
    //   ignore: [`${__dirname}/types/*.ts`] 
    // },
    //"gatsby-plugin-graphql-codegen"
  ],
};