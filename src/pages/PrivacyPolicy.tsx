import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/seo/SEOHead';

const PrivacyPolicy = () => {
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
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground mb-12">Last updated: November 26, 2025</p>

            <div className="article-content">
              <p>
                webf.love ("we", "us", or "our") operates from Kyiv, Ukraine and serves as the data controller
                for personal information collected through our website webf.love.
              </p>

              <h2>Information We Collect</h2>
              <p>We may collect and process the following categories of personal data:</p>
              <ul>
                <li><strong>Contact Information:</strong> Name, email address, phone number when you contact us or submit forms</li>
                <li><strong>Technical Data:</strong> IP address, browser type and version, operating system, referral source</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, collected through Microsoft Clarity</li>
                <li><strong>Communication Data:</strong> Any information you provide when communicating with us</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use your personal data for the following purposes:</p>
              <ul>
                <li>To respond to your inquiries and provide our services</li>
                <li>To improve our website and user experience</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To send you relevant information about our services (with your consent)</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h2>Legal Basis for Processing</h2>
              <p>We process your personal data based on:</p>
              <ul>
                <li><strong>Consent:</strong> When you agree to receive communications or submit your data through forms</li>
                <li><strong>Legitimate Interest:</strong> To improve our services and website functionality</li>
                <li><strong>Contract Performance:</strong> To fulfill our service agreements with you</li>
              </ul>

              <h2>Third-Party Services</h2>
              <p>We use the following third-party services that may process your data:</p>
              <ul>
                <li><strong>Microsoft Clarity:</strong> For website analytics and user behavior analysis</li>
                <li><strong>Hosting Provider:</strong> For website hosting and delivery</li>
              </ul>
              <p>
                These services have their own privacy policies and may process data outside the European Economic Area.
                We ensure appropriate safeguards are in place for any international data transfers.
              </p>

              <h2>Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected,
                or as required by law. When data is no longer needed, it is securely deleted or anonymized.
              </p>

              <h2>Your Rights</h2>
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

              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against
                unauthorized access, alteration, disclosure, or destruction. This includes secure connections (HTTPS),
                access controls, and regular security reviews.
              </p>

              <h2>Cookies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience and analyze site traffic.
                For detailed information about the cookies we use, please see our{' '}
                <a href="/cookie-policy">Cookie Policy</a>.
              </p>

              <h2>Children's Privacy</h2>
              <p>
                Our website is not intended for children under 16 years of age. We do not knowingly collect
                personal data from children. If you believe we have collected data from a child, please contact us.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page
                with an updated revision date. We encourage you to review this policy periodically.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
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

export default PrivacyPolicy;
