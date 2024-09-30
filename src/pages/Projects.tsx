import React, { useEffect, useState, useId, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { client } from "@/lib/sanity";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface Projectimg {
  _id: string;
  imageUrl: string;
  alt: string;
  caption: string;
}

interface Project {
  _id: string;
  title: string;
  description: string;
  images: Projectimg[];
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [active, setActive] = useState<Project | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await client.fetch(`
       *[_type == "project"]{
          _id,
          title,
          description,
          "images": images[]->{
            _id,
            "imageUrl": image.asset->url,
            alt,
            caption
          }
        }
      `);
      setProjects(data);
    };
    fetchProjects();
  }, []);

  console.log(projects);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

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
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active ? (
            <div className="fixed inset-0 grid max-w-full w-full place-items-center z-[100] backdrop-blur-sm backdrop-brightness-50">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="flex absolute top-6 right-6 lg:hidden items-center  justify-center bg-red-500 rounded-full h-8 w-8"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active._id}-${id}`}
                ref={ref}
                className="w-11/12 rounded-lg max-w-[900px] h-[90vh] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold mb-4">
                    {active.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-grow overflow-y-auto overflow-x-hidden scrollbar-none">
                  <div className="h-full flex flex-col">
                    <Carousel
                      className="w-full max-w-4xl mx-auto mb-4"
                      opts={{
                        loop: true,
                      }}
                    >
                      <CarouselContent>
                        {active.images?.map((img) => (
                          <CarouselItem key={img._id}>
                            <Card className="relative overflow-hidden">
                              <CardContent className="p-0">
                                <img
                                  src={img.imageUrl}
                                  alt={img.alt}
                                  width={800}
                                  height={450}
                                  className="w-full h-[450px] object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                                  <p className="text-white">{img.caption}</p>
                                </div>
                              </CardContent>
                            </Card>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {/* <CarouselPrevious />
                      <CarouselNext /> */}
                    </Carousel>

                    <p className="m-4 flex-grow pb-10">{active.description}</p>
                  </div>
                </CardContent>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              layoutId={`card-${project._id}-${id}`}
              key={project._id}
              onClick={() => setActive(project)}
              className=" bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
            >
              <motion.div
                layoutId={`img-${project._id}-${id}`}
                className="w-full rounded-t-lg h-auto"
              >
                <img
                  src={project.images[0].imageUrl || "/placeholder.jpg"}
                  alt={project.images[0]?.alt || project.title}
                  width={400}
                  height={300}
                  className="w-full h-52 object-cover rounded-t-lg"
                />
              </motion.div>
              <div className="p-4">
                <motion.h3
                  layoutId={`title-${project._id}-${id}`}
                  className="text-xl font-semibold mb-2"
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${project._id}-${id}`}
                  className="text-gray-600 dark:text-gray-300 line-clamp-2"
                >
                  {project.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export default Projects;
