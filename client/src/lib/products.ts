import {
  Tv, Film, Video, Clapperboard, PlayCircle, Radio, Youtube, Apple, Monitor,
  Gamepad2, Diamond, Coins, Gem, Target, Trophy, CreditCard, Joystick, Wallet, Shield, Zap,
  Music, Headphones, AudioLines, Mic2, Music2, Music4,
  Palette, Layers, Image, Scissors, PenTool, Type, Layout, Users, GraduationCap, BarChart3, Lock, Globe
} from "lucide-react";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: "media" | "play" | "music" | "tech";
  icon: any;
  iconColor: string;
}

export const products: Product[] = [
  // Media
  { id: "netflix", name: "Netflix", description: "اشتراك نتفليكس بريميوم", price: "من 30 د.م", category: "media", icon: Tv, iconColor: "bg-red-500" },
  { id: "disney", name: "Disney+", description: "اشتراك ديزني بلس", price: "من 25 د.م", category: "media", icon: Film, iconColor: "bg-blue-600" },
  { id: "prime", name: "Amazon Prime", description: "اشتراك أمازون برايم فيديو", price: "من 20 د.م", category: "media", icon: Video, iconColor: "bg-cyan-500" },
  { id: "crunchyroll", name: "Crunchyroll", description: "اشتراك كرانشي رول للأنمي", price: "من 35 د.م", category: "media", icon: Clapperboard, iconColor: "bg-orange-500" },
  { id: "shahid", name: "Shahid VIP", description: "اشتراك شاهد VIP", price: "من 40 د.م", category: "media", icon: PlayCircle, iconColor: "bg-green-600" },
  { id: "osn", name: "OSN+", description: "اشتراك OSN بلس", price: "من 45 د.م", category: "media", icon: Radio, iconColor: "bg-purple-600" },
  { id: "iptv", name: "IPTV", description: "اشتراك IPTV قنوات عالمية", price: "من 50 د.م", category: "media", icon: Monitor, iconColor: "bg-indigo-600" },
  { id: "youtube", name: "YouTube Premium", description: "اشتراك يوتيوب بريميوم", price: "من 15 د.م", category: "media", icon: Youtube, iconColor: "bg-red-600" },
  { id: "appletv", name: "Apple TV+", description: "اشتراك آبل تي في بلس", price: "من 25 د.م", category: "media", icon: Apple, iconColor: "bg-gray-600" },

  // Play
  { id: "freefire", name: "Free Fire Diamonds", description: "شحن جواهر فري فاير", price: "من 10 د.م", category: "play", icon: Diamond, iconColor: "bg-yellow-500" },
  { id: "pubg", name: "PUBG UC", description: "شحن شدات ببجي موبايل", price: "من 15 د.م", category: "play", icon: Coins, iconColor: "bg-yellow-600" },
  { id: "mlbb", name: "Mobile Legends", description: "شحن جواهر موبايل ليجندز", price: "من 12 د.م", category: "play", icon: Gem, iconColor: "bg-blue-500" },
  { id: "valorant", name: "Valorant Points", description: "شحن نقاط فالورانت", price: "من 50 د.م", category: "play", icon: Target, iconColor: "bg-red-500" },
  { id: "fortnite", name: "Fortnite V-Bucks", description: "شحن في-باكس فورتنايت", price: "من 40 د.م", category: "play", icon: Trophy, iconColor: "bg-purple-500" },
  { id: "psn", name: "PSN Cards", description: "بطاقات بلايستيشن ستور", price: "من 100 د.م", category: "play", icon: CreditCard, iconColor: "bg-blue-600" },
  { id: "xbox", name: "Xbox Game Pass", description: "اشتراك إكس بوكس جيم باس", price: "من 80 د.م", category: "play", icon: Joystick, iconColor: "bg-green-600" },
  { id: "steam", name: "Steam Wallet", description: "بطاقات ستيم", price: "من 50 د.م", category: "play", icon: Wallet, iconColor: "bg-gray-700" },
  { id: "vpn-gaming", name: "VPN Gaming", description: "VPN مخصص للألعاب", price: "من 30 د.م", category: "play", icon: Shield, iconColor: "bg-teal-500" },
  { id: "exitlag", name: "ExitLag", description: "اشتراك إكزيت لاج", price: "من 35 د.م", category: "play", icon: Zap, iconColor: "bg-orange-600" },

  // Music
  { id: "spotify", name: "Spotify Premium", description: "اشتراك سبوتيفاي بريميوم", price: "من 20 د.م", category: "music", icon: Music, iconColor: "bg-green-500" },
  { id: "deezer", name: "Deezer Premium", description: "اشتراك ديزر بريميوم", price: "من 18 د.م", category: "music", icon: Headphones, iconColor: "bg-purple-500" },
  { id: "anghami", name: "Anghami Plus", description: "اشتراك أنغامي بلس", price: "من 15 د.م", category: "music", icon: AudioLines, iconColor: "bg-pink-500" },
  { id: "soundcloud", name: "SoundCloud Go+", description: "اشتراك ساوند كلاود بلس", price: "من 25 د.م", category: "music", icon: Mic2, iconColor: "bg-orange-500" },
  { id: "applemusic", name: "Apple Music", description: "اشتراك آبل ميوزك", price: "من 22 د.م", category: "music", icon: Music2, iconColor: "bg-red-500" },
  { id: "ytmusic", name: "YouTube Music", description: "اشتراك يوتيوب ميوزك", price: "من 15 د.م", category: "music", icon: Music4, iconColor: "bg-red-600" },

  // Tech
  { id: "canva", name: "Canva Pro", description: "اشتراك كانفا برو", price: "من 40 د.م", category: "tech", icon: Palette, iconColor: "bg-cyan-500" },
  { id: "envato", name: "Envato Elements", description: "اشتراك إنفاتو إلمنتس", price: "من 60 د.م", category: "tech", icon: Layers, iconColor: "bg-green-600" },
  { id: "freepik", name: "Freepik Premium", description: "اشتراك فريبيك بريميوم", price: "من 35 د.م", category: "tech", icon: Image, iconColor: "bg-blue-500" },
  { id: "capcut", name: "CapCut Teams", description: "اشتراك كاب كت تيمز", price: "من 50 د.م", category: "tech", icon: Scissors, iconColor: "bg-black" },
  { id: "adobe", name: "Adobe CC", description: "اشتراك أدوبي كريتيف كلاود", price: "من 100 د.م", category: "tech", icon: PenTool, iconColor: "bg-red-600" },
  { id: "grammarly", name: "Grammarly Premium", description: "اشتراك جرامرلي بريميوم", price: "من 45 د.م", category: "tech", icon: Type, iconColor: "bg-green-500" },
  { id: "quillbot", name: "QuillBot", description: "اشتراك كويل بوت", price: "من 40 د.م", category: "tech", icon: Type, iconColor: "bg-teal-600" },
  { id: "figma", name: "Figma", description: "اشتراك فيجما برو", price: "من 55 د.م", category: "tech", icon: Layout, iconColor: "bg-purple-600" },
  { id: "miro", name: "Miro", description: "اشتراك ميرو", price: "من 45 د.م", category: "tech", icon: Users, iconColor: "bg-yellow-500" },
  { id: "coursera", name: "Coursera", description: "اشتراك كورسيرا بلس", price: "من 80 د.م", category: "tech", icon: GraduationCap, iconColor: "bg-blue-600" },
  { id: "similarweb", name: "SimilarWeb", description: "اشتراك سيميلار ويب", price: "من 90 د.م", category: "tech", icon: BarChart3, iconColor: "bg-indigo-500" },
  { id: "1password", name: "1Password", description: "اشتراك ون باسوورد", price: "من 30 د.م", category: "tech", icon: Lock, iconColor: "bg-blue-700" },
  { id: "surfshark", name: "Surfshark", description: "اشتراك سيرف شارك VPN", price: "من 25 د.م", category: "tech", icon: Globe, iconColor: "bg-teal-500" },
  { id: "expressvpn", name: "ExpressVPN", description: "اشتراك إكسبريس VPN", price: "من 35 د.م", category: "tech", icon: Shield, iconColor: "bg-red-500" },
  { id: "cyberghost", name: "CyberGhost VPN", description: "اشتراك سايبر جوست VPN", price: "من 28 د.م", category: "tech", icon: Shield, iconColor: "bg-yellow-600" },
];

export const getProductsByCategory = (category: Product["category"]) => {
  return products.filter((p) => p.category === category);
};

export const getProductById = (id: string) => {
  return products.find((p) => p.id === id);
};
