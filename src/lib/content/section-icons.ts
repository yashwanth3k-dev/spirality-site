import {
  Bot,
  Brain,
  Clock,
  FlaskConical,
  type LucideIcon,
  Network,
  PhoneCall,
  Rocket,
  ScanSearch,
  Settings,
  ShieldCheck,
  TrendingUp,
  Wallet,
  Wrench,
  Zap,
} from "lucide-react";

export type SectionIconName =
  | "clock"
  | "wallet"
  | "zap"
  | "shield"
  | "scale"
  | "brain"
  | "search"
  | "wrench"
  | "flask"
  | "rocket"
  | "bot"
  | "website"
  | "network"
  | "call";

export const SECTION_ICONS: Record<SectionIconName, LucideIcon> = {
  clock: Clock,
  wallet: Wallet,
  zap: Zap,
  shield: ShieldCheck,
  scale: TrendingUp,
  brain: Brain,
  search: ScanSearch,
  wrench: Wrench,
  flask: FlaskConical,
  rocket: Rocket,
  bot: Bot,
  website: Settings,
  network: Network,
  call: PhoneCall,
};
