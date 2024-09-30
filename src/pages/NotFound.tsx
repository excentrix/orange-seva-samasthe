// src/pages/NotFound.tsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <>
      <SEO
        title="Page Not Found | Orange Seva Samsthe"
        description="The page you're looking for doesn't exist. Explore our site to learn about Orange Seva Samsthe's mission and impact."
        keywords="Orange Seva Samsthe, 404, page not found, NGO"
      />
      <motion.div
        className="min-h-screen flex items-center justify-center bg-orange-50"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-2xl mx-auto text-center">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-orange-600">
              404 - Page Not Found
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl mb-6">
              Oops! It seems you've wandered off the path of service.
            </p>
            <img
              src="/images/404-illustration.svg"
              alt="404 Illustration"
              className="w-64 mx-auto mb-6"
            />
            <p className="mb-6">
              Don't worry, even detours can lead to new opportunities to help.
              Let's get you back on track to making a difference.
            </p>
            <div className="space-y-4">
              <Button
                onClick={() => navigate("/")}
                className="bg-main hover:bg-orange-600 text-white"
              >
                Return to Home
              </Button>
              <Button
                onClick={() => navigate("/about")}
                variant="outline"
                className="ml-4"
              >
                Learn About Us
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-600">
              If you believe this is an error, please{" "}
              <a href="/contact" className="text-orange-600 hover:underline">
                contact us
              </a>
              .
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default NotFound;
