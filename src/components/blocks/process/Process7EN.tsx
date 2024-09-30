import { ProcessList1 } from "@/components/reuseable/process-list";
import DownloadList from "@/components/reuseable/process-list/DownloadList";
import { doPobrania2, processList1, processListEN } from "@/data/process";
import { doPobrania, doPobraniaEN } from "@/data/process";
import Link from "next/link";
const backendLink = process.env.STRAPI_PUBLIC_BACKEND_LINK;

export async function getStrapiData() {
  const response = await fetch(`${backendLink}/api/dokumentys-workts?sort=rank:asc&locale=en&populate=*`, {
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

            <h2 className="display-4 mb-4 px-lg-14">Who can participate in the project?</h2>
          </div>
        </div>

        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-6 order-lg-2">
            {processListEN.map((item) => (
              <ProcessList1 {...item} key={item.no} />
            ))}
          </div>

          <div className="col-lg-6">
            <h2 className="display-6 mb-3">How does it work?</h2>
            <p className="lead fs-lg pe-lg-5">

            </p>

            <p>
              Recruitment will be carried out taking into account the principles of equal opportunities and gender and non-discrimination, including accessibility for people with disabilities. Sustainable development principles will also be applied during recruitment.
            </p>

            <p>
              We invite all interested individuals who meet the above criteria to participate in the project, especially <strong>people who have been granted temporary protection in Poland following the aggression of the Russian Federation against Ukraine, women, and people with disabilities.</strong>
            </p>

            <p>
              <strong>
                It is possible to use a sign language interpreter, induction loop, or assistance from a personal assistant for a person with disabilities.
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div className="container pt-10 pt-md-10 pb-13 pb-md-15">

        <div className="row mb-5">
          <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">

            <h2 className="display-4 mb-4 px-lg-14">How to apply for the project?</h2>
            <p>The complete set of recruitment documents can be submitted in person at the Project Office or sent by mail or email. </p>
            <p>The complete set of recruitment documents includes:</p>
            <div className="col-lg-12 order-lg-2">
              {doPobraniaEN.map((item) => (
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
        <p className="text-center mt-5">To obtain more information, please contact the <Link href="/kontakt" className="link-primary">project office.</Link> </p>
      </div>
      <div className="container pt-10 pt-md-10 pb-13 pb-md-15">

        <div className="row mb-5">
          <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">

            <h2 className="display-4 mb-10 px-lg-14">Documents to download</h2>
            <div className="d-flex flex-column align-items-start">
              <p>
                <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                  <span className="number"><i className="uil uil-file-download fs-40"></i></span>
                </span>
                - download the file in color version
              </p>
              <p>
                <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4" style={{ backgroundColor: "white" }}>
                  <span className="number" style={{ color: "black" }}><i className="uil uil-file-download fs-40"></i></span>
                </span>
                - download the file in black and white version
              </p>
            </div>
            <p>Please print the recruitment documents in color. The black and white version applies when color printing is not possible.</p>
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
        <p className="text-center mt-5">To obtain more information, please contact the <Link href="/kontakt" className="link-primary">project office.</Link> </p>
      </div>



    </>


  );
}