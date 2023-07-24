import Link from "next/link";
import styles from "./page.module.css";
import { arrTravelList } from "../../public/assets/data/data";
export default function Home() {
  return (
    <main>
      <section className="category container">
        <h2 className="category__title text-center text-primary">
          --- DU LỊCH ---
        </h2>
        <p className="text-center">Những địa điểm cực 'Hot' trong mùa hè này</p>

        <div className="category__list row">
          {arrTravelList.map((place, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-12 my-2" key={index}>
                <Link href={`/details/${place.name}`}>
                  <div className="category__list-item card">
                    <div className="category__item-img">
                      <img src={place.image[0]} alt="" />
                      <div className="category__item-title ps-3">
                        <h3>{place.name}</h3>
                        <p className="text-white">{place.shortdesc}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <section className="library">
        <div className="container">
          <div className="library__title mb-5">
            <h2 className="text-primary">--- THƯ VIỆN ---</h2>
            <p>Những tấm ảnh checkin ấn tượng</p>
          </div>
          <div className="library__content">
            <div className="library__item">
              <div className="library__item-img">
                <img src="./assets/img/pic1.jpeg" alt="pic1" />
              </div>
              <div className="library__item-overlay portfolio-overlay">
                <div className="overlay__text">
                  <p>Ảnh sưu tầm</p>
                </div>
              </div>
            </div>
            <div className="library__item ">
              <div className="library__item-img">
                <img src="./assets/img/pic2.jpg" alt="pic2" />
              </div>
              <div className="library__item-overlay portfolio-overlay">
                <div className="overlay__text">
                  <p>Ảnh sưu tầm</p>
                </div>
              </div>
            </div>
            <div className="library__item ">
              <div className="library__item-img">
                <img src="./assets/img/pic3.jpeg" alt="pic3" />
              </div>
              <div className="library__item-overlay portfolio-overlay">
                <div className="overlay__text">
                  <p>Ảnh sưu tầm</p>
                </div>
              </div>
            </div>
            <div className="library__item">
              <div className="library__item-img">
                <img src="./assets/img/pic4.jpeg" alt="pic4" />
              </div>
              <div className="library__item-overlay portfolio-overlay">
                <div className="overlay__text">
                  <p>Ảnh sưu tầm</p>
                </div>
              </div>
            </div>
            <div className="library__item">
              <div className="library__item-img">
                <img src="./assets/img/pic5.jpeg" alt="pic5" />
              </div>
              <div className="library__item-overlay portfolio-overlay">
                <div className="overlay__text">
                  <p>Ảnh sưu tầm</p>
                </div>
              </div>
            </div>
            <div className="library__item">
              <div className="library__item-img">
                <img src="./assets/img/pic6.jpeg" alt="pic6" />
              </div>
              <div className="library__item-overlay portfolio-overlay">
                <div className="overlay__text">
                  <p>Ảnh sưu tầm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
