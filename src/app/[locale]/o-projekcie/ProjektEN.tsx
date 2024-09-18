import About6 from "@/components/blocks/about/About6Project";
import About6v2 from "@/components/blocks/about/About6v2";
import About6v3 from "@/components/blocks/about/About6v3";
import Image from "next/image";

export default function News() {
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
                                About the Project
                            </h1>
                            <p className="lead px-xxl-10"></p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mb-15 mt-15" >
                <div className=" mt-4 mb-15">
                    <p>Project Value: <span className="fw-bold">881,650.00 PLN</span> </p>
                    <p>Amount of European Funds Contribution: <span className="fw-bold">837,567.50 PLN</span></p>
                    <p className="mb-3 fw-bold lead fs-lg">
                        The main goal of the project is to support the socio-economic integration
                        of 70 third-country nationals, including migrants and their families
                        (42 women, 28 men) aged 18 and older, residing in the Warmian-Masurian
                        Voivodeship from 01.07.2024 to 30.06.2025. As a result, the social
                        situation of 70 project participants will improve.
                    </p>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">
                        <div className="overlap-grid overlap-grid-2">
                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/photo-1.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <p className="display-6 mb-3">Participation in the project includes the following elements:</p>
                        <p className="lead fs-lg">
                            Individualized diagnosis of needs in the area of social integration of third-country
                            nationals (ZDP) – for all project participants.
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        The aim of the support is to conduct a diagnosis by a team of experts
                                        (psychologist, lawyer, Polish language trainer) and a translator. The
                                        support will be precisely tailored to the social, legal, and linguistic
                                        needs of each participant.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Through the ZDP, each participant will receive individualized support,
                                        considering their specific needs, cultural differences, migration status,
                                        gender, age, and level of Polish proficiency, which will contribute to
                                        better social integration in the Warmian-Masurian Voivodeship.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Each project participant will receive 3 clock hours of support.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative">
                        <div className="overlap-grid overlap-grid-2">
                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/student.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <h2 className="display-4 mb-3"></h2>
                        <p className="lead fs-lg">
                            Polish language course – for all project participants.
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" /> The goal of the training is to develop language skills
                                        (listening, speaking, reading, and writing), enabling participants to use the Polish
                                        language fluently, which will contribute to better social integration.
                                    </li>
                                    <li>
                                        <i className="uil uil-check" /> The course will consist of 120 hours and cover vocabulary, tenses, numbers,
                                        nouns, adjectives, pronouns, sentence constructions, interrogative and negative
                                        sentences, and everyday life situations: family, work, housing, meals, free time, weather, health, etc.
                                    </li>
                                    <li>
                                        <i className="uil uil-check" /> An internal exam will be held at the end of the course to confirm the acquired competencies.
                                    </li>
                                    <li>
                                        <i className="uil uil-check" /> Participants can apply for reimbursement of travel costs and childcare or dependent care
                                        costs according to the rules specified in Chapter VI and Chapter VII.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">
                        <div className="overlap-grid overlap-grid-2">
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />
                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/ludzie.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <h2 className="display-4 mb-3"></h2>
                        <p className="lead fs-lg">
                            Support for participants in providing practical information regarding various aspects of life in Poland
                            and contacts with local institutions and the local community; for all project participants.
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Providing participants with practical information about various aspects of life in Poland,
                                        as well as contacts with local institutions and the local community, which will facilitate
                                        their adaptation and integration into the new environment.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        The course will consist of 16 hours and cover access to education, healthcare, culture,
                                        social assistance, support for victims of crimes (including discrimination and violence),
                                        housing policies, rental of residential premises, mandatory insurance, and daily life issues in Poland.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Acquired competencies will be verified through an internal exam.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Participants can apply for reimbursement of travel costs and childcare or dependent care costs
                                        according to the rules specified in Chapter VI and Chapter VII.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative">
                        <div className="overlap-grid overlap-grid-2">
                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/dietetyk.webp"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <h2 className="display-4 mb-3"></h2>
                        <p className="lead fs-lg">
                            Psychological or legal assistance – planned support for half of the participants in the form of
                            psychological support (average of 4 hours per person x 35 people) and for the other half, legal support
                            (average of 4 hours per person x 35 people).
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        The goal of the meeting is to provide foreign nationals with psychological and legal support
                                        to help them adapt and integrate in Poland, overcoming trauma and understanding and complying
                                        with Polish laws.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Psychological support: Participants will receive help dealing with trauma, anxiety, fear,
                                        and other emotions, improving their mental health and motivation to improve their life situation.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Legal support: Participants will receive information and help regarding residency matters,
                                        foreigners' rights and obligations, family law, labor law, social insurance, civil law, and criminal law,
                                        facilitating their full integration into the new country.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative order-lg-1">
                        <div className="overlap-grid overlap-grid-2">
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />
                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/ludzie.jpg"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <h2 className="display-4 mb-3"></h2>
                        <p className="lead fs-lg">
                            Translator support – for all project participants.
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        The goal of the meeting is to provide participants with translation assistance, which will
                                        help overcome language barriers and facilitate communication in various everyday situations,
                                        contributing to better social integration.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        As part of the action, 4 hours of support are planned for each participant.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative">
                        <div className="overlap-grid overlap-grid-2">
                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/dietetyk.webp"
                                        width={600}
                                        height={1000}
                                        alt="hero"
                                    />
                                </figure>
                            </div>
                            <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: "14rem", left: "-2.5rem", zIndex: "-1" }} />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <h2 className="display-4 mb-3"></h2>
                        <p className="lead fs-lg">
                            Training in "green skills" related to sustainable development; for all project participants.
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        The aim of the training is to raise awareness and respect for the environment; the course will cover,
                                        among others, sustainable development, adopting pro-ecological attitudes, waste segregation and
                                        recycling, eco-technologies for environmental protection, the impact of human activities on the atmosphere
                                        (e.g., smog), revitalization processes, the climate crisis, environmental challenges, and renewable energy sources.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        As part of the action, 16 hours of support are planned for each participant.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        An internal exam will be held at the end of the course to confirm the acquired competencies.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
