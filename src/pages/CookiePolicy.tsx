import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogBreadcrumbs from '@/components/blog/BlogBreadcrumbs';
import SEOHead from '@/components/seo/SEOHead';

const CookiePolicy = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Cookie Policy' },
  ];

  const tableOfContents = [
    { id: 'what-are-cookies', label: 'What Are Cookies?' },
    { id: 'types-of-cookies', label: 'Types of Cookies We Use' },
    { id: 'third-party', label: 'Third-Party Cookies' },
    { id: 'duration', label: 'Cookie Duration' },
    { id: 'managing-cookies', label: 'Managing Cookies' },
    { id: 'browser-instructions', label: 'Browser-Specific Instructions' },
    { id: 'opt-out', label: 'Opt-Out Links' },
    { id: 'changes', label: 'Changes to This Policy' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <>
      <SEOHead
        title="Cookie Policy | webf.love"
        description="Learn about the cookies we use on webf.love, why we use them, and how you can manage your cookie preferences."
        canonicalUrl="/cookie-policy"
      />

      <div className="min-h-screen">
        <Header />

        <main className="section-padding container-custom pt-32">
          <div className="max-w-6xl mx-auto">
            <BlogBreadcrumbs items={breadcrumbs} />

            {/* 2-Column Layout */}
            <div className="grid lg:grid-cols-[1fr_280px] gap-12">
              {/* Main Content */}
              <article>
                {/* Article Header */}
                <header className="mb-8 animate-fade-in">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                    <span className="text-primary font-medium">Legal</span>
                    <span>·</span>
                    <span>4 min read</span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                    Cookie Policy
                  </h1>
                  <p className="text-muted-foreground">Last updated: November 26, 2025</p>
                </header>

                {/* Article Content */}
                <div className="article-content mb-12 animate-fade-in">
                  <p>
                    This Cookie Policy explains how webf.love ("we", "us", or "our") uses cookies and similar
                    technologies on our website. By using our website, you consent to the use of cookies as
                    described in this policy.
                  </p>

                  <h2 id="what-are-cookies">What Are Cookies?</h2>
                  <p>
                    Cookies are small text files that are stored on your device (computer, tablet, or mobile)
                    when you visit a website. They help websites remember your preferences and understand how
                    you interact with the site, enabling a better user experience.
                  </p>

                  <h2 id="types-of-cookies">Types of Cookies We Use</h2>

                  <h3>Essential Cookies</h3>
                  <p>
                    These cookies are necessary for the website to function properly. They enable basic features
                    like page navigation and access to secure areas. The website cannot function properly without
                    these cookies.
                  </p>

                  <h3>Analytics Cookies</h3>
                  <p>
                    We use analytics cookies to understand how visitors interact with our website. This helps us
                    improve our website's functionality and content.
                  </p>
                  <p><strong>Microsoft Clarity</strong></p>
                  <p>
                    We use Microsoft Clarity to analyze user behavior on our website. Clarity provides:
                  </p>
                  <ul>
                    <li>Session recordings to understand user interactions</li>
                    <li>Heatmaps showing where users click and scroll</li>
                    <li>Insights about website performance and usability</li>
                  </ul>
                  <p>
                    Microsoft Clarity may collect information such as your IP address, device and browser
                    information, and interactions with our website. For more information, see{' '}
                    <a href="https://clarity.microsoft.com/terms" target="_blank" rel="noopener noreferrer">
                      Microsoft Clarity's Terms of Service
                    </a>.
                  </p>

                  <h3>Preference Cookies</h3>
                  <p>
                    These cookies allow the website to remember choices you make (such as your preferred language
                    or region) and provide enhanced, personalized features.
                  </p>

                  <h2 id="third-party">Third-Party Cookies</h2>
                  <p>
                    Some cookies on our website are placed by third-party services. We do not control these
                    cookies and recommend reviewing the privacy policies of these third parties:
                  </p>
                  <ul>
                    <li>
                      <strong>Microsoft Clarity:</strong>{' '}
                      <a href="https://privacy.microsoft.com/" target="_blank" rel="noopener noreferrer">
                        Microsoft Privacy Statement
                      </a>
                    </li>
                  </ul>

                  <h2 id="duration">Cookie Duration</h2>
                  <p>Cookies can be categorized by their lifespan:</p>
                  <ul>
                    <li>
                      <strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your
                      browser. They help with basic website functionality during your visit.
                    </li>
                    <li>
                      <strong>Persistent Cookies:</strong> These remain on your device for a set period or until
                      you delete them. They help remember your preferences for future visits.
                    </li>
                  </ul>

                  <h2 id="managing-cookies">Managing Cookies</h2>
                  <p>
                    You can control and manage cookies in several ways:
                  </p>

                  <h3 id="browser-instructions">Browser Settings</h3>
                  <p>
                    Most web browsers allow you to manage cookies through their settings. You can:
                  </p>
                  <ul>
                    <li>View cookies stored on your device</li>
                    <li>Delete all or specific cookies</li>
                    <li>Block all cookies or cookies from specific sites</li>
                    <li>Set preferences for certain types of cookies</li>
                  </ul>
                  <p>
                    Please note that blocking all cookies may affect the functionality of our website and other
                    websites you visit.
                  </p>

                  <h3>Browser-Specific Instructions</h3>
                  <ul>
                    <li>
                      <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
                        Google Chrome
                      </a>
                    </li>
                    <li>
                      <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">
                        Mozilla Firefox
                      </a>
                    </li>
                    <li>
                      <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">
                        Safari
                      </a>
                    </li>
                    <li>
                      <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">
                        Microsoft Edge
                      </a>
                    </li>
                  </ul>

                  <h3 id="opt-out">Opt-Out Links</h3>
                  <p>
                    You can opt out of specific analytics services:
                  </p>
                  <ul>
                    <li>
                      <strong>Microsoft Clarity:</strong> You can disable Clarity tracking by adjusting your
                      browser's Do Not Track settings or using browser extensions that block tracking scripts.
                    </li>
                  </ul>

                  <h2 id="changes">Changes to This Policy</h2>
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in our practices or
                    for legal, operational, or regulatory reasons. We encourage you to review this policy
                    periodically for any changes.
                  </p>

                  <h2 id="contact">Contact Us</h2>
                  <p>
                    If you have any questions about our use of cookies, please contact us:
                  </p>
                  <ul>
                    <li><strong>Email:</strong> <a href="mailto:hello@webf.love">hello@webf.love</a></li>
                    <li><strong>Website:</strong> <a href="https://webf.love">webf.love</a></li>
                  </ul>
                </div>

                {/* Back to Home */}
                <div className="border-t border-border pt-8">
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <span>&larr;</span> Back to Home
                  </Link>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-28 space-y-6">
                  {/* Table of Contents */}
                  <div className="bg-card border border-border rounded-lg p-5">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                      On This Page
                    </h4>
                    <nav className="space-y-2">
                      {tableOfContents.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Related Links */}
                  <div className="bg-card border border-border rounded-lg p-5">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                      Related
                    </h4>
                    <nav className="space-y-2">
                      <Link
                        to="/privacy-policy"
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Privacy Policy
                      </Link>
                      <Link
                        to="/terms"
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Terms of Service
                      </Link>
                    </nav>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CookiePolicy;
