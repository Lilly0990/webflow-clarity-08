import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogBreadcrumbs from "@/components/blog/BlogBreadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { portfolioItems } from "@/data/portfolio";

const stackFilters = ["All", "Webflow", "WordPress", "Claude Code"] as const;

const isAIAssisted = (stack: string) => stack.toLowerCase().includes("claude") || stack.toLowerCase().includes("figma");
const isWebflow = (stack: string) => stack.toLowerCase().includes("webflow");
const isWordPress = (stack: string) => stack.toLowerCase().includes("wordpress");

type SortMode = "default" | "alpha";

const Portfolio = () => {
  const [activeStack, setActiveStack] = useState("All");
  const [sortMode, setSortMode] = useState<SortMode>("default");

  const filteredProjects = (() => {
    const filtered =
      activeStack === "All"
        ? portfolioItems
        : activeStack === "Claude Code"
          ? portfolioItems.filter((p) => isAIAssisted(p.stack))
          : activeStack === "Webflow"
            ? portfolioItems.filter((p) => isWebflow(p.stack))
            : activeStack === "WordPress"
              ? portfolioItems.filter((p) => isWordPress(p.stack))
              : portfolioItems;

    if (sortMode === "alpha") return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    return filtered;
  })();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Portfolio" },
  ];

  return (
    <>
      <SEOHead
        title="Portfolio | webf.love - Selected Work"
        description="Explore our portfolio of web development projects — from SaaS platforms and agency websites to EdTech and FinTech solutions."
        canonicalUrl="/portfolio"
        keywords={["webflow portfolio", "web development projects", "webflow case studies", "website design portfolio"]}
      />

      <div className="min-h-screen">
        <Header />

        <main className="section-padding container-custom pt-32">
          <BlogBreadcrumbs items={breadcrumbs} />

          <div className="mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4292b] mb-4">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-4">
              Selected Work
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A collection of projects we've built for clients across different industries
            </p>
          </div>

          <div className="flex items-center justify-between gap-4 mb-12">
            <div className="flex flex-wrap items-center gap-2">
              {stackFilters.map((stack) => {
                const count = stack === "All"
                  ? portfolioItems.length
                  : stack === "Claude Code"
                    ? portfolioItems.filter((p) => isAIAssisted(p.stack)).length
                    : stack === "Webflow"
                      ? portfolioItems.filter((p) => isWebflow(p.stack)).length
                      : stack === "WordPress"
                        ? portfolioItems.filter((p) => isWordPress(p.stack)).length
                        : 0;
                return (
                  <Button
                    key={stack}
                    variant={activeStack === stack ? "default" : "outline"}
                    className={
                      activeStack === stack
                        ? "bg-[#d4292b] text-[#f3f2ef] hover:bg-[#b8232a]"
                        : "border-black text-black hover:bg-black hover:text-[#f3f2ef]"
                    }
                    onClick={() => setActiveStack(stack)}
                  >
                    {stack} ({count})
                  </Button>
                );
              })}
            </div>

            <div className="relative shrink-0">
              <select
                value={sortMode}
                onChange={(e) => setSortMode(e.target.value as SortMode)}
                className="appearance-none bg-transparent border border-black/30 text-xs uppercase tracking-[0.1em] px-4 py-2 pr-8 cursor-pointer hover:border-black transition-colors"
              >
                <option value="default">Sort</option>
                <option value="alpha">A → Z</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[10px]">▼</span>
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="border-t border-black">
              {filteredProjects.map((project, index) => (
                <a
                  key={project.url}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 py-5 border-b border-black transition-colors duration-300 hover:bg-black hover:text-[#f3f2ef] px-4 -mx-4"
                >
                  <span className="text-[10px] md:text-xs tabular-nums text-muted-foreground group-hover:text-[#f3f2ef]/50 transition-colors duration-300 shrink-0 w-[24px] md:w-[32px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs md:text-sm font-bold uppercase tracking-[0.1em] shrink-0 w-[140px] md:w-[200px]">
                    {project.title}
                  </span>
                  <span className="hidden md:block text-xs uppercase tracking-[0.05em] text-muted-foreground group-hover:text-[#f3f2ef]/70 transition-colors duration-300 flex-1 truncate">
                    {project.tagline}
                  </span>
                  <span className="hidden lg:block text-xs uppercase tracking-[0.05em] text-muted-foreground group-hover:text-[#f3f2ef]/70 transition-colors duration-300 shrink-0 w-[120px] text-right">
                    {project.stack}
                  </span>
                  <span className="text-xs md:text-sm text-muted-foreground group-hover:text-[#f3f2ef]/50 transition-colors duration-300 shrink-0 w-[60px] text-right">
                    —
                  </span>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
