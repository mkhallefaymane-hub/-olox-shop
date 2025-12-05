import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/+212716594562";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-right">
            <div className="text-2xl font-bold bg-gradient-to-l from-[hsl(var(--neon-purple))] to-[hsl(var(--neon-blue))] bg-clip-text text-transparent mb-2">
              OLOX SHOP
            </div>
            <p className="text-muted-foreground text-sm">
              متجرك الرقمي المغربي للاشتراكات الأصلية
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Button
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
              className="gap-2 bg-green-600 hover:bg-green-700 text-white border-green-700"
              data-testid="button-whatsapp-footer"
            >
              <MessageCircle className="h-4 w-4" />
              تواصل معنا
            </Button>
          </div>

          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              جميع الحقوق محفوظة {currentYear} OLOX SHOP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
