import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Team = () => (
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
        <CardTitle className="text-3xl font-bold">Our Team</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-xl font-semibold mb-2">Leadership:</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Mr. Mallesh R - Founder</li>
          <li>Mr. H C Anand (MBA) - President</li>
          <li>Mr. Sunil P (BBM) - General Secretary</li>
          <li>Mr. S Deepak (B.E.) - Honorary Mentor</li>
        </ul>
        <p className="mb-4">
          Our strength lies in our volunteer network of over 100 active members
          from diverse backgrounds.
        </p>
        <Button>Meet the Team</Button>
      </CardContent>
    </Card>
  </motion.div>
);

export default Team;
