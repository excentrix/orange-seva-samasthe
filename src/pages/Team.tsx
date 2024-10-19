import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

// Sample data for team members
const teamMembers = [
  {
    name: "Mr. Mallesh R",
    role: "Founder",
    image: "https://picsum.photos/200/200?random=1", // Placeholder image URL
  },
  {
    name: "Mr. H C Anand (MBA)",
    role: "President",
    image: "https://picsum.photos/200/200?random=2", // Placeholder image URL
  },
  {
    name: "Mr. Sunil P (BBM)",
    role: "General Secretary",
    image: "https://picsum.photos/200/200?random=3", // Placeholder image URL
  },
  {
    name: "Mr. S Deepak (B.E.)",
    role: "Honorary Mentor",
    image: "https://picsum.photos/200/200?random=4", // Placeholder image URL
  },
];


export const Team = () => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    transition={{ duration: 0.5 }}
    className="space-y-8 p-8"
  >
    <Card className="w-full max-w-6xl mx-auto h-100">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Our Team</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-xl font-semibold mb-2">Leadership:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl">
              <CardContent className="flex flex-col items-center p-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mb-2" // Style the image
                />
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-gray-500">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-4 mb-4 pt-10 flex flex-col items-center">
          Our strength lies in our volunteer network of over 100 active members
          from diverse backgrounds.
        </p>

      </CardContent>
    </Card>
  </motion.div>
);

export default Team;
