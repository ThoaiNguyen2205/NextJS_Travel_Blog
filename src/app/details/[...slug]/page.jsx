import React from "react";
import Link from "next/link";
import { arrTravelList } from "../../../../public/assets/data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DetailSlug({ params }) {
  const { slug } = params;
  console.log(slug);
  const placeDetail = arrTravelList.find((place) => place.name == slug);
  console.log(placeDetail);
  return (
    <div>
      <div className="detail container">
        <h2 className="detail__title text-center my-5 pt-5 text-success">
          {placeDetail.shortdesc}
        </h2>
        <div className="detail__title-img mb-5 text-center">
          <img src={placeDetail.image[0]} alt="" className="w-75" />
        </div>
        <div className="detail__item row mb-5 pt-5">
          <div className="detail__item-img col-5">
            <img src={placeDetail.image[1]} alt="" className="w-100" />
          </div>
          <div className="detail__item-info col-7 ps-5">
            <p className="detail__item-desc">{placeDetail.description}</p>
          </div>
        </div>
        <div className="detail__item row mt-5">
          <div className="detail__item-info col-7 ps-5">
            <p className="detail__item-desc">{placeDetail.description}</p>
          </div>
          <div className="detail__item-img col-5">
            <img src={placeDetail.image[2]} alt="" className="w-100" />
          </div>
        </div>
      </div>
      <div className="related container">
        <h3>Có thể bạn quan tâm</h3>
        <div className="related__list row">
          {placeDetail.related.map((relatePlace, index) => {
            return (
              <div className="related__list-item col-lg-4 col-md-6 col-12 p-5">
                <div className="related__item">
                  <div className="related__item-img">
                    <img src={relatePlace.image} alt="" />
                  </div>
                  <div className="related__item-info p-3">
                    <Link href={`/details/${relatePlace.name}`}>
                      <h5>{relatePlace.shortdesc}</h5>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
