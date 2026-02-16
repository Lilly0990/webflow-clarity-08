// Simple reading time calculator (browser-compatible)
function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Helper to generate slug from text
function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// Simple markdown to HTML converter (browser-compatible)
function markdownToHtml(markdown: string): string {
  // Process line by line for better control
  const lines = markdown.split('\n');
  const result: string[] = [];
  let inList = false;
  let listType = '';
  let inBlockquote = false;
  let inCallout = false;
  let calloutContent: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Callout blocks (:::tip, :::warning, :::info)
    if (line.match(/^:::(tip|warning|info|note)/)) {
      inCallout = true;
      const type = line.match(/^:::(tip|warning|info|note)/)?.[1] || 'info';
      calloutContent = [`<div class="callout callout-${type}">`];
      continue;
    }
    if (line === ':::' && inCallout) {
      inCallout = false;
      calloutContent.push('</div>');
      result.push(calloutContent.join(''));
      calloutContent = [];
      continue;
    }
    if (inCallout) {
      // Process content inside callout
      line = line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
      calloutContent.push(`<p>${line}</p>`);
      continue;
    }

    // Headers with IDs
    if (line.match(/^### /)) {
      if (inList) { result.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
      const text = line.replace(/^### /, '').replace(/\*\*/g, '');
      result.push(`<h3 id="${slugify(text)}">${text}</h3>`);
      continue;
    }
    if (line.match(/^## /)) {
      if (inList) { result.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
      const text = line.replace(/^## /, '').replace(/\*\*/g, '');
      result.push(`<h2 id="${slugify(text)}">${text}</h2>`);
      continue;
    }
    if (line.match(/^# /)) {
      if (inList) { result.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
      const text = line.replace(/^# /, '').replace(/\*\*/g, '');
      result.push(`<h1 id="${slugify(text)}">${text}</h1>`);
      continue;
    }

    // Blockquotes
    if (line.match(/^> /)) {
      if (!inBlockquote) {
        result.push('<blockquote>');
        inBlockquote = true;
      }
      const text = line.replace(/^> /, '')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
      result.push(`<p>${text}</p>`);
      continue;
    } else if (inBlockquote) {
      result.push('</blockquote>');
      inBlockquote = false;
    }

    // Unordered lists
    if (line.match(/^- /)) {
      if (!inList || listType !== 'ul') {
        if (inList) result.push('</ol>');
        result.push('<ul>');
        inList = true;
        listType = 'ul';
      }
      const text = line.replace(/^- /, '')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
      result.push(`<li>${text}</li>`);
      continue;
    }

    // Numbered lists
    if (line.match(/^\d+\. /)) {
      if (!inList || listType !== 'ol') {
        if (inList) result.push('</ul>');
        result.push('<ol>');
        inList = true;
        listType = 'ol';
      }
      const text = line.replace(/^\d+\. /, '')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
      result.push(`<li>${text}</li>`);
      continue;
    }

    // Close list if we're not in a list item anymore
    if (inList && !line.match(/^[-\d]/)) {
      result.push(listType === 'ul' ? '</ul>' : '</ol>');
      inList = false;
    }

    // Horizontal rule
    if (line.match(/^---$/)) {
      result.push('<hr>');
      continue;
    }

    // Empty lines
    if (line.trim() === '') {
      continue;
    }

    // Regular paragraphs
    const text = line
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    result.push(`<p>${text}</p>`);
  }

  // Close any open tags
  if (inList) result.push(listType === 'ul' ? '</ul>' : '</ol>');
  if (inBlockquote) result.push('</blockquote>');

  return result.join('\n');
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
  cta?: {
    label: string;
    url: string;
  };
}

export interface BlogPostMeta {
  title: string;
  slug: string;
  description: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  status: 'draft' | 'published';
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  keywords: string[];
  ogImage: string;
  ogImageAlt: string;
  twitterCard: string;
  category: string;
  tags: string[];
  language: 'en' | 'uk';
  featuredImage: string;
  featuredImageAlt: string;
  readingTime: number;
  schemaType: string;
  // Enhanced components (optional)
  keyTakeaways?: string[];
  faq?: FAQItem[];
  pricingTable?: PricingPlan[];
}

export interface BlogPost {
  meta: BlogPostMeta;
  content: string;
  htmlContent: string;
}

// Load blog posts from JSON files
const blogPostModules = import.meta.glob<{ meta: BlogPostMeta; content: string }>(
  '../../content/blog/*.json',
  { eager: true, import: 'default' }
);

const blogPosts: BlogPost[] = Object.values(blogPostModules).map((json) => ({
  meta: {
    ...json.meta,
    readingTime: json.meta.readingTime || calculateReadingTime(json.content),
  },
  content: json.content,
  htmlContent: markdownToHtml(json.content),
}));

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const post = blogPosts.find(p => p.meta.slug === slug);
  return post || null;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return blogPosts
    .filter(post => post.meta.status === 'published')
    .sort((a, b) =>
      new Date(b.meta.publishedAt).getTime() - new Date(a.meta.publishedAt).getTime()
    );
}

export function getCategories(): string[] {
  const cats = [...new Set(blogPosts.map(p => p.meta.category))].sort();
  return ['All', ...cats];
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  if (category === 'All') return allPosts;
  return allPosts.filter(post => post.meta.category === category);
}
