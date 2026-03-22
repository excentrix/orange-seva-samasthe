"use client";

import React, { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { client } from "@/sanity/lib/client";

const FeaturedTestimonials = dynamic(() => import("@/components/Home/FeaturedTestimonials"), { ssr: true });
const TransformingLives = dynamic(() => import("@/components/Home/TransformingLives"), { ssr: true });
const MissionSection = dynamic(() => import("@/components/Home/Mission"), { ssr: true });
const ImpactStats = dynamic(() => import("@/components/Home/ImpactStats"), { ssr: true });
const HeroSection = dynamic(() => import("@/components/Home/Hero"), { ssr: true });
const CommunityImpactSection = dynamic(() => import("@/components/Home/CommunityImpact"), { ssr: true });

interface HomeData {
  hero: {
    backgroundImage: {
      imageUrl: string;
      alt: string;
    };
  };
  mission: {
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
    cards: {
      image: {
        imageUrl: string;
        caption: string;
        alt: string;
      };
    }[];
  };
  communityImpact: {
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

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "homePage"][0]{
            hero{
              backgroundImage->{
                "imageUrl": image.asset->url, alt
              },
            },
            mission{
              "images": images[]->{
                "imageUrl": image.asset->url,
                alt,
                caption
              }
            },
            impactStats,
            transformingLives{
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
  }, []);

  if (loading) return <div>Loading...</div>;
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
          <HeroSection {...homeData.hero} />
          <MissionSection {...homeData.mission} />
          <ImpactStats {...homeData.impactStats} />
          <TransformingLives title={""} {...homeData.transformingLives} />
          <CommunityImpactSection {...homeData.communityImpact} />
          <FeaturedTestimonials />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
