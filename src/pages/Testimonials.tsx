import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client, urlFor } from "@/lib/sanity";

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

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = await client.fetch(`
        *[_type == "testimonial"]{
          _id,
          name,
          quote,
          role,
          image{
            'image': asset._ref
          }
        }
      `);
      // const data = await client.fetch(`
      //   *[_type == "testimonial"]{
      //     _id,
      //     name,
      //     quote,
      //     role,
      //     "image": image->{
      //       _id,
      //       "image": image.asset->url,
      //       alt
      //     }
      //   }
      // `);
      setTestimonials(data);
    };
    fetchTestimonials();
  }, []);

  return (
    <div className="bg-off-white py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
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
              {testimonial.image && (
                <img
                  src={urlFor(testimonial.image.image)
                    .width(400)
                    .height(400)
                    .format("webp")
                    .quality(80)
                    .fit("crop")
                    .url()}
                  alt={testimonial.image.alt || testimonial.name}
                  loading="lazy"
                  className="w-48 h-48 object-fill rounded-full mt-6"
                />
              )}
              <div className="p-6">
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.quote}"
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
