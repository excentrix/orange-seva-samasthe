import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { urlFor } from "@/lib/sanity";

interface TransformationCard {
  title: string;
  description: string;
  image: {
    imageUrl: string;
    caption: string;
    alt: string;
  };
}
interface TransformingLivesProps {
  title: string;
  cards: TransformationCard[];
}

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
const TransformingLives: React.FC<TransformingLivesProps> = ({
  title,
  cards,
}) => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          variants={itemVariants}
        >
          {title}
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {cards.map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden border-none shadow-none">
                <img
                  src={
                    urlFor(card.image.imageUrl)
                      .width(800)
                      .format("webp")
                      .quality(80)
                      .url() || ""
                  }
                  loading="lazy"
                  alt={card.image.alt}
                  className="w-full h-60 object-cover rounded-xl"
                />
                <CardHeader>
                  <CardTitle className="font-bold ">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{card.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TransformingLives;
