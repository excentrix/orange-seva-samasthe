import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { urlFor } from "@/lib/sanity";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: {
    imageUrl: string;
  };
  ctaText: string;
}

const HeroSection: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  ctaText,
}) => {
  return (
    <section className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${urlFor(backgroundImage.imageUrl)
            .width(1920)
            .format("webp")
            .quality(80)
            .url()})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-grow flex items-center justify-center px-6 md:px-12 ">
          <motion.div
            className="max-w-3xl text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-xl text-white mb-8">{subtitle}</p>
            <Button className="bg-main hover:bg-orange-600 text-white font-semibold tracking-wide text-lg px-8 py-3">
              {ctaText}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
