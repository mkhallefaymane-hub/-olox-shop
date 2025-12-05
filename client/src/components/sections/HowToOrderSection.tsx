import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Search, ClipboardList, Zap } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/+212716594562";

const steps = [
  {
    number: 1,
    title: "اختر المنتج",
    description: "تصفح قائمة المنتجات واختر الاشتراك الذي يناسبك",
    icon: Search,
  },
  {
    number: 2,
    title: "املأ المعلومات",
    description: "أدخل بياناتك في نموذج الطلب البسيط",
    icon: ClipboardList,
  },
  {
    number: 3,
    title: "تواصل مع فريق OLOX",
    description: "سنتواصل معك عبر الواتساب لتأكيد الطلب والدفع",
    icon: MessageCircle,
  },
  {
    number: 4,
    title: "يتم تفعيل الاشتراك",
    description: "سيتم تفعيل اشتراكك بسرعة فائقة",
    icon: Zap,
  },
];

export default function HowToOrderSection() {
  return (
    <section id="how-to-order" className="py-20 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-l from-[hsl(var(--neon-purple))] to-[hsl(var(--neon-blue))] bg-clip-text text-transparent">
            كيفية الطلب
          </span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          خطوات بسيطة للحصول على اشتراكك
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                <Card className="h-full border-[hsl(var(--neon-purple)/0.3)] bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[hsl(var(--neon-purple))] to-[hsl(var(--neon-blue))] flex items-center justify-center shadow-[0_0_25px_hsl(var(--neon-purple)/0.4)]">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-[hsl(var(--neon-purple))] flex items-center justify-center text-sm font-bold text-foreground">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -left-3 transform -translate-y-1/2 text-[hsl(var(--neon-purple))]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L3 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
            className="gap-2 bg-green-600 hover:bg-green-700 text-white border-green-700 text-lg px-8 py-6 shadow-[0_0_30px_hsl(142_76%_36%/0.4)]"
            data-testid="button-whatsapp-howto"
          >
            <MessageCircle className="h-5 w-5" />
            تواصل معنا على واتساب
          </Button>
        </div>
      </div>
    </section>
  );
}
