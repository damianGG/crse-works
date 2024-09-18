

import Hero4 from "@/components/blocks/hero/Hero4";
import About6_PL from "@/components/blocks/about/About6-PL";
import About6_UE from "@/components/blocks/about/About6-UE";
import About6_EN from "@/components/blocks/about/About6-EN";
import Hero4_UE from "@/components/blocks/hero/Hero4_UE";
import { useTranslations } from 'next-intl';
import Link from "next/link";
import NavbarOne from "@/components/blocks/navbar/navbar-1/NavbarOne";
import Hero4_EN from "@/components/blocks/hero/Hero4_EN";


export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('Menu');
  return (
    <div>

      {locale === 'pl' && <Hero4 />}
      {locale === 'uk' && <Hero4_UE />}
      {locale === 'en' && <Hero4_EN />}

      {locale === 'pl' && <About6_PL />}
      {locale === 'uk' && <About6_UE />}
      {locale === 'en' && <About6_EN />}
    </div>
  );
}