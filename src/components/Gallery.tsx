import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client, urlFor } from "@/lib/sanity";

interface CustomImage {
  _id: string;
  image: any;
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
          "image": image.asset->url,
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
              <img
                src={urlFor(image.image)
                  .width(400)
                  .height(300)
                  .format("webp")
                  .quality(80)
                  .fit("crop")
                  .url()}
                alt={image.alt || "Gallery image"}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
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
