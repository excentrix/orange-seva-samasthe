"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image"; // Import Image from next/image for optimized image handling
import { client } from "@/sanity/lib/client";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const sectionVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
};

// Specify Section props type
interface SectionProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <motion.section
    variants={sectionVariants}
    initial="initial"
    animate="animate"
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <h2 className="text-2xl font-bold mb-1">{title}</h2>
    {children}
  </motion.section>
);

// Define ImageItem type for images state
interface ImageItem {
  _id: string;
  image: string;
  alt: string;
  caption: string;
}

const Page: React.FC = () => {
  const [images, setImages] = useState<ImageItem[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const data = await client.fetch(`*[_type == "customImage"]{
          _id,
          "image": image.asset->url,
          alt,
          caption
        }`); // Ensure this matches your requirements, including the asterisk changes
      setImages(data);
    };    
    fetchImages();
  }, []);

  const visionMissionImages = images
    .filter(img => ["5", "6"].includes(img.caption))
    .sort((a, b) => parseInt(a.caption) - parseInt(b.caption));

  const objectivesItems = [
    {
      title: "Food Recovery and Redistribution",
      content:
        "Partner with event venues, caterers, and community organizations to identify and collect surplus food. Ensure safe, hygienic, and timely delivery of meals to individuals and families in need.",
    },
    {
      title: "Awareness and Education",
      content:
        "Conduct seminars and workshops in schools, colleges, and community centers to educate individuals about food security, cultural values, and sustainable practices. Foster a culture of mindfulness around food consumption and waste through community engagement and outreach.",
    },
    {
      title: "Community Engagement",
      content:
        "Organize campaigns and initiatives that raise awareness about food wastage and its impact, reaching over 5,000 venues. Implement programs like 'Don't Waste the Food' to strengthen connections between surplus food sources and those who need it most.",
    },
    {
      title: "Health Initiatives",
      content:
        "Provide medical support through awareness camps focusing on critical health issues, particularly for vulnerable groups such as senior citizens and school girls. Facilitate eye operations and general health check-ups to improve overall well-being in the community.",
    },
  ];

  const objectivesImages = images
    .filter(img => ["1", "2", "3", "4"].includes(img.caption))
    .sort((a, b) => parseInt(a.caption) - parseInt(b.caption));

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="space-y-8 p-0 max-w-full mx-auto MissionPage-page"
      style={{ backgroundColor: "transparent" }}
    >
      <Section
        title={
          <span
            style={{
              fontFamily: "Verdana, sans-serif",
              fontSize: "25px",
              textAlign: "center",
              display: "block",
              margin: "25px",
            }}
          >
            Objectives
          </span>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 mt-0 m-b-0 ml-7 mr-7">
          {objectivesItems.map((item, index) => (
            <div
              key={index}
              className="shadow-none transition-all duration-75 ease-in-out"
              style={{
                fontSize: "14px",
                cursor: "pointer",
                border: "none",
                padding: "10px",
              }}
            >
              <div className="mb-0 pl-2 pr-2 pt-2 pb-0">
                <Image
                  src={objectivesImages[index]?.image || ""}
                  alt={objectivesImages[index]?.alt || ""}
                  className="object-cover rounded-lg"
                  width={600}
                  height={180}
                  style={{
                    height: "180px",
                    width: "600px",
                    marginBottom: "15px",
                    borderRadius: "15px",
                  }}
                />
              </div>
              <h3
                className="text-xl font-semibold heading"
                style={{
                  fontSize: "18px",
                  marginBottom: "15px",
                  marginLeft: "18px",
                }}
              >
                {item.title}
              </h3>
              <p className="poppins-paragraph" style={{ paddingLeft: "20px" }}>
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <header>
        <p
          className="text-center poppins-paragraph text-md"
          style={{ fontSize: "26px", marginTop: "120px", marginBottom: "90px" }}
        >
          "Together, we nourish."
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-6">
        <div className="space-y-8 ml-12">
          <div>
            <h2
              className="font-semibold ml-60 mb-5 heading"
              style={{ fontSize: "24px" }}
            >
              Our Mission
            </h2>
            <p style={{ fontSize: "18px" }}>
              Our Mission is to address hunger and food wastage in our community by redistributing surplus food and promoting awareness about food security and sustainability. We aim to build a caring and strong community where everyone has access to good food and healthcare.
            </p>
          </div>

          <div>
            <h2
              className="font-semibold ml-60 mb-5 heading"
              style={{ fontSize: "24px" }}
            >
              Our Vision
            </h2>
            <p style={{ fontSize: "18px" }}>
              At OSS, we envision a world where food wastage is eradicated, and every individual has access to nourishing meals. We aspire to cultivate a culture of giving that transforms our society, ensuring that no one goes hungry.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mr-8">
          {visionMissionImages.map((image, index) => (
            <Image
              key={index}
              src={image.image}
              alt={image.alt}
              className="w-full h-[300px] object-cover rounded-lg"
              width={600}
              height={300}
            />
          ))}
        </div>
      </div>

      <Section
        title={
          <div
            style={{
              fontFamily: "Verdana, sans-serif",
              fontWeight: "bolder",
              fontSize: "25px",
              textAlign: "center",
              marginTop: "150px",
            }}
          >
            Key Impact Areas
          </div>
        }
      >
        <div className="cursor-pointer grid grid-cols-1 md:grid-cols-3 gap-6 m-12 mb-14">
          <Card className="shadow-lg border-2 hover:scale-105 hover:shadow-xl transition-all duration-75 ease-in-out flex flex-col items-center">
            <CardHeader>
              <CardTitle
                className="text-xl text-center heading"
                style={{ fontSize: "22px" }}
              >
                Food Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="poppins-paragraph text-center">
                Over 20,000 individuals have benefited from our food redistribution efforts, particularly during weddings and community events.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-2 hover:scale-105 hover:shadow-xl transition-all duration-75 ease-in-out mt-0">
            <CardHeader>
              <CardTitle
                className="text-xl text-center heading"
                style={{ fontSize: "22px" }}
              >
                Pandemic Response
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="poppins-paragraph text-center">
                During the Covid-19 pandemic, OSS delivered food and essentials to over 200 households every week, ensuring no family went hungry.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-2 hover:scale-105 hover:shadow-xl transition-all duration-75 ease-in-out mt-0">
            <CardHeader>
              <CardTitle
                className="text-xl text-center heading"
                style={{ fontSize: "22px" }}
              >
                Community Partnerships
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="poppins-paragraph text-center">
                Collaborated with local businesses and NGOs, enhancing our reach and resources to combat hunger in our area.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <div className="text-center mt-8">
        <Link href="/donate">
          <Button size="lg" style={{ marginBottom: "20px" }}>
            Get Involved
          </Button>
        </Link>
      </div>
      
    </motion.div>
  );
};

export default Page;
