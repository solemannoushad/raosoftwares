import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <secrtion className="text-white flex justify-between py-3 px-10 mx-auto">
        <div className="flex-1 p-5 footer-about">
          <div className="footer-logo text-2xl text-white tracking-widest mb-6">
            RAOSOFTWARES<span className="text-red-500">.</span>
          </div>
          <p className="footer-about-desc text-lg">
          Experience the transformative power of Rao Software Solutions. We specialize in developing custom software that helps businesses thrive in today’s competitive environment. With a focus on collaboration and client satisfaction, we deliver tailored solutions that meet your unique needs.
          </p>
          <div className="footer-contact mt-6 flex items-center">
            <i className="iconoir-message-text mr-2 text-red-500 text-lg"></i>
            <a className="text-base" href="">
              info@raosoftwares.com
            </a>
          </div>
        </div>
        <div className="flex-1 p-5 footer-links items-center flex flex-col">
          <div>
            <div className="footer-heading mb-6 text-xl font-semibold">
              Important Links
            </div>
            <ul className="footer-links">
              <li className="mb-4">
                <a className="text-lg font-normal" href="">
                  Terms and Conditions
                </a>
              </li>
              <li className="mb-4">
                <a className="text-lg font-normal" href="">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a className="text-lg font-normal" href="">
                  Human Rights Policy
                </a>
              </li>
              <li className="mb-4">
                <a className="text-lg font-normal" href="">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 p-5 footer-newsletter">
          <div className="footer-heading mb-6 text-xl font-semibold">
            Newsletter
          </div>
        </div>
      </secrtion>
      <footer>
        <p className="text-center text-white pb-5">
          Copyright © <span className="text-red-500">{currentYear}</span>{" "}
          RAOSOFTWARES. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
