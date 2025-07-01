import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-bold mb-2">E-Cell</h2>
          <p className="text-sm text-gray-400">
            Empowering entrepreneurs to innovate and lead the future.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/events" className="hover:text-white">Events</a></li>
            <li><a href="/team" className="hover:text-white">Member</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Email: <a href="mailto:ecell@example.com" className="hover:text-white">ecell@example.com</a></li>
            <li>Phone (Head ) : <a href="tel:+911234567890" className="hover:text-white">+91 6201885752</a></li>
            <li>Phone (Co-Head) : <a href="tel:+919122180280" className="hover:text-white">+91 9122180280</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-blue-500"><FaFacebook size={20} /></a>
            <a href="https://www.instagram.com/innov8ors_ecell_hit" className="hover:text-pink-500"><FaInstagram size={20} /></a>
            <a href="https://www.linkedin.com/company/official-ecell-hit-haldia" className="hover:text-blue-300"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col  justify-center items-center text-sm text-gray-500 gap-2 text-center">
        <span>© {new Date().getFullYear()} E-Cell. All rights reserved.</span>
        <span className="font-bold text-gray-500">Made with ❤️ by E-Cell Team</span>
      </div>
    </footer>
  );
};

export default Footer;