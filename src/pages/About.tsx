import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">About Orange Seva Samaste</h1>
      <p className="mb-4">
        Orange Seva Samaste (R) was established in 2015, with its head office
        located in Mulluru Village, Kollegala Taluk, Chamarajanagara District,
        Karnataka.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Objectives</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Provide skill training for needy students</li>
        <li>Undertake integrated rural development programs</li>
        <li>
          Promote prevention activities for AIDS, Cancer, and family planning
        </li>
        <li>Promote sustainable and equitable development</li>
      </ul>
      <p>
        We are registered under the Indian Trust Act - 1882 and have 80G & 12AA
        certification for tax exemption, as well as Niti Ayog, Darpan, and CSR
        certification from the Ministry of Corporate Affairs.
      </p>
    </div>
  );
};

export default About;
