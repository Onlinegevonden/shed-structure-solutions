import { Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="over" className="border-t border-border bg-background py-16">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand">
                <span className="font-sora text-xl font-bold text-brand-foreground">S</span>
              </div>
              <span className="font-sora text-lg font-semibold text-foreground">
                Structuur in je Schuur
              </span>
            </div>
            <p className="mb-6 max-w-sm text-muted-foreground">
              Van chaos naar controle in één weekend. Praktische bouwplannen voor 
              Nederlandse doe-het-zelvers die hun schuur of garage willen organiseren.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:info@structuurinjeschuur.nl"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-brand hover:text-brand-foreground"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-brand hover:text-brand-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 font-sora font-semibold text-foreground">Bouwplannen</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Krattenkast
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Gereedschapswand
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Werkbank
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-sora font-semibold text-foreground">Ondersteuning</h3>
            <ul className="space-y-3">
              <li>
                <a href="/faq" className="text-muted-foreground transition-colors hover:text-foreground">
                  Veelgestelde vragen
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                  Contact
                </a>
              </li>
              <li>
                <a href="/over-mij" className="text-muted-foreground transition-colors hover:text-foreground">
                  Over mij
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 Structuur in je Schuur. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
              Privacybeleid
            </a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
              Algemene voorwaarden
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
