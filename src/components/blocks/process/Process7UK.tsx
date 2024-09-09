import { ProcessList1 } from "@/components/reuseable/process-list";
import DownloadList from "@/components/reuseable/process-list/DownloadList";
import { doPobrania2, doPobraniaUK, processList1, processList1UK } from "@/data/process";
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
    throw new Error('Не вдалося отримати дані');
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

            <h2 className="display-4 mb-4 px-lg-14">Хто може взяти участь у проєкті?</h2>
          </div>
        </div>

        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-6 order-lg-2">
            {processList1UK.map((item) => (
              <ProcessList1 {...item} key={item.no} />
            ))}
          </div>

          <div className="col-lg-6">
            <h2 className="display-6 mb-3">Як це працює?</h2>
            <p className="lead fs-lg pe-lg-5">

            </p>

            <p>
              Рекрутація здійснюватиметься з урахуванням принципів рівних можливостей і гендерної рівності, а також
              недискримінації, включаючи доступність для осіб з інвалідністю. Під час рекрутації
              також застосовуватимуться принципи сталого розвитку.
            </p>

            <p>
              Запрошуємо до участі в проєкті всіх зацікавлених, які відповідають вищезазначеним
              критеріям, а особливо <strong>осіб, які після агресії Російської Федерації проти
                України отримали тимчасовий захист у Польщі, жінок, осіб з інвалідністю.</strong>
            </p>

            <p>
              <strong>
                Є можливість скористатися послугами перекладача жестової мови, індукційної петлі або допомогою
                асистента особи з інвалідністю.
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div className="container pt-10 pt-md-10 pb-13 pb-md-15">

        <div className="row mb-5">
          <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">

            <h2 className="display-4 mb-4 px-lg-14">Як подати заявку на участь у проєкті?</h2>
            <p>Повний пакет реєстраційних документів можна подати особисто в офісі проєкту або
              надіслати поштою чи електронною поштою. </p>
            <p>Пакет реєстраційних документів включає:</p>
            <div className="col-lg-12 order-lg-2">
              {doPobraniaUK.map((item) => (
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
        <p className="text-center mt-5">Щоб отримати більше інформації, просимо звертатися до <Link href="/kontakt" className="link-primary">офісу проєкту.</Link> </p>
      </div>
      <div className="container pt-10 pt-md-10 pb-13 pb-md-15">

        <div className="row mb-5">
          <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">

            <h2 className="display-4 mb-10 px-lg-14">Документи для завантаження</h2>
            <div className="d-flex flex-column align-items-start">
              <p>
                <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                  <span className="number"><i className="uil uil-file-download fs-40"></i></span>
                </span>
                - завантаження файлу в кольоровій версії
              </p>
              <p>
                <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4" style={{ backgroundColor: "white" }}>
                  <span className="number" style={{ color: "black" }}><i className="uil uil-file-download fs-40"></i></span>
                </span>
                - завантаження файлу в чорно-білій версії
              </p>
            </div>
            <p>Просимо друкувати реєстраційні документи в кольорі. Чорно-біла версія призначена для випадків, коли немає можливості друкувати в кольорі.</p>
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
        <p className="text-center mt-5">Щоб отримати більше інформації, просимо звертатися до <Link href="/kontakt" className="link-primary">офісу проєкту.</Link> </p>
      </div>
    </>
  );
}
