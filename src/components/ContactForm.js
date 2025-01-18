import React from "react";
import Button from "./Button";

function ContactForm() {
  return (
    <div className="w-2/3 flex mx-auto flex-col">
      <div className="flex w-full">
        <input
          className="my-5 mr-5 bg-background w-full text-white placeholder-gray-400 border-b border-gray-400 focus:outline-none focus:border-gray-500 focus:transition-colors focus:duration-300 pb-3 text-base"
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
        />
        <input
          className="my-5 mr-5 bg-background w-full text-white placeholder-gray-400 border-b border-gray-400 focus:outline-none focus:border-gray-500 focus:transition-colors focus:duration-300 pb-3 text-base"
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
      </div>
      <input
        className="my-5 mr-5 bg-background w-full text-white placeholder-gray-400 border-b border-gray-400 focus:outline-none focus:border-gray-500 focus:transition-colors focus:duration-300 pb-3 text-base"
        type="text"
        name="companyName"
        id="companyName"
        placeholder="Company Name"
      />
      <textarea
        className="my-5 bg-background w-full text-white placeholder-gray-400 border-b border-gray-400 focus:outline-none focus:border-gray-500 focus:transition-colors focus:duration-300 pb-3 text-base resize-none"
        name="message"
        id="message"
        rows="4"
        placeholder="Project Description"
      ></textarea>
      <div className="flex">
        <Button title={"Send Message"} />
      </div>
    </div>
  );
}

export default ContactForm;
