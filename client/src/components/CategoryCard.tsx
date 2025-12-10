import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  targetId: string;
  gradient: string;
  onClick?: () => void; // ✅ اختياري
}

export default function CategoryCard({
  title,
  description,
  icon: Icon,
  targetId,
  gradient,
  onClick,
}: CategoryCardProps) {
  const scrollToSection = () => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ هادي هي لي غادي نستعملو فـ onClick ديال الكارد
  const handleClick = () => {
    if (onClick) {
      onClick();          // إلا جا onClick من البارِّي نستعملوه
    } else {
      scrollToSection();  // وإلا نستعمل السكروول العادي
    }
  };

  return (
    <Card
      onClick={handleClick} // ⬅️ مهمّة
      className="cursor-pointer group relative overflow-visible border-[hsl(var(--neon-purple)/0.5)] bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-[hsl(var(--neon-purple))] hover:shadow-[0_0_30px_hsl(var(--neon-purple)/0.3)]"
      data-testid={`card-category-${targetId.replace("#", "")}`}
    >
      <CardContent className="p-6 flex flex-col items-center text-center gap-4">
        <div className={`p-4 rounded-full ${gradient} shadow-[0_0_20px_hsl(var(--neon-purple)/0.4)]`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
