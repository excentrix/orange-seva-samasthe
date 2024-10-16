// src/components/FeaturedTestimonials.tsx
import React, { useEffect, useState } from "react";
import { client, urlFor } from "@/lib/sanity";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


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
  const [currentIndex, setCurrentIndex] = useState(0);

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
      setTestimonials(data);
    };
    fetchTestimonials();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentIndex];

  return (
    
    <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto relative">

      {/* py-16 px-4 md:px-8 max-w-6xl mx-auto */}
     



      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Impact Stories
      </h2>
      <Button variant="outline"
        className="absolute right-8 border-main text-main hover:bg-main hover:text-white z-10"
        aria-label="Additional action"
      >
        <Link to="/Testimonials">Learn More</Link>
      </Button>
      <div className="flex flex-col md:flex-row items-center gap-20">
        <div className="w-full md:w-1/2">
          <motion.img
            key={currentTestimonial._id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            loading="lazy"
            src={urlFor(currentTestimonial.image.image)
              .width(500)
              .height(600)
              .format("webp")
              .quality(80)
              .fit("crop")
              .url()}
            alt={currentTestimonial.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <img
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9c1d08050eb7db8d4704e1dad847a643.cdn.bubble.io%2Ff1700579357609x199102519413177470%2Ficon-park_quote.png?w=120&h=120&auto=compress&dpr=0.5&fit=max&fm=webp"
              alt="quote"
              width={120}
              height={120}
              className="w-fit h-fit"
            />
          </div>
          <motion.p
            key={currentTestimonial._id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl mb-6"
          >
            "{currentTestimonial.quote}"
          </motion.p>
          <motion.p
            key={`${currentTestimonial._id}-name`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-bold text-xl text-main"
          >
            {currentTestimonial.name}
          </motion.p>
          <motion.p
            key={`${currentTestimonial._id}-role`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-lg"
          >
            {currentTestimonial.role}
          </motion.p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-8 gap-4">
        <button
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className="bg-main text-white rounded-full p-2 hover:bg-orange-600 transition-colors duration-200"
        >
          <ChevronLeft size={24} />
        </button>
        <span className="text-gray-600">
          {currentIndex + 1} / {testimonials.length}
        </span>
        <button
          onClick={handleNext}
          aria-label="Next testimonial"
          className="bg-main text-white rounded-full p-2 hover:bg-orange-600 transition-colors duration-200"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default FeaturedTestimonials;
