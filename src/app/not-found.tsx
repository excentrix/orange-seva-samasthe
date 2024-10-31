// pages/404.tsx
"use client"; // Indicate that this is a client component
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from 'next/image';

const NotFound: React.FC = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  // Set the mounted state to true after the component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-orange-50"
      initial={isMounted ? "initial" : false} // Only animate after mounting
      animate={isMounted ? "animate" : false} // Only animate after mounting
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
          <Image
            src="/images/404-illustration.svg"
            alt="404 Illustration"
            width={256}
            height={256}
            className="w-64 mx-auto mb-6"
          />
          <p className="mb-6">
            Don't worry, even detours can lead to new opportunities to help.
            Let's get you back on track to making a difference.
          </p>
          <div className="space-y-4">
            <Button
              onClick={() => router.push("/")} // Use router.push for navigation
              className="bg-main hover:bg-orange-600 text-white"
            >
              Return to Home
            </Button>
            <Button
              onClick={() => router.push("/about")} // Use router.push for navigation
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
  );
};

export default NotFound;
