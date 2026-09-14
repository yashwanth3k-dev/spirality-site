import {
  BookOpen,
  Bot,
  Building2,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Database,
  FileText,
  Flag,
  FolderOpen,
  Globe,
  Headset,
  Inbox,
  Layers,
  LayoutTemplate,
  Library,
  MessageSquare,
  ScanSearch,
  Search,
  Send,
  Server,
  Shield,
  Sparkles,
  GitCompareArrows,
  ListChecks,
  RefreshCw,
  UserRound,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { BlogGlyph } from "~/lib/content/blog";
import type { UseCaseGlyph } from "~/lib/content/use-cases";

const GLYPHS: Record<UseCaseGlyph, LucideIcon> = {
  inbox: Inbox,
  bot: Bot,
  user: UserRound,
  file: FileText,
  scan: ScanSearch,
  match: GitCompareArrows,
  flag: Flag,
  chat: MessageSquare,
  search: Search,
  sync: RefreshCw,
  shield: Shield,
  layout: LayoutTemplate,
  send: Send,
  database: Database,
  spark: Sparkles,
  queue: ListChecks,
  check: CheckCircle2,
  building: Building2,
  headset: Headset,
  book: BookOpen,
  globe: Globe,
  workflow: Workflow,
  clipboard: ClipboardCheck,
};

const BLOG_GLYPHS: Record<BlogGlyph, LucideIcon> = {
  clipboard: ClipboardList,
  folder: FolderOpen,
  bot: Bot,
  server: Server,
  library: Library,
  layers: Layers,
  calendar: Calendar,
  clock: Clock,
  flag: Flag,
  search: Search,
};

export function UseCaseIcon({
  name,
  size = 18,
}: {
  name: UseCaseGlyph;
  size?: number;
}) {
  const Icon = GLYPHS[name];
  return <Icon size={size} strokeWidth={1.75} aria-hidden />;
}

export function BlogIcon({
  name,
  size = 16,
}: {
  name: BlogGlyph;
  size?: number;
}) {
  const Icon = BLOG_GLYPHS[name];
  return <Icon size={size} strokeWidth={1.75} aria-hidden />;
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden>
      <path
        d="M5 12h13M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
