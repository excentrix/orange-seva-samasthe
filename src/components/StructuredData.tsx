// src/components/StructuredData.tsx
import Head from "next/head"; // Correct the import to use next/head

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
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Head>
  );
};

export default StructuredData;
