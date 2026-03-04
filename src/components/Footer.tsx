import { Link } from "react-router-dom";
import { useContactForm } from "@/contexts/ContactFormContext";

const Footer = () => {
  const { openContactForm } = useContactForm();

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "/for-agency", label: "For Agencies", isRoute: true },
    { href: "/blog", label: "Blog", isRoute: true },
  ];

  return (
    <footer className="border-t border-black">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Column 1 — Brand */}
          <div className="md:border-r md:border-black md:pr-8 pb-8 md:pb-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-[3px]">
                <div className="w-3 h-3 bg-[#d4292b]" />
                <div className="w-3 h-3 bg-black" />
                <div className="w-3 h-3 bg-[#d4292b]" />
              </div>
              <span className="text-sm font-bold uppercase tracking-[0.15em]">webf.love</span>
            </div>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              Web Development Studio.
              <br />
              Clean architecture. Honest process.
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div className="md:border-r md:border-black md:px-8 py-8 md:py-0 border-t md:border-t-0 border-black">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
              <button
                onClick={openContactForm}
                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Let's Talk
              </button>
            </nav>
          </div>

          {/* Column 3 — Contact */}
          <div className="md:pl-8 pt-8 md:pt-0 border-t md:border-t-0 border-black">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="text-sm font-light">
                <a href="mailto:hello@webf.love" className="hover:text-[#d4292b] transition-colors">
                  hello@webf.love
                </a>
              </p>
              <p className="text-sm font-light text-muted-foreground">Response time: Within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-black text-sm font-light text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} webf.love</p>
            <div className="flex gap-6">
              <a href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
              <a href="/cookie-policy" className="hover:text-foreground transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
