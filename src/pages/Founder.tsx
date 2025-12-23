import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

const Founder = () => {
  return (
    <>
      <Helmet>
        <title>Vladyslav Rulikovskij - Founder | webf.love</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen">
        <Header />

        <main className="section-padding container-custom pt-32">
          <div className="max-w-3xl mx-auto">
            {/* Profile Card */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 animate-fade-in">
              {/* Avatar & Name */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary/20">
                  <ImagePlaceholder
                    src="/images/team/vlad-logo.png"
                    alt="Vladyslav Rulikovskij"
                    className="w-full h-full"
                    type="avatar"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    Vladyslav Rulikovskij
                  </h1>
                  <p className="text-xl text-primary font-medium mb-2">
                    Founder & Webflow Developer
                  </p>
                  <p className="text-muted-foreground">
                    webf.love - Webflow Development Agency
                  </p>
                </div>
              </div>

              {/* About */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-3">About</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Expert in Webflow development with focus on enterprise solutions and high-performance websites.
                  Leading a team of 4 professionals delivering 100+ projects over 6+ years with a 95% referral rate.
                </p>
              </div>

              {/* Contact Information */}
              <div className="border-t border-border pt-8">
                <h2 className="text-xl font-bold mb-6">Contact Information</h2>

                <div className="grid gap-4">
                  {/* Email - Business */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Business Email</p>
                      <a href="mailto:hello@webf.love" className="text-foreground hover:text-primary transition-colors">
                        hello@webf.love
                      </a>
                    </div>
                  </div>

                  {/* Email - Personal */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Personal Email</p>
                      <a href="mailto:hellozapadloid@gmail.com" className="text-foreground hover:text-primary transition-colors">
                        hellozapadloid@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <a href="tel:+380930709602" className="text-foreground hover:text-primary transition-colors">
                        +380 930709602
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Address</p>
                      <address className="not-italic text-foreground">
                        Drahomanova Mykhaila, build 2A, housing 3, fl 864<br />
                        Kyiv, 02159<br />
                        Ukraine
                      </address>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                      <a
                        href="https://linkedin.com/in/vlad-rulikovskiy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        linkedin.com/in/vlad-rulikovskiy
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="border-t border-border pt-8 mt-8">
                <h2 className="text-xl font-bold mb-4">Company</h2>
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold gradient-text">webf.love</div>
                </div>
                <p className="text-muted-foreground mt-3">
                  Webflow Development Agency building fast, scalable, high-performance websites.
                  6+ years of experience, 100+ projects delivered.
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Founder;
