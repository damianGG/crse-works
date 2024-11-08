import Link from "next/link";
import Image from 'next/image'
import type { Metadata } from 'next'

export default function Kontakt() {
    return (
        <>
            <section
                className="wrapper"
                style={{
                    position: 'relative',
                    backgroundPosition: 'right',
                    backgroundImage: 'url(/_next/static/media/flaga-ue-tlo.a9057970.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
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
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }}
                />
                <div
                    className="container pt-5 pb-5 pt-md-10 pb-md-10 text-center"
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
                            <h1 className="display-1 mb-3" style={{ color: 'white' }}>
                                Kontakt
                            </h1>
                            <p className="lead px-xxl-10"></p>
                        </div>
                    </div>
                </div>
            </section>

            <title>Biuro Projektu</title>

            <div className="container mt-5">
                <div className="row">
                    <div className="col text-center">
                        <h1>Biuro Projektu</h1>
                        <p><strong>Adres:</strong> ul. 1 Maja 13, V piętro, pokój 512., 10-075 Olsztyn</p>
                        <p>Biuro projektu czynne jest od poniedziałku do piątku w godzinach 8:00 - 16:00 (istnieje możliwość umówienia się na inne godziny spotkania)</p>
                        <p><strong>Tel:</strong> +48 880-310-980</p>
                        <p><strong>E-mail:</strong> <a href="mailto:integracjaadaptacja@workts.pl" className="link-primary" target="_blank">integracjaadaptacja@workts.pl</a> </p>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.0794955089045!2d20.47719788771185!3d53.77969314547938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e27ed23206f783%3A0xddee4e264cc823d3!2s1%20Maja%2013%2C%2011-041%20Olsztyn!5e0!3m2!1spl!2spl!4v1731059390178!5m2!1spl!2spl"
                        width={600}
                        height={450}
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="row mt-10">
                    <div className="col text-center mt-10">
                        <Image
                            src="/img/logos/logo-workts.jpg"
                            alt="Picture of the author"
                            width={105}
                            height={65}
                        />
                        <h2 className="mt-5">Work &amp; Training Service Sp. z o.o.</h2>
                        <p><strong>Adres: </strong> Sielec 1A 39-120 Sędziszów Małopolski</p>
                        <p><strong>Strona: </strong><Link href="http://workts.pl/" className="link-primary" target="_blank">www.workts.pl</Link></p>
                        {/* <p><strong>Facebook: </strong><Link href="https://www.facebook.com/profile.php?id=61558567391191" className="link-primary" target="_blank">J&P</Link></p> */}
                        <p><strong>Tel: </strong>17 2226951</p>
                        <p><strong>E-mail: </strong><a href="mailto:biuro@workts.pl" className="link-primary" target="_blank">biuro@workts.pl</a> </p>
                    </div>
                </div>
                <div className="row mt-10">
                    <div className="col text-center">
                        <Image
                            src="/img/logos/logopartner.png"
                            alt="Picture of the author"
                            width={65}
                            height={65}
                        />
                        <h2 className="mt-5">Polsko-Niemieckie Centrum Młodzieży Europejskiej Olsztyn- Partner</h2>
                        <p><strong>Adres: </strong>  ul. 1 Maja 13, V piętro, pokój 512., 10-075 Olsztyn</p>
                        <p><strong>Strona: </strong><Link href="www.pncm.olsztyn.pl" className="link-primary" target="_blank">www.pncm.olsztyn.pl</Link></p>
                        {/* <p><strong>Facebook: </strong><Link href="https://www.facebook.com/profile.php?id=61558567391191" className="link-primary" target="_blank">J&P</Link></p> */}
                        <p><strong>Tel: </strong>89 534 07 80</p>
                        <p><strong>E-mail: </strong><a href="mailto:centrum@pncm.olsztyn.pl" className="link-primary" target="_blank">centrum@pncm.olsztyn.pl</a> </p>
                    </div>
                </div>
                <div className="row">
                    {/* <div className="col text-center mb-15">
                        <Link
                            href="https://www.facebook.com/search/top/?q=%23funduszeue%20%23FunduszeEuropejskie"
                            className="link-primary" target="_blank"
                        >
                            #FunduszeUE #FunduszeEuropejskie
                        </Link>

                    </div> */}
                </div>
            </div>
        </>
    );
};

