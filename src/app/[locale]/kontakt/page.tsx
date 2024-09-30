import KontaktEN from "./KontaktEN";
import KontaktPL from "./KontaktPL";
import KontaktUK from "./KontaktUK";

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
    return (
        <>
            {locale === 'pl' && <KontaktPL />}
            {locale === 'uk' && <KontaktUK />}
            {locale === 'en' && <KontaktEN />}
        </>
    );
}