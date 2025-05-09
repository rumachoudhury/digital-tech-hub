"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Github } from "lucide-react"; // using lucide-react

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              DigitalTechHub is your one-stop shop for the latest tech products,
              including laptops, smartphones, accessories, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="hover:text-blue-500">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-blue-500">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">123 Tech Street, Digital City</p>
            <p className="text-gray-400 mb-2">support@digitaltechhub.com</p>
            <p className="text-gray-400 mb-4">+1 (800) 123-4567</p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-gray-400 hover:text-blue-600"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-gray-400 hover:text-blue-400"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-gray-400 hover:text-pink-500"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                className="text-gray-400 hover:text-gray-600"
              >
                <Github size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} DigitalTechHub. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
