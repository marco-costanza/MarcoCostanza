import Link from "next/link";
import {
  Youtube,
  Instagram,
  Send,
  Twitter,
  Mail,
  type LucideIcon,
} from "lucide-react";

const LINKS: { href: string; label: string; Icon: LucideIcon }[] = [
  { href: "https://www.youtube.com/@marcocostanza_/videos", label: "YouTube", Icon: Youtube },
  { href: "https://www.instagram.com/marcocostanza_/", label: "Instagram", Icon: Instagram },
  { href: "https://t.me/MarcoCostanzaTelegram/", label: "Telegram", Icon: Send },
  { href: "https://x.com/marcocostanza_", label: "X (Twitter)", Icon: Twitter },
  { href: "mailto:info@marcocostanza.it", label: "Email", Icon: Mail },
];

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export function SocialLinks({ className = "", iconSize = 20 }: SocialLinksProps) {
  return (
    <ul className={`flex items-center gap-4 ${className}`} aria-label="Social e contatti">
      {LINKS.map(({ href, label, Icon }) => (
        <li key={label}>
          <Link
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="text-text-muted hover:text-accent transition-colors"
            aria-label={label}
          >
            <Icon size={iconSize} aria-hidden />
          </Link>
        </li>
      ))}
    </ul>
  );
}
