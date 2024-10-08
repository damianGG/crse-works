import Footer2 from "./Footer2";
import Footer2EN from "./Footer2EN";
import Footer2UK from "./Footer2UK";


export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
    return (
        <>
            {locale === 'pl' && <Footer2 />}
            {locale === 'uk' && <Footer2UK />}
            {locale === 'en' && <Footer2EN />}
        </>
    );
}