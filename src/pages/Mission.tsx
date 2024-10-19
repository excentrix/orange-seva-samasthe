import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import sanityClient from '@sanity/client';
// import imageUrlBuilder from '@sanity/image-url';
import { urlFor } from "@/lib/sanity";

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

const objectivesItems = [
  {
    image: {
      _type: "image",
      asset: {
        _ref: "image-543ab231a422ae7807a1e5e89e79e7461a6a2d7a-800x400-jpg"
      }
    },
    title: "Food Recovery and Redistribution",
    content: "Partner with event venues, caterers, and community organizations to identify and collect surplus food. Ensure safe, hygienic, and timely delivery of meals to individuals and families in need.",
  },
  {
    image: {
      _type: "image",
      asset: {
        _ref: "image-a752113316db62e928121c3c3608c641e5af4196-428x285-jpg"
      }
    },
    title: "Awareness and Education",
    content: "Conduct seminars and workshops in schools, colleges, and community centers to educate individuals about food security, cultural values, and sustainable practices. Foster a culture of mindfulness around food consumption and waste through community engagement and outreach.",
  },
  {
    image: {
      _type: "image",
      asset: {
        _ref: "image-f40f9d0af586fe45a542c99fbb7b2e4f5303fbad-347x261-png"
      }
    },
    title: "Community Engagement",
    content: "Organize campaigns and initiatives that raise awareness about food wastage and its impact, reaching over 5,000 venues. Implement programs like 'Don't Waste the Food' to strengthen connections between surplus food sources and those who need it most.",
  },
  {
    image: {
      _type: "image",
      asset: {
        _ref: "image-1aa187ec0ef4da0c0185c202b7465812f44b70bb-1200x800-jpg"
      }
    },
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
    style={{ backgroundColor: "transparent" }}
  >
    <Section
      title={
        <span
          style={{
            fontFamily: 'Verdana, sans-serif',
            fontSize: '25px',
            textAlign: 'center',
            display: 'block',
            margin: '25px',
          }}
        >
          Objectives
        </span>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 mt-0 m-b-0 ml-7 mr-7">
        {objectivesItems.map((item, index) => (
          <div
            key={index}
            className={`shadow-none transition-all duration-75 ease-in-out`}
            style={{ fontSize: '14px', cursor: 'pointer', border: 'none', padding: '10px' }} s
          >
            <div className="mb-0 pl-2 pr-2 pt-2 pb-0">
              <img
                src={urlFor(item.image).url()}
                alt={item.title}
                className="object-cover rounded-lg"
                style={{ height: '180px', width: '600px', marginBottom: '15px', paddingBottom: '0px', borderRadius: '15px' }}
              />
            </div>
            <h3 className="text-xl font-semibold heading" style={{ fontSize: '18px', marginBottom: '15px', marginLeft: '18px' }}>
              {item.title}
            </h3>
            <p className="poppins-paragraph" style={{ paddingLeft: '20px' }}>{item.content}</p>

          </div>
        ))}
      </div>
    </Section>

    <header>
      <p className="text-center poppins-paragraph text-md" style={{ fontSize: '26px', marginTop: '120px', marginBottom: '90px' }}>"Together, we nourish."</p>
    </header>

    {/* Updated Layout: Mission and Vision text on left, images on right */}

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-6">
      <div className="space-y-8 ml-12">
        <div>
          <h2 className="font-semibold ml-60 mb-5 heading" style={{ fontSize: '24px' }}>Our Mission</h2>
          <p style={{ fontSize: '18px' }}>
            Our mission is to address hunger and food wastage in our community by redistributing
            surplus food and promoting awareness about food security and sustainability.
            We aim to build a caring and strong community where everyone has access to good food and
            healthcare.
          </p>
        </div>

        <div>
          <h2 className="font-semibold ml-60 mb-5 heading" style={{ fontSize: '24px' }}>Our Vision</h2>
          <p style={{ fontSize: '18px' }}>
            At OSS, we envision a world where food wastage is eradicated, and
            every individual has access to nourishing meals. We aspire to
            cultivate a culture of giving that transforms our society, ensuring
            that no one goes hungry.
          </p>
        </div>
      </div>

      {/* Right Side: Two Images */}
      <div className="grid grid-cols-2 gap-4 mr-8">
        <img
          src={urlFor({
            _type: "image",
            asset: {
              _ref: "image-198cdb2732647af07602ea58b65e196c50ec2539-643x360-jpg"
            }
          }).url()}
          alt="Mission Image"
          className="w-full object-cover rounded-lg"
          style={{ height: '300px' }}
        />

        <img
          src={urlFor({
            _type: "image",
            asset: {
              _ref: "image-1347bf64b7fc5801ace62ae67711901d9a66e4f9-880x660-jpg"
            }
          }).url()}
          alt="Vision Image"
          className="w-full h-auto object-cover rounded-lg"
          style={{ height: '300px' }}
        />
      </div>
    </div>

    <Section title={
      <div style={{
        fontFamily: 'Verdana, sans-serif',
        fontWeight: 'bolder',
        fontSize: '25px',
        marginLeft: '560px',
        marginTop: '150px'
      }}>
        Key Impact Areas
      </div>
    }>
      <div className="cursor-pointer grid grid-cols-1 md:grid-cols-3 gap-6 m-12 mb-14">

        <Card className="shadow-lg border-2 hover:scale-105 hover:shadow-xl transition-all duration-75 ease-in-out flex flex-col items-center">
          <CardHeader>
            <CardTitle className="text-xl text-center heading" style={{ fontSize: '22px' }}>
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

        <Card className="shadow-lg border-2 hover:scale-105 hover:shadow-xl transition-all duration-75 ease-in-out mt-0"> {/* Set mt-0 for the middle card */}
          <CardHeader>
            <CardTitle className="text-xl text-center heading" style={{ fontSize: '22px' }}>
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

        <Card className="shadow-lg border-2 hover:scale-105 hover:shadow-xl transition-all duration-75 ease-in-out flex flex-col items-center">
          <CardHeader>
            <CardTitle className="text-xl text-center heading" style={{ fontSize: '22px' }}>
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
      <Link to="/donate">
        <Button style={{ marginBottom: '20px' }}>
          Get Involved
        </Button>
      </Link>
    </div>

  </motion.div>
);

export default Mission;