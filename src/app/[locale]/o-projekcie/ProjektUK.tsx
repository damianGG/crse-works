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
                                Про проєкт
                            </h1>
                            <p className="lead px-xxl-10"></p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mb-15 mt-15" >
                <div className=" mt-4 mb-15">
                    <p>Вартість проєкту: <span className="fw-bold">881 650,00 зл</span> </p>
                    <p>Розмір внеску Європейських фондів:<span className="fw-bold"> 837 567,50 зл</span></p>
                    <p className="mb-3 fw-bold lead fs-lg">Основною метою проєкту є підтримка соціально-економічної інтеграції 70
                        громадян третіх країн, зокрема мігрантів та їхніх родин (42Ж, 28Ч) віком від 18
                        років, що проживають на території Вармінсько-Мазурського воєводства в період з 1.07.2024 по 31.08.2025, в результаті чого
                        соціальне становище 70 учасників проєкту покращиться.</p>
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


                        <p className="display-6 mb-3">Участь у проєкті включає такі елементи:</p>

                        <p className="lead fs-lg">
                            Індивідуалізована діагностика потреб у сфері соціальної інтеграції
                            громадян третіх країн (ЗДП) – для всіх
                            учасників проєкту.
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />Метою підтримки є проведення діагностики командою експертів
                                        (психолог, юрист, викладач польської мови) та перекладача, підтримка буде
                                        точно адаптована до соціальних, юридичних та мовних потреб
                                        кожного учасника.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Завдяки розробці ЗДП кожен учасник отримає індивідуальну
                                        підтримку, що враховує його специфічні потреби, культурні відмінності, міграційний статус,
                                        стать, вік та рівень знання польської мови, що сприятиме
                                        кращій соціальній інтеграції у Вармінсько-Мазурському воєводстві.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Кожен учасник проєкту отримає 3 години підтримки.
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
                            Курс польської мови – для всіх учасників проєкту;
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" /> Метою курсу є розвиток мовних навичок
                                        (слухання, говоріння, читання та письма), що дозволить учасникам вільно
                                        володіти польською мовою усно та письмово, що сприятиме їхній
                                        кращій соціальній інтеграції.
                                    </li>
                                    <li>
                                        <i className="uil uil-check" /> Курс триватиме 120 годин; тематика курсу включатиме:
                                        словниковий запас, граматичні часи, числа, іменники, прикметники, займенники,
                                        конструкції речень, питання, заперечення тощо, ситуації з
                                        повсякденного життя: сім'я, робота, житло, години, прийоми їжі, вільний час,
                                        погода, здоров'я тощо.
                                    </li>
                                    <li>
                                        <i className="uil uil-check" /> Після закінчення курсу відбудеться внутрішній іспит, який підтвердить
                                        отримані навички.
                                    </li>
                                    <li>
                                        <i className="uil uil-check" />Учасники можуть отримати компенсацію витрат на проїзд
                                        відповідно до правил, викладених у розділі VI, а також компенсацію витрат
                                        на догляд за дитиною або залежною особою відповідно до правил у
                                        розділі VII.
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
                            Підтримка учасників у наданні практичної
                            інформації щодо різних аспектів життя в Польщі та контактів з
                            місцевими інституціями та громадою; для всіх
                            учасників проєкту
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Надавати учасникам практичну інформацію про різні
                                        аспекти життя в Польщі та контакти з місцевими установами та
                                        громадою, що полегшить їх адаптацію та інтеграцію в новому
                                        середовищі.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Курс триватиме 16 годин; охоплює такі теми, як: доступ до освіти, охорони здоров'я, культури, соціальної допомоги, допомоги
                                        жертвам злочинів, у тому числі дискримінації та насильства; житлова політика, оренда житлових приміщень; процедури
                                        в офіційних справах; обов’язкові страхування, податкові обов’язки та інші повсякденні питання життя в Польщі.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Компетенції будуть перевірені шляхом внутрішнього іспиту.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Учасники можуть отримати компенсацію витрат на проїзд
                                        відповідно до правил, викладених у розділі VI, а також компенсацію витрат
                                        на догляд за дитиною або залежною особою відповідно до правил у
                                        розділі VII.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative ">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/shutterstock_2442851431.jpg"
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
                            Психологічна або юридична допомога – для половини учасників
                            передбачено підтримку в галузі психологічної допомоги (в середньому 4
                            години на людину х 35 осіб), а для іншої половини учасників
                            передбачено підтримку в галузі юридичної допомоги (в середньому 4 години на
                            людину х 35 осіб)
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Метою зустрічі є забезпечення іноземців психологічною
                                        та юридичною підтримкою, щоб допомогти їм адаптуватися та інтегруватися в Польщі, долаючи
                                        травми та зрозуміти та дотримуватись польських законів.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Психологічна підтримка: учасники отримають допомогу в подоланні
                                        травми, страху, тривоги та інших емоцій, що покращить їхнє психічне
                                        здоров'я та мотивацію до поліпшення життєвої ситуації.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Юридична підтримка: учасники отримають інформацію та допомогу щодо
                                        питань перебування, прав і обов'язків іноземців, сімейного права, трудових відносин,
                                        соціального страхування, цивільного та кримінального права, що полегшить їх повну
                                        інтеграцію в новій країні.
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
                                        src="/img/photos/shutterstock_2291512991.jpg"
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
                            Підтримка перекладача; для всіх учасників проєкту
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Метою зустрічі є забезпечення учасників допомогою перекладача, який
                                        допоможе подолати мовний бар'єр і полегшить спілкування в різних
                                        життєвих ситуаціях, що сприятиме їхній кращій соціальній інтеграції.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        У межах цього заходу заплановано 4 години підтримки для кожного учасника.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
                    <div className="col-lg-6 position-relative ">

                        <div className="overlap-grid overlap-grid-2">

                            <div>
                                <figure className="rounded shadow">
                                    <Image
                                        src="/img/photos/shutterstock_2429447415.jpg"
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
                            Навчання щодо "зелених навичок" стосовно сталого
                            розвитку; для всіх учасників проєкту
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Метою курсу є підвищення обізнаності та поваги до довкілля;
                                        тематика курсу включає такі теми, як: ознайомлення з ідеєю сталого розвитку,
                                        формування проекологічної поведінки, навички
                                        сортування та повторного використання відходів, еко-технології, корисні
                                        для захисту довкілля, вплив людської діяльності на атмосферу на
                                        прикладі смогу, процеси ревіталізації, кліматична криза, екологічні виклики,
                                        важливість для Землі щоденних звичок (zero waste), відновлювані джерела енергії, зелений транспорт, екологія у
                                        моєму домі, на роботі, у громаді.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Курс передбачає 16 годин підтримки для кожного учасника.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Після закінчення курсу відбудеться внутрішній іспит, який підтвердить
                                        отримані навички.
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
