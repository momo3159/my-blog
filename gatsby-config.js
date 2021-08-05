require('dotenv').config();
const accessToken = process.env.ACCESS_TOKEN;
const spaceId = process.env.SPACE_ID;

module.exports = {
  siteMetadata: {
    title: 'my-blog',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken,
        spaceId,
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
    {
      resolve:'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs` ,
            options: {
              classPrefix: "language-",
            }
          }
         
        ]

      }
    },
    
    `gatsby-plugin-typescript`,
    `gatsby-plugin-material-ui`,
    // {
    //    resolve: 'gatsby-source-filesystem',
    //    options: {
    //      name: 'images',
    //      path: './src/images/',
    //    },
    //    __key: 'images',
    //    ignore: [`${__dirname}/types/*.ts`]
    // },
    //"gatsby-plugin-graphql-codegen"
  ],
};
