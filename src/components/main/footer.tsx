import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#181818] text-white py-10 px-6 md:px-16">
      {/* Logo and Subscription */}
      <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-700 pb-4">
        <motion.img
          src="/src/assets/footer-logo.png"
          alt="Block Capitol Logo"
          className="w-24"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <div className="mt-4 flex space-x-2">
          <label className="flex gap-2 items-center self-stretch px-4 py-3 my-auto leading-snug border-b bg-slate-100 border-neutral-300 min-h-12 min-w-60 text-zinc-500 w-full md:w-[285px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4cdaf7d8cee3a16d8fe352ee390f14b3f3b0a497d9e49b330f37f5b1f01793a?placeholderIfAbsent=true&apiKey=e3159558e3c24b7bb6f2db02f0873db3"
              alt="Email icon"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <input
              type="email"
              placeholder="Enter email address"
              // value={value}
              // onChange={(e) => onChange(e.target.value)}
              className="bg-transparent outline-none w-full self-stretch my-auto"
              aria-label="Email address"
            />
          </label>
          <button className="bg-[#FF2F00] px-4 py-2 hover:bg-red-700 flex justify-center items-center self-stretch my-auto font-medium tracking-wide leading-none text-white whitespace-nowrap min-h-12">
            Subscribe
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center md:items-end justify-between">
        {/* Quick Links */}
        <div className="mt-8 text-center md:text-left">
          <h3 className="text-lg font-semibold">Quick Links:</h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">
              Terms of Service
            </li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="mt-8 flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold">Join Us</h3>
          <div className="flex space-x-4 mt-2">
            <FaYoutube
              className="text-gray-400 hover:text-white cursor-pointer"
              size={20}
            />
            <FaFacebookF
              className="text-gray-400 hover:text-white cursor-pointer"
              size={20}
            />
            <FaTwitter
              className="text-gray-400 hover:text-white cursor-pointer"
              size={20}
            />
            <FaInstagram
              className="text-gray-400 hover:text-white cursor-pointer"
              size={20}
            />
            <FaLinkedinIn
              className="text-gray-400 hover:text-white cursor-pointer"
              size={20}
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        The BlockCapitol © {new Date().getFullYear()}. All rights reserved.
        <div className="flex justify-center space-x-4 mt-2">
          <span className="hover:text-white cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer">
            Terms of Service
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
