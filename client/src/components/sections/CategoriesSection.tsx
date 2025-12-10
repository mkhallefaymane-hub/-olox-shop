import CategoryCard from "../CategoryCard";
import { Tv, Gamepad2, Music, Cpu } from "lucide-react";

const categories = [
  {
    title: "OLOX Media",
    description: "اشتراكات الأفلام والمسلسلات والأنمي.",
    icon: Tv,
    targetId: "#products-media",
    gradient: "bg-gradient-to-br from-red-500 to-pink-600",
  },
  {
    title: "OLOX Play",
    description: "شحن الألعاب والباقات وخدمات الغيمرز.",
    icon: Gamepad2,
    targetId: "#products-play",
    gradient: "bg-gradient-to-br from-green-500 to-emerald-600",
  },
  {
    title: "OLOX Music",
    description: "اشتراكات المنصات الموسيقية العالمية.",
    icon: Music,
    targetId: "#products-music",
    gradient: "bg-gradient-to-br from-purple-500 to-violet-600",
  },
  {
    title: "OLOX Tech",
    description: "برامج التصميم والمونتاج والذكاء الاصطناعي.",
    icon: Cpu,
    targetId: "#products-tech",
    gradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
  },
  {
    id: "custom",
    title: "منتج مخصص",
    description: "اطلب أي اشتراك أو خدمة غير موجودة في المتجر وسنتكلف بالبحث عنها.",
    icon: Globe, // ولا أي أيقونة أخرى عندك
  },
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-l from-[hsl(var(--neon-purple))] to-[hsl(var(--neon-blue))] bg-clip-text text-transparent">
            فئات المنتجات
          </span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          اختر الفئة التي تناسبك واكتشف أفضل العروض والاشتراكات
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
  key={category.title}
  {...category}
  onClick={() => {
    if (category.title === "منتج مخصص") {
      document
        .getElementById("order-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }}
/>
          ))}
        </div>
      </div>
    </section>
  );
}
