import React from "react";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 font-sans">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
        Get in Touch
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Whether you’d like to discuss a project, collaborate, or just say hello,
        I’d love to hear from you. Feel free to reach out using the form below
        or send me an email directly to <a
          href="mailto:jbpangilinan245@gmail.com"
          className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          jbpangilinan245@gmail.com
        </a>.
      </p>

      {/* Contact Form (dummy, no backend) */}
      <form className="bg-white shadow-md rounded-xl p-6 space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your full name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="your@email.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Write your message here..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>

      {/* Optional footer note */}
      <p className="text-center text-gray-500 text-sm mt-6">
        I typically respond within 1–2 business days.
      </p>
    </div>
  );
}
