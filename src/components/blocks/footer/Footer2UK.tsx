import Image from "next/image";
import Link from "next/link";

export default function Footer2() {
  return (
    <footer className="bg-soft-primary">
      <div className="container">
        {/* <div className="card shadow-lg mt-n16 mt-md-n21 mb-15 mb-md-14">
          <ContactMap />
        </div> */}
      </div>

      <div className="container pb-12 text-center pt-10">
        <div className="row mt-n10 mt-lg-0">
          <div className="col-xl-10 mx-auto">
            <div className="row mb-3">

              <div className="col-md-3">
                <div className="widget">
                  <p className="widget-title fs-15 fw-bold">
                    <i className="uil uil-map me-2 fs-25"></i> Адреса (офіс проєкту)
                  </p>
                  <address>
                    ul. Grunwaldzka 1  <br className="d-none d-md-block" /> 10-117 Ольштин
                  </address>
                </div>
              </div>

              <div className="col-md-3">
                <div className="widget">
                  <p className="widget-title fs-15 fw-bold">
                    <i className="uil uil-phone-alt me-2 fs-25"></i>Телефон
                  </p>
                  <p>
                    +48 880-310-980 <br />
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="widget">
                  <p className="widget-title fs-15 fw-bold">
                    <i className="uil uil-envelope fs-25 me-2"></i> e-mail
                  </p>

                  <Link href="mailto:integracjaadaptacja@workts.pl" className="link-primary">
                    integracjaadaptacja@workts.pl
                  </Link>
                  <br className="d-none d-md-block" />
                </div>
              </div>
              <div className="col-md-4 col-lg-3">
                <div className="widget">
                  <p className="widget-title fs-15 fw-bold">
                    <i className="uil uil-facebook-f fs-25" /> facebook</p>

                  <Link href="https://www.facebook.com/profile.php?id=61562831804317" className="link-primary" target="_blank">Integracja - Adaptacja</Link>

                </div>
              </div>
            </div>

            <p>Офіс проєкту працює з понеділка по п'ятницю з 8:00 до 16:00

              (є можливість домовитися на інший час зустрічі)</p>

          </div>
        </div>
        <p className="fs-15">Work & Training Service Sp. z o.o. всі права захищені.</p>
      </div>
    </footer>
  );
}