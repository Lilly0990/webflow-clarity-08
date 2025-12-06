export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  highlights: string[];
  previewImage?: string; // Preview image for card
  // Extended info for project page
  fullDescription: string;
  challenge: string;
  solution: string;
  results: { value: string; label: string }[] | string[];
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
  heroVideo?: string; // Path to video file (loops automatically)
  // Hero section data
  logo?: string; // Path to client logo
  serviceType?: string; // e.g. "Dev", "Design + Dev"
  heroTitle?: string; // Main headline for hero
  stats?: {
    label: string;
    value: string;
  }[];
  industry?: string;
  // Intro section after video
  introText?: string;
  backgroundTitle?: string;
  backgroundText?: string;
  // Mobile screenshots
  mobileScreenshots?: string[];
}

export const projects: Project[] = [
  {
    id: "englishdom",
    title: "EnglishDom",
    description: "Long-Term Development Partnership with Ukraine's Leading EdTech Platform",
    category: "EdTech",
    highlights: ["40+ pages delivered", "3+ year partnership", "Zero delays"],
    previewImage: "/projects/englishdom-preview.png",
    fullDescription: "EnglishDom is one of Ukraine's largest online English learning platforms, serving thousands of professionals. As a fast-growing EdTech company, they run continuous marketing campaigns—each requiring a unique landing page with custom design, seamless integrations, and flawless execution. For over 3 years, we've been their technical partner for Webflow development, enabling consistent campaign launches without delays.",
    challenge: "The marketing team operates at high velocity, needing a development partner who could keep pace—delivering dozens of promotional pages throughout the year, each launching in days rather than weeks. Beyond speed, the project required pixel-perfect implementation, integration with CRM and analytics systems, and smooth coordination across internal marketing, design, and development teams. The real challenge was building a sustainable process that maintains quality at scale.",
    solution: "We built a development system designed for speed and consistency. Using reusable Webflow components and standardized workflows, we reduced production time while maintaining quality standards. By integrating directly with their team and establishing clear communication channels, we eliminated bottlenecks. Each landing page includes pixel-perfect design implementation, CMS setup, third-party integrations (Zapier, ClickUp, Typeform), CRM connectivity, and analytics configuration. Our streamlined process takes designs from handoff to production in days.",
    results: [
      { value: "40+ Landing Pages", label: "Delivered with rapid turnaround for continuous marketing campaigns" },
      { value: "3+ Year Partnership", label: "Long-term collaboration built on trust and consistent results" },
      { value: "Days → Launch", label: "From design handoff to production in days, not weeks" },
      { value: "Full Integration", label: "Seamless CRM, analytics, and third-party connectivity" }
    ],
    technologies: ["Webflow", "Zapier", "ClickUp", "Typeform", "CRM Integration", "Analytics"],
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    year: "2021 - Present",
    duration: "3+ Years Ongoing",
    websiteUrl: "https://englishdom.com",
    heroLottie: "/englishdom-1440.json",
    // New hero data
    serviceType: "Dev",
    heroTitle: "Long-Term Development Partnership with <ukraine>Ukraine's Leading</ukraine> EdTech Platform",
    industry: "EdTech",
    stats: [
      { label: "Pages delivered", value: "40+" },
      { label: "Partnership", value: "3+ years" },
      { label: "Delays", value: "Zero" }
    ],
    introText: "For 3+ years, webf.love has been EnglishDom's reliable Webflow partner, delivering 40+ landing pages that power their marketing campaigns.",
    backgroundTitle: "The Background",
    backgroundText: "EnglishDom is one of Ukraine's largest online English learning platforms, serving thousands of professionals. As a fast-growing EdTech company, they run continuous marketing campaigns—each requiring a unique landing page with custom design, seamless integrations, and flawless execution.\n\nFor over 3 years, we've been their technical partner for Webflow development, enabling consistent campaign launches without delays.",
    mobileScreenshots: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "csmplt",
    title: "CSMPLT",
    description: "Website for Immigration Consultancy Helping Tech Professionals Secure US & UK Visas",
    category: "SaaS",
    highlights: ["Complex animations", "Multi-layered architecture", "CMS system"],
    previewImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    heroVideo: "/projects/csmplt-1440-showreel.mp4",
    fullDescription: "webf.love built a sophisticated website for CSMPLT, a tech-focused immigration firm helping tech professionals and entrepreneurs secure US and UK visas through a strategy-first, data-driven approach.",
    challenge: "The company required a digital presence that could compete with traditional law firms while differentiating through modern design and technical sophistication. Our challenge was translating their design concepts into a functional Webflow website—presenting multiple visa types, self-assessment tools, and their Navigator platform in a way that feels cohesive rather than overwhelming. Beyond information architecture, the project demanded technical execution of complex animations and interactions. The website needed to handle smooth motion design, multiple carousel systems, and scroll-triggered effects while maintaining fast performance and professional credibility with their target audience of tech professionals and investors.",
    solution: "We implemented the client's design vision in Webflow, bringing their modern brand positioning to life through technical execution. The information architecture organizes multiple visa programs (US and UK) with clear pathways for different user types—whether someone wants full service, self-assessment, or their Navigator DIY platform. The technical implementation includes smooth animations using GSAP and Lottie to convey premium positioning, HelpCrunch integration for real-time support, and a structured CMS accommodating their extensive content library. We developed dedicated sections for self-assessment quizzes, detailed visa guides, and testimonials from tech founders, all structured to build credibility with their target audience of software engineers, startup founders, and tech executives.",
    results: [
      { value: "Complex Design Implementation", label: "Brought sophisticated animations and modern interface to life through Webflow development" },
      { value: "Multi-Layered Architecture", label: "Organized multiple visa programs, self-service tools, and Navigator platform into clear user journeys" },
      { value: "Comprehensive CMS", label: "Structure supports self-assessment quizzes, detailed guides, and testimonials for credibility building" }
    ],
    technologies: ["Webflow", "GSAP", "Lottie", "HelpCrunch", "Custom JS"],
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    year: "2024",
    duration: "3 months",
    websiteUrl: "https://csmplt.com",
    serviceType: "Dev",
    heroTitle: "Website for Immigration Consultancy Helping <gradient>Tech Professionals</gradient> Secure US & UK Visas",
    industry: "Immigration",
    stats: [
      { label: "Client Recommendation", value: "98%" },
      { label: "Visa Programs", value: "US & UK" },
      { label: "User Journeys", value: "3+" }
    ],
    introText: "webf.love built a sophisticated website for CSMPLT, a tech-focused immigration firm helping tech professionals and entrepreneurs secure US and UK visas through a strategy-first, data-driven approach.",
    backgroundTitle: "The Background",
    backgroundText: "CSMPLT is an immigration consultancy specializing in tech talent—software engineers, startup founders, and tech executives seeking O-1A, EB-1A, Global Talent, and other visas. Unlike traditional law firms, they combine immigration expertise with technology, offering a proprietary Navigator app that guides clients through the visa process.\n\nThey needed a website that would reflect their tech-forward positioning while showcasing their complex service offerings across US and UK visa programs."
  },
  {
    id: "exonode",
    title: "Exonode",
    description: "SaaS Website for AI-Powered eCommerce Returns Management Platform",
    category: "SaaS",
    highlights: ["Product-focused", "Performance-optimized", "B2B conversion"],
    previewImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    heroVideo: "/projects/exonode-showrell-1440.mp4",
    fullDescription: "webf.love developed a conversion-focused Webflow website for Exonode, a SaaS platform helping eCommerce businesses reduce return costs through AI-driven personalized alternatives and risk recognition.",
    challenge: "The company needed to explain a complex AI solution in a way that resonates with busy eCommerce operators who care about ROI, not technical details. Our challenge was translating their product vision into a website that balances technical sophistication with clarity—showing enough innovation to build credibility without overwhelming potential customers. The project required strategic use of animations to demonstrate their platform's capabilities while maintaining fast load times. Unlike heavy animation showcases, this needed to prioritize conversion and clear messaging, with visual elements supporting rather than dominating the content.",
    solution: "We implemented a clean, product-focused Webflow website using Lottie animations to illustrate key concepts—returns flow, analytics dashboard, and platform capabilities—without sacrificing performance. The lightweight animation approach ensures fast load times while maintaining visual interest that communicates their AI-driven technology. The technical implementation includes Lenis for smooth scrolling, a structured content hierarchy that guides visitors from problem to solution, and comprehensive B2B tracking through Google Analytics 4, GTM, and LinkedIn Insight Tag. We organized content to address eCommerce-specific pain points with clear CTAs driving demo requests, positioning Exonode as a modern alternative to traditional returns management approaches.",
    results: [
      { value: "Product-Focused Implementation", label: "Translated complex AI technology into clear messaging that resonates with eCommerce decision-makers" },
      { value: "Performance-Optimized Animations", label: "Used Lottie strategically to demonstrate platform capabilities without sacrificing load speed" },
      { value: "B2B Conversion Infrastructure", label: "Integrated analytics and tracking systems to support lead generation and marketing optimization" }
    ],
    technologies: ["Webflow", "Lottie", "Lenis", "GA4", "GTM", "LinkedIn Insight"],
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    year: "2024",
    duration: "6 weeks",
    websiteUrl: "https://exonode.ai",
    serviceType: "Dev",
    heroTitle: "SaaS Website for <gradient>AI-Powered</gradient> eCommerce Returns Management Platform",
    industry: "SaaS / eCommerce",
    stats: [
      { label: "Focus", value: "Conversion" },
      { label: "Animations", value: "Lottie" },
      { label: "Tracking", value: "Full B2B" }
    ],
    introText: "webf.love developed a conversion-focused Webflow website for Exonode, a SaaS platform helping eCommerce businesses reduce return costs through AI-driven personalized alternatives and risk recognition.",
    backgroundTitle: "The Background",
    backgroundText: "Exonode is an AI-powered returns management platform that helps mid to large-sized eCommerce businesses handle one of their biggest pain points—product returns. Their technology provides personalized return alternatives and advanced analytics to reduce return costs while improving customer experience.\n\nAs a SaaS startup, they needed a website that would clearly communicate their value proposition to eCommerce decision-makers while demonstrating technical credibility through clean, modern design."
  },
  {
    id: "value-productions",
    title: "Value Productions",
    description: "Bold Brand Identity for Ukrainian Video Production Studio",
    category: "Agencies",
    highlights: ["Pixel-perfect design", "Marketing integration", "Dynamic CMS"],
    previewImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
    heroVideo: "/projects/value-showreel-1440.mp4",
    fullDescription: "webf.love created a vibrant, conversion-focused website for Value Productions, a video production studio specializing in explainer videos for crypto, fintech, and SaaS companies.",
    challenge: "Working with Tisami's bold creative vision, we needed to translate their design concepts into a high-performance Webflow website without compromising on visual impact. The challenge was bringing their artistic direction to life through code while maintaining smooth animations and fast load times. Beyond the visual execution, the project required comprehensive marketing infrastructure. We needed to integrate multiple analytics and tracking systems, implement dynamic content filtering, and create conversion-optimized booking flows—all while preserving the playful, creative feel of Tisami's design.",
    solution: "We transformed Tisami's design concepts into a fully functional Webflow website, implementing their bold yellow-blue color scheme and playful animations using Lenis for smooth scrolling. Working from their design files, references, and animation examples, we built each interaction to match their creative vision pixel-perfect. The technical architecture integrates multiple marketing tools: Google Analytics 4, Hotjar for behavior tracking, LinkedIn Insight, and B2B identification services (Apollo.io, Clearbit, Reb2b). We implemented Finsweet Attributes for dynamic filtering of case studies and blog content, plus Calendly integration for seamless consultation booking. The CMS structure allows their team to independently manage cases, blog posts, and portfolio pieces.",
    results: [
      { value: "Pixel-Perfect Implementation", label: "Translated Tisami's creative vision into functional Webflow code with smooth animations" },
      { value: "Marketing Integration", label: "Connected analytics, B2B tracking, and lead identification tools for complete visitor insights" },
      { value: "Dynamic Content System", label: "CMS-powered case studies and blog with filtering capabilities for easy content management" }
    ],
    technologies: ["Webflow", "Lenis", "Finsweet Attributes", "GA4", "Hotjar", "Calendly", "Apollo.io"],
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    year: "2024",
    duration: "6 weeks",
    websiteUrl: "https://value.productions",
    serviceType: "Dev",
    heroTitle: "Bold Brand Identity for <ukraine>Ukrainian</ukraine> Video Production Studio",
    industry: "Video Production",
    stats: [
      { label: "Design Partner", value: "Tisami" },
      { label: "Integrations", value: "7+" },
      { label: "CMS Collections", value: "5+" }
    ],
    introText: "webf.love created a vibrant, conversion-focused website for Value Productions, a video production studio specializing in explainer videos for crypto, fintech, and SaaS companies.",
    backgroundTitle: "The Background",
    backgroundText: "Value Productions is a Ukrainian video production studio that creates ROI-driven explainer videos for complex tech products. Founded in 2020, they work with blockchain startups, fintech companies, and SaaS businesses that need to simplify sophisticated concepts for their audiences.\n\nThey partnered with Tisami design studio for brand identity and website design, then came to us for technical implementation and integration."
  },
  {
    id: "prozora",
    title: "Prozora",
    description: "Web3 Blockchain Platform on Webflow",
    category: "E-commerce",
    highlights: ["Multi-language", "Custom integrations"],
    previewImage: "/projects/prozora-preview.png",
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
    gallery: ["/projects/prozora-preview.png", "/placeholder.svg", "/placeholder.svg"],
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
