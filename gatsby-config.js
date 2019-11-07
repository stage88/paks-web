/* eslint-disable max-len */
module.exports = {
  siteMetadata: {
    title: 'PA & KS Contractors',
    description: 'PA & KS Contractors is a family owned Canberra Company managed by Paul & Kirsty Saunderson specialising in property related services. These include minor/major refurbishments, maintenance, repairs and project management services for commercial and domestic buildings throughout Canberra and surrounding areas.',
    keywords: 'paks, contractors',
    siteUrl: 'https://pakscontractors.com.au',
    author: {
      name: 'Sam Ilic',
      url: 'https://github.com/stage88',
      email: 'stage88@gmail.com',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://pakscontractors.com.au',
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
  ],
}
