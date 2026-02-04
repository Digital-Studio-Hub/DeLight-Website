import { Link } from "wouter";
import { Phone, Mail } from "lucide-react";
import whiteLogo from "@assets/White_Logo_1770195509362.png";
import lekkerLogo from "@assets/lekkerlogo_1770193330072.png";
import verifiedBadge from "@assets/Badge_Level_1_1770193309724.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img
                src={whiteLogo}
                alt="DeLight Films"
                className="h-16 w-auto"
                data-testid="img-footer-logo"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional film production and visual storytelling company based in South Africa.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services#films"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-films"
                >
                  Movies & Series
                </Link>
              </li>
              <li>
                <Link
                  href="/services#commercials"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-commercials"
                >
                  Commercials
                </Link>
              </li>
              <li>
                <Link
                  href="/services#music-videos"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-music-videos"
                >
                  Music Videos
                </Link>
              </li>
              <li>
                <Link
                  href="/services#motion-graphics"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-motion-graphics"
                >
                  Motion Graphics
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center">
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">
              Verified Badge
            </h4>
            <a
              href="https://lekker.network/the-lekker-network-verified"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
              data-testid="link-verified-badge"
            >
              <img
                src={verifiedBadge}
                alt="Lekker Network Verified"
                className="w-24 h-auto"
                data-testid="img-verified-badge"
              />
            </a>
            <span className="text-xs text-muted-foreground mt-2">
              Lekker Network Verified
            </span>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:0680677789"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-phone1"
                >
                  <Phone className="w-4 h-4" />
                  068 067 7789
                </a>
              </li>
              <li>
                <a
                  href="tel:0661527576"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-phone2"
                >
                  <Phone className="w-4 h-4" />
                  066 152 7576
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@delightfilms.co.za"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-email"
                >
                  <Mail className="w-4 h-4" />
                  info@delightfilms.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} DeLight Films
            </p>

            <div className="flex flex-col items-center">
              <a
                href="https://lekker.network/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
                data-testid="link-lekker-network"
              >
                <img
                  src={lekkerLogo}
                  alt="Lekker Network"
                  className="h-8 w-auto"
                  data-testid="img-lekker-logo"
                />
              </a>
              <span className="text-xs text-muted-foreground mt-1">
                Powered by Lekker Network
              </span>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link
                href="/terms"
                className="hover:text-primary transition-colors"
                data-testid="link-footer-terms"
              >
                Terms of Service
              </Link>
              <span>|</span>
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors"
                data-testid="link-footer-privacy"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}