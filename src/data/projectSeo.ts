import type { Project } from "./projects";

// Shared by ProjectPage (client-side Helmet) and the build-time prerender in
// vite.config.ts, so the tags in the served HTML always match what React
// renders. Must stay free of React/browser imports for the Vite config to use it.

const SITE_URL = "https://webf.love";

const stripTags = (text: string) => text.replace(/<\/?[a-z]+>/gi, "");

const clampToWord = (text: string, max: number) => {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
};

export interface ProjectSeo {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage: string;
  ogImageAlt: string;
  keywords: string[];
}

export const getProjectSeo = (project: Project): ProjectSeo => {
  const headline = `${project.title} — ${project.description}`;

  return {
    // Brand suffix only when it still fits a search snippet.
    title: headline.length <= 53 ? `${headline} | webf.love` : headline,
    description: clampToWord(stripTags(project.introText || project.fullDescription), 155),
    canonicalPath: `/projects/${project.id}`,
    ogImage: project.previewImage || `${SITE_URL}/og-image.png`,
    ogImageAlt: `${project.title} — ${project.category} project by webf.love`,
    keywords: [...project.technologies, project.category, project.title].map(k => k.toLowerCase()),
  };
};
