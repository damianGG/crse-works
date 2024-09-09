

import Hero4 from "@/components/blocks/hero/Hero4";

import Hero4_UE from "@/components/blocks/hero/Hero4_UE";
import ProjektPL from "./ProjektPL";
import ProjektUK from "./ProjektUK";



export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
    return (
        <>
            {locale === 'pl' && <ProjektPL />}
            {locale === 'uk' && <ProjektUK />}
        </>
    );
}