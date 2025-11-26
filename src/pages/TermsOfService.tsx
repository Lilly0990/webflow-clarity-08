import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/seo/SEOHead';

const TermsOfService = () => {
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
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground mb-12">Last updated: November 26, 2025</p>

            <div className="article-content">
              <p>
                Welcome to webf.love. These Terms of Service ("Terms") govern your access to and use of our website
                and services. By accessing or using our website, you agree to be bound by these Terms.
              </p>

              <h2>About Us</h2>
              <p>
                webf.love is a Webflow development agency based in Kyiv, Ukraine. We provide web development,
                design, and related digital services to businesses worldwide.
              </p>

              <h2>Services</h2>
              <p>Through our website, we offer:</p>
              <ul>
                <li>Information about our Webflow development services</li>
                <li>Portfolio showcasing our previous work</li>
                <li>Blog content with industry insights and tutorials</li>
                <li>Contact forms for business inquiries</li>
              </ul>

              <h2>Website Use License</h2>
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

              <h2>Intellectual Property</h2>
              <p>
                All content on this website, including but not limited to text, graphics, logos, images,
                and software, is the property of webf.love or its content suppliers and is protected by
                international copyright laws.
              </p>
              <p>
                Our trademarks, service marks, and logos may not be used in connection with any product or
                service without our prior written consent.
              </p>

              <h2>User Submissions</h2>
              <p>
                When you submit information through our contact forms or other means, you grant us the right
                to use this information to respond to your inquiry and provide our services. We will handle
                your data in accordance with our <a href="/privacy-policy">Privacy Policy</a>.
              </p>

              <h2>Disclaimer</h2>
              <p>
                Our website and its contents are provided "as is" without warranties of any kind, either
                express or implied. We do not warrant that:
              </p>
              <ul>
                <li>The website will be uninterrupted or error-free</li>
                <li>Defects will be corrected</li>
                <li>The website or server is free of viruses or harmful components</li>
              </ul>

              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, webf.love shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages arising out of your access to or
                use of our website.
              </p>
              <p>
                This limitation does not apply to damages arising from fraud, gross negligence, or willful
                misconduct, or where such limitation is not permitted by applicable law.
              </p>

              <h2>Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless webf.love and its affiliates from any claims,
                damages, losses, or expenses (including legal fees) arising from your violation of these
                Terms or your use of our website.
              </p>

              <h2>Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. These links are provided for your
                convenience only. We have no control over and assume no responsibility for the content,
                privacy policies, or practices of any third-party sites.
              </p>

              <h2>Modifications</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately
                upon posting on this page. Your continued use of the website after any changes constitutes
                your acceptance of the new Terms.
              </p>

              <h2>Termination</h2>
              <p>
                We may terminate or suspend your access to our website immediately, without prior notice,
                for any reason, including breach of these Terms.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Ukraine,
                without regard to its conflict of law provisions. Any disputes arising from these Terms
                shall be subject to the exclusive jurisdiction of the courts of Ukraine.
              </p>

              <h2>Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision
                shall be limited or eliminated to the minimum extent necessary, and the remaining provisions
                shall remain in full force and effect.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us:
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

export default TermsOfService;
