import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const MissionSection: React.FC = () => {
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
          <motion.img
            src="https://img.freepik.com/free-photo/view-kids-practicing-health-wellness-activity_23-2151402079.jpg?t=st=1727599388~exp=1727602988~hmac=9bf487d0b7b2710397be977fca7143c9a258ab7da546a626c2713b3c79b1ff9b&w=1380"
            alt="Happy children"
            className="w-full h-full object-cover rounded-lg row-span-2 grayscale"
            variants={itemVariants}
          />
          <motion.img
            src="https://cdn.sanity.io/images/5d677rbl/production/ddf0bbb2bf5da43882bece9f568d29ba38dea1f7-1024x1024.png"
            alt="Aid workers"
            className="w-full h-full object-cover rounded-lg grayscale"
            variants={itemVariants}
          />
          <motion.img
            src="https://cdn.sanity.io/images/5d677rbl/production/d6f140e72b745f6aeb45bcbccade114a1d7c43cf-1024x1024.png"
            alt="Child in need"
            className="w-full h-full object-cover rounded-lg grayscale"
            variants={itemVariants}
          />
        </div>
        <motion.div className="lg:w-2/5" variants={itemVariants}>
          <h2 className="text-4xl md:text-4xl font-bold mb-4">
            We are on a mission to transform lives.
          </h2>
          <p className="text-gray-600 mb-6">
            Our goal is to start long-lasting change by becoming a light of hope
            and compassion. We truly think that even the tiniest deed of
            kindness may set off a chain reaction of good change.
          </p>
          <Button
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MissionSection;
