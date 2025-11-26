import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogBreadcrumbs from '@/components/blog/BlogBreadcrumbs';
import AuthorCard from '@/components/blog/AuthorCard';
import TableOfContents from '@/components/blog/TableOfContents';
import KeyTakeaways from '@/components/blog/KeyTakeaways';
import FAQAccordion from '@/components/blog/FAQAccordion';
import PricingTable from '@/components/blog/PricingTable';
import SEOHead from '@/components/seo/SEOHead';
import { BlogPostSchema } from '@/components/seo/SchemaMarkup';
import { getBlogPost, type BlogPost } from '@/lib/markdown';

const ShareButtons = ({ url, title }: { url: string; title: string }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex gap-3">
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
        aria-label="Share on Twitter"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
        aria-label="Share on Facebook"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>
    </div>
  );
};

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;
      setLoading(true);
      const fetchedPost = await getBlogPost(slug);
      setPost(fetchedPost);
      setLoading(false);
    };
    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="section-padding container-custom pt-32">
          <div className="max-w-6xl mx-auto animate-pulse">
            <div className="h-4 bg-secondary/50 rounded w-1/4 mb-8" />
            <div className="grid lg:grid-cols-[1fr_280px] gap-12">
              <div>
                <div className="h-8 bg-secondary/50 rounded w-3/4 mb-4" />
                <div className="h-4 bg-secondary/50 rounded w-1/2 mb-8" />
                <div className="aspect-video bg-secondary/50 rounded-lg mb-8" />
                <div className="space-y-4">
                  <div className="h-4 bg-secondary/50 rounded w-full" />
                  <div className="h-4 bg-secondary/50 rounded w-5/6" />
                  <div className="h-4 bg-secondary/50 rounded w-4/5" />
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="h-48 bg-secondary/50 rounded-lg" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="section-padding container-custom pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <span>&larr;</span> Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const { meta, content, htmlContent } = post;
  const formattedDate = new Date(meta.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: meta.title },
  ];

  const currentUrl = `https://webf.love/blog/${meta.slug}`;

  return (
    <>
      <SEOHead
        title={meta.metaTitle}
        description={meta.metaDescription}
        canonicalUrl={meta.canonicalUrl}
        ogImage={meta.ogImage}
        ogImageAlt={meta.ogImageAlt}
        ogType="article"
        twitterCard={meta.twitterCard as 'summary' | 'summary_large_image'}
        keywords={meta.keywords}
        publishedAt={meta.publishedAt}
        updatedAt={meta.updatedAt}
        language={meta.language}
      />

      <BlogPostSchema
        title={meta.title}
        description={meta.description}
        slug={meta.slug}
        authorId={meta.author}
        publishedAt={meta.publishedAt}
        updatedAt={meta.updatedAt}
        featuredImage={meta.featuredImage}
        keywords={meta.keywords}
      />

      <div className="min-h-screen">
        <Header />

        <main className="section-padding container-custom pt-32">
          <div className="max-w-6xl mx-auto">
            <BlogBreadcrumbs items={breadcrumbs} />

            {/* 2-Column Layout */}
            <div className="grid lg:grid-cols-[1fr_280px] gap-12">
              {/* Main Content */}
              <article>
                {/* Article Header */}
                <header className="mb-8 animate-fade-in">
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                    <span className="text-primary font-medium">{meta.category}</span>
                    <span>·</span>
                    <span>{meta.readingTime} min read</span>
                    {/* Date hidden visually but kept for SEO */}
                    <time dateTime={meta.publishedAt} className="sr-only">{formattedDate}</time>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    {meta.title}
                  </h1>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {meta.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary rounded-full text-sm text-muted-foreground"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </header>

                {/* Featured Image */}
                {meta.featuredImage && (
                  <div className="aspect-video bg-secondary/50 rounded-lg overflow-hidden mb-8 animate-fade-in">
                    <img
                      src={meta.featuredImage}
                      alt={meta.featuredImageAlt || meta.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Key Takeaways */}
                {meta.keyTakeaways && meta.keyTakeaways.length > 0 && (
                  <KeyTakeaways takeaways={meta.keyTakeaways} />
                )}

                {/* Article Content */}
                <div
                  className="article-content mb-12 animate-fade-in"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />

                {/* Pricing Table (if exists) */}
                {meta.pricingTable && meta.pricingTable.length > 0 && (
                  <PricingTable plans={meta.pricingTable} title="Pricing Comparison" />
                )}

                {/* FAQ Accordion */}
                {meta.faq && meta.faq.length > 0 && (
                  <FAQAccordion items={meta.faq} />
                )}

                {/* Author Card */}
                <div className="mb-12 animate-fade-in">
                  <h3 className="text-lg font-bold mb-4">Written by</h3>
                  <AuthorCard authorId={meta.author} />
                </div>

                {/* Back to Blog */}
                <div className="border-t border-border pt-8">
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <span>&larr;</span> Back to Blog
                  </Link>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-28 space-y-6">
                  {/* Table of Contents */}
                  <TableOfContents content={content} />

                  {/* Share */}
                  <div className="bg-card border border-border rounded-lg p-5">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                      Share
                    </h4>
                    <ShareButtons url={currentUrl} title={meta.title} />
                  </div>

                  {/* Tags */}
                  <div className="bg-card border border-border rounded-lg p-5">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                      Tags
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {meta.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogArticle;
