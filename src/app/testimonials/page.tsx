"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from 'next/image';

interface Image {
  asset: {
    _id: string;
    url: string; // Include the URL field
  };
  alt: string; // Alt text for the image
}

interface Testimonial {
  _id: string;
  name: string;
  quote: string;
  role: string;
  image: Image; // Use the updated Image interface
}

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Track loading state
  const [, setIsMounted] = useState<boolean>(false); // Track if the component has mounted

  useEffect(() => {
    const query = `*[_type == "testimonial"]{
      _id,
      name,
      quote,
      role,
      image {
        asset -> {
          _id,
          url // Fetch the URL of the image asset
        },
        alt
      }
    }`;

    const fetchTestimonials = async () => {
      const data = await client.fetch(query); // Use the query variable here
      setTestimonials(data);
      setLoading(false); // Set loading to false after data is fetched
    };

    fetchTestimonials();
    setIsMounted(true); // Mark the component as mounted
  }, []);

  // Render a loading state or a fallback UI while fetching data
  if (loading) {
    return (
      <div className="bg-off-white py-16">
        <div className="container mx-auto px-4 text-center">
          <p>Loading testimonials...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-off-white py-8">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8 mt-0"
        >
          Testimonials
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden w-full items-center flex flex-col"
            >
              {testimonial.image && testimonial.image.asset && (
                <Image
                  src={urlFor(testimonial.image.asset.url)
                    .width(1000)
                    .height(1000)
                    .format("webp")
                    .quality(80)
                    .fit("crop")
                    .url() || ''} // Ensure a fallback
                  alt={testimonial.image.alt || testimonial.name}
                  loading="lazy"
                  width={1000} // Specify the width
                  height={1000} // Specify the height
                  className="w-64 h-64 object-fill rounded-lg mt-6" // Tailwind CSS classes
                />
              )}
              <div className="p-6">
                <p className="text-gray-600 italic mb-4">
                  {testimonial.quote}
                </p>
                <p className="font-semibold text-right">- {testimonial.name}</p>
                {testimonial.role && (
                  <p className="text-sm text-gray-500 text-right">
                    {testimonial.role}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
