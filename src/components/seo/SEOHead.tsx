import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  keywords?: string[];
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
  language?: 'en' | 'uk';
}

const SEOHead = ({
  title,
  description,
  canonicalUrl,
  ogImage = '/images/og-default.jpg',
  ogImageAlt = 'webf.love',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  keywords = [],
  author,
  publishedAt,
  updatedAt,
  language = 'en',
}: SEOHeadProps) => {
  const siteUrl = 'https://webf.love';
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : undefined;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      {author && <meta name="author" content={author} />}

      {/* Canonical URL */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="webf.love" />
      <meta property="og:locale" content={language === 'uk' ? 'uk_UA' : 'en_US'} />
      {fullCanonicalUrl && <meta property="og:url" content={fullCanonicalUrl} />}

      {/* Article specific Open Graph */}
      {ogType === 'article' && publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}
      {ogType === 'article' && updatedAt && (
        <meta property="article:modified_time" content={updatedAt} />
      )}
      {ogType === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {/* Language */}
      <html lang={language} />
    </Helmet>
  );
};

export default SEOHead;
