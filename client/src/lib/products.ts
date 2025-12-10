// @ts-nocheck
import {
  Tv,
  Film,
  Video,
  Radio,
  Youtube,
  Apple,
  Monitor,
  Music,
  Library,
  Joystick,
  Wallet,
  Shield,
  Zap,
  Palette,
  PenTool,
  Type,
  Layout,
  User,
  GraduationCap,
  BarChart3,
  Lock,
  Globe,
} from "lucide-react";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: "media" | "music" | "play" | "tech";
  icon: any;
  iconColor: string;
}

export const products: Product[] = [
  // -------------------
  // MEDIA (ابتداء من 50 د.م)
  // -------------------
  {
    id: "netflix",
    name: "Netflix",
    description: "اشتراك نتفليكس بريميوم",
    price: "ابتداء من 50 د.م",
    category: "media",
    icon: Tv,
    iconColor: "bg-red-500",
  },
  {
    id: "disney",
    name: "Disney+",
    description: "اشتراك ديزني بلس",
    price: "ابتداء من 50 د.م",
    category: "media",
    icon: Film,
    iconColor: "bg-blue-600",
  },
  {
    id: "prime",
    name: "Prime Video",
    description: "اشتراك برايم فيديو",
    price: "ابتداء من 50 د.م",
    category: "media",
    icon: Video,
    iconColor: "bg-indigo-600",
  },
  {
    id: "crunchyroll",
    name: "Crunchyroll",
    description: "اشتراك كرنشيرول",
    price: "ابتداء من 50 د.م",
    category: "media",
    icon: Radio,
    iconColor: "bg-orange-500",
  },
  {
    id: "shahid",
    name: "Shahid VIP",
    description: "اشتراك شاهد VIP",
    price: "ابتداء من 50 د.م",
    category: "media",
    icon: Youtube,
    iconColor: "bg-green-600",
  },
  {
    id: "osn",
    name: "OSN+",
    description: "اشتراك OSN+",
    price: "ابتداء من 50 د.م",
    category: "media",
    icon: Apple,
    iconColor: "bg-purple-600",
  },

  // -------------------
  // MUSIC (ابتداء من 50 د.م)
  // -------------------
  {
    id: "spotify",
    name: "Spotify Premium",
    description: "اشتراك سبوتيفاي بريميوم",
    price: "ابتداء من 50 د.م",
    category: "music",
    icon: Music,
    iconColor: "bg-green-500",
  },
  {
    id: "deezer",
    name: "Deezer Premium",
    description: "اشتراك ديزر",
    price: "ابتداء من 50 د.م",
    category: "music",
    icon: Library,
    iconColor: "bg-blue-500",
  },
  {
    id: "anghami",
    name: "Anghami Plus",
    description: "اشتراك أنغامي بلس",
    price: "ابتداء من 50 د.م",
    category: "music",
    icon: Apple,
    iconColor: "bg-purple-500",
  },
  {
    id: "soundcloud",
    name: "SoundCloud Premium",
    description: "اشتراك ساوند كلاود",
    price: "ابتداء من 50 د.م",
    category: "music",
    icon: Music,
    iconColor: "bg-orange-500",
  },
  {
    id: "applemusic",
    name: "Apple Music",
    description: "اشتراك أبل ميوزيك",
    price: "ابتداء من 50 د.م",
    category: "music",
    icon: Apple,
    iconColor: "bg-red-500",
  },

  // -------------------
  // PLAY (ابتداء من 15 د.م)
  // -------------------
  {
    id: "pubg",
    name: "PUBG UC",
    description: "شحن شدات ببجي",
    price: "ابتداء من 15 د.م",
    category: "play",
    icon: Joystick,
    iconColor: "bg-yellow-600",
  },
  {
    id: "freefire",
    name: "Free Fire Diamonds",
    description: "شحن جواهر فري فاير",
    price: "ابتداء من 15 د.م",
    category: "play",
    icon: Zap,
    iconColor: "bg-blue-600",
  },
  {
    id: "mlbb",
    name: "MLBB Diamonds",
    description: "شحن MLBB",
    price: "ابتداء من 15 د.م",
    category: "play",
    icon: Shield,
    iconColor: "bg-purple-600",
  },
  {
    id: "valorant",
    name: "Valorant Points",
    description: "شحن Valorant",
    price: "ابتداء من 15 د.م",
    category: "play",
    icon: Wallet,
    iconColor: "bg-red-600",
  },

  // -------------------
  // TECH (ثمن متوسط السوق المغربية)
  // -------------------
  {
    id: "canva",
    name: "Canva Pro",
    description: "اشتراك كانفا برو",
    price: "ابتداء من 35 د.م",
    category: "tech",
    icon: Palette,
    iconColor: "bg-cyan-500",
  },
  {
    id: "envato",
    name: "Envato Elements",
    description: "اشتراك إينفاتو إليمنتس",
    price: "ابتداء من 90 د.م",
    category: "tech",
    icon: PenTool,
    iconColor: "bg-green-700",
  },
  {
    id: "freepik",
    name: "Freepik Premium",
    description: "اشتراك فريبك بريميوم",
    price: "ابتداء من 50 د.م",
    category: "tech",
    icon: Layout,
    iconColor: "bg-yellow-500",
  },
  {
    id: "capcut",
    name: "CapCut Pro",
    description: "اشتراك كاب كات برو",
    price: "ابتداء من 30 د.م",
    category: "tech",
    icon: Film,
    iconColor: "bg-blue-500",
  },
  {
    id: "adobe",
    name: "Adobe CC",
    description: "باقة أدوبي كاملة",
    price: "ابتداء من 150 د.م",
    category: "tech",
    icon: PenTool,
    iconColor: "bg-red-600",
  },
  {
    id: "grammarly",
    name: "Grammarly Premium",
    description: "اشتراك Grammarly",
    price: "ابتداء من 50 د.م",
    category: "tech",
    icon: Type,
    iconColor: "bg-green-600",
  },
  {
    id: "quillbot",
    name: "QuillBot Premium",
    description: "إعادة صياغة احترافية",
    price: "ابتداء من 50 د.م",
    category: "tech",
    icon: Type,
    iconColor: "bg-purple-600",
  },
  {
    id: "figma",
    name: "Figma Professional",
    description: "اشتراك فيغما برو",
    price: "ابتداء من 60 د.م",
    category: "tech",
    icon: Layout,
    iconColor: "bg-indigo-600",
  },
  {
    id: "miro",
    name: "Miro",
    description: "أداة Miro للتخطيط",
    price: "ابتداء من 50 د.م",
    category: "tech",
    icon: Layout,
    iconColor: "bg-yellow-600",
  },
  {
    id: "coursera",
    name: "Coursera Plus",
    description: "تعلم بلا حدود",
    price: "ابتداء من 80 د.م",
    category: "tech",
    icon: GraduationCap,
    iconColor: "bg-blue-700",
  },
  {
    id: "similarweb",
    name: "SimilarWeb",
    description: "تحليل المواقع والزيارات",
    price: "ابتداء من 100 د.م",
    category: "tech",
    icon: BarChart3,
    iconColor: "bg-indigo-700",
  },
  {
    id: "1password",
    name: "1Password",
    description: "إدارة وحفظ كلمات المرور",
    price: "ابتداء من 40 د.م",
    category: "tech",
    icon: Lock,
    iconColor: "bg-gray-700",
  },
  {
    id: "surfshark",
    name: "Surfshark VPN",
    description: "حماية VPN قوية",
    price: "ابتداء من 30 د.م",
    category: "tech",
    icon: Globe,
    iconColor: "bg-green-700",
  },
  {
    id: "expressvpn",
    name: "ExpressVPN",
    description: "أسرع VPN عالمي",
    price: "ابتداء من 70 د.م",
    category: "tech",
    icon: Globe,
    iconColor: "bg-red-700",
  },
  {
    id: "cyberghost",
    name: "CyberGhost VPN",
    description: "VPN اقتصادي وعملي",
    price: "ابتداء من 30 د.م",
    category: "tech",
    icon: Globe,
     iconColor: "bg-yellow-700",
  },
]; // <-- هادي مهمّة بزاف: تسد الآراي هنا

export function getProductsByCategory(category: string) {
  return products.filter((p) => p.category === category);
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}
