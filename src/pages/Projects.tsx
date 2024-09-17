import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "@/lib/sanity";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectImage {
  _id: string;
  image: string;
  alt: string;
  caption: string;
}

interface Project {
  _id: string;
  title: string;
  description: string;
  images: ProjectImage[];
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await client.fetch(`
       *[_type == "project"]{
          _id,
          title,
          description,
          "images": images[]->{
            _id,
            "image": image.asset->url,
            alt,
            caption
          }
        }
      `);
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 py-16"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-center mb-10"
        >
          Our Projects
        </motion.h2>
        <div className="flex flex-col items-center gap-y-4">
          {projects.map((project) => (
            <Card
              key={project._id}
              className="flex flex-col items-center justify-center gap-y-5 shadow"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <Carousel className="w-full max-w-4xl mx-auto">
                  <CarouselContent>
                    {project?.images?.map((image) => (
                      <CarouselItem key={image._id}>
                        <Card className="relative overflow-hidden">
                          <CardContent className="p-0">
                            <img
                              src={image.image}
                              alt={image.alt}
                              className="w-full h-[450px] object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                              <p className="text-white">{image.caption}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>

                <p className="m-4">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
