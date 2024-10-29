import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

// Define the interface for the Hero Data
interface HeroData {
  title: string;
  subtitle: string;
  backgroundImage: {
    imageUrl: string;
  };
  ctaText: string;
}

// HeroSection component
const HeroSection: React.FC<HeroData> = ({
  title,
  subtitle,
  backgroundImage,
  ctaText,
}) => {
  // Generate the client image URL
  const clientImage = urlFor(backgroundImage.imageUrl)
    .width(1920)
    .format("webp")
    .quality(80)
    .url();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <section className="relative h-screen" suppressHydrationWarning>
      {clientImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${clientImage})` }}
        >
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      )}

      <div className="relative z-10 h-full flex flex-col" suppressHydrationWarning>
        <div className="flex-grow flex items-center justify-center px-6 md:px-12">
          <motion.div
            className="max-w-3xl text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-xl text-white mb-8">{subtitle}</p>
            <Link href="/donate" passHref legacyBehavior>
              <a className="bg-main hover:bg-orange-600 text-white font-semibold tracking-wide text-lg px-8 py-2 rounded inline-block">
                {ctaText}
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Mock data-fetching function
async function fetchDataFromSanity(): Promise<HeroData> {
  // Replace this with your actual data fetching logic
  return {
    title: "Your Hero Title",
    subtitle: "Your subtitle goes here.",
    backgroundImage: {
      imageUrl: "your-background-image-url",
    },
    ctaText: "Call to Action Text",
  };
}

// Fetching data at build time using getStaticProps
export async function getStaticProps() {
  const heroData = await fetchDataFromSanity();

  return {
    props: {
      title: heroData.title,
      subtitle: heroData.subtitle,
      backgroundImage: heroData.backgroundImage,
      ctaText: heroData.ctaText,
    },
  };
}

export default HeroSection;
