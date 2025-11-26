import { Link } from 'react-router-dom';
import type { BlogPostMeta } from '@/lib/markdown';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

interface BlogCardProps {
  post: BlogPostMeta;
  index?: number;
}

const BlogCard = ({ post, index = 0 }: BlogCardProps) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block bg-card border border-border rounded-lg overflow-hidden card-hover animate-scale-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Featured Image */}
      <div className="aspect-video overflow-hidden">
        <ImagePlaceholder
          src={post.featuredImage}
          alt={post.featuredImageAlt || post.title}
          className="w-full h-full transition-transform duration-300 group-hover:scale-105"
          type="post"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category & Reading Time */}
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
          <span className="text-primary font-medium">{post.category}</span>
          <span>·</span>
          <span>{post.readingTime} min read</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {post.description}
        </p>

        {/* Date - hidden visually, kept for SEO */}
        <time dateTime={post.publishedAt} className="sr-only">{formattedDate}</time>
      </div>
    </Link>
  );
};

export default BlogCard;
