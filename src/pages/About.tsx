import { Impact } from "./Impact";
import { Mission } from "./Mission";
import { Team } from "./Team";
import { History } from "./History";

const AboutUs = () => {
  return (
    <div className="space-y-8 p-8">
      <Mission />
      <Team />
      <History />
      <Impact />
    </div>
  );
};

export default AboutUs;
