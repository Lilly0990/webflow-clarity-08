import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogBreadcrumbs from "@/components/blog/BlogBreadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { portfolioItems } from "@/data/portfolio";

const stackFilters = ["All", "Manual Dev", "AI-Assisted"] as const;

const isAIAssisted = (stack: string) => stack.toLowerCase().includes("claude");
const isManualDev = (stack: string) => !isAIAssisted(stack);

type SortMode = "default" | "alpha" | "year-new" | "year-old";

const Portfolio = () => {
  const [activeStack, setActiveStack] = useState("All");
  const [sortMode, setSortMode] = useState<SortMode>("default");

  const filteredProjects = (() => {
    const filtered =
      activeStack === "All"
        ? portfolioItems
        : activeStack === "AI-Assisted"
          ? portfolioItems.filter((p) => isAIAssisted(p.stack))
          : portfolioItems.filter((p) => isManualDev(p.stack));

    if (sortMode === "alpha") return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    if (sortMode === "year-new") return [...filtered].sort((a, b) => Number(b.year) - Number(a.year));
    if (sortMode === "year-old") return [...filtered].sort((a, b) => Number(a.year) - Number(b.year));
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

          <div className="flex flex-wrap items-center gap-2 mb-12">
            {stackFilters.map((stack) => {
              const count = stack === "All"
                ? portfolioItems.length
                : stack === "AI-Assisted"
                  ? portfolioItems.filter((p) => isAIAssisted(p.stack)).length
                  : portfolioItems.filter((p) => isManualDev(p.stack)).length;
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

            <span className="w-px h-6 bg-black/20 mx-2 hidden sm:block" />

            {([
              ["default", "Default"],
              ["alpha", "A → Z"],
              ["year-new", "Newest"],
              ["year-old", "Oldest"],
            ] as const).map(([mode, label]) => (
              <Button
                key={mode}
                variant={sortMode === mode ? "default" : "outline"}
                size="sm"
                className={
                  sortMode === mode
                    ? "bg-black text-[#f3f2ef] hover:bg-black/80"
                    : "border-black/30 text-black/60 hover:bg-black hover:text-[#f3f2ef]"
                }
                onClick={() => setSortMode(mode)}
              >
                {label}
              </Button>
            ))}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="border-t border-black">
              {filteredProjects.map((project, index) => {
                const prevYear = index > 0 ? filteredProjects[index - 1].year : null;
                const showYearDivider = project.year !== prevYear;

                return (
                  <div key={project.url}>
                    {showYearDivider && (
                      <div className="flex items-center gap-4 py-3 px-4 -mx-4 bg-black/[0.03]">
                        <span className="text-2xl md:text-3xl font-bold tabular-nums tracking-tight">
                          {project.year}
                        </span>
                        <span className="flex-1 h-px bg-black/10" />
                        <span className="text-[10px] uppercase tracking-[0.2em] text-black/40">
                          {filteredProjects.filter((p) => p.year === project.year).length} projects
                        </span>
                      </div>
                    )}
                    <a
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
                      <span className="text-xs md:text-sm font-medium tabular-nums shrink-0 w-[60px] text-right">
                        {project.year}
                      </span>
                    </a>
                  </div>
                );
              })}
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
