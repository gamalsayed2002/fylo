import React from "react";
import logo from "../images/logo.svg";
import location from "../images/icon-location.svg";
import phone from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <section className="bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px] text-white">
      <div className="container">
        <a href="/">
          <img
            src={logo}
            alt="logo-img"
            className="w-[175px] h-[66px] object-contain "
          />
        </a>

        <div className="mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]">
          <div className="flex  gap-[15px]  w-[340px] max-w-full">
            <img
              src={location}
              alt="err"
              className="w-[18px] h-[18px] object-contain "
            />
            <p className="font-normal text-sm tracking-[0.8px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis odio ex explicabo quasi, voluptate hic inventore
              maiores optio laboriosam illo?
            </p>
          </div>

          <div>
            <div className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0">
              <img
                src={phone}
                alt="icon"
                className="w-[18px] h-[18px] object-contain "
              />
              <p>+2012559655</p>
            </div>
            <div className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0">
              <img
                src={email}
                alt="icon"
                className="w-[18px] h-[18px] object-contain "
              />
              <p>exam@gmail.com</p>
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Jops</a>
            </li>
            <li>
              <a href="/">Press</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>

            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Terms</a>
            </li>
            <li>
              <a href="/">Privacy</a>
            </li>
          </ul>

          <ul className="flex gap-[15px] w-full justify-center md:w-auto">
            <li>
              <a href="/" className="group">
                <div className="w-[40px] h-[40px] element-center border border-white rounded-full">
                  <FaFacebook className="group-hover:text-mainColor" />
                </div>
              </a>
            </li>

            <li>
              <a href="/" className="group">
                <div className="w-[40px] h-[40px] element-center border border-white rounded-full">
                  <FaTwitter className="group-hover:text-mainColor" />
                </div>
              </a>
            </li>

            <li>
              <a href="/" className="group">
                <div className="w-[40px] h-[40px] element-center border border-white rounded-full">
                  <FaInstagram className="group-hover:text-mainColor" />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
