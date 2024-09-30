import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-main to-blue-accent text-white p-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="font-bold">
          &copy; 2024 Orange Seva Samsthe. All rights reserved.
        </p>
        <p className="mt-2">
          Contact:
          <a
            href="mailto:sevaorange@gmail.com"
            className="hover:underline ml-1"
            aria-label="Email us at sevaorange@gmail.com"
          >
            sevaorange@gmail.com&nbsp;
          </a>
          |&nbsp;Phone:
          <a
            href="tel:9113902995"
            className="hover:underline ml-1"
            aria-label="Call us at 9113902995"
          >
            9113902995
          </a>
          ,
          <a
            href="tel:6360814489"
            className="hover:underline ml-1"
            aria-label="Call us at 6360814489"
          >
            6360814489
          </a>
        </p>
        <div className="mt-4">
          <a
            href="https://www.facebook.com/mymallesh/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-white hover:text-blue-500 transition duration-300"
            aria-label="Visit our Facebook page"
          >
            <i className="fab fa-facebook fa-lg" aria-hidden="true"></i>
            <span className="sr-only">Facebook</span>
          </a>
          <a
            href="https://x.com/sevamysuru"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-white hover:text-blue-400 transition duration-300"
            aria-label="Visit our X (Twitter) page"
          >
            <i className="fab fa-x-twitter fa-lg" aria-hidden="true"></i>
            <span className="sr-only">X (Twitter)</span>
          </a>
          <a
            href="https://www.instagram.com/orangesevasamsthemysore/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-white hover:text-pink-500 transition duration-300"
            aria-label="Visit our Instagram page"
          >
            <i className="fab fa-instagram fa-lg" aria-hidden="true"></i>
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/in/orange-seva-samsthe-r-mysore-mysore-karnataka-india-891848242/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-white hover:text-blue-700 transition duration-300"
            aria-label="Visit our LinkedIn page"
          >
            <i className="fab fa-linkedin fa-lg" aria-hidden="true"></i>
            <span className="sr-only">LinkedIn</span>
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
