import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_f4c064b",
        "template_7uh85vb",
        form.current,
        "1_VaKKoLBPeWwCMsu"
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50 text-gray-800 flex flex-col justify-between">
      <main className="flex-grow flex flex-col text-center items-center justify-center p-6">
        <div className="">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">
            GoDharma
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Building the backbone of the tech future — GoDharma is a modern
            software company offering high-quality website development services,
            scalable solutions, and future-ready digital architecture.
          </p>

          <p className="text-md text-gray-500 mb-6 italic">
            🚧 Full website experience coming soon. Stay tuned!
          </p>
        </div>
        <div className="max-w-3xl w-full text-center bg-white shadow-xl rounded-2xl p-10 border">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid gap-4 text-left"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-xl hover:bg-blue-600 transition"
            >
              Send Message
            </button>
            {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
          </form>
        </div>
      </main>

      <footer className="text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} GoDharma. All rights reserved.
      </footer>
    </div>
  );
}
