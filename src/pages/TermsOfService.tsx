import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogBreadcrumbs from '@/components/blog/BlogBreadcrumbs';
import SEOHead from '@/components/seo/SEOHead';

const TermsOfService = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Terms of Service' },
  ];

  const tableOfContents = [
    { id: 'about-us', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'license', label: 'Website Use License' },
    { id: 'intellectual-property', label: 'Intellectual Property' },
    { id: 'user-submissions', label: 'User Submissions' },
    { id: 'disclaimer', label: 'Disclaimer' },
    { id: 'liability', label: 'Limitation of Liability' },
    { id: 'indemnification', label: 'Indemnification' },
    { id: 'third-party', label: 'Third-Party Links' },
    { id: 'modifications', label: 'Modifications' },
    { id: 'termination', label: 'Termination' },
    { id: 'governing-law', label: 'Governing Law' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <>
      <SEOHead
        title="Terms of Service | webf.love"
        description="Read the terms and conditions for using webf.love website and services. Understand your rights and responsibilities."
        canonicalUrl="/terms"
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
                    <span>6 min read</span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                    Terms of Service
                  </h1>
                  <p className="text-muted-foreground">Last updated: November 26, 2025</p>
                </header>

                {/* Article Content */}
                <div className="article-content mb-12 animate-fade-in">
                  <p>
                    Welcome to webf.love. These Terms of Service ("Terms") govern your access to and use of our website
                    and services. By accessing or using our website, you agree to be bound by these Terms.
                  </p>

                  <h2 id="about-us">About Us</h2>
                  <p>
                    webf.love is a Webflow development agency based in Kyiv, Ukraine. We provide web development,
                    design, and related digital services to businesses worldwide.
                  </p>

                  <h2 id="services">Services</h2>
                  <p>Through our website, we offer:</p>
                  <ul>
                    <li>Information about our Webflow development services</li>
                    <li>Portfolio showcasing our previous work</li>
                    <li>Blog content with industry insights and tutorials</li>
                    <li>Contact forms for business inquiries</li>
                  </ul>

                  <h2 id="license">Website Use License</h2>
                  <p>
                    We grant you a limited, non-exclusive, non-transferable license to access and use our website
                    for personal, non-commercial purposes. This license does not include:
                  </p>
                  <ul>
                    <li>Modifying or copying our website content without permission</li>
                    <li>Using the website for any commercial purpose without our consent</li>
                    <li>Attempting to reverse engineer any software on the website</li>
                    <li>Removing any copyright or proprietary notations</li>
                    <li>Transferring content to another person or "mirroring" content on any other server</li>
                  </ul>

                  <h2 id="intellectual-property">Intellectual Property</h2>
                  <p>
                    All content on this website, including but not limited to text, graphics, logos, images,
                    and software, is the property of webf.love or its content suppliers and is protected by
                    international copyright laws.
                  </p>
                  <p>
                    Our trademarks, service marks, and logos may not be used in connection with any product or
                    service without our prior written consent.
                  </p>

                  <h2 id="user-submissions">User Submissions</h2>
                  <p>
                    When you submit information through our contact forms or other means, you grant us the right
                    to use this information to respond to your inquiry and provide our services. We will handle
                    your data in accordance with our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
                  </p>

                  <h2 id="disclaimer">Disclaimer</h2>
                  <p>
                    Our website and its contents are provided "as is" without warranties of any kind, either
                    express or implied. We do not warrant that:
                  </p>
                  <ul>
                    <li>The website will be uninterrupted or error-free</li>
                    <li>Defects will be corrected</li>
                    <li>The website or server is free of viruses or harmful components</li>
                  </ul>

                  <h2 id="liability">Limitation of Liability</h2>
                  <p>
                    To the fullest extent permitted by law, webf.love shall not be liable for any indirect,
                    incidental, special, consequential, or punitive damages arising out of your access to or
                    use of our website.
                  </p>
                  <p>
                    This limitation does not apply to damages arising from fraud, gross negligence, or willful
                    misconduct, or where such limitation is not permitted by applicable law.
                  </p>

                  <h2 id="indemnification">Indemnification</h2>
                  <p>
                    You agree to indemnify and hold harmless webf.love and its affiliates from any claims,
                    damages, losses, or expenses (including legal fees) arising from your violation of these
                    Terms or your use of our website.
                  </p>

                  <h2 id="third-party">Third-Party Links</h2>
                  <p>
                    Our website may contain links to third-party websites. These links are provided for your
                    convenience only. We have no control over and assume no responsibility for the content,
                    privacy policies, or practices of any third-party sites.
                  </p>

                  <h2 id="modifications">Modifications</h2>
                  <p>
                    We reserve the right to modify these Terms at any time. Changes will be effective immediately
                    upon posting on this page. Your continued use of the website after any changes constitutes
                    your acceptance of the new Terms.
                  </p>

                  <h2 id="termination">Termination</h2>
                  <p>
                    We may terminate or suspend your access to our website immediately, without prior notice,
                    for any reason, including breach of these Terms.
                  </p>

                  <h2 id="governing-law">Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of Ukraine,
                    without regard to its conflict of law provisions. Any disputes arising from these Terms
                    shall be subject to the exclusive jurisdiction of the courts of Ukraine.
                  </p>

                  <h2 id="severability">Severability</h2>
                  <p>
                    If any provision of these Terms is found to be unenforceable or invalid, that provision
                    shall be limited or eliminated to the minimum extent necessary, and the remaining provisions
                    shall remain in full force and effect.
                  </p>

                  <h2 id="contact">Contact Us</h2>
                  <p>
                    If you have any questions about these Terms, please contact us:
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

export default TermsOfService;
