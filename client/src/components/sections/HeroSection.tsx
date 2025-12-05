import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/+212716594562";

export default function HeroSection() {
  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--neon-purple)/0.15)] via-background to-[hsl(var(--neon-blue)/0.1)]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--neon-purple)/0.2)] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[hsl(var(--neon-blue)/0.15)] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[hsl(var(--neon-purple)/0.1)] rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-l from-[hsl(var(--neon-purple))] via-white to-[hsl(var(--neon-blue))] bg-clip-text text-transparent drop-shadow-[0_0_30px_hsl(var(--neon-purple)/0.5)]">
            OLOX SHOP
          </span>
          <br />
          <span className="text-foreground text-3xl md:text-4xl lg:text-5xl">
            جميع اشتراكاتك في مكان واحد
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          متجر رقمي مغربي يوفر اشتراكات أصلية لجميع التطبيقات، الألعاب، منصات الترفيه وبرامج الذكاء الاصطناعي بأثمنة مناسبة.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
            className="gap-2 bg-green-600 hover:bg-green-700 text-white border-green-700 text-lg px-8 py-6 shadow-[0_0_30px_hsl(142_76%_36%/0.4)]"
            data-testid="button-whatsapp-hero"
          >
            <MessageCircle className="h-5 w-5" />
            تواصل معنا على واتساب
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToProducts}
            className="gap-2 text-lg px-8 py-6 border-[hsl(var(--neon-purple))] text-foreground shadow-[0_0_20px_hsl(var(--neon-purple)/0.3)]"
            data-testid="button-scroll-products"
          >
            <ChevronDown className="h-5 w-5" />
            تصفح المنتجات
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </div>
    </section>
  );
}
