import { Helmet } from 'react-helmet-async';
import { getAuthorById } from '@/data/authors';

interface BlogPostSchemaProps {
  title: string;
  description: string;
  slug: string;
  authorId: string;
  publishedAt: string;
  updatedAt: string;
  featuredImage: string;
  keywords: string[];
  wordCount?: number;
}

interface BreadcrumbItem {
  name: string;
  url?: string;
}

export const BlogPostSchema = ({
  title,
  description,
  slug,
  authorId,
  publishedAt,
  updatedAt,
  featuredImage,
  keywords,
  wordCount = 1000,
}: BlogPostSchemaProps) => {
  const siteUrl = 'https://webf.love';
  const author = getAuthorById(authorId);
  const fullImageUrl = featuredImage.startsWith('http') ? featuredImage : `${siteUrl}${featuredImage}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: fullImageUrl,
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: {
      '@type': 'Person',
      name: author?.name || 'webf.love Team',
      url: author?.social?.linkedin || siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'webf.love',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${slug}`,
    },
    wordCount: wordCount,
    keywords: keywords.join(', '),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export const BreadcrumbSchema = ({ items }: { items: BreadcrumbItem[] }) => {
  const siteUrl = 'https://webf.love';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: `${siteUrl}${item.url}` }),
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export const OrganizationSchema = () => {
  const siteUrl = 'https://webf.love';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'webf.love',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'Professional Webflow development services for businesses and agencies.',
    sameAs: [
      'https://twitter.com/webflove',
      'https://linkedin.com/company/webflove',
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default BlogPostSchema;
