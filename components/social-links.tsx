import Link from "next/link";
import {
  Youtube,
  Instagram,
  Send,
  Twitter,
  Mail,
  Music,
  Video,
  Facebook,
  type LucideIcon,
} from "lucide-react";

const LINKS: { href: string; label: string; Icon: LucideIcon }[] = [
  { href: "https://www.youtube.com/@marcocostanza_/videos", label: "YouTube", Icon: Youtube },
  { href: "https://www.instagram.com/marcocostanza_/", label: "Instagram", Icon: Instagram },
  { href: "https://t.me/MarcoCostanzaTelegram/", label: "Telegram", Icon: Send },
  { href: "https://open.spotify.com/show/0gUVINh9VDMyJcqT3kFiMP?si=0e4970f816f848da", label: "Spotify", Icon: Music },
  { href: "https://www.tiktok.com/marcocostanza_", label: "TikTok", Icon: Video },
  { href: "https://x.com/marcocostanza_", label: "X (Twitter)", Icon: Twitter },
  { href: "https://www.facebook.com/CostanzaMarco94/", label: "Facebook", Icon: Facebook },
  { href: "mailto:info@marcocostanza.it", label: "Email", Icon: Mail },
];

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  layout?: "inline" | "stacked";
  showLabels?: boolean;
}

export function SocialLinks({
  className = "",
  iconSize = 20,
  layout = "inline",
  showLabels = false,
}: SocialLinksProps) {
  const baseUlClasses =
    layout === "stacked"
      ? "flex flex-col gap-2"
      : "flex flex-wrap items-center gap-3 sm:gap-4";

  return (
    <ul className={`${baseUlClasses} max-w-full ${className}`} aria-label="Social e contatti">
      {LINKS.map(({ href, label, Icon }) => (
        <li key={label}>
          <Link
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="flex items-center gap-2 rounded-md border border-transparent px-2.5 py-1.5 text-muted-foreground hover:border-accent/30 hover:bg-accent/10 hover:text-accent transition-all duration-200"
            aria-label={label}
          >
            <Icon size={iconSize} aria-hidden />
            {showLabels && (
              <span className="text-sm">{label}</span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
