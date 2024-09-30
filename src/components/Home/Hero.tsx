import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const HeroSection: React.FC = () => {
  return (
    // <section
    //   className="flex flex-col items-center justify-center h-screen w-full bg-hero bg-no-repeat bg-cover bg-center"
    //   // style={{
    //   //   backgroundImage: `url("https://images.pexels.com/photos/933606/pexels-photo-933606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
    //   // }}
    // >
    //   <div className="absolute inset-x-0 min-h-screen backdrop-brightness-[0.4] "></div>
    //   <div className="container mx-auto px-4 text-left mt-32 relative z-10">
    //     <motion.h1
    //       initial={{ opacity: 0, y: 50 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.5 }}
    //       className="text-4xl font-bold text-white mb-6"
    //     >
    //       Welcome to Orange Seva Samsthe
    //     </motion.h1>
    //     <motion.p
    //       initial={{ opacity: 0, y: 50 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.5, delay: 0.2 }}
    //       className="text-lg text-white mb-8 font-light"
    //     >
    //       Empowering communities through sustainable development since 2015
    //     </motion.p>
    //     <motion.a
    //       initial={{ opacity: 0, y: 50 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.5, delay: 0.4 }}
    //       href="/donate"
    //       className="bg-blue-700 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:bg-blue-600 transition duration-300"
    //     >
    //       Support Our Cause
    //     </motion.a>
    //   </div>
    // </section>
    <section className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.sanity.io/images/5d677rbl/production/4a29df399ebcfe1978e8a31a6fd746bb92d6e014-1024x1024.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Hero Content */}
        <div className="flex-grow flex items-center justify-center px-6 md:px-12 ">
          <motion.div
            className="max-w-3xl text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Inspiring Hope,
              <br />
              Changing Lives.
            </h1>
            <p className="text-xl text-white mb-8">
              Our mission is to be a beacon of hope, spreading compassion, and
              initiating sustainable change.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3">
              Make a donation
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
