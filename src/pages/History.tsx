import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import { client, urlFor } from "@/lib/sanity";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

interface CustomImage {
  imageUrl: string;
  alt: string;
  caption: string;
}

interface TimelineItem {
  _id: string;
  title: string;
  content: string;
  images: CustomImage[];
}

export const History = () => {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([]);

  useEffect(() => {
    const fetchTimelineData = async () => {
      const query = `*[_type == "timeline"] | order(order asc) {
        _id,
        title,
        content,
        "images": images[]->{
        "imageUrl": image.asset->url,
        alt,
        caption
      }
      }`;

      try {
        const result = await client.fetch(query);
        setTimelineData(result);
      } catch (error) {
        console.error("Error fetching timeline data:", error);
      }
    };

    fetchTimelineData();
  }, []);

  const renderContent = (item: TimelineItem) => (
    <div>
      <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8">
        {item.content}
      </p>
      <div className="grid grid-cols-2 gap-4">
        {item.images.map((image, index) => (
          <figure key={index} className="relative">
            <img
              src={
                urlFor(image.imageUrl)
                  .width(500)
                  .height(500)
                  .format("webp")
                  .quality(80)
                  .url() || ""
              }
              loading="lazy"
              alt={image.alt}
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            {image.caption && (
              <figcaption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 text-center">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );

  const formattedData = timelineData.map((item) => ({
    title: item.title,
    content: renderContent(item),
  }));

  return (
    <motion.div
      className="w-full"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Timeline data={formattedData} />
    </motion.div>
  );
};

export default History;
