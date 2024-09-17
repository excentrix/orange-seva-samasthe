import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  content: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Ramesh Kumar",
      content:
        "Orange Seva Samaste's food distribution program has been a lifesaver for my family. We're grateful for their support during tough times.",
      image: "/path/to/ramesh-image.jpg",
    },
    {
      name: "Lakshmi S.",
      content:
        "The skill development workshop organized by OSS helped me secure a job. Their dedication to empowering women is truly commendable.",
      image: "/path/to/lakshmi-image.jpg",
    },
    {
      name: "Venkatesh Rao",
      content:
        "Thanks to the medical camp conducted by Orange Seva Samaste, I received timely treatment for my eye condition. Their service is invaluable to our community.",
      image: "/path/to/venkatesh-image.jpg",
    },
    // Add more testimonials as needed
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
          Testimonials
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.content}"
                </p>
                <p className="font-semibold text-right">- {testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
