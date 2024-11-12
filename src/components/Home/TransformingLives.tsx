import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface TransformationCard {
  image: {
    imageUrl: string;
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
                <Image
                  src={
                    urlFor(card.image.imageUrl)
                      .width(800)
                      .format("webp")
                      .quality(80)
                      .url() || ""
                  }
                  loading="lazy"
                  alt={card.image.alt}
                  width={800}
                  height={240}
                  className="w-full h-60 object-cover rounded-xl"
                />
                
                {index === 0 && (
                  <>
                    <CardHeader>
                      <CardTitle className="font-bold">Nourishing Lives</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        OSS provides nutritional aid individuals in need by redistributing surplus food from events like weddings and parties. From this initiative to turn excess food into essential support we have served over 20,000 needy people from the past few years.
                      </CardDescription>
                    </CardContent>
                  </>
                )}
                
                {index === 1 && (
                  <>
                    <CardHeader>
                      <CardTitle className="font-bold">Empowering Health</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        At OSS, we regularly conduct health camps in rural areas around Mysuru and Chamarajanagar. These camps primarily focus on raising cancer awareness, advice on eye operations, and of course general check-ups. We also hold sessions in government schools, particularly for girls, to promote awareness about menstrual health, during which we have distributed over 4,000 sanitary pads.
                      </CardDescription>
                    </CardContent>
                  </>
                )}
                
                {index === 2 && (
                  <>
                    <CardHeader>
                      <CardTitle className="font-bold">Inspiring Change</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        To strive for a Drug-Free Tomorrow, OSS conducts Drug Awareness program regularly in colleges emphasising on its ill effects on mental and physical health under “Nasha Mukta Bharatha Abiyana”. Until now we have successfully conducted in over 10 colleges in and around Mysuru.
                      </CardDescription>
                    </CardContent>
                  </>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TransformingLives;
