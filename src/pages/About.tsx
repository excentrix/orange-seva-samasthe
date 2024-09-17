import Impact from "./Impact";
import Mission from "./Mission";
import Team from "./Team";
import History from "./History";
import SEO from "@/components/SEO";

const AboutUs = () => {
  return (
    <>
      <SEO
        title="About Us | Orange Seva Samsthe"
        description="Learn about Orange Seva Samsthe's mission, team, history, and impact in creating sustainable change and empowering communities."
        keywords="Orange Seva Samsthe, NGO, social initiatives, food security, health awareness, education"
      />
      <div className="space-y-8 p-8">
        <Mission />
        <Team />
        <History />
        <Impact />
      </div>
    </>
  );
};

export default AboutUs;
