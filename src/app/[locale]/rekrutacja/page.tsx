import Process7 from "@/components/blocks/process/Process7";
import Process7EN from "@/components/blocks/process/Process7EN";
import Process7UK from "@/components/blocks/process/Process7UK";

export default function News({ params: { locale } }: { params: { locale: string } }) {
    return (
        <>
            <section
                className="wrapper"
                style={{
                    position: 'relative',
                    backgroundPosition: 'right',
                    backgroundImage: 'url(/_next/static/media/flaga-ue-tlo.a9057970.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div
                    className="overlay"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}
                />
                <div
                    className="container pt-5 pb-5 pt-md-10 pb-md-10 text-center"
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
                            {/* Dynamic header based on locale */}
                            <h1 className="display-1 mb-3" style={{ color: 'white' }}>
                                {locale === 'pl'
                                    ? 'Rekrutacja'
                                    : locale === 'en'
                                        ? 'Recruitment'
                                        : 'Набір'}
                            </h1>
                            {/* Dynamic subtitle based on locale */}
                            <p className="lead px-xxl-10" style={{ color: 'white' }}>
                                {locale === 'pl'
                                    ? 'Sprawdź jak wygląda proces rekrutacji'
                                    : locale === 'en'
                                        ? 'Find out how the recruitment process works'
                                        : 'Дізнайтесь, як проходить процес набору'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {locale === 'pl' && <Process7 />}
            {locale === 'uk' && <Process7UK />}
            {locale === 'en' && <Process7EN />}
        </>
    );
}
