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
                                O projekcie
                            </h1>
                            <p className="lead px-xxl-10"></p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mb-15 mt-15" >
                <div className=" mt-4 mb-15">
                    <p>Wartość projektu: <span className="fw-bold">881 650,00 zł</span> </p>
                    <p>Wysokość wkładu Funduszy Europejskich:<span className="fw-bold"> 837 567,50 zł</span></p>
                    <p className="mb-3 fw-bold lead fs-lg">Celem głównym projektu jest wsparcie integracji społeczno-gospodarczej 70
                        obywateli państw trzecich, w tym migrantów oraz ich rodzin (42K, 28M) w wieku 18
                        lat i więcej zamieszkujących w rozumieniu KC na obszarze woj. warmińsko-
                        mazurskie w okresie 1.07.2024 – 30.06.2025, w efekcie której u 70 uczestników
                        projektu sytuacja społeczna ulegnie poprawie.</p>
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


                        <p className="display-6 mb-3">Udział w projekcie obejmuje następujące elementy:</p>

                        <p className="lead fs-lg">
                            Zindywidualizowana diagnoza potrzeb w zakresie integracji
                            społecznej obywateli państw trzecich (ZDP) – dla wszystkich
                            Uczestniczek projektu
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />Celem wsparcia jest przeprowadzenie diagnozy przez zespół ekspertów
                                        (psycholog, prawnik, trener języka polskiego) i tłumacza, wsparcie zostanie
                                        precyzyjnie dostosowane do potrzeb społecznych, prawnych oraz językowych
                                        każdego uczestnika.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Dzięki opracowaniu ZDP każdy Uczestnik otrzyma zindywidualizowane
                                        wsparcie, uwzględniające jego specyficzne potrzeby, różnice kulturowe, status
                                        migracyjny, płeć, wiek i poziom znajomości języka polskiego, co przyczyni się
                                        do lepszej integracji społecznej w woj. warmińsko-mazurskim.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Każdy Uczestniczka projektu otrzyma 3 godz. zegarowych wsparcia.
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
                            Kurs z języka polskiego– dla wszystkich Uczestników projektu;
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" /> Celem szkolenia jest nabycie przez uczestników sprawności językowych
                                        (słuchania, mówienia, czytania oraz pisania), które umożliwią im swobodne
                                        posługiwanie się językiem polskim w mowie i piśmie, co przyczyni się do ich
                                        lepszej integracji społecznej.
                                    </li>
                                    <li>
                                        <i className="uil uil-check" /> Kurs będzie realizowany w wymiarze 120 godz; zakres kursu obejmie m.in.:
                                        słownictwo, czasy gramatyczne, liczby, rzeczowniki, przymiotniki, zaimki
                                        itp., konstrukcje zdaniowe, zdania pytające, przeczące itp., sytuacje z
                                        życia codziennego: rodzina, praca, mieszkanie, godziny, posiłki, czas
                                        wolny, pogoda, zdrowie itp.
                                    </li>
                                    <li>
                                        <i className="uil uil-check" /> Na zakończenie kursu odbędzie się egzamin wewnętrzny potwierdzający
                                        zdobyte kompetencje
                                    </li>
                                    <li>
                                        <i className="uil uil-check" />W ramach wsparcia Uczestniczki mogą ubiegać się o zwrot kosztów dojazdu
                                        zgodnie z zasadami określonymi w rozdziale VI, jak również o zwrot kosztów
                                        opieki nad dzieckiem lub osobą zależną zgodnie z zasadami określonymi w
                                        Rozdziale VII.
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
                            Wsparcie uczestników w obszarze dostarczania praktycznych
                            informacji dot. różnych aspektów życia w Polsce oraz kontaktów z
                            lokalnymi instytucjami i społecznością lokalną; dla wszystkich
                            Uczestników projektu
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Przekazanie uczestnikom praktycznych informacji dotyczących różnych
                                        aspektów życia w Polsce oraz kontaktów z lokalnymi instytucjami i

                                        społecznością lokalną, co ułatwi im adaptację i integrację w nowym
                                        środowisku.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Kurs będzie realizowany w wymiarze 16 godz; zakres kursu obejmie m.in.:
                                        dostępu do edukacji, służby zdrowia, kultury, pomocy społecznej, pomocy
                                        dla ofiar przestępstw, w tym dyskryminacji i przemocy; polityki
                                        mieszkaniowej, wynajmu lokali mieszkalnych; obowiązujących procedur w
                                        sprawach urzędowych; obowiązkowych ubezpieczeń, obowiązków
                                        podatkowych oraz innych problemów życia codziennego w Polsce.

                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Nabycie kompetencji będzie weryfikowane poprzez egzamin wewnętrzny.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W ramach wsparcia Uczestnicy mogą ubiegać się o zwrot kosztów dojazdu
                                        zgodnie z zasadami określonymi w rozdziale VI, jak również o zwrot kosztów
                                        opieki nad dzieckiem lub osobą zależną zgodnie z zasadami określonymi w
                                        Rozdziale VII.
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
                            Pomoc psychologiczna lub prawna – dla połowy uczestników
                            zaplanowano wsparcie w zakresie pomocy psychologicznej (śr. 4
                            godz. na osobę x 35 os.), a dla drugiej połowy uczestników
                            zaplanowano wsparcie w zakresie pomocy prawnej (śr. 4 godz. na
                            osobę x 35 os.)
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Celem spotkania jest zapewnienie cudzoziemcom wsparcia psychologicznego
                                        i prawnego, aby pomóc im w adaptacji i integracji w Polsce, umożliwiając
                                        pokonanie traum oraz zrozumienie i przestrzeganie polskich przepisów prawa.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparcie psychologiczne: Uczestnicy otrzymają pomoc w radzeniu sobie z
                                        traumą, lękiem, niepokojem i innymi emocjami, co poprawi ich zdrowie
                                        psychiczne i motywację do działania na rzecz polepszenia swojej sytuacji
                                        życiowej.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Wsparcie prawne: Uczestnicy uzyskają informacje i pomoc w zakresie spraw
                                        pobytowych, praw i obowiązków cudzoziemców, prawa rodzinnego, pracy,
                                        ubezpieczeń społecznych, prawa cywilnego i karnego, co ułatwi im pełną
                                        integrację w nowym kraju.
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
                            Wsparcie tłumacz; dla wszystkich Uczestników projektu
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Celem spotkania jest zapewnienie uczestnikom pomocy tłumacza, który
                                        pomoże w przezwyciężeniu bariery językowej i ułatwi komunikację w różnych
                                        sytuacjach życia codziennego, co przyczyni się do ich lepszej integracji
                                        społecznej. Tłumacz będzie towarzyszył uczestnikom w kontaktach
                                        międzyludzkich, np. w urzędach, miejscach integracji społecznej, instytucjach
                                        kulturalnych, oraz będzie tłumaczył potrzebne dokumenty, co zapewni płynną
                                        komunikację i zrozumienie.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W ramach działania zaplanowano 4 godz. wsparcia dla każdego Uczestnika.

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
                            Szkolenie z zakresu &quot;zielonych umiejętności&quot; dot. zrównoważonego
                            rozwoju; dla wszystkich Uczestników projektu
                        </p>

                        <div className="row gy-3 gx-xl-8">
                            <div className="col-xl-12">
                                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                                    <li>
                                        <i className="uil uil-check" />
                                        Celem szkolenia jest podniesienie świadomości i szacunku dla środowiska;
                                        zakres kursu obejmuje m. in.: zapoznanie z ideą zrównoważonego rozwoju,
                                        przyjmowanie postawy proekologicznej, kształtowanie umiejętności
                                        segregowania i wtórnego wykorzystania odpadów, eko-technologie pomocne
                                        w ochronie środowiska, wpływ działalności człowieka na atmosferę na
                                        przykładzie smogu, procesy rewitalizacji, kryzys klimatyczny, wyzwania
                                        środowiskowe, znaczenie dla Ziemi w zakresie postaw w życiu codziennym
                                        (zero waste), odnawialne źródła energii, zielona komunikacja, ekologia w
                                        moim domu, w pracy, w otoczeniu.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        W ramach działania zaplanowano 16 godz. wsparcia dla każdego Uczestnika.
                                    </li>
                                    <li className="mt-3">
                                        <i className="uil uil-check" />
                                        Na zakończenie kursu odbędzie się egzamin wewnętrzny potwierdzający
                                        zdobyte kompetencje.
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

