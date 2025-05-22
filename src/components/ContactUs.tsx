"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function ContactUs() {
  const form = useRef<HTMLFormElement>(null);

  interface EmailFormElements extends HTMLFormControlsCollection {
    first_name: HTMLInputElement;
    last_name: HTMLInputElement;
    email: HTMLInputElement;
    phone: HTMLInputElement;
    message: HTMLTextAreaElement;
  }

  interface EmailForm extends HTMLFormElement {
    elements: EmailFormElements;
  }

  const sendEmail = (e: React.FormEvent<EmailForm>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w6o00z4",
        "template_tnup70e",
        form.current!,
        "Jh9mEHBh23gqVO_KG"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          console.log(result.text);

          form.current?.reset(); //It should only be called after a successful email send to avoid clearing fields
        },
        (error) => {
          toast.error("Failed to send message.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6 lg:px-32">
      <div className="mb-4">
        <Link
          href="/"
          className="inline-block bg-red-600 text-white px-4 py-2 mt-6 rounded-md hover:bg-red-700 transition"
        >
          Back to Home
        </Link>
      </div>

      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Contact Us
      </h2>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Mail className="mx-auto text-red-600" size={32} />
          <h3 className="text-xl font-semibold mt-4">Chat on us</h3>
          <p className="text-gray-500 mt-2">
            Our friendly team is here to help.
          </p>
          <p className="text-gray-800 mt-1 font-medium">info@learnwave.com</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <MapPin className="mx-auto text-green-600" size={32} />
          <h3 className="text-xl font-semibold mt-4">Visit us</h3>
          <p className="text-gray-500 mt-2">
            Come and say hello at our office HQ.
          </p>
          <p className="text-gray-800 mt-1 font-medium">
            Lorem ipsum dolor sit amet
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Phone className="mx-auto text-red-600" size={32} />
          <h3 className="text-xl font-semibold mt-4">Call us</h3>
          <p className="text-gray-500 mt-2">Mon - Fri From 8am to 5pm</p>
          <p className="text-gray-800 mt-1 font-medium">+123 456 7869</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">
          Got an idea? Let&#39;s team up
        </h3>
        <p className="text-gray-500 mb-8">
          Tell us more about yourself and what you&#39;ve got in mind.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              name="first_name"
              placeholder="Enter first name"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              name="last_name"
              placeholder="Enter last name"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="+93 -NY 12345 67890"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              placeholder="Enter your message here"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
