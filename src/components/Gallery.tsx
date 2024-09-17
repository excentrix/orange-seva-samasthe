import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Gallery: React.FC = () => {
  // Replace with actual image URLs from your project
  const images = [
    "/path/to/image1.jpg",
    "/path/to/image2.jpg",
    "/path/to/image3.jpg",
    "/path/to/image4.jpg",
    "/path/to/image5.jpg",
  ];

  return (
    <div className="bg-off-white py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Gallery
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
          >
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-96 object-cover"
                />
              </div>
            ))}
          </Carousel>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
