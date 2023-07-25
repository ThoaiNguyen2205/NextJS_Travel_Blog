import React from "react";
import Link from "next/link";
import Image from "next/image";
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
                <Image src={dest.image[0]} width={800} height={500} />
                <Image src={dest.image[1]} width={800} height={500} />
                <Image src={dest.image[2]} width={800} height={500} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
