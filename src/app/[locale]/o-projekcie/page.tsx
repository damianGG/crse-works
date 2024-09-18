

import Hero4 from "@/components/blocks/hero/Hero4";

import Hero4_UE from "@/components/blocks/hero/Hero4_UE";
import ProjektPL from "./ProjektPL";
import ProjektUK from "./ProjektUK";
import ProjektEN from "./ProjektEN";



export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
    return (
        <>
            {locale === 'pl' && <ProjektPL />}
            {locale === 'uk' && <ProjektUK />}
            {locale === 'en' && <ProjektEN />}
        </>
    );
}