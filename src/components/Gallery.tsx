import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Import the Image component from Next.js
import { client, urlFor } from "@/lib/sanity";

// Correcting the structure for ImageAsset
interface ImageAsset {
  _type: "image"; // Specify that this is an image type
  asset: {
    _ref: string; // Reference to the asset in Sanity
  };
}

interface CustomImage {
  _id: string;
  image: ImageAsset; // The image property is now an ImageAsset
  alt: string;
  caption: string;
}

const Gallery: React.FC = () => {
  const [images, setImages] = useState<CustomImage[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const data = await client.fetch(`
        *[_type == "customImage"]{
          _id,
          image {
            _type,
            asset -> {
              _ref
            }
          },
          alt,
          caption
        }
      `);
      setImages(data);
    };
    fetchImages();
  }, []);

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Our Gallery
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image._id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={urlFor(image.image).url()} // Use the urlFor function to get the image URL
                alt={image.alt || "Gallery image"}
                layout="responsive" // Adjust layout as needed
                width={400} // Specify width
                height={300} // Specify height
                loading="lazy"
                className="transition-transform duration-300 hover:scale-110" // You can style this in CSS instead
              />
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                  {image.caption}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
