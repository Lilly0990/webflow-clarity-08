export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  highlights: string[];
  // Extended info for project page
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  gallery: string[];
  year: string;
  duration: string;
  websiteUrl?: string;
  heroLottie?: string; // Path to Lottie JSON animation
  // Hero section data
  logo?: string; // Path to client logo
  serviceType?: string; // e.g. "Dev", "Design + Dev"
  heroTitle?: string; // Main headline for hero
  stats?: {
    label: string;
    value: string;
  }[];
  industry?: string;
}

export const projects: Project[] = [
  {
    id: "englishdom",
    title: "EnglishDom",
    description: "Long-Term Development Partnership with Ukraine's Leading EdTech Platform",
    category: "EdTech",
    highlights: ["40+ pages delivered", "3+ year partnership", "Zero delays"],
    fullDescription: "EnglishDom is one of Ukraine's largest online English learning platforms, serving thousands of professionals. As a fast-growing EdTech company, they run continuous marketing campaigns—each requiring a unique landing page with custom design, seamless integrations, and flawless execution. For over 3 years, we've been their technical partner for Webflow development, enabling consistent campaign launches without delays.",
    challenge: "The marketing team operates at high velocity, needing a development partner who could keep pace—delivering dozens of promotional pages throughout the year, each launching in days rather than weeks. Beyond speed, the project required pixel-perfect implementation, integration with CRM and analytics systems, and smooth coordination across internal marketing, design, and development teams. The real challenge was building a sustainable process that maintains quality at scale.",
    solution: "We built a development system designed for speed and consistency. Using reusable Webflow components and standardized workflows, we reduced production time while maintaining quality standards. By integrating directly with their team and establishing clear communication channels, we eliminated bottlenecks. Each landing page includes pixel-perfect design implementation, CMS setup, third-party integrations (Zapier, ClickUp, Typeform), CRM connectivity, and analytics configuration. Our streamlined process takes designs from handoff to production in days.",
    results: [
      "40+ landing pages delivered with rapid turnaround",
      "Zero delays over 3+ years",
      "Marketing campaigns launch on schedule, every time",
      "Proven reliability with an industry leader"
    ],
    technologies: ["Webflow", "Zapier", "ClickUp", "Typeform", "CRM Integration", "Analytics"],
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    year: "2021 - Present",
    duration: "3+ Years Ongoing",
    websiteUrl: "https://englishdom.com",
    heroLottie: "/englishdom-1440.json",
    // New hero data
    serviceType: "Dev",
    heroTitle: "Long-Term Development Partnership with Ukraine's Leading EdTech Platform",
    industry: "EdTech",
    stats: [
      { label: "Pages delivered", value: "40+" },
      { label: "Partnership", value: "3+ years" },
      { label: "Delays", value: "Zero" }
    ]
  },
  {
    id: "fixar",
    title: "Fixar",
    description: "Defense Tech Website with Custom AWS Infrastructure",
    category: "SaaS",
    highlights: ["High-performance", "Advanced integrations"],
    fullDescription: "Fixar is a defense technology company specializing in autonomous drone systems. We built their corporate website with a focus on security, performance, and seamless integration with their custom AWS infrastructure.",
    challenge: "As a defense tech company, Fixar required exceptional security standards, blazing-fast performance for global audiences, and the ability to handle traffic spikes during product announcements and media coverage.",
    solution: "We developed a high-performance Webflow site with custom AWS CloudFront CDN integration, advanced caching strategies, and security hardening. The site features dynamic content loading, interactive 3D product showcases, and real-time stock/investor information.",
    results: [
      "Sub-second page load times globally",
      "99.99% uptime achieved",
      "Passed rigorous security audits",
      "50% reduction in bounce rate"
    ],
    technologies: ["Webflow", "AWS CloudFront", "Lambda@Edge", "Custom Security Headers", "Three.js"],
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    year: "2023",
    duration: "3 months",
    websiteUrl: "https://fixar.pro"
  },
  {
    id: "csmplt",
    title: "CSMPLT",
    description: "Immigration Platform Built on Webflow",
    category: "SaaS",
    highlights: ["Complex architecture", "GSAP animations", "Web-app features"],
    fullDescription: "CSMPLT (Cosmopolit) is an immigration consulting platform that helps people navigate complex visa and relocation processes. We built a feature-rich website that feels more like a web application than a traditional marketing site.",
    challenge: "CSMPLT needed a platform that could handle complex user flows, multi-step forms, dynamic content based on user location, and smooth animations that wouldn't compromise performance. They also needed multi-language support for their global audience.",
    solution: "We pushed Webflow to its limits, implementing custom GSAP animations, complex multi-step forms with conditional logic, geolocation-based content personalization, and a robust CMS structure supporting 5 languages. The result is a seamless blend of marketing site and web application.",
    results: [
      "5 languages supported",
      "60% increase in form completions",
      "Award-winning animations and UX",
      "2x increase in time on site"
    ],
    technologies: ["Webflow", "GSAP", "Lottie", "Weglot", "Make.com", "Airtable"],
    testimonial: {
      quote: "They understood our vision from day one and delivered something beyond our expectations. The attention to detail in every animation and interaction is remarkable.",
      author: "Alex Petrov",
      role: "Founder, CSMPLT"
    },
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    year: "2023",
    duration: "4 months",
    websiteUrl: "https://csmplt.com"
  },
  {
    id: "exonode",
    title: "Exonode",
    description: "AI-Powered SaaS Platform on Webflow",
    category: "SaaS",
    highlights: ["Performance-optimized", "SEO-ready structure"],
    fullDescription: "Exonode is an AI-powered data infrastructure platform. We created a sleek, modern website that communicates complex technical concepts clearly while maintaining excellent performance and SEO rankings.",
    challenge: "Exonode needed to stand out in the crowded AI/SaaS space while clearly explaining their complex technical offering. The site needed to rank well for competitive keywords and load instantly to satisfy their technical audience.",
    solution: "We designed and built a conversion-focused website with crystal-clear messaging hierarchy, interactive product demos, and a blog/resources section optimized for SEO. Every element was optimized for Core Web Vitals and search engine visibility.",
    results: [
      "Page 1 rankings for target keywords",
      "95+ Lighthouse performance score",
      "3x increase in demo requests",
      "40% reduction in bounce rate"
    ],
    technologies: ["Webflow", "Custom JS", "Lottie", "Segment", "Intercom"],
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    year: "2024",
    duration: "2 months",
    websiteUrl: "https://exonode.ai"
  },
  {
    id: "value-productions",
    title: "Value Productions",
    description: "Portfolio Website for Video Production Studio",
    category: "Agencies",
    highlights: ["Pixel-perfect implementation", "Marketing tools setup"],
    fullDescription: "Value Productions is a premium video production studio working with global brands. We built a portfolio website that showcases their stunning work while maintaining fast load times despite heavy video content.",
    challenge: "Video production portfolios are notoriously heavy and slow. Value Productions needed a site that would wow visitors with their video work while loading quickly and providing a smooth browsing experience on all devices.",
    solution: "We implemented smart video loading strategies — lightweight previews that expand to full videos on interaction, optimized video compression pipelines, and a custom video player integration. The result is a visually stunning portfolio that loads in under 2 seconds.",
    results: [
      "Sub-2-second load time despite video content",
      "200% increase in portfolio engagement",
      "Seamless mobile video experience",
      "Integrated with their project management tools"
    ],
    technologies: ["Webflow", "Vimeo API", "Custom Video Player", "GSAP", "Notion Integration"],
    testimonial: {
      quote: "Our new website finally does justice to our work. The team nailed the balance between visual impact and performance.",
      author: "James Miller",
      role: "Creative Director, Value Productions"
    },
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    year: "2024",
    duration: "6 weeks",
    websiteUrl: "https://valueproductions.co"
  },
  {
    id: "prozora",
    title: "Prozora",
    description: "Web3 Blockchain Platform on Webflow",
    category: "E-commerce",
    highlights: ["Multi-language", "Custom integrations"],
    fullDescription: "Prozora is a Web3 transparency platform using blockchain technology. We built their marketing website with custom wallet integrations and multi-language support for their global community.",
    challenge: "Web3 projects need to build trust while explaining complex technology. Prozora needed a professional website that would connect with both crypto-native users and newcomers, supporting multiple languages and integrating with Web3 wallets.",
    solution: "We created a clean, trustworthy design that demystifies blockchain technology. The site features custom Web3 wallet connection, real-time blockchain data displays, and full localization for 4 languages. Smart contract interactions are seamlessly integrated into the Webflow site.",
    results: [
      "4 languages fully supported",
      "Web3 wallet integration live",
      "50K+ unique visitors in first month",
      "Strong community trust established"
    ],
    technologies: ["Webflow", "Web3.js", "WalletConnect", "Weglot", "Custom APIs"],
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    year: "2024",
    duration: "2.5 months",
    websiteUrl: "https://prozora.io"
  }
];

export const categories = ["All", "SaaS", "EdTech", "E-commerce", "Agencies"];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "All") return projects;
  return projects.filter(project => project.category === category);
};
