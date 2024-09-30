// Home.tsx
import React, { useEffect, useState } from "react";
import { client } from "@/lib/sanity";
import FeaturedTestimonials from "@/components/Home/FeaturedTestimonials";
import TransformingLives from "@/components/Home/TransformingLives";
import MissionSection from "@/components/Home/Mission";
import ImpactStats from "@/components/Home/ImpactStats";
import HeroSection from "@/components/Home/Hero";
import CommunityImpactSection from "@/components/Home/CommunityImpact";

interface HomeData {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: {
      imageUrl: string;
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

  useEffect(() => {
    const fetchHomeData = async () => {
      const data = await client.fetch(`
       *[_type == "homePage"][0]{
    hero{
      title,
      subtitle,
      backgroundImage->{
        "imageUrl": image.asset->url,
        alt,
        caption
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
      cards[]{
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
    };
    fetchHomeData();
  }, []);

  console.log(homeData);
  if (!homeData) return null;

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <HeroSection {...homeData.hero} />
      <MissionSection {...homeData.mission} />
      <ImpactStats {...homeData.impactStats} />
      <TransformingLives {...homeData.transformingLives} />
      <CommunityImpactSection {...homeData.communityImpact} />
      <FeaturedTestimonials />
    </div>
  );
};

export default Home;
