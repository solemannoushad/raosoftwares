"use client"
import React, { useRef, useState } from "react";

export default function Footer() {

  const formRef = useRef();
  const [form, setForm] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wpvgu4c", // Your EmailJS service ID
        "template_fguxwg8", // Your EmailJS template ID
        formRef.current, // Pass the form reference
        "nTql0oKFhwRtQW5z2" // Your public key
      )
      .then(
        () => {
          console.log("SUCCESS! Message sent.");
          setForm('')
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

  const currentYear = '2024'
  return (
    <>
      <secrtion className="text-white flex justify-between py-3 px-10 mx-auto">
        <div className="flex-1 p-5 footer-about">
          <div className="footer-logo text-2xl text-white tracking-widest mb-6">
            DEVSTELLA<span className="text-foreground">.</span>
          </div>
          <p className="footer-about-desc text-base">
            Experience the transformative power of Rao Software Solutions. We
            specialize in developing custom software that helps businesses
            thrive in today’s competitive environment. With a focus on
            collaboration and client satisfaction, we deliver tailored solutions
            that meet your unique needs.
          </p>
          <div className="footer-contact mt-6 flex items-center">
            <i className="iconoir-message-text mr-2 text-foreground text-lg"></i>
            <a className="text-base" href="">
              info@devstella.com
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
                <a className="text-sm font-normal hover:text-foreground" href="">
                  Terms and Conditions
                </a>
              </li>
              <li className="mb-4">
                <a className="text-sm font-normal hover:text-foreground" href="">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a className="text-sm font-normal hover:text-foreground" href="">
                  Human Rights Policy
                </a>
              </li>
              <li className="mb-4">
                <a className="text-sm font-normal hover:text-foreground" href="">
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
          <div className="footer-form w-full">
            <form ref={formRef} className="relative">
              <input
                className="bg-background w-full text-white placeholder-gray-400 border-b border-gray-400 focus:outline-none focus:border-gray-500 pb-3 text-base"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={form}
                onChange={(e) => setForm(e.target.value)}
              />
              <i className="iconoir-send-diagonal text-2xl absolute text-foreground cursor-pointer" style={{right: '10px'}}></i>
            </form>
            <div className="footer-icons mt-5">
              <i className="iconoir-x text-white mr-2 text-2xl cursor-pointer hover:text-foreground transition-all duration-300"></i>
              <i className="iconoir-instagram text-white mr-2 text-2xl cursor-pointer hover:text-foreground transition-all duration-300"></i>
              <i className="iconoir-linkedin text-white mr-2 text-2xl cursor-pointer hover:text-foreground transition-all duration-300"></i>
            </div>
          </div>
        </div>
      </secrtion>
      <footer>
        <p className="text-center text-white pb-5">
          Copyright © <span className="text-foreground">{currentYear}</span>{" "}
          DEVSTELLA. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}