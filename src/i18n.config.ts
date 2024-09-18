import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["pl", "uk","en"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  "pl": "PL",
  "uk": "UK",
  "en": "EN",
};

export const { Link, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });