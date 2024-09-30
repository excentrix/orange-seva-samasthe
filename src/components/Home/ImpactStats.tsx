import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Heart, Megaphone } from "lucide-react";
import CountUp from "react-countup";

interface ImpactStat {
  icon: string;
  value: number;
  prefix?: string;
  label: string;
}

interface ImpactStatsProps {
  title: string;
  stats: ImpactStat[];
}

const iconMap: { [key: string]: React.ReactNode } = {
  creditCard: <CreditCard className="w-16 h-16 text-orange-500" />,
  heart: <Heart className="w-16 h-16 text-orange-500" />,
  megaphone: <Megaphone className="w-16 h-16 text-orange-500" />,
};

const ImpactStats: React.FC<ImpactStatsProps> = ({ title, stats }) => {
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
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-orange-500 relative overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl md:text-4xl font-bold text-white text-center mb-12"
          variants={itemVariants}
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-white rounded-lg shadow-lg">
                <CardContent className="flex items-center p-10 justify-evenly">
                  {iconMap[stat.icon]}
                  <div className="flex flex-col h-full">
                    <p className="text-4xl font-bold">
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2}
                        useEasing
                        enableScrollSpy
                        scrollSpyOnce
                        suffix={stat.prefix}
                      >
                        {({ countUpRef }) => <span ref={countUpRef} />}
                      </CountUp>
                    </p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ImpactStats;
