

import Hero4 from "@/components/blocks/hero/Hero4";
import About6_PL from "@/components/blocks/about/About6-PL";
import About6_UE from "@/components/blocks/about/About6-UE";
import Hero4_UE from "@/components/blocks/hero/Hero4_UE";
import { useTranslations } from 'next-intl';
import Link from "next/link";
import NavbarOne from "@/components/blocks/navbar/navbar-1/NavbarOne";
// import { Link } from '@/i18n/routing';

// const Home = ({ params: { locale } }: { params: { locale: string } }) => (

//   <main >
//     <div>

//       <About6_PL />
//       {locale === 'pl-pl' && <Hero4 />}
//       {locale === 'uk-ua' && <Hero4_UE />}

//       {locale === 'pl-pl' && <About6_PL />}
//       {locale === 'uk-ua' && <About6_UE />}
//     </div>
//   </main>
// );

// export default Home;

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('Menu');
  return (
    <div>

      {locale === 'pl' && <Hero4 />}
      {locale === 'uk' && <Hero4_UE />}

      {locale === 'pl' && <About6_PL />}
      {locale === 'uk' && <About6_UE />}
    </div>
  );
}