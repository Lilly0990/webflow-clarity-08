import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogBreadcrumbs from '@/components/blog/BlogBreadcrumbs';
import AuthorCard from '@/components/blog/AuthorCard';
import SEOHead from '@/components/seo/SEOHead';
import { BlogPostSchema } from '@/components/seo/SchemaMarkup';
import { getBlogPost, type BlogPost } from '@/lib/markdown';

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
          <div className="max-w-4xl mx-auto animate-pulse">
            <div className="h-4 bg-secondary/50 rounded w-1/4 mb-8" />
            <div className="h-8 bg-secondary/50 rounded w-3/4 mb-4" />
            <div className="h-4 bg-secondary/50 rounded w-1/2 mb-8" />
            <div className="aspect-video bg-secondary/50 rounded-lg mb-8" />
            <div className="space-y-4">
              <div className="h-4 bg-secondary/50 rounded w-full" />
              <div className="h-4 bg-secondary/50 rounded w-5/6" />
              <div className="h-4 bg-secondary/50 rounded w-4/5" />
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

  const { meta, htmlContent } = post;
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
          <article className="max-w-4xl mx-auto">
            <BlogBreadcrumbs items={breadcrumbs} />

            {/* Article Header */}
            <header className="mb-8 animate-fade-in">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                <span className="text-primary font-medium">{meta.category}</span>
                <span>·</span>
                <span>{meta.readingTime} min read</span>
                <span>·</span>
                <time dateTime={meta.publishedAt}>{formattedDate}</time>
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
              <div className="aspect-video bg-secondary/50 rounded-lg overflow-hidden mb-12 animate-fade-in">
                <img
                  src={meta.featuredImage}
                  alt={meta.featuredImageAlt || meta.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Article Content */}
            <div
              className="prose prose-lg prose-invert max-w-none mb-12 animate-fade-in
                prose-headings:font-bold prose-headings:text-foreground
                prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-foreground prose-strong:font-semibold
                prose-ul:text-muted-foreground prose-ul:my-6 prose-ul:space-y-2
                prose-li:text-muted-foreground
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

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
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogArticle;
