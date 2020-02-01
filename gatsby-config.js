module.exports = {
  siteMetadata: {
    lang: 'en',
    title: 'Vasco Ramos | Computer Science Student',
    description: "I'm Vasco, a 20 years old Computer Science Student at UA, from Portugal.",
    author: 'Vasco Ramos',
    siteUrl: 'https://vascoalramos.me',
    imageShare: 'share.png',
    email: 'hello@vascoalramos.me',
    social: [
      { name: 'linkedin', url: 'https://linkedin.com/in/vascoalramos' },
      { name: 'github', url: 'https://github.com/vascoalramos' },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
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
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-156556339-1`,
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Vasco Ramos | Computer Science Student',
        short_name: 'Vasco Ramos',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#02aab0',
        display: 'standalone',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
  ],
};
