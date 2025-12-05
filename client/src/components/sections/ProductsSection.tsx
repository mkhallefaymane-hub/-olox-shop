import { Tv, Gamepad2, Music, Cpu } from "lucide-react";
import ProductCard from "../ProductCard";
import { getProductsByCategory } from "@/lib/products";

interface ProductsSectionProps {
  onOrderProduct: (productId: string, productName: string) => void;
}

const categoryInfo = [
  { id: "media", title: "OLOX Media", subtitle: "اشتراكات الأفلام والمسلسلات", icon: Tv, color: "from-red-500 to-pink-600" },
  { id: "play", title: "OLOX Play", subtitle: "شحن الألعاب والباقات", icon: Gamepad2, color: "from-green-500 to-emerald-600" },
  { id: "music", title: "OLOX Music", subtitle: "اشتراكات المنصات الموسيقية", icon: Music, color: "from-purple-500 to-violet-600" },
  { id: "tech", title: "OLOX Tech", subtitle: "برامج التصميم والذكاء الاصطناعي", icon: Cpu, color: "from-blue-500 to-cyan-600" },
] as const;

export default function ProductsSection({ onOrderProduct }: ProductsSectionProps) {
  return (
    <section id="products" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-l from-[hsl(var(--neon-purple))] to-[hsl(var(--neon-blue))] bg-clip-text text-transparent">
            منتجاتنا
          </span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          اكتشف مجموعة واسعة من الاشتراكات والخدمات الرقمية بأفضل الأسعار
        </p>

        {categoryInfo.map((cat) => {
          const Icon = cat.icon;
          const categoryProducts = getProductsByCategory(cat.id);
          
          return (
            <div key={cat.id} id={`products-${cat.id}`} className="mb-16 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-md bg-gradient-to-br ${cat.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{cat.title}</h3>
                  <p className="text-muted-foreground text-sm">{cat.subtitle}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {categoryProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    icon={product.icon}
                    iconColor={product.iconColor}
                    onOrder={onOrderProduct}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
