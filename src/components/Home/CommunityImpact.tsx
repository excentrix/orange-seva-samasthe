import React from "react";
import { motion } from "framer-motion";
// import { Play } from "lucide-react";

const CommunityImpactSection: React.FC = () => {
  return (
    <section className="py-16 relative">
      {/* Orange background */}
      <div className="absolute top-0 left-0 right-0 h-4/6 bg-orange-500"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          We've helped over 200
          <br />
          vulnerable communities
        </motion.h2>

        <motion.div
          className="relative rounded-lg overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Replace with actual video component if using video */}
          <img
            src="https://cdn.sanity.io/images/5d677rbl/production/a471c95732af413a6b3a528ab7bffda3a057fec2-1024x1024.png"
            alt="Community Impact"
            className="w-full h-80 object-cover"
          />

          {/* Play button overlay */}
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white bg-opacity-80 rounded-full p-4 hover:bg-opacity-100 transition-all duration-300">
              <Play className="w-12 h-12 text-orange-500" />
            </button>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityImpactSection;
