import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
import { projects } from "./src/data/projects";
import { getProjectSeo } from "./src/data/projectSeo";

const SITE_URL = "https://webf.love";

const STATIC_PAGES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/lets-talk", priority: "0.8", changefreq: "monthly" },
  { path: "/for-agency", priority: "0.8", changefreq: "monthly" },
  { path: "/webflow-development", priority: "0.9", changefreq: "monthly" },
  { path: "/webflow-integrations-automation", priority: "0.9", changefreq: "monthly" },
  { path: "/webflow-support-maintenance", priority: "0.9", changefreq: "monthly" },
  { path: "/blog", priority: "0.9", changefreq: "weekly" },
  { path: "/portfolio", priority: "0.8", changefreq: "monthly" },
  { path: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
  { path: "/terms", priority: "0.3", changefreq: "yearly" },
  { path: "/cookie-policy", priority: "0.3", changefreq: "yearly" },
];

// Derived from src/data/projects.ts so a new case study never has to be
// registered here by hand.
const PROJECT_PAGES = projects.map((p) => ({
  path: `/projects/${p.id}`,
  priority: "0.6",
  changefreq: "yearly",
}));

interface BlogPostJson {
  meta: {
    slug: string;
    status: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    description: string;
    ogImage: string;
    ogImageAlt: string;
    twitterCard: string;
    canonicalUrl: string;
    publishedAt: string;
    updatedAt: string;
    author: string;
    keywords: string[];
  };
  content: string;
}

function blogSitemapOgPlugin(): Plugin {
  return {
    name: "blog-sitemap-og",
    closeBundle() {
      const contentDir = path.resolve(__dirname, "content/blog");
      const distDir = path.resolve(__dirname, "dist");

      // Read all blog JSON files
      const jsonFiles = fs.readdirSync(contentDir).filter((f) => f.endsWith(".json"));
      const posts: BlogPostJson[] = jsonFiles.map((f) =>
        JSON.parse(fs.readFileSync(path.join(contentDir, f), "utf-8"))
      );
      const publishedPosts = posts.filter((p) => p.meta.status === "published");

      // --- SITEMAP ---
      const staticEntries = [...STATIC_PAGES, ...PROJECT_PAGES].map(
        (p) => `  <url>
    <loc>${SITE_URL}${p.path}</loc>
    <priority>${p.priority}</priority>
    <changefreq>${p.changefreq}</changefreq>
  </url>`
      ).join("\n");

      const blogEntries = publishedPosts
        .map(
          (p) => `  <url>
    <loc>${SITE_URL}/blog/${p.meta.slug}</loc>
    <lastmod>${p.meta.updatedAt}</lastmod>
    <priority>0.7</priority>
    <changefreq>monthly</changefreq>
  </url>`
        )
        .join("\n");

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticEntries}
${blogEntries}
</urlset>
`;
      fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);
      console.log(`[blog-sitemap-og] Generated sitemap.xml (${STATIC_PAGES.length} static + ${PROJECT_PAGES.length} projects + ${publishedPosts.length} blog posts)`);

      // --- OG PRERENDER ---
      const indexHtml = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

      // Prerender each blog post
      for (const post of publishedPosts) {
        const slug = post.meta.slug;
        const postDir = path.join(distDir, "blog", slug);
        fs.mkdirSync(postDir, { recursive: true });

        let html = indexHtml;

        // Replace <title>
        html = html.replace(
          /<title>[^<]*<\/title>/,
          `<title>${escapeHtml(post.meta.metaTitle || post.meta.title)}</title>`
        );

        // Replace meta description
        html = html.replace(
          /<meta name="description" content="[^"]*">/,
          `<meta name="description" content="${escapeAttr(post.meta.metaDescription || post.meta.description)}">`
        );

        // Replace OG tags
        html = html.replace(
          /<meta property="og:type" content="[^"]*" \/>/,
          `<meta property="og:type" content="article" />`
        );
        html = html.replace(
          /<meta property="og:title" content="[^"]*">/,
          `<meta property="og:title" content="${escapeAttr(post.meta.metaTitle || post.meta.title)}">`
        );
        html = html.replace(
          /<meta property="og:description" content="[^"]*">/,
          `<meta property="og:description" content="${escapeAttr(post.meta.metaDescription || post.meta.description)}">`
        );
        html = html.replace(
          /<meta property="og:url" content="[^"]*" \/>/,
          `<meta property="og:url" content="${SITE_URL}/blog/${slug}" />`
        );

        // Replace Twitter tags
        html = html.replace(
          /<meta name="twitter:card" content="[^"]*" \/>/,
          `<meta name="twitter:card" content="${escapeAttr(post.meta.twitterCard || "summary_large_image")}" />`
        );
        html = html.replace(
          /<meta name="twitter:title" content="[^"]*">/,
          `<meta name="twitter:title" content="${escapeAttr(post.meta.metaTitle || post.meta.title)}">`
        );
        html = html.replace(
          /<meta name="twitter:description" content="[^"]*">/,
          `<meta name="twitter:description" content="${escapeAttr(post.meta.metaDescription || post.meta.description)}">`
        );

        // Add canonical, og:image, article times before </head>
        const extraTags = [
          `<link rel="canonical" href="${SITE_URL}/blog/${slug}" />`,
          `<meta property="og:image" content="${SITE_URL}${post.meta.ogImage}" />`,
          `<meta property="og:image:alt" content="${escapeAttr(post.meta.ogImageAlt)}" />`,
          `<meta name="twitter:image" content="${SITE_URL}${post.meta.ogImage}" />`,
          `<meta property="article:published_time" content="${post.meta.publishedAt}" />`,
          `<meta property="article:modified_time" content="${post.meta.updatedAt}" />`,
          `<meta property="article:author" content="${escapeAttr(post.meta.author)}" />`,
          `<meta name="keywords" content="${escapeAttr(post.meta.keywords.join(", "))}" />`,
        ].join("\n    ");

        html = html.replace("</head>", `    ${extraTags}\n  </head>`);

        fs.writeFileSync(path.join(postDir, "index.html"), html);
      }

      // Prerender blog listing page
      const blogDir = path.join(distDir, "blog");
      fs.mkdirSync(blogDir, { recursive: true });
      let blogListingHtml = indexHtml;
      blogListingHtml = blogListingHtml.replace(
        /<title>[^<]*<\/title>/,
        `<title>Blog | webf.love — Webflow Development Insights</title>`
      );
      blogListingHtml = blogListingHtml.replace(
        /<meta name="description" content="[^"]*">/,
        `<meta name="description" content="Expert insights on Webflow development, architecture, CMS, integrations, automation, and web performance from the webf.love team.">`
      );
      blogListingHtml = blogListingHtml.replace(
        /<meta property="og:title" content="[^"]*">/,
        `<meta property="og:title" content="Blog | webf.love — Webflow Development Insights">`
      );
      blogListingHtml = blogListingHtml.replace(
        /<meta property="og:description" content="[^"]*">/,
        `<meta property="og:description" content="Expert insights on Webflow development, architecture, CMS, integrations, automation, and web performance.">`
      );
      blogListingHtml = blogListingHtml.replace(
        /<meta property="og:url" content="[^"]*" \/>/,
        `<meta property="og:url" content="${SITE_URL}/blog" />`
      );
      blogListingHtml = blogListingHtml.replace("</head>", `    <link rel="canonical" href="${SITE_URL}/blog" />\n  </head>`);
      fs.writeFileSync(path.join(blogDir, "index.html"), blogListingHtml);

      // Prerender each case study, so crawlers and social scrapers that do not
      // run JS get the project's own tags instead of the site-wide defaults.
      for (const project of projects) {
        const seo = getProjectSeo(project);
        const projectDir = path.join(distDir, "projects", project.id);
        fs.mkdirSync(projectDir, { recursive: true });

        const ogImage = seo.ogImage.startsWith("http") ? seo.ogImage : `${SITE_URL}${seo.ogImage}`;

        let html = indexHtml;

        html = html.replace(
          /<title>[^<]*<\/title>/,
          `<title>${escapeHtml(seo.title)}</title>`
        );
        html = html.replace(
          /<meta name="description" content="[^"]*">/,
          `<meta name="description" content="${escapeAttr(seo.description)}">`
        );
        html = html.replace(
          /<meta property="og:title" content="[^"]*">/,
          `<meta property="og:title" content="${escapeAttr(seo.title)}">`
        );
        html = html.replace(
          /<meta property="og:description" content="[^"]*">/,
          `<meta property="og:description" content="${escapeAttr(seo.description)}">`
        );
        html = html.replace(
          /<meta property="og:url" content="[^"]*" \/>/,
          `<meta property="og:url" content="${SITE_URL}${seo.canonicalPath}" />`
        );
        html = html.replace(
          /<meta property="og:image" content="[^"]*" \/>/,
          `<meta property="og:image" content="${ogImage}" />`
        );
        html = html.replace(
          /<meta name="twitter:title" content="[^"]*">/,
          `<meta name="twitter:title" content="${escapeAttr(seo.title)}">`
        );
        html = html.replace(
          /<meta name="twitter:description" content="[^"]*">/,
          `<meta name="twitter:description" content="${escapeAttr(seo.description)}">`
        );
        html = html.replace(
          /<meta name="twitter:image" content="[^"]*" \/>/,
          `<meta name="twitter:image" content="${ogImage}" />`
        );

        // The site-wide 1200x630 dimensions do not describe project previews.
        html = html.replace(/\s*<meta property="og:image:width" content="[^"]*" \/>/, "");
        html = html.replace(/\s*<meta property="og:image:height" content="[^"]*" \/>/, "");

        const extraTags = [
          `<link rel="canonical" href="${SITE_URL}${seo.canonicalPath}" />`,
          `<meta property="og:image:alt" content="${escapeAttr(seo.ogImageAlt)}" />`,
          `<meta name="keywords" content="${escapeAttr(seo.keywords.join(", "))}" />`,
        ].join("\n    ");

        html = html.replace("</head>", `    ${extraTags}\n  </head>`);

        fs.writeFileSync(path.join(projectDir, "index.html"), html);
      }

      console.log(`[blog-sitemap-og] Prerendered ${publishedPosts.length} blog posts + blog listing + ${projects.length} projects`);
    },
  };
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeAttr(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger(), blogSitemapOgPlugin()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
