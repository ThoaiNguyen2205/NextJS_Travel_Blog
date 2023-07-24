import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
export default function Header() {
  return (
    <>
      <div className="header container-fluid bg-dark py-3">
        <div className="header__content container d-flex justify-content-between">
          <div className="header__content-navbar text-white">
            <Link href="/" className="me-4">
              TRANG CHỦ
            </Link>
            <Link href="/contact" className="me-4">
              LIÊN HỆ
            </Link>
            <Link href="/destinations" className="me-4">
              ĐIỂM DU LỊCH
            </Link>
          </div>
          <div className="header__content-icons text-white">
            <Link href="/">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ width: 18 }}
                className="ms-4"
              />
            </Link>
            <Link href={"/"}>
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ width: 18 }}
                className="ms-4"
              />
            </Link>
            <Link href={"/"}>
              <FontAwesomeIcon
                icon={faGoogle}
                style={{ width: 18 }}
                className="ms-4"
              />
            </Link>
            <Link href={"/"}>
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ width: 18 }}
                className="ms-4"
              />
            </Link>
            <Link href={"/"}>
              <FontAwesomeIcon
                icon={faPinterest}
                style={{ width: 18 }}
                className="ms-4"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="banner">
        <img
          src="https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/09/header-bg.jpg"
          alt=""
          className="banner__item item-1"
        />
        <Link href={"/"}>
          <img
            src="https://cheerup.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/09/logo-mobile.jpg"
            alt=""
            className="banner__item item-2"
          />
        </Link>
      </div>
    </>
  );
}
