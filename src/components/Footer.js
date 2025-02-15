"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import AnimatedNotification from "./Notification";

export default function Footer() {
  const formRef = useRef(null);
  const [form, setForm] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [msg, setMsg] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (formRef.current) {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
      
      emailjs
        .sendForm(
          serviceId,
          templateId,
          formRef.current,
          userId,
        )
        .then(
          () => {
            console.log("SUCCESS! Message sent.");
            setForm("");
            setMsg("Subscribed successfully");
            setIsVisible(true);
          },
          (error) => {
            console.error("FAILED...", error);
            setMsg("Failed to subscribe. Please try again.");
            setIsVisible(true);
          },
        );
    }
  };

  const currentYear = "2024";

  return (
    <>
      <AnimatedNotification 
        message={msg} 
        isVisible={isVisible} 
        setIsVisible={setIsVisible} 
      />
      <div className="relative w-full h-full">
        <img src="/icons/footer-bg.svg" className="w-full h-full" alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101113] via-transparent to-[#101113] pointer-events-none"></div>
      </div>
      <section className="text-white py-8 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="footer-about">
            <div className="footer-logo text-2xl text-white tracking-widest mb-6">
              <img src="/icons/devstella-logo1.svg" className="w-24" alt="" />
            </div>
            <p className="footer-about-desc text-base mb-6">
              Experience the transformative power of Rao Software Solutions. We specialize in developing custom software
              that helps businesses thrive in today's competitive environment. With a focus on collaboration and client
              satisfaction, we deliver tailored solutions that meet your unique needs.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-heading mb-6 text-xl font-semibold">Important Links</div>
            <ul className="space-y-4">
              <li>
                <a className="text-sm font-normal hover:text-foreground transition-colors" href="#">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a className="text-sm font-normal hover:text-foreground transition-colors" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-sm font-normal hover:text-foreground transition-colors" href="#">
                  Human Rights Policy
                </a>
              </li>
              <li>
                <a className="text-sm font-normal hover:text-foreground transition-colors" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-contact-info">
            <div className="footer-heading mb-6 text-xl font-semibold">Get In Touch</div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <i className="iconoir-phone text-xl"></i>
                <a href="tel:+12678000191" className="text-sm font-normal hover:text-foreground transition-colors">
                  +123-456-7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <i className="iconoir-mail text-xl"></i>
                <a
                  href="mailto:info@xevensolutions.com"
                  className="text-sm font-normal hover:text-foreground transition-colors break-all"
                >
                  info@devstella.com
                </a>
              </div>
              <div className="h-px bg-gray-700 my-6"></div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <i className="iconoir-map-pin text-xl"></i>
                  <span className="text-sm">Pakistan</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="iconoir-map-pin text-xl"></i>
                  <span className="text-sm">United Kingdom</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="iconoir-map-pin text-xl"></i>
                  <span className="text-sm">United States</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-newsletter">
            <div className="footer-heading mb-6 text-xl font-semibold">Newsletter</div>
            <div className="footer-form w-full">
              <form ref={formRef} onSubmit={handleFormSubmit} className="relative mb-6">
                <input
                  className="bg-background w-full text-white placeholder-gray-400 border-b border-gray-400 focus:outline-none focus:border-gray-500 pb-3 text-base pr-10"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={form}
                  onChange={(e) => setForm(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 bottom-3 text-foreground hover:text-white transition-colors"
                  aria-label="Send email"
                >
                  <i className="iconoir-send-diagonal text-2xl"></i>
                </button>
              </form>
              <div className="footer-icons flex space-x-4">
                <a href="#" aria-label="Twitter" className="text-white hover:text-foreground transition-colors">
                  <i className="iconoir-x text-2xl"></i>
                </a>
                <a href="#" aria-label="Instagram" className="text-white hover:text-foreground transition-colors">
                  <i className="iconoir-instagram text-2xl"></i>
                </a>
                <a href="#" aria-label="LinkedIn" className="text-white hover:text-foreground transition-colors">
                  <i className="iconoir-linkedin text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-4">
        <p className="text-center text-white text-sm">
          Copyright © <span className="text-foreground">{currentYear}</span> DEVSTELLA. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}