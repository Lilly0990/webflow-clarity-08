import { Link } from 'react-router-dom';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BlogBreadcrumbsProps {
  items: BreadcrumbItem[];
}

const BlogBreadcrumbs = ({ items }: BlogBreadcrumbsProps) => {
  const schemaItems = items.map(item => ({
    name: item.label,
    url: item.href,
  }));

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && <span>/</span>}
              {item.href ? (
                <Link
                  to={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default BlogBreadcrumbs;
