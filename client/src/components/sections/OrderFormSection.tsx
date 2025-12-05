import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products, getProductById } from "@/lib/products";
import { CheckCircle2, Loader2 } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_URL = "https://wa.me/+212716594562";

const orderSchema = z.object({
  fullName: z.string().min(3, "الاسم يجب أن يكون 3 أحرف على الأقل"),
  phone: z.string().min(10, "رقم الهاتف غير صالح").regex(/^[0-9+]+$/, "رقم الهاتف يجب أن يحتوي على أرقام فقط"),
  email: z.string().email("البريد الإلكتروني غير صالح").optional().or(z.literal("")),
  productId: z.string().min(1, "يرجى اختيار منتج"),
  duration: z.string().min(1, "يرجى اختيار مدة الاشتراك"),
  notes: z.string().optional(),
});

type OrderFormData = z.infer<typeof orderSchema>;

interface OrderFormSectionProps {
  selectedProductId?: string;
  selectedProductName?: string;
  onClearSelection?: () => void;
}

export default function OrderFormSection({ selectedProductId, selectedProductName, onClearSelection }: OrderFormSectionProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const { toast } = useToast();

  const form = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      productId: selectedProductId || "",
      duration: "",
      notes: "",
    },
  });

  const createOrderMutation = useMutation({
    mutationFn: async (data: OrderFormData) => {
      const product = getProductById(data.productId);
      const orderData = {
        fullName: data.fullName,
        phone: data.phone,
        email: data.email || null,
        productId: data.productId,
        productName: product?.name || data.productId,
        duration: data.duration,
        notes: data.notes || null,
      };
      const response = await apiRequest("POST", "/api/orders", orderData);
      return response.json();
    },
    onSuccess: () => {
      setIsSuccess(true);
    },
    onError: (error: Error) => {
      toast({
        title: "خطأ",
        description: error.message || "حدث خطأ أثناء إرسال الطلب",
        variant: "destructive",
      });
    },
  });

  useEffect(() => {
    if (selectedProductId) {
      form.setValue("productId", selectedProductId);
    }
  }, [selectedProductId, form]);

  useEffect(() => {
    if (isSuccess && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (isSuccess && countdown === 0) {
      window.open(WHATSAPP_URL, "_blank");
    }
  }, [isSuccess, countdown]);

  const onSubmit = async (data: OrderFormData) => {
    createOrderMutation.mutate(data);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setCountdown(3);
    form.reset();
    onClearSelection?.();
  };

  if (isSuccess) {
    return (
      <section id="order" className="py-20 relative">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="border-[hsl(var(--neon-purple)/0.5)] bg-card/80 backdrop-blur-sm shadow-[0_0_40px_hsl(var(--neon-purple)/0.2)]">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <CheckCircle2 className="h-20 w-20 mx-auto text-green-500 animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                تم تسجيل طلبك بنجاح!
              </h3>
              <p className="text-muted-foreground mb-6">
                سيتم تحويلك إلى الواتساب خلال {countdown} ثوان...
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.open(WHATSAPP_URL, "_blank")}
                  className="bg-green-600 hover:bg-green-700 text-white"
                  data-testid="button-whatsapp-success"
                >
                  افتح الواتساب الآن
                </Button>
                <Button variant="outline" onClick={resetForm} data-testid="button-new-order">
                  طلب جديد
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-l from-[hsl(var(--neon-purple))] to-[hsl(var(--neon-blue))] bg-clip-text text-transparent">
            اطلب الآن
          </span>
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          املأ النموذج وسيتواصل معك فريقنا عبر الواتساب
        </p>

        <Card className="border-[hsl(var(--neon-purple)/0.5)] bg-card/80 backdrop-blur-sm shadow-[0_0_40px_hsl(var(--neon-purple)/0.2)]">
          <CardHeader>
            <CardTitle className="text-xl">
              {selectedProductName ? `طلب: ${selectedProductName}` : "نموذج الطلب"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>الاسم الكامل *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="أدخل اسمك الكامل"
                          {...field}
                          data-testid="input-fullname"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>رقم الهاتف *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="مثال: +212600000000"
                          type="tel"
                          dir="ltr"
                          {...field}
                          data-testid="input-phone"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>البريد الإلكتروني (اختياري)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="example@email.com"
                          type="email"
                          dir="ltr"
                          {...field}
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="productId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>اختر المنتج *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-product">
                            <SelectValue placeholder="اختر المنتج المطلوب" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {products.map((product) => (
                            <SelectItem key={product.id} value={product.id}>
                              {product.name} - {product.price}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>مدة الاشتراك *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-duration">
                            <SelectValue placeholder="اختر مدة الاشتراك" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1month">شهر واحد</SelectItem>
                          <SelectItem value="3months">3 أشهر</SelectItem>
                          <SelectItem value="6months">6 أشهر</SelectItem>
                          <SelectItem value="12months">12 شهر (سنة)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ملاحظات إضافية (اختياري)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="أي تفاصيل إضافية تريد إضافتها..."
                          className="resize-none"
                          {...field}
                          data-testid="textarea-notes"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg py-6 shadow-[0_0_30px_hsl(var(--neon-purple)/0.4)]"
                  disabled={createOrderMutation.isPending}
                  data-testid="button-submit-order"
                >
                  {createOrderMutation.isPending ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin ml-2" />
                      جاري إرسال الطلب...
                    </>
                  ) : (
                    "إرسال الطلب"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
