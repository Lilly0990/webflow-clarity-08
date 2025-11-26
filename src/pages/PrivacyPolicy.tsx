import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogBreadcrumbs from '@/components/blog/BlogBreadcrumbs';
import SEOHead from '@/components/seo/SEOHead';

const PrivacyPolicy = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Privacy Policy' },
  ];

  const tableOfContents = [
    { id: 'information-we-collect', label: 'Information We Collect' },
    { id: 'how-we-use', label: 'How We Use Your Information' },
    { id: 'legal-basis', label: 'Legal Basis for Processing' },
    { id: 'third-party', label: 'Third-Party Services' },
    { id: 'data-retention', label: 'Data Retention' },
    { id: 'your-rights', label: 'Your Rights' },
    { id: 'data-security', label: 'Data Security' },
    { id: 'cookies', label: 'Cookies' },
    { id: 'children', label: "Children's Privacy" },
    { id: 'changes', label: 'Changes to This Policy' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <>
      <SEOHead
        title="Privacy Policy | webf.love"
        description="Learn how webf.love collects, uses, and protects your personal data. Our privacy policy explains your rights under GDPR."
        canonicalUrl="/privacy-policy"
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
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                    Privacy Policy
                  </h1>
                  <p className="text-muted-foreground">Last updated: November 26, 2025</p>
                </header>

                {/* Article Content */}
                <div className="article-content mb-12 animate-fade-in">
                  <p>
                    webf.love ("we", "us", or "our") operates from Kyiv, Ukraine and serves as the data controller
                    for personal information collected through our website webf.love.
                  </p>

                  <h2 id="information-we-collect">Information We Collect</h2>
                  <p>We may collect and process the following categories of personal data:</p>
                  <ul>
                    <li><strong>Contact Information:</strong> Name, email address, phone number when you contact us or submit forms</li>
                    <li><strong>Technical Data:</strong> IP address, browser type and version, operating system, referral source</li>
                    <li><strong>Usage Data:</strong> Information about how you use our website, collected through Microsoft Clarity</li>
                    <li><strong>Communication Data:</strong> Any information you provide when communicating with us</li>
                  </ul>

                  <h2 id="how-we-use">How We Use Your Information</h2>
                  <p>We use your personal data for the following purposes:</p>
                  <ul>
                    <li>To respond to your inquiries and provide our services</li>
                    <li>To improve our website and user experience</li>
                    <li>To analyze website traffic and usage patterns</li>
                    <li>To send you relevant information about our services (with your consent)</li>
                    <li>To comply with legal obligations</li>
                  </ul>

                  <h2 id="legal-basis">Legal Basis for Processing</h2>
                  <p>We process your personal data based on:</p>
                  <ul>
                    <li><strong>Consent:</strong> When you agree to receive communications or submit your data through forms</li>
                    <li><strong>Legitimate Interest:</strong> To improve our services and website functionality</li>
                    <li><strong>Contract Performance:</strong> To fulfill our service agreements with you</li>
                  </ul>

                  <h2 id="third-party">Third-Party Services</h2>
                  <p>We use the following third-party services that may process your data:</p>
                  <ul>
                    <li><strong>Microsoft Clarity:</strong> For website analytics and user behavior analysis</li>
                    <li><strong>Hosting Provider:</strong> For website hosting and delivery</li>
                  </ul>
                  <p>
                    These services have their own privacy policies and may process data outside the European Economic Area.
                    We ensure appropriate safeguards are in place for any international data transfers.
                  </p>

                  <h2 id="data-retention">Data Retention</h2>
                  <p>
                    We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected,
                    or as required by law. When data is no longer needed, it is securely deleted or anonymized.
                  </p>

                  <h2 id="your-rights">Your Rights</h2>
                  <p>Under GDPR, you have the following rights:</p>
                  <ul>
                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                    <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                    <li><strong>Restriction:</strong> Request limitation of processing</li>
                    <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                    <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent at any time without affecting prior processing</li>
                  </ul>

                  <h2 id="data-security">Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal data against
                    unauthorized access, alteration, disclosure, or destruction. This includes secure connections (HTTPS),
                    access controls, and regular security reviews.
                  </p>

                  <h2 id="cookies">Cookies</h2>
                  <p>
                    Our website uses cookies to enhance your browsing experience and analyze site traffic.
                    For detailed information about the cookies we use, please see our{' '}
                    <Link to="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>.
                  </p>

                  <h2 id="children">Children's Privacy</h2>
                  <p>
                    Our website is not intended for children under 16 years of age. We do not knowingly collect
                    personal data from children. If you believe we have collected data from a child, please contact us.
                  </p>

                  <h2 id="changes">Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page
                    with an updated revision date. We encourage you to review this policy periodically.
                  </p>

                  <h2 id="contact">Contact Us</h2>
                  <p>
                    If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
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
                        to="/terms"
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Terms of Service
                      </Link>
                      <Link
                        to="/cookie-policy"
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Cookie Policy
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

export default PrivacyPolicy;
