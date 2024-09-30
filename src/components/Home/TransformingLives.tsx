import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TransformationCard {
  title: string;
  description: string;
  imageUrl: string;
}

const transformationCards: TransformationCard[] = [
  {
    title: "Health",
    description:
      "WE CARE has been paving the path for millions of disadvantaged people worldwide to have better lives for more than 10 years.",
    imageUrl:
      "https://cdn.sanity.io/images/5d677rbl/production/ddf0bbb2bf5da43882bece9f568d29ba38dea1f7-1024x1024.png",
  },
  {
    title: "Education",
    description:
      "WE CARE has been paving the path for millions of disadvantaged people worldwide to have better lives for more than 10 years.",
    imageUrl:
      "https://cdn.sanity.io/images/5d677rbl/production/87e608cf14d47f63e2935808981b6a3c2164b47a-1024x1024.png",
  },
  {
    title: "Food",
    description:
      "WE CARE has been paving the path for millions of disadvantaged people worldwide to have better lives for more than 10 years.",
    imageUrl:
      "https://cdn.sanity.io/images/5d677rbl/production/d6f140e72b745f6aeb45bcbccade114a1d7c43cf-1024x1024.png",
  },
];

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

const TransformingLives: React.FC = () => {
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
          How we're transforming lives
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {transformationCards.map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden border-none shadow-none">
                <img
                  src={card.imageUrl}
                  alt={card.title}
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
