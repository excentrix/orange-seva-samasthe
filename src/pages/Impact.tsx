import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Impact = () => (
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
        <CardTitle className="text-3xl font-bold">Our Impact</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li>
            <strong>Food Security:</strong> Distributed surplus food to over 25
            million needy individuals
          </li>
          <li>
            <strong>Health Awareness:</strong> Conducted 700+ eye camps,
            benefiting 40,000+ individuals
          </li>
          <li>
            <strong>Education:</strong> Implemented the Vidyanjali Project in
            100+ government schools
          </li>
          <li>
            <strong>Environmental Conservation:</strong> Installed 500+ water
            tubs annually for birds and animals
          </li>
          <li>
            <strong>Community Support:</strong> Established support systems for
            1,000+ senior citizens
          </li>
          <li>
            <strong>COVID-19 Response:</strong> Distributed food kits to
            200,000+ individuals during the pandemic
          </li>
        </ul>
        <Button className="mt-4">See Full Impact Report</Button>
      </CardContent>
    </Card>
  </motion.div>
);
