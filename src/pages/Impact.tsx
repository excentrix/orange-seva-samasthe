import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FaSeedling, FaUserMd, FaSchool, FaWater, FaHandsHelping, FaVirus } from "react-icons/fa";
import CountUp from "react-countup";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const metricsData = [
  {
    title: "Food Security",
    value: 25000000, // 25M as number
    suffix: "+", // Add "+" after the number
    description: "Distributed surplus food to over 25 million needy individuals.",
    icon: <FaSeedling className="text-4xl text-green-600" />,
    textColor: "text-green-600", // Green color for count-up
  },
  {
    title: "Health Awareness",
    value: 700,
    suffix: "+", // Add "+" after the number
    description: "Conducted 700+ eye camps, benefiting 40,000+ individuals.",
    icon: <FaUserMd className="text-4xl text-blue-600" />,
    textColor: "text-blue-600", // Blue color for count-up
  },
  {
    title: "Education",
    value: 100,
    suffix: "+", // Add "+" after the number
    description: "Implemented the Vidyanjali Project in 100+ government schools.",
    icon: <FaSchool className="text-4xl text-orange-600" />,
    textColor: "text-orange-600", // Orange color for count-up
  },
  {
    title: "Environmental Conservation",
    value: 500,
    suffix: "+", // Add "+" after the number
    description: "Installed 500+ water tubs annually for birds and animals.",
    icon: <FaWater className="text-4xl text-blue-400" />,
    textColor: "text-blue-400", // Light blue color for count-up
  },
  {
    title: "Community Support",
    value: 1000,
    suffix: "+", // Add "+" after the number
    description: "Established support systems for 1,000+ senior citizens.",
    icon: <FaHandsHelping className="text-4xl text-purple-600" />,
    textColor: "text-purple-600", // Purple color for count-up
  },
  {
    title: "COVID-19 Response",
    value: 200000,
    suffix: "+", // Add "+" after the number
    description: "Distributed food kits to 200k+ individuals during the pandemic.",
    icon: <FaVirus className="text-4xl text-red-600" />,
    textColor: "text-red-600", // Red color for count-up
  },
];

const Impact = () => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    transition={{ duration: 0.5 }}
    className="space-y-8 p-8"
  >
    <Card className="w-full max-w-6xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">Our Impact</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {metricsData.map((metric, index) => (
            <Card key={index} className="flex flex-col items-center p-4 shadow-lg transition-transform transform hover:shadow-xl">
              <div className="mb-2">
                {metric.icon}
              </div>
              <div className={`text-5xl font-bold mb-2 ${metric.textColor}`}>
                <CountUp
                  start={0}
                  end={metric.value}
                  duration={2}
                  useEasing
                  enableScrollSpy
                  scrollSpyOnce
                  suffix={metric.suffix} // Suffix added here
                />
              </div>
              <h4 className="text-lg font-bold mb-2 text-center">{metric.title}</h4>
              <p className="mt-2 text-gray-600 text-center">{metric.description}</p>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default Impact;
