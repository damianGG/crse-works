import Link from "next/link";
// CUSTOM UTILS
import { slideInDownAnimate } from "@/utils/animation";
import Image from "next/image";

export default function Hero4() {
  return (
    <section className="wrapper bg-light position-relative min-vh-70 d-lg-flex align-items-center">
      {/* <div
        style={{ backgroundImage: "url(/img/photos/dietetyk.jpg)" }}
        className="rounded-4-lg-start col-lg-6 order-lg-2 position-lg-absolute top-0 end-0 image-wrapper bg-image bg-cover h-100 min-vh-50"
      /> */}

      <Image
        src="/img/photos/dietetyk.jpg"
        alt="Image description"
        width={500}
        height={500}
        className="rounded-4-lg-start col-lg-6 order-lg-2 position-lg-absolute top-0 end-0 image-wrapper bg-image bg-cover h-100 min-vh-50"
      />


      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="mt-10 mt-md-11 mt-lg-n10 px-10 px-md-11 ps-lg-0 pe-lg-13 text-center text-lg-start">
              <h1 className="display-1 mb-5" style={slideInDownAnimate("600ms")}>
                Kobieta - Aktywność - Sukces
              </h1>
              <p className="lead fs-25 lh-sm mb-7 pe-md-10" style={slideInDownAnimate("900ms")}>
                Okres realizacji: 01.04.2024-31.03.2025
              </p>

              <div
                className="d-flex justify-content-center justify-content-lg-start"
                style={slideInDownAnimate("900ms")}>
                <span style={slideInDownAnimate("1200ms")}>
                  <Link href="/rekrutacja" title="Zapisz sie" className="btn btn-lg btn-primary rounded-pill me-2" >Zapisz się</Link>
                </span>

                <span style={slideInDownAnimate("1500ms")}>
                  <Link href="/aktualnosci" title="Aktualności" className="btn btn-lg btn-outline-primary rounded-pill" >Aktualności</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}