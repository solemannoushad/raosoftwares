"use client"
import React, { useState } from "react";
import Button from "./Button";

function ContactForm() {

  const [formData, setFormData] = useState({
    name: 'Soleman Noushad',
    email: 'solemannoushad31@gmail.com',
    companyName: 'Demo',
    description: 'Hello'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {

    e.preventDefault();
    // const { name, email, companyName, description } = formData;
  
    // try {
  
    //   const resmessage = `Message: ${description}`;
  
    //   await sendEmail({
    //     email: 'solemandev@gmail.com',
    //     subject: 'Recieved new message from Contact Form.',
    //     message: resmessage,
    //   });
  
    //   const userMessage = `
    //     Hi ${name},
  
    //     Thank you for getting in touch with RAOSOFTWARES! We have received your message and our team will get back to you as soon as possible.
  
    //     Here is a copy of your message:
    //     Subject: ${subject || 'No subject provided'}
    //     Message: ${message}
  
    //     Best regards,
    //     The Mobi Men Team
    //   `;
  
    //   await sendEmail({
    //     email: email,
    //     subject: 'Thank you for contacting Mobi Men!',
    //     message: userMessage,
    //   });
    // } catch (err) {
    //   console.log(err)
    // }
  }

  return (
    <div className="w-2/3 flex mx-auto flex-col">
      <div className="flex w-full">
        <input
          className="my-5 mr-5 bg-background w-full text-white placeholder-gray-400 border-b border-gray-400 focus:outline-none focus:border-gray-500 focus:transition-colors focus:duration-300 pb-3 text-base"
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="my-5 mr-5 bg-background w-full text-white placeholder-gray-400 border-b border-gray-400 focus:outline-none focus:border-gray-500 focus:transition-colors focus:duration-300 pb-3 text-base"
          type="email"
          name="email"
          id="email"
          value={formData.email}
          placeholder="Email Address"
          onChange={handleChange}
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
      />
      <textarea
        className="my-5 bg-background w-full text-white placeholder-gray-400 border-b border-gray-400 focus:outline-none focus:border-gray-500 focus:transition-colors focus:duration-300 pb-3 text-base resize-none"
        name="description"
        id="message"
        rows="4"
        placeholder="Project Description"
        value={formData.description}
        onChange={handleChange}
      ></textarea>
      <div className="inline">
        <Button title={"Send Message"} onCLick={handleFormSubmit} />
      </div>
    </div>
  );
}

export default ContactForm;
