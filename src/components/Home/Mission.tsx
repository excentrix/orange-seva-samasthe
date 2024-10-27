import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";

interface MissionProps {
  title: string;
  description: string;
  images: {
    imageUrl: string;
    caption: string;
    alt: string;
  }[];
}

const MissionSection: React.FC<MissionProps> = ({ title, description, images }) => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Only set to true on the client-side to ensure NextRouter is mounted
    setIsClient(true);
  }, []);

  const handleLearnClick = () => {
    // Ensure router push only happens if client is true
    if (isClient) {
      router.push('/about/mission');
    }
  };

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
            <motion.div key={index} className="relative w-full h-0 pb-[100%]"> {/* Aspect Ratio Box */}
              <motion.img
                src={urlFor(image.imageUrl).height(600).format("webp").quality(80).url() || ""}
                loading="lazy"
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover rounded-lg grayscale"
                style={{ objectFit: 'cover' }} // Ensures the image covers the div
                variants={itemVariants}
              />
            </motion.div>
          ))}
        </div>
        <motion.div className="lg:w-2/5" variants={itemVariants}>
          <h2 className="text-4xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 mb-6">{description}</p>
          <Button
            variant="outline"
            className="border-main text-main hover:bg-main hover:text-white"
            onClick={handleLearnClick}
          >
            Click to learn
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MissionSection;
