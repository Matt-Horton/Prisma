/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-180997659-1`,
      },
    },
  ],
}
