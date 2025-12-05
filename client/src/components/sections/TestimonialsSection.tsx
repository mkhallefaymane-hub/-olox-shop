import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

// todo: remove mock functionality
const testimonials = [
  {
    id: 1,
    name: "أحمد المغربي",
    initials: "أم",
    rating: 5,
    text: "خدمة ممتازة وسريعة جداً! طلبت اشتراك نتفليكس وتم تفعيله في أقل من ساعة. أنصح الجميع بالتعامل مع OLOX SHOP.",
  },
  {
    id: 2,
    name: "فاطمة الزهراء",
    initials: "فز",
    rating: 5,
    text: "أفضل متجر للاشتراكات الرقمية في المغرب. الأسعار معقولة والخدمة احترافية. شكراً لفريق OLOX!",
  },
  {
    id: 3,
    name: "يوسف العلوي",
    initials: "يع",
    rating: 5,
    text: "تجربة رائعة! اشتريت عدة اشتراكات وكلها تعمل بشكل ممتاز. الدعم الفني متجاوب ومتعاون.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-l from-[hsl(var(--neon-purple))] to-[hsl(var(--neon-blue))] bg-clip-text text-transparent">
            آراء عملائنا
          </span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          ماذا يقول عملاؤنا عن خدماتنا
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-[hsl(var(--neon-purple)/0.3)] bg-card/50 backdrop-blur-sm hover:border-[hsl(var(--neon-purple))] hover:shadow-[0_0_25px_hsl(var(--neon-purple)/0.2)] transition-all duration-300"
              data-testid={`card-testimonial-${testimonial.id}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="border-2 border-[hsl(var(--neon-purple)/0.5)]">
                    <AvatarFallback className="bg-gradient-to-br from-[hsl(var(--neon-purple))] to-[hsl(var(--neon-blue))] text-white">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <div className="flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
