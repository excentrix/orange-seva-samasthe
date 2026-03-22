import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

interface MissionProps {
  images: {
    imageUrl: string;
    caption: string;
    alt: string;
  }[];
}

const MissionSection: React.FC<MissionProps> = ({
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
    <section className="md:px-8 lg:px-16 bg-white" style={{padding:'64px 16px 64px 16px'}}>
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
                  .height(600)
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
          <h2 className="text-4xl md:text-4xl font-bold mb-4">
            Our Mission is to "Nourish, Educate and Empower"
          </h2>
          <p className="text-gray-600 mb-6">
            To build communities where surplus food nourishes the needy, health awareness grows, and young people pick healthy choices instead of addictions
          </p>
          <Button
            variant="outline"
            className="border-main text-main hover:bg-main hover:text-white"
          >
            <Link href="/mission">Click to learn</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MissionSection;