const Footer = () => {
  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">webf.love</h3>
            <p className="text-muted-foreground">
              Webflow Development Agency building fast, scalable, high-performance websites.
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-muted-foreground">6+ years experience</p>
              <p className="text-sm text-muted-foreground">100+ projects delivered</p>
              <p className="text-sm text-muted-foreground">95% referral rate</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <a href="mailto:hello@webf.love" className="hover:text-foreground transition-colors">
                  hello@webf.love
                </a>
              </p>
              <p className="text-sm text-muted-foreground">Response time: Within 24 hours</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} webf.love. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
