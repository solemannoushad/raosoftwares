"use client";
import React, { useState, useRef } from "react";
import Button from "./Button";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const formRef = useRef(); // Create a reference for the form

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          setFormData({
            name: "",
            email: "",
            companyName: "",
            description: "",
          })
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <form
      ref={formRef}// Submit handler
      className="w-2/3 flex mx-auto flex-col"
    >
      <div className="flex w-full">
        <input
          className="my-5 mr-5 bg-background w-full text-white placeholder-gray-400 border-b border-gray-400 focus:outline-none focus:border-gray-500 focus:transition-colors focus:duration-300 pb-3 text-base"
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="my-5 mr-5 bg-background w-full text-white placeholder-gray-400 border-b border-gray-400 focus:outline-none focus:border-gray-500 focus:transition-colors focus:duration-300 pb-3 text-base"
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <input
        className="my-5 mr-5 bg-background w-full text-white placeholder-gray-400 border-b border-gray-400 focus:outline-none focus:border-gray-500 focus:transition-colors focus:duration-300 pb-3 text-base"
        type="text"
        name="companyName"
        id="companyName"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={handleChange}
        required
      />
      <textarea
        className="my-5 bg-background w-full text-white placeholder-gray-400 border-b border-gray-400 focus:outline-none focus:border-gray-500 focus:transition-colors focus:duration-300 pb-3 text-base resize-none"
        name="description"
        id="message"
        rows="4"
        placeholder="Project Description"
        value={formData.description}
        onChange={handleChange}
        required
      ></textarea>
      <div className="inline">
        <Button title={"Send Message"} onCLick={handleFormSubmit} />
      </div>
    </form>
  );
}

export default ContactForm;
