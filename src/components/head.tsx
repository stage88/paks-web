import { siteMetadata } from '@/config/site';
import React from 'react';


const Head: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { title, description, longDescription, siteUrl, author, siteImage, keywords } = siteMetadata;

  return (
    <>
      <title>{title}</title>
      <meta name='description' content={longDescription} />
      <meta name='image' content={siteImage} />
      <meta name='keywords' content={keywords?.join(', ')} />
      <meta property='og:title' content={title} />
      <meta property='og:url' content={siteUrl} />
      <meta property='og:description' content={longDescription} />
      <meta property='og:image' content={siteImage} />
      <meta property='og:type' content='website' />
      <meta property='og:image:alt' content={description} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:url' content={siteUrl} />
      <meta name='twitter:description' content={longDescription} />
      <meta name='twitter:image' content={siteImage} />
      <meta name='twitter:image:alt' content={description} />
      <meta name='twitter:creator' content={author.name} />
      <link rel='icon' type='image/png' href={siteImage} />
      <link rel='apple-touch-icon' href={siteImage} />

      {children}
    </>
  );
};

export default Head;
