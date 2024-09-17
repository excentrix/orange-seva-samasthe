import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Mission = () => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    transition={{ duration: 0.5 }}
    className="space-y-8 p-8"
  >
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Our Mission</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          At Orange Seva Samsthe (OSS), we are dedicated to creating sustainable
          change and empowering communities through innovative social
          initiatives.
        </p>
        <h3 className="text-xl font-semibold mb-2">Key Objectives:</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Eliminate Food Wastage</li>
          <li>Promote Health Awareness</li>
          <li>Empower Through Education</li>
          <li>Conserve Natural Resources</li>
          <li>Support Vulnerable Populations</li>
        </ul>
        <Button>Learn More</Button>
      </CardContent>
    </Card>
  </motion.div>
);
