import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import type { IconType } from "react-icons";
import type { SocialLink } from "../types/content";


const PLATFORM_ICON: Record<SocialLink["platform"], IconType> = {
  linkedin: FaLinkedinIn,
  twitter: FaXTwitter,
  youtube: FaYoutube,
  instagram: FaInstagram,
  facebook: FaFacebookF,
  github: FaGithub,
};

const PLATFORM_LABEL: Record<SocialLink["platform"], string> = {
  linkedin: "LinkedIn",
  twitter: "X",
  youtube: "YouTube",
  instagram: "Instagram",
  facebook: "Facebook",
  github: "GitHub",
};

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

export default function SocialLinks({
  links,
  className,
}: SocialLinksProps) {
  if (links.length === 0) return null;

  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      {links.map((link) => {
        const Icon = PLATFORM_ICON[link.platform];

        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={PLATFORM_LABEL[link.platform]}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full
              border border-navy-700/60
              text-mist-300
              transition-all duration-300 ease-precise
              hover:-translate-y-0.5
              hover:scale-110
              hover:border-bloom-400/40
              hover:text-ink-light
              hover:shadow-glow-bloom
            "
          >
            <Icon size={17} />
          </a>
        );
      })}
    </div>
  );
}