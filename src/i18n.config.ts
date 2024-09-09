import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["pl", "uk"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  "pl": "PL",
  "uk": "UK",
};

export const { Link, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });