import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div style={{ background: "linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(26, 25, 25, 3))" }} className="text-white py-1">

      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span className="ml-3 text-md">Maria Khan</span>
          </a>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2025 Maria Khan
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link target="_blank" href="https://www.instagram.com/khan__mariah?igsh=MXBqbGJzcjl0OW5rMQ==" className="ml-3 text-gray-500 hover:text-[#e4405f] transition duration-300 ease-in-out">
              <FaInstagram className="text-2xl" />
            </Link>
            <Link target="_blank" href="https://github.com/MariaKhan10" className="ml-3 text-gray-500 hover:text-[#333] transition duration-300 ease-in-out">
              <FaGithub className="text-2xl" />
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/mariakhan10/" className="ml-3 text-gray-500 hover:text-[#0077b5] transition duration-300 ease-in-out">
              <FaLinkedin className="text-2xl" />
            </Link>
            <Link target="_blank" href="https://www.facebook.com/profile.php?id=100003139598578&mibextid=ZbWKwL" className="ml-3 text-gray-500 hover:text-[#3b5999] transition duration-300 ease-in-out">
              <FaFacebook className="text-2xl" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
