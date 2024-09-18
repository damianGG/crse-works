import { ProcessList1 } from "@/components/reuseable/process-list";
import DownloadList from "@/components/reuseable/process-list/DownloadList";
import { doPobrania2, processList1 } from "@/data/process";
import { doPobrania } from "@/data/process";
import Link from "next/link";
const backendLink = process.env.STRAPI_PUBLIC_BACKEND_LINK;

export async function getStrapiData() {
  const response = await fetch(`${backendLink}/api/dokumentys-workts?sort=rank:asc&populate=*`, {
    cache: 'no-store',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  return data;
}

export default async function Process7() {

  const dataFromStrapi = await getStrapiData();
  const data = dataFromStrapi.data;

  return (
    <>
      <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
        <div className="row mb-5">
          <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">

            <h2 className="display-4 mb-4 px-lg-14">Kto może wziąć udział w projekcie?</h2>
          </div>
        </div>

        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-6 order-lg-2">
            {processList1.map((item) => (
              <ProcessList1 {...item} key={item.no} />
            ))}
          </div>

          <div className="col-lg-6">
            <h2 className="display-6 mb-3">Jak to działa?</h2>
            <p className="lead fs-lg pe-lg-5">

            </p>

            <p>
              Rekrutacja realizowana będzie z uwzględnieniem zasady równych szans i płci oraz
              niedyskryminacji, w tym dostępności dla osób z niepełnosprawnościami. Przy rekrutacji
              stosowane będą także zasady zrównoważonego rozwoju.
            </p>

            <p>
              Do wzięcia udziału w projekcie zapraszamy wszystkich chętnych spełniających wyżej
              wymienione kryteria, a w szczególności <strong>osoby, które po agresji Federacji Rosyjskiej na
                Ukrainę zostały objęte w Polsce ochroną czasową, kobiety, osoby z niepełnosprawnością.</strong>
            </p>

            <p>
              <strong>
                Istnieje możliwość skorzystania z tłumacza języka migowego, pętli indukcyjnej lub pomocy
                asystenta osoby z niepełnosprawnością.
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div className="container pt-10 pt-md-10 pb-13 pb-md-15">

        <div className="row mb-5">
          <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">

            <h2 className="display-4 mb-4 px-lg-14">Jak zgłosić się do projektu?</h2>
            <p>Komplet dokumentów rekrutacyjnych można składać osobiście w Biurze projektu bądź
              przesyłać je listownie lub e-mailem. </p>
            <p>Na komplet dokumentów rekrutacyjnych składa się:</p>
            <div className="col-lg-12 order-lg-2">
              {doPobrania.map((item) => (
                item ? (
                  <ProcessList1
                    key={String(item.no)}
                    no={String(item.no)}
                    title={item.title}
                    subtitle={item.subtitle}
                    className={item.className}
                    shadow={item.shadow}
                  />
                ) : null
              ))}
            </div>


          </div>
        </div>
        <p className="text-center mt-5">Aby uzyskać więcej informacji prosimy o kontakt z <Link href="/kontakt" className="link-primary">biurem projektu.</Link> </p>
      </div>
      <div className="container pt-10 pt-md-10 pb-13 pb-md-15">

        <div className="row mb-5">
          <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">

            <h2 className="display-4 mb-10 px-lg-14">Dokumenty do pobrania</h2>
            <div className="d-flex flex-column align-items-start">
              <p>
                <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                  <span className="number"><i className="uil uil-file-download fs-40"></i></span>
                </span>
                - pobrania pliku w wersji kolorowej
              </p>
              <p>
                <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4" style={{ backgroundColor: "white" }}>
                  <span className="number" style={{ color: "black" }}><i className="uil uil-file-download fs-40"></i></span>
                </span>
                - pobrania pliku w wersji czarno-białej
              </p>
            </div>
            <p>Prosimy o drukowanie dokumentów rekrutacyjnych w kolorze. Wersja czarno-biała dotyczy sytuacji braku możliwości wydruku w kolorze.</p>
            <div className="col-lg-12 order-lg-2">
              {data.map((item: any) => (
                <DownloadList
                  title={item.attributes.tytul}
                  link1={item.attributes.kolorowy.data[0]?.attributes.url}
                  link2={item.attributes.czarnobialy.data[0]?.attributes.url}
                  key={item.id}
                  className="mb-5"
                />
              ))}
            </div>


          </div>
        </div>
        <p className="text-center mt-5">Aby uzyskać więcej informacji prosimy o kontakt z <Link href="/kontakt" className="link-primary">biurem projektu.</Link> </p>
      </div>



    </>


  );
}
