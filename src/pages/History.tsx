import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const History = () => (
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
        <CardTitle className="text-3xl font-bold">Our History</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li>
            <strong>2015:</strong> The birth of an idea
          </li>
          <li>
            <strong>2016:</strong> Official establishment
          </li>
          <li>
            <strong>2017-2018:</strong> Expanding horizons
          </li>
          <li>
            <strong>2019:</strong> Growing impact
          </li>
          <li>
            <strong>2020:</strong> Responding to the pandemic
          </li>
          <li>
            <strong>2021:</strong> New initiatives
          </li>
          <li>
            <strong>2022:</strong> Strengthening foundations
          </li>
          <li>
            <strong>2023:</strong> Milestone achievements
          </li>
          <li>
            <strong>2024:</strong> Looking to the future
          </li>
        </ul>
        <Button className="mt-4">Explore Our Journey</Button>
      </CardContent>
    </Card>
  </motion.div>
);

export default History;
