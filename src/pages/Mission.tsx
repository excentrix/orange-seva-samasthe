import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Accordion from "@/components/ui/accordion";
import Carousel_2 from "@/components/ui/carousel_2";

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
    <h2 className="text-2xl font-bold mb-1">{title}</h2>
    {children}
  </motion.section>
);

const carouselItems = [
  {
    title: "Food Recovery and Redistribution",
    content: "Partner with event venues, caterers, and community organizations to identify and collect surplus food. Ensure safe, hygienic, and timely delivery of meals to individuals and families in need.",
  },
  {
    title: "Awareness and Education",
    content: "Conduct seminars and workshops in schools, colleges, and community centers to educate individuals about food security, cultural values, and sustainable practices. Foster a culture of mindfulness around food consumption and waste through community engagement and outreach.",
  },
  {
    title: "Community Engagement",
    content: "Organize campaigns and initiatives that raise awareness about food wastage and its impact, reaching over 5,000 venues. Implement programs like 'Don't Waste the Food' to strengthen connections between surplus food sources and those who need it most.",
  },
  {
    title: "Health Initiatives",
    content: "Provide medical support through awareness camps focusing on critical health issues, particularly for vulnerable groups such as senior citizens and school girls. Facilitate eye operations and general health check-ups to improve overall well-being in the community.",
  },
];

const Mission = () => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    transition={{ duration: 0.5 }}
    className="space-y-8 p-0 max-w-full mx-auto mission-page"
    
  >
    <header className="text-center mb-4 mt-0">
      <p className="text-xl text-white poppins-paragraph">"Together, we nourish."</p>
    </header>

    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
       
        <Section>
          <div className="max-w-xl mx-auto p-2">
            <Accordion
              title={
                <span className="font-bold text-xl text-center accordion-container" style={{ fontFamily: 'afacad Flux', fontSize: '25px', paddingLeft: '180px',}}>
                  Our Mission
                </span>
              }
            >
              <Card className="p-4 rounded-lg shadow-md">
                <CardContent className="p-6">
                  <p className="poppins-paragraph">
                    Our mission is to address hunger and food wastage in our community by redistributing
                    surplus food and promoting awareness about food security and sustainability.
                    We want to build a caring and strong community where everyone has access to good food and
                    access to good health care.
                  </p>
                </CardContent>
              </Card>
            </Accordion>
          </div>
        </Section>

        <Section>
          <div className="max-w-xl mx-auto p-2"> 
            <Accordion
              title={
                <span className="font-bold text-xl text-center accordion-container" style={{ fontFamily: 'afacad Flux', fontSize: '25px', paddingLeft: '200px' }}>
                  Our Vision
                </span>
              }
            >
              <Card className="p-4 rounded-lg shadow-md">
                <CardContent className="p-6">
                  <p className="poppins-paragraph">
                    At OSS, we envision a world where food wastage is eradicated, and
                    every individual has access to nourishing meals. We aspire to
                    cultivate a culture of giving that transforms our society, ensuring
                    that no one goes hungry.
                  </p>
                </CardContent>
              </Card>
            </Accordion>
          </div>
        </Section>
      </div>
    </div>

    <Section
      title={
        <span
          style={{
            fontFamily: 'Afacad Flux',
            fontWeight: 'bolder',
            fontSize: '29px',
            textAlign: 'center',
            display: 'block',
            margin: '0 auto'
          }}
        >
          Objectives
        </span>
      }
    >
      <Carousel_2 items={carouselItems} />
    </Section>


    <Section title={<span style={{ fontFamily: 'Afacad Flux', fontWeight: 'Bolder', fontSize: '29px', marginLeft: '570px'}}>Key Impact Areas</span>}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-10 mb-14">
        <Card className="shadow-lg border-2 hover:scale-105 hover:shadow-xl transition-all duration-75 ease-in-out">
          <CardHeader>
            <CardTitle className="text-xl font-semibold afacad-flux text-center" style={{ fontSize: '23px' }}>
              Food Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="poppins-paragraph text-center">
              Over 20,000 individuals have benefited from our food
              redistribution efforts, particularly during weddings and community
              events.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg border-2 hover:scale-105 hover:shadow-xl transition-all duration-75 ease-in-out">
          <CardHeader>
            <CardTitle className="text-xl font-semibold afacad-flux text-center" style={{ fontSize: '23px' }}>
              Pandemic Response
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="poppins-paragraph text-center">
              During the Covid-19 pandemic, OSS delivered food and essentials to
              over 200,000 individuals facing hardship.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg border-2 hover:scale-105 hover:shadow-xl transition-all duration-75 ease-in-out">
          <CardHeader>
            <CardTitle className="text-xl font-semibold afacad-flux text-center" style={{ fontSize: '23px' }}>
              Health Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="poppins-paragraph text-center">
              We have successfully supported 40,000 senior citizens in eye
              surgeries and conducted more than 700 medical camps, raising
              awareness about health issues.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>

    <div className="text-center mt-8">
      <Button size="lg" style={{marginBottom:'20px'}}>Get Involved</Button>
    </div>
  </motion.div>
);

export default Mission;
