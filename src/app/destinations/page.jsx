import React from "react";
import Link from "next/link";
import { arrTravelList } from "../../../public/assets/data/data";
export default function Destinations() {
  return (
    <div className="destinations container">
      <h1 className="text-center">ĐIỂM ĐẾN THÚ VỊ</h1>
      <div className="destination__list row">
        {arrTravelList.map((dest, index) => {
          return (
            <div className="destination__list-item col-12" key={index}>
              <Link href={`/details/${dest.name}`}>
                <h5 className="text-primary my-4">{`${dest.id}. ${dest.shortdesc}`}</h5>
              </Link>
              <div className="destination__list-img text-center">
                <img src={dest.image[0]} alt="" />
                <img src={dest.image[1]} alt="" />
                <img src={dest.image[2]} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
