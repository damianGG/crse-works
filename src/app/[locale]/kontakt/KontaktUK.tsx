import Link from "next/link";
import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Контакт до проєкту «Жінка * Активність * Успіх»',
    description: 'Контакт до проєкту «Жінка * Активність * Успіх» у Радомі та гміні Вєнява, а також до офісу проєкту J&P Moritz Consulting Group Jacek Poproch у Вроцлаві',
}
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
                                Контакт
                            </h1>
                            <p className="lead px-xxl-10"></p>
                        </div>
                    </div>
                </div>
            </section>

            <title>Офіс Проєкту</title>

            <div className="container mt-5">
                <div className="row">
                    <div className="col text-center">
                        <h1>Офіс Проєкту</h1>
                        <p><strong>Адреса:</strong> вул. Окопова 25, кім. 003, 10-075 Ольштин</p>
                        <p>Офіс проєкту працює з понеділка по п'ятницю з 8:00 до 16:00 (є можливість домовитися на інший час зустрічі)</p>
                        <p><strong>Тел:</strong> +48 696 548 883</p>
                        <p><strong>E-mail:</strong> <a href="mailto:integracjaadaptacja@workts.pl" className="link-primary" target="_blank">integracjaadaptacja@workts.pl</a> </p>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d147.3567684576021!2d20.473796139686183!3d53.7768801612333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e27ed6da99889f%3A0x8d34fc46b6786c2c!2sOkopowa%2025%2C%2011-041%20Olsztyn!5e0!3m2!1spl!2spl!4v1724064079973!5m2!1spl!2spl"
                        width={600}
                        height={450}
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="row mt-10">
                    <div className="col text-center">
                        <h2>Work &amp; Training Service Януш Жучек</h2>
                        <p><strong>Адреса: </strong> Сєлець 1A 39-120 Сендзішів Малопольський</p>
                        <p><strong>Сайт: </strong><Link href="http://workts.pl/" className="link-primary" target="_blank">www.workts.pl</Link></p>
                        {/* <p><strong>Facebook: </strong><Link href="https://www.facebook.com/profile.php?id=61558567391191" className="link-primary" target="_blank">J&P</Link></p> */}
                        <p><strong>Тел: </strong>17 2226951</p>
                        <p><strong>E-mail: </strong><a href="mailto:biuro@workts.pl" className="link-primary" target="_blank">biuro@workts.pl</a> </p>
                    </div>

                </div>
                <div className="row">
                    {/* <div className="col text-center mb-15">
                        <Link
                            href="https://www.facebook.com/search/top/?q=%23funduszeue%20%23FunduszeEuropejskie"
                            className="link-primary" target="_blank"
                        >
                            #ФондиЄС #ЄвропейськіФонди
                        </Link>

                    </div> */}
                </div>
            </div>
        </>
    );
};
