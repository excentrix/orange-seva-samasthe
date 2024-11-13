import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import { urlFor } from "@/sanity/lib/image";

interface CommunityImpactProps {
  image: {
    imageUrl: string;
    caption: string;
    alt: string;
  };
}

const CommunityImpactSection: React.FC<CommunityImpactProps> = ({
  image,
}) => {
  return (
    <section className="py-16 relative">
      <div className="absolute top-0 left-0 right-0 h-4/6 bg-main"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          We've helped over 200 vulnerable communities
        </motion.h2>

        <motion.div
          className="relative rounded-lg overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={urlFor(image.imageUrl).width(1120).format("webp").quality(80).url()}
            alt={image.alt}
            loading="lazy"
            width={1120}
            height={450}
            className="w-full h-80 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityImpactSection;