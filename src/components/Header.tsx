import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContactForm } from "@/contexts/ContactFormContext";

const LogoMark = ({ dark }: { dark: boolean }) => (
  <div className="flex items-center gap-[3px]">
    <div
      className="w-3 h-3 transition-colors duration-300"
      style={{ background: dark ? '#d4292b' : '#f3f2ef' }}
    />
    <div
      className="w-3 h-3 transition-colors duration-300"
      style={{ background: dark ? '#000000' : '#f3f2ef' }}
    />
    <div
      className="w-3 h-3 transition-colors duration-300"
      style={{ background: dark ? '#d4292b' : '#f3f2ef' }}
    />
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { openContactForm } = useContactForm();
  const dark = scrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#services", label: "Services", isAnchor: true },
    { href: "/portfolio", label: "Portfolio", isAnchor: false },
    { href: "/about-me", label: "About", isAnchor: false },
    { href: "/for-agency", label: "For Agencies", isAnchor: false },
    { href: "/blog", label: "Blog", isAnchor: false },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: dark ? '#f3f2ef' : 'transparent',
          borderBottom: scrolled ? '1px solid #000' : '1px solid transparent',
        }}
      >
        <div className="container-custom py-5">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <LogoMark dark={dark} />
              <span
                className="text-sm font-bold uppercase tracking-[0.15em] transition-colors duration-300"
                style={{ color: dark ? '#000' : '#f3f2ef' }}
              >
                webf.love
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                link.isAnchor ? (
                  <a
                    key={link.href}
                    href={isHomePage ? link.href : `/${link.href}`}
                    className="text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 hover:opacity-50"
                    style={{ color: dark ? '#000' : '#f3f2ef' }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 hover:opacity-50"
                    style={{ color: dark ? '#000' : '#f3f2ef' }}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Button
                size="sm"
                className={dark
                  ? "bg-[#d4292b] text-[#f3f2ef] hover:bg-[#b8232a]"
                  : "bg-transparent border border-[#f3f2ef] text-[#f3f2ef] hover:bg-[#f3f2ef] hover:text-[#000]"
                }
                onClick={openContactForm}
              >
                Let's Talk
              </Button>
            </nav>

            <button
              className="md:hidden relative w-6 h-5 flex flex-col justify-between"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className="block w-full h-[1.5px] transition-all duration-300 origin-center"
                style={{
                  backgroundColor: dark ? '#000' : '#f3f2ef',
                  transform: isMenuOpen ? 'translateY(9px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block w-full h-[1.5px] transition-all duration-300"
                style={{
                  backgroundColor: dark ? '#000' : '#f3f2ef',
                  opacity: isMenuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-full h-[1.5px] transition-all duration-300 origin-center"
                style={{
                  backgroundColor: dark ? '#000' : '#f3f2ef',
                  transform: isMenuOpen ? 'translateY(-9px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#f3f2ef] flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-6 right-6 w-6 h-6"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <span className="block w-full h-[1.5px] bg-black rotate-45 absolute top-1/2" />
            <span className="block w-full h-[1.5px] bg-black -rotate-45 absolute top-1/2" />
          </button>

          {navLinks.map((link) =>
            link.isAnchor ? (
              <a
                key={link.href}
                href={isHomePage ? link.href : `/${link.href}`}
                className="text-2xl font-bold uppercase tracking-[0.1em] text-black hover:text-[#d4292b] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="text-2xl font-bold uppercase tracking-[0.1em] text-black hover:text-[#d4292b] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}

          <Button
            className="mt-4 bg-[#d4292b] text-[#f3f2ef] hover:bg-[#b8232a] px-8"
            onClick={() => {
              setIsMenuOpen(false);
              openContactForm();
            }}
          >
            Let's Talk
          </Button>
        </div>
      )}
    </>
  );
};

export default Header;
