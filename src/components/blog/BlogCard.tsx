import { Link } from 'react-router-dom';
import type { BlogPostMeta } from '@/lib/markdown';

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
      <div className="aspect-video bg-secondary/50 overflow-hidden">
        {post.featuredImage ? (
          <img
            src={post.featuredImage}
            alt={post.featuredImageAlt || post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
          </div>
        )}
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
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
          {post.description}
        </p>

        {/* Date */}
        <div className="text-sm text-muted-foreground">{formattedDate}</div>
      </div>
    </Link>
  );
};

export default BlogCard;
