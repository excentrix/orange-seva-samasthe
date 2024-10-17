import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { FaSeedling, FaUserMd, FaSchool, FaWater, FaHandsHelping, FaVirus } from "react-icons/fa";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const metricsData = [
  {
    title: "Food Security",
    value: 80,
    text: "25M+",
    description: "Distributed surplus food to over 25 million needy individuals.",
    icon: <FaSeedling className="text-4xl text-green-600" />,
    textColor: "#4caf50",
    pathColor: "#4caf50", // Green
  },
  {
    title: "Health Awareness",
    value: 70,
    text: "700+",
    description: "Conducted 700+ eye camps, benefiting 40,000+ individuals.",
    icon: <FaUserMd className="text-4xl text-blue-600" />,
    textColor: "#2196F3",
    pathColor: "#2196F3", // Blue
  },
  {
    title: "Education",
    value: 90,
    text: "100+",
    description: "Implemented the Vidyanjali Project in 100+ government schools.",
    icon: <FaSchool className="text-4xl text-orange-600" />,
    textColor: "#FF9800",
    pathColor: "#FF9800", // Orange
  },
  {
    title: "Environmental Conservation",
    value: 60,
    text: "500+",
    description: "Installed 500+ water tubs annually for birds and animals.",
    icon: <FaWater className="text-4xl text-blue-400" />,
    textColor: "#03A9F4",
    pathColor: "#03A9F4", // Light Blue
  },
  {
    title: "Community Support",
    value: 75,
    text: "1,000+",
    description: "Established support systems for 1,000+ senior citizens.",
    icon: <FaHandsHelping className="text-4xl text-purple-600" />,
    textColor: "#673AB7",
    pathColor: "#673AB7", // Purple
  },
  {
    title: "COVID-19 Response",
    value: 85,
    text: "200k+",
    description: "Distributed food kits to 200k+ individuals during the pandemic.",
    icon: <FaVirus className="text-4xl text-red-600" />,
    textColor: "#F44336",
    pathColor: "#F44336", // Red
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
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">Our Impact</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {metricsData.map((metric, index) => (
            <Card key={index} className="flex flex-col items-center p-4 shadow-md transition-transform transform hover:scale-105">
              <div className="mb-2">
                {metric.icon}
              </div>
              <div className="w-32 h-32 mb-4">
                <CircularProgressbar
                  value={metric.value}
                  text={metric.text}
                  styles={buildStyles({
                    textColor: metric.textColor,
                    pathColor: metric.pathColor,
                    trailColor: "#d6d6d6",
                  })}
                />
              </div>
              <h4 className="text-lg font-bold mb-2 text-center ">{metric.title}</h4>
              <p className="mt-2 text-gray-600 text-center ">{metric.description}</p>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default Impact;
