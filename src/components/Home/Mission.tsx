import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity";

interface MissionProps {
  title: string;
  description: string;
  images: {
    imageUrl: string;
    caption: string;
    alt: string;
  }[];
}

const MissionSection: React.FC<MissionProps> = ({
  title,
  description,
  images,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="lg:w-3/5 grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={
                urlFor(image.imageUrl)
                  // .width(800)
                  .format("webp")
                  .quality(80)
                  .url() || ""
              }
              loading="lazy"
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg grayscale first:row-span-2"
              variants={itemVariants}
            />
          ))}
        </div>
        <motion.div className="lg:w-2/5" variants={itemVariants}>
          <h2 className="text-4xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 mb-6">{description}</p>
          <Button
            variant="outline"
            className="border-main text-main hover:bg-main hover:text-white"
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MissionSection;
