import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import FeaturedTestimonials from "@/components/FeaturedTestimonials";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center hero h-screen bg-gradient-to-r from-orange-600 to-yellow-500 w-full">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-extrabold text-white mb-6"
          >
            Welcome to Orange Seva Samasthe
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white mb-8"
          >
            Empowering communities through sustainable development since 2015
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href="/donate"
            className="bg-blue-700 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Support Our Cause
          </motion.a>
        </div>
      </section>
      {/* Mission and Vision Section */}
      <section className="mission-vision py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 px-4 mb-8 md:mb-0"
            >
              <h2 className="text-3xl font-bold mb-4 text-orange-600">
                Our Mission
              </h2>
              <p className="text-gray-700">
                <span>
                  At Orange Seva Samsthe (OSS), we are dedicated to creating
                  sustainable change and empowering communities through
                  innovative social initiatives.
                </span>
                <br />
                <br />
                <span>
                  <strong>Key Objectives: </strong>
                </span>
                <span>
                  Eliminate Food Wastage Promote Health Awareness Empower
                  Through Education Conserve Natural Resources Support
                  Vulnerable Populations
                </span>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-1/2 px-4"
            >
              <h2 className="text-3xl font-bold mb-4 text-orange-600">
                Our Vision
              </h2>
              <p className="text-gray-700">
                Health, Education, Environment, Women Empowerment, and Free Food
                Distribution for Poor People.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-600">
            Our Impact
          </h2>
          <div className="flex flex-wrap -mx-4 text-center">
            {[
              { number: 1000, text: "Lives Impacted" },
              { number: 50, text: "Projects Completed" },
              { number: 20, text: "Communities Served" },
              { number: 100, text: "Volunteers" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8"
              >
                <div className="bg-orange-600 rounded-lg p-6 shadow-lg">
                  <h3 className="text-4xl font-bold text-white mb-2">
                    <CountUp
                      start={0}
                      end={item.number}
                      duration={2}
                      useEasing
                      enableScrollSpy
                      scrollSpyOnce
                      prefix="+ "
                    >
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                  </h3>
                  <p className="text-white">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FeaturedTestimonials />
    </div>
  );
};

export default Home;
