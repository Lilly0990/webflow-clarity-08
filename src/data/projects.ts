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
    id: "mindly-therapy",
    title: "Mindly Therapy",
    description: "Professional Online Therapy Platform with Premium Scroll Animations",
    category: "Healthcare",
    highlights: ["GSAP + ScrollTrigger", "Lenis smooth scroll", "Swiper 11", "SplitText animations", "Floating UI"],
    previewImage: "/projects/mindly-preview.png",
    fullDescription: "webf.love developed a sophisticated website for Mindly, a professional online therapy platform connecting users with over 5,000 licensed psychologists, therapists, and psychiatrists for accessible mental health support.",
    challenge: "Mindly needed a website that would convey trust and professionalism while remaining warm and approachable for users seeking mental health support. The challenge was implementing complex scroll-driven animations and text effects that enhance the emotional journey without overwhelming vulnerable users. The site required sophisticated interactions across multiple sections including provider showcases, pricing cards, testimonial carousels, and FAQ accordions.",
    solution: "We implemented a comprehensive animation system using GSAP with ScrollTrigger, Flip, SplitText, DrawSVGPlugin, and TextPlugin for sophisticated scroll-based effects. Lenis provides buttery smooth scrolling that creates a calming user experience. Swiper 11 powers the journey slider and testimonial sections with seamless navigation. Floating UI handles tooltip positioning for interactive elements. Custom scripts manage the commitment section animations, provider faces showcase, and voice testimonials.",
    results: [
      { value: "Premium Animation Stack", label: "Full GSAP suite including SplitText, Flip, and DrawSVG for sophisticated text and visual effects" },
      { value: "Smooth User Experience", label: "Lenis smooth scroll creates calming, therapeutic browsing experience" },
      { value: "Interactive Components", label: "Multiple Swiper carousels, FAQ accordions, and pricing sections" },
      { value: "Conversion Optimized", label: "Clear CTAs and booking flows for therapist, psychotherapist, and psychiatrist services" }
    ],
    technologies: ["Webflow", "GSAP", "ScrollTrigger", "SplitText", "DrawSVGPlugin", "TextPlugin", "Flip", "Lenis", "Swiper", "Floating UI"],
    gallery: ["/projects/mindly-preview.png"],
    year: "2025",
    duration: "8 weeks",
    websiteUrl: "https://mindlytherapy.com",
    serviceType: "Dev",
    heroTitle: "Professional Online Therapy Platform with <gradient>Premium</gradient> Scroll Animations",
    industry: "Healthcare & Mental Health",
    stats: [
      { label: "Animation Plugins", value: "6+" },
      { label: "Providers", value: "5,000+" },
      { label: "Session Rating", value: "4.89" }
    ],
    introText: "webf.love developed a sophisticated website for Mindly, a professional online therapy platform offering accessible mental health support with licensed professionals.",
    backgroundTitle: "The Background",
    backgroundText: "Mindly is a professional online therapy platform connecting users with over 5,000 licensed psychologists, therapists, and psychiatrists. They offer immediate access to mental health support with sessions starting from $70, serving clients across the US with HIPAA-compliant, secure video sessions.\n\nThey needed a website that would convey trust and professionalism while featuring sophisticated animations that guide users through their mental health journey with warmth and care."
  },
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
    id: "prozora-network",
    title: "Prozora Network",
    description: "Ukraine's First Bank Consortium for Instant A2A Payments",
    category: "FinTech",
    highlights: ["GSAP + ScrollTrigger", "SplitType text effects", "Swiper carousels", "Multi-language UA/EN", "21 partner banks"],
    previewImage: "/projects/prozora-network-preview.png",
    fullDescription: "webf.love developed a professional website for Prozora Network, Ukraine's first consortium of banks enabling instant account-to-account payments. The platform unites 21 leading Ukrainian banks and payment companies under a single infrastructure for seamless interbank transfers.",
    challenge: "Prozora Network needed a website that would establish credibility and trust for Ukraine's first bank consortium while explaining complex payment infrastructure to both B2B partners and end users. The challenge was presenting technical payment solutions in an accessible way while showcasing their impressive roster of 21 partner banks. The site required multi-language support for Ukrainian and English audiences, smooth scroll animations, and a professional partner showcase.",
    solution: "We implemented GSAP with ScrollTrigger for scroll-driven animations and SplitType for elegant text reveals that create visual sophistication. Swiper powers the partner carousel featuring logos of all 21 consortium members including PrivatBank, Monobank, PUMB, Sense Bank, and other major Ukrainian financial institutions. Finsweet Attributes handle cookie consent and scroll behavior. The multi-language implementation supports seamless switching between Ukrainian and English versions.",
    results: [
      { value: "Partner Showcase", label: "Interactive carousel featuring 21 banks and payment companies in the consortium" },
      { value: "Text Animations", label: "SplitType-powered character reveals create professional, trustworthy impression" },
      { value: "Multi-Language", label: "Full Ukrainian and English localization for domestic and international audiences" },
      { value: "Scroll Experience", label: "GSAP ScrollTrigger animations guide users through payment infrastructure benefits" }
    ],
    technologies: ["Webflow", "GSAP", "ScrollTrigger", "SplitType", "Swiper", "Finsweet Attributes", "Multi-language", "Google Analytics"],
    gallery: ["/projects/prozora-network-preview.png"],
    year: "2024",
    duration: "5 weeks",
    websiteUrl: "https://www.prozora.network",
    serviceType: "Dev",
    heroTitle: "Ukraine's First Bank Consortium for <ukraine>Instant A2A</ukraine> Payments",
    industry: "FinTech & Banking",
    stats: [
      { label: "Partner Banks", value: "21" },
      { label: "Languages", value: "UA/EN" },
      { label: "Animation Stack", value: "GSAP + SplitType" }
    ],
    introText: "webf.love developed a professional website for Prozora Network, Ukraine's first consortium of banks enabling instant account-to-account payments.",
    backgroundTitle: "The Background",
    backgroundText: "Prozora Network is Ukraine's pioneering bank consortium created to enable instant account-to-account (A2A) payments between financial institutions. The consortium unites 21 major Ukrainian banks and payment companies—including PrivatBank, Monobank, PUMB, Sense Bank, iBox Bank, and others—under a single interoperability infrastructure.\n\nThey needed a website that would communicate their role as the backbone of Ukraine's instant payment ecosystem while building trust with both financial partners and end users."
  },
  {
    id: "gs-studio",
    title: "GS Studio",
    description: "AAA Game Development Studio Website with Dynamic Scroll Animations",
    category: "Gaming",
    highlights: ["GSAP + ScrollTrigger", "SplitType text effects", "Swiper carousels", "Microsoft Clarity", "Cloudflare Turnstile"],
    previewImage: "/projects/gs-studio-preview.png",
    fullDescription: "webf.love developed a dynamic website for GS Studio, a Cyprus-based AAA game development studio for hire established in 2011, with over 100 professionals delivering full-cycle game development, co-development, and game art services.",
    challenge: "GS Studio needed a website that would showcase their AAA-quality game development capabilities to potential clients seeking premium game production services. The challenge was creating an immersive experience with dynamic text animations and smooth scroll effects that reflect the quality of their game productions. The site required portfolio showcases, team presentations, client testimonials, and contact forms while maintaining fast performance.",
    solution: "We implemented GSAP with ScrollTrigger for scroll-driven animations and SplitType for character-by-character text reveals that create visual impact. The Flip plugin enables smooth transitions between states. Swiper powers the testimonial carousel with previous/next navigation. Microsoft Clarity provides behavior analytics for optimization. Cloudflare Turnstile secures the contact form against spam. The technical architecture supports their multi-country team presence with flags representing Cyprus, Ukraine, Georgia, Poland, England, Portugal, and Serbia.",
    results: [
      { value: "Dynamic Text Animations", label: "SplitType-powered character reveals create engaging headings throughout the site" },
      { value: "Smooth Scroll Experience", label: "GSAP ScrollTrigger with Flip and Draggable for premium interactions" },
      { value: "Portfolio Showcase", label: "Game portfolio with project cards linking to detailed case studies" },
      { value: "Secure Contact System", label: "Cloudflare Turnstile protects form submissions from spam" }
    ],
    technologies: ["Webflow", "GSAP", "ScrollTrigger", "Flip", "Draggable", "SplitType", "Swiper", "Microsoft Clarity", "Cloudflare Turnstile"],
    gallery: ["/projects/gs-studio-preview.png"],
    year: "2024",
    duration: "6 weeks",
    websiteUrl: "https://www.gs-studio.eu",
    serviceType: "Dev",
    heroTitle: "AAA Game Development Studio Website with <gradient>Dynamic</gradient> Scroll Animations",
    industry: "Gaming & Entertainment",
    stats: [
      { label: "Team Size", value: "100+" },
      { label: "Projects", value: "100+" },
      { label: "Countries", value: "8" }
    ],
    introText: "webf.love developed a dynamic website for GS Studio, a Cyprus-based AAA game development studio delivering full-cycle game production since 2011.",
    backgroundTitle: "The Background",
    backgroundText: "GS Studio, established in 2011, is a game development studio for hire with a passion for developing exciting games and apps. Their team of over 100 highly experienced professionals has successfully delivered more than 30 projects and gathered over 20 million players worldwide.\n\nThey offer full-cycle game development, co-development, game art, post-release support, gamification services, and consulting across Windows, PlayStation, Xbox, VR, iOS, Android, and macOS platforms."
  },
  {
    id: "betbazar",
    title: "Betbazar",
    description: "Product-First iGaming Technology Company Website",
    category: "iGaming",
    highlights: ["Swiper + Slick carousels", "Finsweet Attributes", "Pipedrive forms", "Multi-language", "Facebook Pixel"],
    previewImage: "/projects/betbazar-preview.png",
    fullDescription: "webf.love developed a comprehensive B2B website for Betbazar, a product-first iGaming technology company offering data feeds, sportsbook solutions, esports content, casino games, KYC services, and lottery draws.",
    challenge: "Betbazar needed a website that would showcase their extensive B2B iGaming product portfolio to operators worldwide. The challenge was organizing complex product categories—data feeds, sportsbook solutions, esports content, casino games, KYC, and lottery draws—into clear navigation while integrating lead generation tools. The site required multi-carousel layouts for products, team members, and clients, plus seamless integration with their CRM and marketing stack.",
    solution: "We implemented dual carousel systems using Swiper 11 for modern sliders and Slick for legacy support. Finsweet Cookie Consent manages GDPR compliance, CMS Filter enables dynamic product filtering, and fs-components handles interactive elements. Pipedrive Web Forms capture leads directly into their CRM. The marketing stack includes Google Tag Manager, Facebook Pixel, LinkedIn Analytics, and Leadfeeder for B2B identification. The hero section features a dynamic slider showcasing their data feed solution, upcoming events, and company messaging.",
    results: [
      { value: "Product Portfolio Organization", label: "Clear navigation across 8 product categories with detailed landing pages" },
      { value: "Lead Generation System", label: "Pipedrive integration for direct CRM lead capture from contact forms" },
      { value: "Marketing Analytics", label: "Full tracking stack with GTM, Facebook Pixel, LinkedIn, and Leadfeeder" },
      { value: "Team Showcase", label: "Interactive team carousel featuring C-suite executives with LinkedIn profiles" }
    ],
    technologies: ["Webflow", "Swiper", "Slick Carousel", "Finsweet Attributes", "Pipedrive", "Google Tag Manager", "Facebook Pixel", "LinkedIn Analytics", "Leadfeeder"],
    gallery: ["/projects/betbazar-preview.png"],
    year: "2024",
    duration: "8 weeks",
    websiteUrl: "https://betbazar.com",
    serviceType: "Dev",
    heroTitle: "Product-First <gradient>iGaming</gradient> Technology Company Website",
    industry: "iGaming & Sports Betting",
    stats: [
      { label: "Live Events", value: "75,000+/mo" },
      { label: "Sports", value: "35+" },
      { label: "Products", value: "8" }
    ],
    introText: "webf.love developed a comprehensive B2B website for Betbazar, a product-first iGaming technology company offering cutting-edge solutions for operators worldwide.",
    backgroundTitle: "The Background",
    backgroundText: "Betbazar is a product-first iGaming technology company that doesn't just connect products—they build them. Their mission is to give iGaming operators direct access to smarter, proprietary solutions that drive real performance.\n\nTheir product suite includes Live Data Feed (75,000+ live events monthly), sportsbook solutions, esports content, sports content, casino games, KYC services, and lottery draws across 35+ sports and esports disciplines."
  },
  {
    id: "heycanopy",
    title: "Hey Canopy",
    description: "Investment Fund Infrastructure Platform Website",
    category: "FinTech",
    highlights: ["Swiper carousels", "HubSpot integration", "Finsweet CMS Filter", "Google Analytics", "Responsive design"],
    previewImage: "/projects/heycanopy-preview.png",
    fullDescription: "webf.love developed a conversion-focused website for Canopy, an investment fund infrastructure platform enabling thousands of investors and managers—from multi-billion dollar hedge funds to fresh syndicate leads—to set up funds, manage capital, and report performance online.",
    challenge: "Canopy needed a website that would clearly communicate their platform's capabilities to two distinct audiences: fund managers setting up investment vehicles and LPs looking to invest. The challenge was presenting complex financial infrastructure—SPVs, syndicates, private funds—in an accessible way while maintaining the professional credibility required in the investment space. The site required interactive product demonstrations, pricing information, and seamless demo booking flows.",
    solution: "We implemented a clean, professional design that walks users through the platform's capabilities using animated UI mockups in the hero section. Swiper powers the testimonial carousel featuring quotes from fund managers. HubSpot integration handles lead capture, analytics, and marketing automation. Finsweet CMS Filter enables dynamic filtering of content. The product section uses an interactive tab system to showcase the fundraising workflow: setting up opportunities, gauging LP interest, collecting signatures and wires, and reporting.",
    results: [
      { value: "Platform Demonstration", label: "Animated UI mockups showcase the fund management interface in the hero section" },
      { value: "Multi-Audience Messaging", label: "Clear pathways for fund managers (syndicates, private funds) and LPs" },
      { value: "Lead Generation", label: "HubSpot integration for demo requests and marketing automation" },
      { value: "Social Proof", label: "Testimonial carousel featuring fund managers from Hyphen Capital, Behind Genius Ventures, DN Capital" }
    ],
    technologies: ["Webflow", "Swiper", "HubSpot", "Finsweet Attributes", "Google Analytics", "Web Font Loader"],
    gallery: ["/projects/heycanopy-preview.png"],
    year: "2024",
    duration: "6 weeks",
    websiteUrl: "https://heycanopy.com",
    serviceType: "Dev",
    heroTitle: "Investment Fund <gradient>Infrastructure</gradient> Platform Website",
    industry: "FinTech & Investment",
    stats: [
      { label: "Offices", value: "SF + NYC" },
      { label: "Fund Types", value: "3+" },
      { label: "Demo Booking", value: "HubSpot" }
    ],
    introText: "webf.love developed a conversion-focused website for Canopy, an investment fund infrastructure platform serving thousands of investors and fund managers.",
    backgroundTitle: "The Background",
    backgroundText: "Canopy is an investment fund infrastructure platform that enables anyone to set up funds, manage capital, and report performance online. They serve a wide range of users—from multi-billion dollar hedge funds to fresh syndicate leads looking to set up their first SPV.\n\nWith offices in San Francisco and New York, they needed a website that would clearly communicate their value proposition to both fund managers and limited partners while driving demo requests."
  },
  {
    id: "lifeinwar",
    title: "Life In War",
    description: "Documentary Project Website About Life During War in Ukraine",
    category: "Media",
    highlights: ["Finsweet Attributes", "Swiper carousels", "Multi-language", "Microsoft Clarity", "CMS blog"],
    previewImage: "/projects/lifeinwar-preview.png",
    fullDescription: "webf.love developed a powerful documentary website for Life In War, a project documenting the everyday realities of people living through war in Ukraine—their resilience, stories, and the human experience amid conflict.",
    challenge: "Life In War needed a website that would tell deeply human stories while respecting the gravity of the subject matter. The challenge was creating an immersive experience that draws visitors into personal narratives without sensationalizing suffering. The site required multi-language support (Ukrainian and English), a CMS-powered blog for ongoing stories and publications, social sharing capabilities, and smooth navigation through emotional content.",
    solution: "We implemented a thoughtful design using Finsweet Attributes for cookie consent, social sharing, scroll behavior control, and CMS loading functionality. Swiper enables smooth navigation through story collections and galleries. The multi-language implementation supports both Ukrainian and English audiences. Microsoft Clarity provides behavior insights for understanding how visitors engage with sensitive content. The CMS structure allows the team to publish new stories, publications, and updates independently.",
    results: [
      { value: "Storytelling Platform", label: "CMS-powered blog system for publishing ongoing stories and publications" },
      { value: "Multi-Language Support", label: "Full Ukrainian and English localization for global audience reach" },
      { value: "Social Sharing", label: "Finsweet socialshare integration for story amplification across platforms" },
      { value: "Behavior Analytics", label: "Microsoft Clarity provides insights into visitor engagement with sensitive content" }
    ],
    technologies: ["Webflow", "Finsweet Attributes", "Swiper", "Microsoft Clarity", "Multi-language", "CMS"],
    gallery: ["/projects/lifeinwar-preview.png"],
    year: "2024",
    duration: "5 weeks",
    websiteUrl: "https://lifeinwar.com",
    serviceType: "Dev",
    heroTitle: "Documentary Project About <ukraine>Life During War</ukraine> in Ukraine",
    industry: "Media & Documentary",
    stats: [
      { label: "Languages", value: "UA/EN" },
      { label: "Stories", value: "CMS" },
      { label: "Analytics", value: "Clarity" }
    ],
    introText: "webf.love developed a powerful documentary website for Life In War, a project documenting the everyday realities and resilience of people living through war in Ukraine.",
    backgroundTitle: "The Background",
    backgroundText: "Life In War is a documentary project dedicated to capturing the everyday realities of people living through war in Ukraine. Through personal stories, photographs, and publications, the project documents both the hardships and the remarkable resilience of ordinary people in extraordinary circumstances.\n\nThey needed a website that would serve as a platform for these stories—accessible to both Ukrainian and international audiences—while treating the subject matter with the dignity and respect it deserves."
  },
  {
    id: "bcl-ukraine",
    title: "BCL Ukraine",
    description: "Business Consulting & Legal Services Company Website",
    category: "Business Services",
    highlights: ["Finsweet Attributes", "Swiper carousels", "Microsoft Clarity", "CMS services", "Google Analytics"],
    previewImage: "/projects/bcl-preview.png",
    fullDescription: "webf.love developed a professional website for BCL, a Ukrainian business consulting and legal services company providing comprehensive support for businesses navigating Ukrainian markets.",
    challenge: "BCL needed a website that would establish credibility and professionalism in the competitive business consulting and legal services market. The challenge was presenting their range of services—from legal compliance to business consulting—in a clear, accessible manner while building trust with potential clients. The site required a structured CMS for service offerings and team presentations.",
    solution: "We implemented a clean, professional design using Finsweet Attributes for enhanced CMS functionality and scroll behaviors. Swiper powers service and team member carousels. Microsoft Clarity provides behavior analytics for conversion optimization. The CMS structure allows the team to manage service offerings, case studies, and team member profiles. Google Analytics integration enables comprehensive tracking of user journeys and lead generation.",
    results: [
      { value: "Service Showcase", label: "CMS-powered service pages with detailed descriptions and benefits" },
      { value: "Team Presentation", label: "Professional team section with member profiles and expertise areas" },
      { value: "Lead Generation", label: "Contact forms and consultation booking integrated throughout" },
      { value: "Behavior Analytics", label: "Microsoft Clarity and GA4 for understanding visitor behavior" }
    ],
    technologies: ["Webflow", "Finsweet Attributes", "Swiper", "Microsoft Clarity", "Google Analytics", "CMS"],
    gallery: ["/projects/bcl-preview.png"],
    year: "2024",
    duration: "4 weeks",
    websiteUrl: "https://bcl.com.ua",
    serviceType: "Dev",
    heroTitle: "Business Consulting & <ukraine>Legal Services</ukraine> Company Website",
    industry: "Business Services & Legal",
    stats: [
      { label: "Services", value: "CMS" },
      { label: "Analytics", value: "Clarity + GA" },
      { label: "Market", value: "Ukraine" }
    ],
    introText: "webf.love developed a professional website for BCL, a Ukrainian business consulting and legal services company providing comprehensive support for businesses.",
    backgroundTitle: "The Background",
    backgroundText: "BCL is a Ukrainian business consulting and legal services company providing comprehensive support for businesses navigating Ukrainian markets. They offer a range of services including legal compliance, business consulting, and corporate advisory.\n\nThey needed a professional website that would establish trust and credibility with potential clients while clearly presenting their service offerings and team expertise."
  },
  {
    id: "innola-solutions",
    title: "Innola Solutions",
    description: "IT Consulting & Digital Transformation Company Website",
    category: "Technology",
    highlights: ["GSAP animations", "Lenis smooth scroll", "Swiper carousels", "Finsweet Attributes", "HubSpot integration"],
    previewImage: "/projects/innola-preview.png",
    fullDescription: "webf.love developed a modern website for Innola Solutions, an IT consulting company specializing in digital transformation, cloud solutions, and enterprise software development.",
    challenge: "Innola Solutions needed a website that would position them as a modern, innovative IT consulting partner while clearly communicating their technical expertise and service offerings. The challenge was creating an engaging experience with professional animations that reflect their cutting-edge approach without overwhelming potential enterprise clients. The site required service showcases, case studies, and lead generation integration.",
    solution: "We implemented a sophisticated animation system using GSAP for scroll-triggered effects and Lenis for smooth scrolling that creates a premium feel. Swiper powers the testimonial and case study carousels. Finsweet Attributes handle CMS filtering and form enhancements. HubSpot integration enables lead capture and marketing automation. The design balances visual innovation with the professional credibility expected in enterprise IT consulting.",
    results: [
      { value: "Premium Animation Experience", label: "GSAP + Lenis combination creates sophisticated, smooth interactions" },
      { value: "Service Portfolio", label: "Clear presentation of IT consulting, cloud, and software development services" },
      { value: "Lead Generation", label: "HubSpot integration for contact forms and marketing automation" },
      { value: "Case Study Showcase", label: "CMS-powered portfolio demonstrating digital transformation successes" }
    ],
    technologies: ["Webflow", "GSAP", "Lenis", "Swiper", "Finsweet Attributes", "HubSpot", "Google Analytics"],
    gallery: ["/projects/innola-preview.png"],
    year: "2024",
    duration: "6 weeks",
    websiteUrl: "https://innolasolutions.com",
    serviceType: "Dev",
    heroTitle: "IT Consulting & <gradient>Digital Transformation</gradient> Company Website",
    industry: "Technology & Consulting",
    stats: [
      { label: "Animation Stack", value: "GSAP + Lenis" },
      { label: "CRM", value: "HubSpot" },
      { label: "Focus", value: "Enterprise" }
    ],
    introText: "webf.love developed a modern website for Innola Solutions, an IT consulting company specializing in digital transformation and enterprise software development.",
    backgroundTitle: "The Background",
    backgroundText: "Innola Solutions is an IT consulting company specializing in digital transformation, cloud solutions, and enterprise software development. They help businesses modernize their technology infrastructure and build custom software solutions.\n\nThey needed a website that would reflect their innovative approach while maintaining the professional credibility required to win enterprise clients."
  },
  {
    id: "arctic7",
    title: "Arctic7",
    description: "Creative Agency Website with Bold Visual Design",
    category: "Agencies",
    highlights: ["GSAP + ScrollTrigger", "Lenis smooth scroll", "Swiper carousels", "Video backgrounds", "Dynamic CMS"],
    previewImage: "/projects/arctic7-preview.png",
    fullDescription: "webf.love developed a bold, visually striking website for Arctic7, a creative agency specializing in branding, digital design, and creative production for ambitious brands.",
    challenge: "Arctic7 needed a website that would showcase their creative capabilities through bold visual design and immersive interactions. The challenge was creating a portfolio experience that demonstrates their design expertise while maintaining fast performance with video backgrounds and complex animations. The site required showcasing diverse creative work across branding, digital, and production categories.",
    solution: "We implemented GSAP with ScrollTrigger for scroll-driven animations that reveal content dynamically. Lenis provides smooth scrolling that enhances the premium feel of the browsing experience. Swiper powers portfolio and testimonial carousels with custom navigation. Video backgrounds add visual impact to key sections. The CMS structure enables easy portfolio management across different service categories.",
    results: [
      { value: "Bold Visual Impact", label: "Video backgrounds and dynamic animations showcase creative capabilities" },
      { value: "Smooth Scroll Experience", label: "GSAP + Lenis combination creates premium navigation feel" },
      { value: "Portfolio Showcase", label: "CMS-powered work presentation across multiple creative disciplines" },
      { value: "Performance Optimized", label: "Video and animation assets optimized for fast loading" }
    ],
    technologies: ["Webflow", "GSAP", "ScrollTrigger", "Lenis", "Swiper", "Video", "CMS"],
    gallery: ["/projects/arctic7-preview.png"],
    year: "2024",
    duration: "5 weeks",
    websiteUrl: "https://webflove-arctic7.webflow.io",
    serviceType: "Dev",
    heroTitle: "Creative Agency Website with <gradient>Bold</gradient> Visual Design",
    industry: "Creative & Design",
    stats: [
      { label: "Animation Stack", value: "GSAP + Lenis" },
      { label: "Media", value: "Video BG" },
      { label: "Portfolio", value: "CMS" }
    ],
    introText: "webf.love developed a bold, visually striking website for Arctic7, a creative agency specializing in branding, digital design, and creative production.",
    backgroundTitle: "The Background",
    backgroundText: "Arctic7 is a creative agency specializing in branding, digital design, and creative production for ambitious brands. They create bold visual identities and digital experiences that help brands stand out.\n\nThey needed a website that would serve as both a portfolio showcase and a demonstration of their creative capabilities—featuring immersive animations, video content, and dynamic interactions."
  },
  {
    id: "khatsarevich",
    title: "Khatsarevich",
    description: "Personal Portfolio Website for Creative Professional",
    category: "Portfolio",
    highlights: ["GSAP animations", "Lenis smooth scroll", "SplitType text effects", "Minimalist design", "Performance optimized"],
    previewImage: "/projects/khatsarevich-preview.png",
    fullDescription: "webf.love developed a sophisticated personal portfolio website for Khatsarevich, a creative professional showcasing their work with elegant animations and minimalist design.",
    challenge: "Khatsarevich needed a personal portfolio that would make a strong first impression while letting their work speak for itself. The challenge was creating sophisticated interactions that enhance rather than distract from the portfolio content. The site required smooth text animations, elegant transitions, and a clean aesthetic that reflects professional creativity.",
    solution: "We implemented GSAP for refined animations with precise timing and easing. Lenis provides buttery smooth scrolling throughout the portfolio experience. SplitType powers character-by-character text reveals for headings and titles. The minimalist design approach ensures fast performance while maintaining visual sophistication. The portfolio structure allows work to be presented in a clean, focused manner.",
    results: [
      { value: "Elegant Animations", label: "GSAP-powered interactions with refined timing and easing curves" },
      { value: "Text Effects", label: "SplitType character reveals add sophistication to typography" },
      { value: "Smooth Experience", label: "Lenis smooth scroll creates premium navigation feel" },
      { value: "Fast Performance", label: "Minimalist approach ensures quick load times" }
    ],
    technologies: ["Webflow", "GSAP", "Lenis", "SplitType", "Custom CSS"],
    gallery: ["/projects/khatsarevich-preview.png"],
    year: "2024",
    duration: "3 weeks",
    websiteUrl: "https://khatsarevich.com",
    serviceType: "Dev",
    heroTitle: "Personal Portfolio Website with <gradient>Elegant</gradient> Animations",
    industry: "Creative & Portfolio",
    stats: [
      { label: "Animation Stack", value: "GSAP + Lenis" },
      { label: "Text Effects", value: "SplitType" },
      { label: "Design", value: "Minimalist" }
    ],
    introText: "webf.love developed a sophisticated personal portfolio website for Khatsarevich, featuring elegant animations and minimalist design.",
    backgroundTitle: "The Background",
    backgroundText: "Khatsarevich is a creative professional seeking to showcase their work through a sophisticated online portfolio. They needed a website that would make a strong first impression while maintaining the focus on their creative work.\n\nThe goal was to create an elegant, minimalist experience with refined animations that enhance the portfolio presentation without overwhelming the content."
  },
  {
    id: "feelz-beverages",
    title: "Feelz Beverages",
    description: "Premium Cannabis Beverage Brand Website with Immersive Animations",
    category: "E-commerce",
    highlights: ["GSAP + ScrollTrigger", "Lenis smooth scroll", "Memberstack auth", "SplitType text effects", "Lottie animations"],
    previewImage: "/projects/feelz-preview.png",
    fullDescription: "webf.love developed a premium website for Feelz Beverages, a THC-infused sparkling drinks brand targeting the social cannabis market with an innovative nano-encapsulation technology for rapid onset effects.",
    challenge: "Feelz needed a website that would position their THC beverages as a premium, sophisticated alternative to alcohol. The challenge was creating an immersive experience that communicates the brand's innovative approach while integrating with their external Shopify store and Memberstack membership system. The site required complex scroll-driven animations, text effects, and a seamless user journey from brand discovery to purchase.",
    solution: "We implemented a cinematic scrolling experience using GSAP ScrollTrigger combined with Lenis for buttery smooth navigation. SplitType powers the dynamic text animations that reveal content character-by-character. Lottie animations enhance the loading experience and key brand moments. Memberstack integration provides user authentication and membership features, while Finsweet Attributes handle CMS functionality and scroll behaviors. The e-commerce flow seamlessly connects to their external Shopify store.",
    results: [
      { value: "Immersive Scroll Experience", label: "GSAP + Lenis combination creates premium, cinematic page navigation" },
      { value: "Dynamic Text Animations", label: "SplitType-powered reveals add sophistication to brand messaging" },
      { value: "Membership Integration", label: "Memberstack provides secure user authentication and account features" },
      { value: "Seamless E-commerce", label: "Integrated external Shopify store for frictionless purchasing" }
    ],
    technologies: ["Webflow", "GSAP", "ScrollTrigger", "TextPlugin", "Lenis", "SplitType", "Lottie", "Memberstack", "Finsweet Attributes", "Axios"],
    gallery: ["/projects/feelz-preview.png"],
    year: "2024",
    duration: "8 weeks",
    websiteUrl: "https://www.feelzbev.com",
    serviceType: "Dev",
    heroTitle: "Premium Cannabis Beverage Brand with <gradient>Immersive</gradient> Web Experience",
    industry: "Cannabis & Beverages",
    stats: [
      { label: "Animation Stack", value: "GSAP + Lenis" },
      { label: "Auth System", value: "Memberstack" },
      { label: "E-commerce", value: "Shopify" }
    ],
    introText: "webf.love developed a premium website for Feelz Beverages, a THC-infused sparkling drinks brand revolutionizing the social cannabis market.",
    backgroundTitle: "The Background",
    backgroundText: "Feelz Beverages creates artisan-crafted, THC-infused sparkling drinks using groundbreaking nano-encapsulation technology for rapid-onset effects. Their products—FLO, FRESH, ZEN, and LUSH—offer a sophisticated alternative to alcohol for social occasions.\n\nThey needed a website that would match their premium positioning, featuring immersive animations and seamless integration with their e-commerce platform and membership system."
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
  },
  {
    id: "parea-travel",
    title: "Parea Travel",
    description: "Luxury Travel Agency Website with Premium Scroll Animations",
    category: "Travel",
    highlights: ["GSAP + ScrollTrigger", "Lenis smooth scroll", "Lottie animations", "SplitType text effects", "Swiper carousels"],
    previewImage: "/projects/parea-travel-preview.png",
    fullDescription: "webf.love developed a premium website for Parea Travel, a boutique travel agency specializing in ultra-luxury group travel for wineries, wellness brands, classic car collectors, and corporate clients seeking exclusive experiences.",
    challenge: "Parea Travel needed a digital presence that would convey ultra-luxury positioning to high-net-worth individuals and corporate clients. The challenge was implementing sophisticated scroll-driven animations and premium interactions while maintaining smooth performance across all devices. The design required complex text animations, Lottie-based visual storytelling, and multiple interactive carousels—all working together seamlessly.",
    solution: "We implemented a comprehensive animation system combining GSAP ScrollTrigger for scroll-based effects, Lenis for buttery smooth scrolling, and SplitType for character-by-character text reveals. Lottie animations bring key brand elements to life, including an animated key that serves as the central visual metaphor. Swiper powers the testimonials and brand partner carousels with infinite loop functionality. Finsweet Attributes handle custom form select styling and scroll behavior management.",
    results: [
      { value: "Premium Animation System", label: "Implemented GSAP + Lenis + SplitType stack for sophisticated scroll-driven experiences" },
      { value: "Lottie Integration", label: "Animated brand elements and decorative visuals enhance storytelling without impacting performance" },
      { value: "Interactive Components", label: "Multiple Swiper carousels, accordion sections, and hover interactions throughout" },
      { value: "Performance Optimized", label: "WebP images, video optimization, and efficient animation loading" }
    ],
    technologies: ["Webflow", "GSAP", "ScrollTrigger", "Lenis", "SplitType", "Lottie", "Swiper", "Finsweet Attributes"],
    gallery: ["/projects/parea-travel-preview.png"],
    year: "2024",
    duration: "6 weeks",
    websiteUrl: "https://www.pareatravel.com",
    serviceType: "Dev",
    heroTitle: "Luxury Travel Agency Website with <gradient>Premium</gradient> Scroll Animations",
    industry: "Travel & Hospitality",
    stats: [
      { label: "Animation Libraries", value: "4+" },
      { label: "Scroll Experience", value: "Premium" },
      { label: "Lottie Elements", value: "5+" }
    ],
    introText: "webf.love developed a premium website for Parea Travel, a boutique travel agency specializing in ultra-luxury group travel for discerning clients.",
    backgroundTitle: "The Background",
    backgroundText: "Parea Travel is a Miami-based boutique travel agency specializing in ultra-luxury group travel for wineries, wellness brands, classic car collectors, and corporate clients. In Greek culture, 'Parea' refers to a group of friends who gather to share experiences—a concept that defines their approach to curated group travel.\n\nThey needed a website that would match their premium positioning, featuring sophisticated animations and smooth interactions that convey luxury without overwhelming the content."
  },
];

export const categories = ["All", "SaaS", "EdTech", "E-commerce", "Agencies", "Travel", "Healthcare", "Gaming", "iGaming", "FinTech", "Media", "Business Services", "Technology", "Portfolio"];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "All") return projects;
  return projects.filter(project => project.category === category);
};
