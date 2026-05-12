import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/blog/BlogCard';
import BlogBreadcrumbs from '@/components/blog/BlogBreadcrumbs';
import SEOHead from '@/components/seo/SEOHead';
import { getAllBlogPosts, getCategories, getBlogPostsByCategory, type BlogPost } from '@/lib/markdown';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const categories = getCategories();

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const fetchedPosts = await getBlogPostsByCategory(activeCategory);
      setPosts(fetchedPosts);
      setLoading(false);
    };
    loadPosts();
  }, [activeCategory]);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog' },
  ];

  return (
    <>
      <SEOHead
        title="Blog | webf.love - Webflow Development Insights"
        description="Insights, tutorials, and updates about Webflow development, web design, and digital business strategies from the webf.love team."
        canonicalUrl="/blog"
        keywords={['webflow blog', 'web development', 'webflow tutorials', 'webflow tips']}
      />

      <div className="min-h-screen">
        <Header />

        <main className="section-padding container-custom pt-32">
          <div className="max-w-6xl mx-auto">
            <BlogBreadcrumbs items={breadcrumbs} />

            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Blog</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Insights, tutorials, and updates from our team
              </p>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-medium transition-colors border ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background text-foreground border-foreground hover:bg-foreground hover:text-background'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Grid */}
            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-card border border-border rounded-lg overflow-hidden animate-pulse">
                    <div className="aspect-video bg-secondary/50" />
                    <div className="p-6 space-y-3">
                      <div className="h-4 bg-secondary/50 rounded w-1/3" />
                      <div className="h-6 bg-secondary/50 rounded w-full" />
                      <div className="h-4 bg-secondary/50 rounded w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            ) : posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                  <BlogCard key={post.meta.slug} post={post.meta} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No posts found in this category.
                </p>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
