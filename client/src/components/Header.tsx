import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/+212716594562";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "الرئيسية", href: "#hero" },
  { label: "الفئات", href: "#categories" },
  { label: "المنتجات", href: "#products" },
  { label: "اطلب الآن", href: "#order" },
  { label: "الأسئلة الشائعة", href: "#faq" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 h-16">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-gradient-to-l from-[hsl(var(--neon-purple))] to-[hsl(var(--neon-blue))] bg-clip-text text-transparent">
              OLOX SHOP
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1 flex-wrap">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                data-testid={`nav-link-${item.href.replace("#", "")}`}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
              className="hidden sm:flex gap-2 bg-green-600 hover:bg-green-700 text-white border-green-700"
              data-testid="button-whatsapp-header"
            >
              <MessageCircle className="h-4 w-4" />
              واتساب
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => scrollToSection(item.href)}
                data-testid={`nav-link-mobile-${item.href.replace("#", "")}`}
              >
                {item.label}
              </Button>
            ))}
            <Button
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
              className="w-full gap-2 bg-green-600 hover:bg-green-700 text-white border-green-700 mt-2"
              data-testid="button-whatsapp-mobile"
            >
              <MessageCircle className="h-4 w-4" />
              تواصل معنا على واتساب
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
