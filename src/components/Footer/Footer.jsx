import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
  faInstagram,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__contact">
        <Link href="/" className="footer__contact-link">
          <FontAwesomeIcon
            icon={faFacebookF}
            className="footer__contact-item"
          />
          FACEBOOK
        </Link>
        <Link href={"/"} className="footer__contact-link">
          <FontAwesomeIcon icon={faTwitter} className="footer__contact-item" />
          TWITTER
        </Link>
        <Link href={"/"} className="footer__contact-link">
          <FontAwesomeIcon
            icon={faGooglePlusG}
            className="footer__contact-item"
          />
          GOOGLE PLUS
        </Link>
        <Link href={"/"} className="footer__contact-link">
          <FontAwesomeIcon
            icon={faInstagram}
            className="footer__contact-item"
          />
          INSTAGRAM
        </Link>
        <Link href={"/"} className="footer__contact-link">
          <FontAwesomeIcon
            icon={faPinterestP}
            className="footer__contact-item"
          />
          PINTEREST
        </Link>
      </div>
      <hr className="footer__hr" />
      <div className="footer__info text-white d-flex pt-4">
        <div className="footer__info-item w-50">
          <h4>Liên hệ</h4>
          <ul>
            <li>
              <p>Địa chỉ: 294 Nguyễn Trọng Tuyển, P.1, Q.Tân Bình, TP.HCM</p>
            </li>
            <li>
              <p>Điện Thoại : 0345.352.777</p>
            </li>
            <li>
              <p>Email: thoainguyen2205@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className="footer__info-item w-50">
          <h4>Hỗ trợ</h4>
          <ul>
            <li>
              <p>Giải đáp thắc mắc</p>
            </li>
            <li>
              <p>Hỗ trợ</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
