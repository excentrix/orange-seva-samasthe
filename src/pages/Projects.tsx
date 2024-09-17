import React from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Don't Waste the Food",
      description: "Collecting and distributing excess food to those in need.",
      image: "/path/to/food-project-image.jpg",
    },
    {
      title: "Medical Camps and Eye Treatment",
      description: "Providing free medical check-ups and eye care services.",
      image: "/path/to/medical-camp-image.jpg",
    },
    {
      title: "Skill Development Programs",
      description:
        "Empowering individuals with vocational skills for better livelihoods.",
      image: "/path/to/skill-development-image.jpg",
    },
    {
      title: "Women Empowerment Initiatives",
      description:
        "Supporting women through education and entrepreneurship programs.",
      image: "/path/to/women-empowerment-image.jpg",
    },
    {
      title: "Environmental Awareness Campaigns",
      description:
        "Promoting environmental conservation and sustainable practices.",
      image: "/path/to/environmental-campaign-image.jpg",
    },
  ];

  return (
    <div className="bg-off-white py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
