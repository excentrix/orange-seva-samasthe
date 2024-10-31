"use client";

import React, { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";
// import Image from "next/image"; 
import Head from "next/head"; // Import the Head component for <head> modifications

// Dynamically import components to reduce initial load time
const FeaturedTestimonials = dynamic(() => import("@/components/Home/FeaturedTestimonials"), { ssr: false });
const TransformingLives = dynamic(() => import("@/components/Home/TransformingLives"), { ssr: false });
const MissionSection = dynamic(() => import("@/components/Home/Mission"), { ssr: false });
const ImpactStats = dynamic(() => import("@/components/Home/ImpactStats"), { ssr: false });
const HeroSection = dynamic(() => import("@/components/Home/Hero"), { ssr: false });
const CommunityImpactSection = dynamic(() => import("@/components/Home/CommunityImpact"), { ssr: false });

import { client } from "@/sanity/lib/client";

interface HomeData {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: {
      imageUrl: string;
      alt: string;
    };
    ctaText: string;
  };
  mission: {
    title: string;
    description: string;
    images: {
      imageUrl: string;
      caption: string;
      alt: string;
    }[];
  };
  impactStats: {
    title: string;
    stats: {
      icon: string;
      value: number;
      prefix?: string;
      label: string;
    }[];
  };
  transformingLives: {
    title: string;
    cards: {
      title: string;
      description: string;
      image: {
        imageUrl: string;
        caption: string;
        alt: string;
      };
    }[];
  };
  communityImpact: {
    title: string;
    image: {
      imageUrl: string;
      caption: string;
      alt: string;
    };
  };
}

const Home: React.FC = () => {
  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false); // Track mounted state

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "homePage"][0]{
            hero{
              title,
              subtitle,
              backgroundImage->{
                "imageUrl": image.asset->url,
                alt
              },
              ctaText
            },
            mission{
              title,
              description,
              "images": images[]->{
                "imageUrl": image.asset->url,
                alt,
                caption
              }
            },
            impactStats,
            transformingLives{
              title,
              cards[] {
                title,
                description,
                "image": image->{
                  "imageUrl": image.asset->url,
                  alt,
                  caption
                }
              }
            },
            communityImpact{
              title,
              "image": image->{
                "imageUrl": image.asset->url,
                alt,
                caption
              }
            }
          }
        `);
        setHomeData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load data.");
      } finally {
        setLoading(false);
      }
    };
    fetchHomeData();

    // Set mounted state to true after the initial render
    setIsMounted(true);
  }, []);

  if (loading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>{error}</div>; 
  if (!homeData) return null;

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://your-api-domain.com" />
        <link rel="preconnect" href="https://another-origin.com" />
      </Head>
      <div suppressHydrationWarning className="bg-gray-50 min-h-screen w-full">
        <Suspense fallback={<div>Loading components...</div>}>
          {isMounted && ( // Only render components after mounted
            <>
              <HeroSection {...homeData.hero} />
              <MissionSection {...homeData.mission} />
              <ImpactStats {...homeData.impactStats} />
              <TransformingLives {...homeData.transformingLives} />
              <CommunityImpactSection {...homeData.communityImpact} />
              <FeaturedTestimonials />
            </>
          )}
        </Suspense>
      </div>
    </>
  );
};

export default Home;