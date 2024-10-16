import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card"; 
import { ArrowLeft, ArrowRight } from "lucide-react"; 

const carouselVariants = {
  enter: { opacity: 0, x: 100 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const Carousel = ({ items }: { items: { title: string; content: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="relative flex justify-center items-center">
      <button onClick={handlePrev} className="absolute left-2 z-10" disabled={currentIndex === 0}>
        <ArrowLeft className="h-8 w-10 text-white-700 hover:text-gray-900 transition-colors" style={{marginLeft:'250px'}} />
      </button>

      <motion.div
        className="carousel-card w-[600px] mt-4 rounded-md h-64 mx-4 afacad flux" 
        variants={carouselVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6 flex flex-col justify-center items-center">
          <h3 className="text-xl font-bold mb-4 text-center">{items[currentIndex].title}</h3>
          <p className="text-center poppins-paragraph">{items[currentIndex].content}</p>
        </Card>
      </motion.div>

      <button onClick={handleNext} className="absolute right-2 z-10" disabled={currentIndex === items.length - 1}>
        <ArrowRight className="h-8 w-10 text-white-700 hover:text-gray-900 transition-colors" style={{marginRight:'250px'}} />
      </button>
    </div>
  );
};

export default Carousel;
