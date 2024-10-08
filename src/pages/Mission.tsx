import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const sectionVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
};

const Section = ({ title, children }: any) => (
  <motion.section
    variants={sectionVariants}
    initial="initial"
    animate="animate"
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </motion.section>
);

const Mission = () => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    transition={{ duration: 0.5 }}
    className="space-y-8 p-8 max-w-6xl mx-auto"
  >
    <header className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4">Our Mission and Vision</h1>
      <p className="text-xl text-gray-600">"Together, we nourish."</p>
    </header>

    <Section title="Our Vision">
      <Card>
        <CardContent className="p-6">
          <p>
            At OSS, we envision a world where food wastage is eradicated, and
            every individual has access to nourishing meals. We aspire to
            cultivate a culture of giving that transforms our society, ensuring
            that no one goes hungry.
          </p>
        </CardContent>
      </Card>
    </Section>

    <Section title="Our Mission">
      <Card>
        <CardContent className="p-6">
          <p>
            Our mission is to address hunger and food wastage in our community
            by redistributing surplus food and promoting awareness about food
            security and sustainability. We want to build a caring and strong
            community where everyone has access to good food and access to good
            health care.
          </p>
        </CardContent>
      </Card>
    </Section>

    <Section title="Objectives">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-lg border-2 hover:scale-105 hover:shadow-xl transition-all duration-75 ease-in-out">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Food Recovery and Redistribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>
                Partner with event venues, caterers, and community organizations
                to identify and collect surplus food.
              </li>
              <li>
                Ensure safe, hygienic, and timely delivery of meals to
                individuals and families in need.
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="shadow-lg border-2 hover:scale-105 hover:shadow-xl transition-all duration-75 ease-in-out">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Awareness and Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>
                Conduct seminars and workshops in schools, colleges, and
                community centers to educate individuals about food security,
                cultural values, and sustainable practices.
              </li>
              <li>
                Foster a culture of mindfulness around food consumption and
                waste through community engagement and outreach.
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="shadow-lg border-2 hover:scale-105 hover:shadow-xl transition-all duration-75 ease-in-out">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Community Engagement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>
                Organize campaigns and initiatives that raise awareness about
                food wastage and its impact, reaching over 5,000 venues.
              </li>
              <li>
                Implement programs like "Don't Waste the Food" to strengthen
                connections between surplus food sources and those who need it
                most.
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="shadow-lg border-2 hover:scale-105 hover:shadow-xl transition-all duration-75 ease-in-out">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Health Initiatives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>
                Provide medical support through awareness camps focusing on
                critical health issues, particularly for vulnerable groups such
                as senior citizens and school girls.
              </li>
              <li>
                Facilitate eye operations and general health check-ups to
                improve overall well-being in the community.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Section>

    <Section title="Key Impact Areas">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-lg border-2 hover:scale-105 hover:shadow-xl transition-all duration-75 ease-in-out">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Food Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Over 20,000 individuals have benefited from our food
              redistribution efforts, particularly during weddings and community
              events.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg border-2 hover:scale-105 hover:shadow-xl transition-all duration-75 ease-in-out">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Pandemic Response
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              During the Covid-19 pandemic, OSS delivered food and essentials to
              over 200,000 individuals facing hardship.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg border-2 hover:scale-105 hover:shadow-xl transition-all duration-75 ease-in-out">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Health Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We have successfully supported 40,000 senior citizens in eye
              surgeries and conducted more than 700 medical camps, raising
              awareness about health issues.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>

    <div className="text-center mt-12">
      <Button size="lg">Get Involved</Button>
    </div>
  </motion.div>
);

export default Mission;
