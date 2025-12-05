import { useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
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
import { LogOut, RefreshCw, Package, Users, TrendingUp, Clock, Loader2 } from "lucide-react";
import { apiRequest, queryClient } from "@/lib/queryClient";
import type { Order } from "@shared/schema";

const durationLabels: Record<string, string> = {
  "1month": "شهر واحد",
  "3months": "3 أشهر",
  "6months": "6 أشهر",
  "12months": "سنة",
};

export default function AdminDashboard() {
  const [, setLocation] = useLocation();

  const sessionQuery = useQuery<{ isAuthenticated: boolean }>({
    queryKey: ["/api/admin/session"],
  });

  const ordersQuery = useQuery<Order[]>({
    queryKey: ["/api/admin/orders"],
    enabled: sessionQuery.data?.isAuthenticated === true,
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("POST", "/api/admin/logout");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/session"] });
      setLocation("/admin/login");
    },
  });

  useEffect(() => {
    if (sessionQuery.data && !sessionQuery.data.isAuthenticated) {
      setLocation("/admin/login");
    }
  }, [sessionQuery.data, setLocation]);

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: ["/api/admin/orders"] });
  };

  const formatDate = (dateValue: string | Date) => {
    const date = typeof dateValue === 'string' ? new Date(dateValue) : dateValue;
    return new Intl.DateTimeFormat("ar-MA", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  if (sessionQuery.isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!sessionQuery.data?.isAuthenticated) {
    return null;
  }

  const orders = ordersQuery.data || [];
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
              disabled={ordersQuery.isRefetching}
              data-testid="button-refresh-orders"
            >
              <RefreshCw className={`h-4 w-4 ml-2 ${ordersQuery.isRefetching ? "animate-spin" : ""}`} />
              تحديث
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              disabled={logoutMutation.isPending}
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
                <p className="text-2xl font-bold text-foreground" data-testid="text-total-orders">{totalOrders}</p>
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
                <p className="text-2xl font-bold text-foreground" data-testid="text-today-orders">{todayOrders}</p>
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
                <p className="text-lg font-bold text-foreground">
                  {orders.length > 0 ? "منذ قليل" : "لا يوجد"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-[hsl(var(--neon-purple)/0.3)] bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl">الطلبات الأخيرة</CardTitle>
          </CardHeader>
          <CardContent>
            {ordersQuery.isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : (
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
            )}

            {!ordersQuery.isLoading && orders.length === 0 && (
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
