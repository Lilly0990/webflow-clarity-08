import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/seo/SEOHead';

const CookiePolicy = () => {
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
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground mb-12">Last updated: November 26, 2025</p>

            <div className="article-content">
              <p>
                This Cookie Policy explains how webf.love ("we", "us", or "our") uses cookies and similar
                technologies on our website. By using our website, you consent to the use of cookies as
                described in this policy.
              </p>

              <h2>What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device (computer, tablet, or mobile)
                when you visit a website. They help websites remember your preferences and understand how
                you interact with the site, enabling a better user experience.
              </p>

              <h2>Types of Cookies We Use</h2>

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

              <h2>Third-Party Cookies</h2>
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

              <h2>Cookie Duration</h2>
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

              <h2>Managing Cookies</h2>
              <p>
                You can control and manage cookies in several ways:
              </p>

              <h3>Browser Settings</h3>
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

              <h3>Opt-Out Links</h3>
              <p>
                You can opt out of specific analytics services:
              </p>
              <ul>
                <li>
                  <strong>Microsoft Clarity:</strong> You can disable Clarity tracking by adjusting your
                  browser's Do Not Track settings or using browser extensions that block tracking scripts.
                </li>
              </ul>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or
                for legal, operational, or regulatory reasons. We encourage you to review this policy
                periodically for any changes.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us:
              </p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:hello@webf.love">hello@webf.love</a></li>
                <li><strong>Website:</strong> <a href="https://webf.love">webf.love</a></li>
              </ul>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CookiePolicy;
