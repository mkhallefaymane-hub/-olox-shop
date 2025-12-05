import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  icon: LucideIcon;
  iconColor: string;
  onOrder: (productId: string, productName: string) => void;
}

export default function ProductCard({ id, name, description, price, icon: Icon, iconColor, onOrder }: ProductCardProps) {
  return (
    <Card
      className="group relative overflow-visible border-[hsl(var(--neon-purple)/0.3)] bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-[hsl(var(--neon-purple))] hover:shadow-[0_0_25px_hsl(var(--neon-purple)/0.25)] flex flex-col"
      data-testid={`card-product-${id}`}
    >
      <CardContent className="p-5 flex-1">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-md ${iconColor} bg-opacity-20 shrink-0`}>
            <Icon className={`h-6 w-6 ${iconColor.replace("bg-", "text-")}`} />
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-foreground text-lg mb-1 truncate">{name}</h3>
            <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
          </div>
        </div>
        <div className="mt-4 text-left">
          <span className="text-2xl font-bold bg-gradient-to-l from-[hsl(var(--neon-purple))] to-[hsl(var(--neon-blue))] bg-clip-text text-transparent">
            {price}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button
          className="w-full"
          onClick={() => onOrder(id, name)}
          data-testid={`button-order-${id}`}
        >
          اطلب الآن
        </Button>
      </CardFooter>
    </Card>
  );
}
