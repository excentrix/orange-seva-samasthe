"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FaSeedling, FaUserMd, FaWater, FaVirus } from "react-icons/fa";
import CountUp from "react-countup";
import { useOutsideClick } from "@/hooks/use-outside-click";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 5, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const metricsData = [
  {
    title: "Food Security",
    value: 25000000,
    suffix: "+",
    description: "Over the past 10 years, we've provided more than 25 lakh meals to hungry families, helping to reduce food waste and feed the less fortunate. Our efforts not only support individuals but also strengthen our community. By partnering with local marriage halls and party halls, we ensure surplus food is put to good use. We collect extra meals from weddings and events in Mysore, pack them in hygienically and distribute them. We also provide meals for the medical camps that we conduct and also we provide free food for other medical camps as well, supporting health and well-being. Together, we can turn leftover food into hope and make a real difference in people's lives!",
    icon: <FaSeedling className="text-4xl text-green-600" />,
    textColor: "text-green-600",
  },
  {
    title: "Health Awareness",
    value: 700,
    suffix: "+",
    description: "Our medical camps have made a big difference in the lives of many people. We've provided health check-ups, eye care, and cancer awareness support, reaching over 40,000 individuals with eye surgeries alone. Through the 750+ medical camps conducted by us by partnering with local hospitals, we've helped seniors and vulnerable communities access essential treatments and medicines. Our hygiene camps for girls in schools have taught important lessons about menstrual health and provided necessary sanitary products. Additionally, our efforts to raise awareness about drug abuse are helping create a healthier, drug-free future for students. Overall, our work has touched the lives of over 2.5 lakh people, showing how health education and support can transform communities for the better.",
    icon: <FaUserMd className="text-4xl text-blue-600" />,
    textColor: "text-blue-600",
  },
  {
    title: "Environmental Conservation",
    value: 500,
    suffix: "+",
    description: "Our project dedicated to helping animals and birds! We’ve set up over 500 water tubs filled with fresh drinking water, which we clean and refill every week to keep them safe. We’re also working to support the environment by planting saplings. We invite local hospitals and families to join us in this effort by donating five saplings for every girl child born. This initiative is a beautiful way to celebrate new life while caring for our planet. Together, we can make a positive impact on nature and our community!",
    icon: <FaWater className="text-4xl text-blue-400" />,
    textColor: "text-blue-400",
  },
  {
    title: "COVID-19 Response",
    value: 200000,
    suffix: "+",
    description: "In 2020, the world faced the huge challenge of the Covid-19 pandemic, and our community stepped up to help. With the generous support we received, we were able to prepare food kits for people in need in Mysuru and Chamarajanagara. Our team worked hard every day, delivering food to hospitals and underprivileged neighborhoods. Over the course of a year, we provided around 2,50,000 food kits, reaching more than 4,00,000 individuals. Together, we truly made a difference during a tough time. In 2021, as the pandemic continued, we stayed committed to helping those in need. Many daily wage workers were struggling to get by, so we kept distributing food kits and ready-made meals. Thanks to the kindness of our donors, we could support many people facing hardships due to COVID-19",
    icon: <FaVirus className="text-3xl text-red-600" />,
    textColor: "text-red-600",
  },
];

const Impact = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const detailBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close detail box when clicked outside
  useOutsideClick(detailBoxRef, () => setActiveCardIndex(null));

  useEffect(() => {
    if (activeCardIndex !== null) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = ''; // Enable scrolling
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = ''; // Ensure scrolling is enabled when component unmounts
    };
  }, [activeCardIndex]);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="space-y-8 p-0 cursor-pointer"
    >
      <div className="max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Our Impact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {metricsData.map((metric, index) => (
              <Card
                key={index}
                className={`flex flex-col items-center pr-8 pl-8 pt-2 pb-4 shadow-lg transition-transform transform ${isMounted ? "hover:shadow-xl" : ""}`}
                onClick={() => setActiveCardIndex(index)}
              >
                <div className="mb-2">{metric.icon}</div>
                <div className={`text-4xl font-bold mb-4 ${metric.textColor}`}>
                  {isMounted && (
                    <CountUp
                      start={0}
                      end={metric.value}
                      duration={2}
                      useEasing
                      scrollSpyOnce
                      suffix={metric.suffix}
                    />
                  )}
                </div>
                <h4 className="text-lg font-bold mb-2 text-center">
                  {metric.title}
                </h4>
                <p className="text-gray-600 text-center line-clamp-2">
                  {metric.description}
                </p>
              </Card>
            ))}
          </div>
        </CardContent>
      </div>

      {/* Detail Box */}
      {activeCardIndex !== null && (
        <div
          ref={detailBoxRef}
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-80"
          onClick={() => setActiveCardIndex(null)} // Close on clicking the overlay
        >
          <div
            className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the card
          >
            <h3 className="text-3xl font-bold mb-2 text-center">
              {metricsData[activeCardIndex].title}
            </h3>
            <p className={`text-4xl text-center font-bold m-4 ${metricsData[activeCardIndex].textColor}`}>
              {metricsData[activeCardIndex].value}
              {metricsData[activeCardIndex].suffix}
            </p>
            <p className="mt-4 text-gray-600 text-center">
              {metricsData[activeCardIndex].description}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Impact;