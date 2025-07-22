import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

// ✅ Correct public key
emailjs.init("FQ8hhM4Sz1rIwnQrb");

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send("service_o7nujqt", "template_ol4x1rd", templateParams)
      .then(() => {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setError(`Error ${err.status || ""}: ${err.text || err}`);
      });
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-16 px-4 sm:px-6 lg:px-20 text-black bg-white"
      data-aos="fade-up"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <MapPin className="w-6 h-6 text-green-300 mt-1" />
              <div>
                <h3 className="font-semibold text-xl">Location</h3>
                <p className="text-gray-500">
                  Koronadal, South Cotabato, Philippines
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <Phone className="w-6 h-6 text-green-300 mt-1" />
              <div>
                <h3 className="font-semibold text-xl">Phone</h3>
                <p className="text-gray-500">+63 907 9530 735</p>
              </div>
            </div>
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <Mail className="w-6 h-6 text-green-300 mt-1" />
              <div>
                <h3 className="font-semibold text-xl">Email</h3>
                <p className="text-gray-500">tinaysadio@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white rounded-lg shadow-lg p-6"
            data-aos="fade-left"
          >
            {submitted ? (
              <div className="p-6 bg-green-700 text-white rounded-lg text-center shadow-md animate-fadeIn">
                <p className="text-lg font-semibold">
                  Thank you! Your message was sent successfully.
                </p>
              </div>
            ) : (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded bg-gray-100 border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded bg-gray-100 border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded bg-gray-100 border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300"
                  />
                </div>
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 bg-amber-400 text-black font-semibold rounded hover:bg-amber-500 transition duration-300 shadow-md"
                >
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
