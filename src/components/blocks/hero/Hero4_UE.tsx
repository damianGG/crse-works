import Link from "next/link";
// CUSTOM UTILS
import { slideInDownAnimate, zoomInAnimate } from "@/utils/animation";
import Image from "next/image";
import MainPhoto from "../../../../public/img/photos/main_photo.jpg";

export default function Hero4() {
  return (
    <section className="wrapper bg-light">
      <div className="container pt-8 pt-md-14">
        <div className="row gx-lg-0 gx-xl-8 gy-10 gy-md-13 gy-lg-0 mb-7 mb-md-10 mb-lg-16 align-items-center">
          <div
            className="col-md-8 offset-md-2 col-lg-6 offset-lg-1 position-relative order-lg-2"
            style={zoomInAnimate("0ms")}>
            <div className="shape bg-dot primary rellax w-17 h-19" style={{ top: "-1.7rem", left: "-1.5rem" }} />
            <div
              className="shape rounded bg-soft-primary rellax d-md-block"
              style={{ width: "85%", height: "90%", right: "-0.8rem", bottom: "-1.8rem" }}
            />
            <figure className="rounded">
              <Image
                src={MainPhoto}
                alt="hero"
              />
            </figure>
          </div>

          <div className="col-lg-5 mt-lg-n10 text-center text-lg-start">
            <h1 className="display-1 mb-5 fs-40" style={slideInDownAnimate("600ms")}>
              „ІНТЕГРАЦІЯ-АДАПТАЦІЯ!”
            </h1>
            <h3 className="mb-10">
              Період реалізації: 01.07.2024 р. – 30.06.2025 р.
            </h3>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <span style={slideInDownAnimate("1200ms")}>
                <Link href="/rekrutacja" className="btn btn-lg btn-primary rounded-pill me-2" >Запишіться</Link>
              </span>
              <span style={slideInDownAnimate("1200ms")}>
                <Link href="/aktualnosci" className="btn btn-lg btn-outline-primary rounded-pill" >Новини</Link>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section >
  );
}