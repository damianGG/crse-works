import Link from "next/link";
import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Contact for the "Woman * Activity * Success" Project',
    description: 'Contact for the "Woman * Activity * Success" project in Radom and Wieniawa municipality and for the J&P Moritz Consulting Group project office in Wrocław',
};

export default function Contact() {
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
                                Contact
                            </h1>
                            <p className="lead px-xxl-10"></p>
                        </div>
                    </div>
                </div>
            </section>

            <title>Project Office</title>

            <div className="container mt-5">
                <div className="row">
                    <div className="col text-center">
                        <h1>Project Office</h1>
                        <p><strong>Address:</strong> ul. Okopowa 25, room 003, 10-075 Olsztyn</p>
                        <p>The project office is open from Monday to Friday from 8:00 AM to 4:00 PM (it is possible to arrange a meeting at different hours)</p>
                        <p><strong>Phone:</strong> +48 696 548 883</p>
                        <p><strong>Email:</strong> <a href="mailto:integracjaadaptacja@workts.pl" className="link-primary" target="_blank">integracjaadaptacja@workts.pl</a></p>
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
                        <h2>Work &amp; Training Service Sp. z o.o.</h2>
                        <p><strong>Address: </strong> Sielec 1A 39-120 Sędziszów Małopolski</p>
                        <p><strong>Website: </strong><Link href="http://workts.pl/" className="link-primary" target="_blank">www.workts.pl</Link></p>
                        <p><strong>Phone: </strong>17 2226951</p>
                        <p><strong>Email: </strong><a href="mailto:biuro@workts.pl" className="link-primary" target="_blank">biuro@workts.pl</a></p>
                    </div>
                </div>
                <div className="row">
                </div>
            </div>
        </>
    );
};
