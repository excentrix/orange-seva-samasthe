import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-600 to-yellow-500 text-white p-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="font-bold">
          &copy; 2024 Orange Seva Samasthe. All rights reserved.
        </p>
        <p className="mt-2">
          Contact:
          <a
            href="mailto:sevaorange@gmail.com"
            className="hover:underline ml-1"
          >
            sevaorange@gmail.com&nbsp;
          </a>
          |&nbsp;Phone:
          <a href="tel:9113902995" className="hover:underline ml-1">
            9113902995
          </a>,
          <a href="tel:6360814489" className="hover:underline ml-1">
            6360814489
          </a>
        </p>
        <div className="mt-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-white hover:text-blue-500 transition duration-300"
          >
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-white hover:text-blue-400 transition duration-300"
          >
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-white hover:text-pink-500 transition duration-300"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-white hover:text-blue-700 transition duration-300"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
        </div>
        <p className="text-sm mt-4">
          Follow us on social media for the latest updates.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
