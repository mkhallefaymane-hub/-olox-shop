import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { LogOut, RefreshCw, Package, Users, TrendingUp, Clock } from "lucide-react";

interface Order {
  id: number;
  fullName: string;
  phone: string;
  email: string | null;
  productId: string;
  productName: string;
  duration: string;
  notes: string | null;
  createdAt: string;
}

// todo: remove mock functionality
const mockOrders: Order[] = [
  {
    id: 1,
    fullName: "أحمد محمد",
    phone: "+212600000001",
    email: "ahmed@email.com",
    productId: "netflix",
    productName: "Netflix",
    duration: "3months",
    notes: "أريد الباقة العائلية",
    createdAt: "2024-12-05T10:30:00Z",
  },
  {
    id: 2,
    fullName: "فاطمة الزهراء",
    phone: "+212600000002",
    email: null,
    productId: "spotify",
    productName: "Spotify Premium",
    duration: "12months",
    notes: null,
    createdAt: "2024-12-05T09:15:00Z",
  },
  {
    id: 3,
    fullName: "يوسف العلوي",
    phone: "+212600000003",
    email: "youssef@email.com",
    productId: "canva",
    productName: "Canva Pro",
    duration: "1month",
    notes: "للاستخدام الشخصي",
    createdAt: "2024-12-04T16:45:00Z",
  },
  {
    id: 4,
    fullName: "سارة بنعلي",
    phone: "+212600000004",
    email: null,
    productId: "pubg",
    productName: "PUBG UC",
    duration: "1month",
    notes: "شحن 600 شدة",
    createdAt: "2024-12-04T14:20:00Z",
  },
  {
    id: 5,
    fullName: "محمد الإدريسي",
    phone: "+212600000005",
    email: "mohamed@email.com",
    productId: "disney",
    productName: "Disney+",
    duration: "6months",
    notes: null,
    createdAt: "2024-12-03T11:00:00Z",
  },
];

const durationLabels: Record<string, string> = {
  "1month": "شهر واحد",
  "3months": "3 أشهر",
  "6months": "6 أشهر",
  "12months": "سنة",
};

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if logged in - in real app this would verify session
    const isLoggedIn = localStorage.getItem("adminLoggedIn");
    if (!isLoggedIn) {
      setLocation("/admin/login");
    }
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    setLocation("/admin/login");
  };

  const handleRefresh = async () => {
    setIsLoading(true);
    // todo: remove mock functionality - simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Orders refreshed");
    setIsLoading(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("ar-MA", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  // Stats
  const totalOrders = orders.length;
  const todayOrders = orders.filter((o) => {
    const today = new Date().toDateString();
    return new Date(o.createdAt).toDateString() === today;
  }).length;

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="text-xl font-bold bg-gradient-to-l from-[hsl(var(--neon-purple))] to-[hsl(var(--neon-blue))] bg-clip-text text-transparent">
              OLOX SHOP
            </div>
            <Badge variant="outline" className="border-[hsl(var(--neon-purple))]">
              لوحة التحكم
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={isLoading}
              data-testid="button-refresh-orders"
            >
              <RefreshCw className={`h-4 w-4 ml-2 ${isLoading ? "animate-spin" : ""}`} />
              تحديث
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              data-testid="button-admin-logout"
            >
              <LogOut className="h-4 w-4 ml-2" />
              خروج
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="border-[hsl(var(--neon-purple)/0.3)]">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-3 rounded-md bg-gradient-to-br from-[hsl(var(--neon-purple))] to-[hsl(var(--neon-blue))]">
                <Package className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">إجمالي الطلبات</p>
                <p className="text-2xl font-bold text-foreground">{totalOrders}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-[hsl(var(--neon-purple)/0.3)]">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-3 rounded-md bg-gradient-to-br from-green-500 to-emerald-600">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">طلبات اليوم</p>
                <p className="text-2xl font-bold text-foreground">{todayOrders}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-[hsl(var(--neon-purple)/0.3)]">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-3 rounded-md bg-gradient-to-br from-blue-500 to-cyan-600">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">العملاء</p>
                <p className="text-2xl font-bold text-foreground">{totalOrders}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-[hsl(var(--neon-purple)/0.3)]">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-3 rounded-md bg-gradient-to-br from-orange-500 to-red-600">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">آخر طلب</p>
                <p className="text-lg font-bold text-foreground">منذ قليل</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-[hsl(var(--neon-purple)/0.3)] bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl">الطلبات الأخيرة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">رقم</TableHead>
                    <TableHead className="text-right">الاسم</TableHead>
                    <TableHead className="text-right">الهاتف</TableHead>
                    <TableHead className="text-right">البريد</TableHead>
                    <TableHead className="text-right">المنتج</TableHead>
                    <TableHead className="text-right">المدة</TableHead>
                    <TableHead className="text-right">ملاحظات</TableHead>
                    <TableHead className="text-right">التاريخ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id} data-testid={`row-order-${order.id}`}>
                      <TableCell className="font-medium">#{order.id}</TableCell>
                      <TableCell>{order.fullName}</TableCell>
                      <TableCell dir="ltr" className="text-left">{order.phone}</TableCell>
                      <TableCell dir="ltr" className="text-left">{order.email || "-"}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{order.productName}</Badge>
                      </TableCell>
                      <TableCell>{durationLabels[order.duration] || order.duration}</TableCell>
                      <TableCell className="max-w-[200px] truncate">{order.notes || "-"}</TableCell>
                      <TableCell className="whitespace-nowrap">{formatDate(order.createdAt)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {orders.length === 0 && (
              <div className="text-center py-12">
                <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">لا توجد طلبات حتى الآن</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
