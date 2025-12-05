import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "هل الاشتراكات أصلية؟",
    answer: "نعم، جميع اشتراكاتنا أصلية 100% ومضمونة. نحن نعمل مع موزعين رسميين لضمان جودة الخدمة.",
  },
  {
    question: "ما طرق الدفع المتاحة؟",
    answer: "نقبل الدفع عبر التحويل البنكي، CashPlus، Wafacash، وخدمات الدفع الإلكتروني المختلفة. سيتم شرح التفاصيل عند التواصل معنا.",
  },
  {
    question: "كم يستغرق التفعيل؟",
    answer: "يتم التفعيل خلال دقائق إلى ساعات قليلة بعد تأكيد الدفع. في معظم الحالات، يتم التفعيل فورياً.",
  },
  {
    question: "هل الأسعار ثابتة؟",
    answer: "الأسعار المعروضة هي أسعار ابتداءً من. قد تختلف حسب مدة الاشتراك والعروض المتاحة. تواصل معنا للحصول على السعر الدقيق.",
  },
  {
    question: "هل يمكنني الإلغاء واسترداد المبلغ؟",
    answer: "نحن نقدم ضمان الرضا. في حالة وجود مشكلة في الاشتراك، سنعمل على حلها أو استرداد المبلغ وفق سياستنا.",
  },
  {
    question: "هل يوجد دعم فني؟",
    answer: "نعم، فريق الدعم الفني متاح عبر الواتساب للرد على استفساراتك ومساعدتك في أي مشكلة.",
  },
  {
    question: "هل يمكن طلب أكثر من اشتراك في نفس الوقت؟",
    answer: "بالطبع! يمكنك طلب عدة اشتراكات في نفس الوقت وسنقدم لك عرضاً خاصاً.",
  },
  {
    question: "هل يمكن تغيير الخطة لاحقاً؟",
    answer: "نعم، يمكنك الترقية أو تغيير خطة الاشتراك في أي وقت. تواصل معنا وسنساعدك في ذلك.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-l from-[hsl(var(--neon-purple))] to-[hsl(var(--neon-blue))] bg-clip-text text-transparent">
            الأسئلة الشائعة
          </span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          إجابات على أكثر الأسئلة شيوعاً
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-[hsl(var(--neon-purple)/0.3)] rounded-md bg-card/50 backdrop-blur-sm px-4 data-[state=open]:border-[hsl(var(--neon-purple))] data-[state=open]:shadow-[0_0_20px_hsl(var(--neon-purple)/0.2)]"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="text-foreground text-right hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
