// src/components/StructuredData.tsx
import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type: "Organization" | "NGO";
  name: string;
  url: string;
  logo: string;
  description: string;
}

const StructuredData: React.FC<StructuredDataProps> = ({
  type,
  name,
  url,
  logo,
  description,
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    name,
    url,
    logo,
    description,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
