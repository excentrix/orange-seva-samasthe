// src/components/FeaturedTestimonials.tsx
import React, { useEffect, useState } from "react";
import { client, urlFor } from "@/lib/sanity";
import { motion } from "framer-motion";

interface Image {
  _id: string;
  image: any;
  alt: string;
}

interface Testimonial {
  _id: string;
  name: string;
  quote: string;
  role: string;
  image: Image;
}

const FeaturedTestimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = await client.fetch(`
        *[_type == "testimonial"][0..3]{
          _id,
          name,
          quote,
          role,
          image{
            'image': asset._ref
          }
        }
      `);
      setTestimonials(data);
    };
    fetchTestimonials();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 py-12"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-center mb-8"
        >
          What People Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              {testimonial.image && (
                <motion.img
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                  src={urlFor(testimonial.image.image)
                    .width(80)
                    .height(80)
                    .fit("crop")
                    .url()}
                  alt={testimonial.image.alt || testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
              )}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 * (index + 1) }}
                className="text-gray-600 italic mb-4 text-center"
              >
                "{testimonial.quote}"
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 * (index + 1) }}
                className="text-center"
              >
                <p className="font-bold">{testimonial.name}</p>
                {testimonial.role && (
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedTestimonials;
