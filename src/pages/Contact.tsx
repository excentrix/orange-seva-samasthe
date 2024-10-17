import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto mt-8 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-gray-900"
        style={{marginLeft:'200px', textDecoration: 'underline'}}
      >
        Contact Us
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-8">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-[650px]" 
        >
          <Card className="shadow-lg h-auto mb-12 hover:scale-105 hover:shadow-xl transition-all duration-75 ease-in-out"> 
            <CardHeader>
              <CardDescription className="text-xl text-gray-900">Get in touch with Orange Seva Samsthe</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-gray-900">Address:</p>
                  <p className="text-gray-800">
                    #296, 7th Cross, A-Main, Cellar, Hebbal 1st Stage, Hebbal,
                    Mysore – 570016, Karnataka
                  </p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">Email:</p>
                  <a
                    href="mailto:sevaorange@gmail.com"
                    className="text-gray-800 hover:underline"
                  >
                    sevaorange@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">Phone:</p>
                  <p className="text-gray-800">
                    <a
                      href="tel:+919113902995"
                      className="text-gray-800 hover:underline"
                    >
                      9113902995
                    </a>
                    ,{" "}
                    <a
                      href="tel:+916360814489"
                      className="text-gray-800 hover:underline"
                    >
                      6360814489
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">Contact Person:</p>
                  <p className="text-gray-800">
                    Mr. Sunil P (BBM), General Secretary, OSS
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="h-[400px] rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5430.172867699773!2d76.61304872360893!3d12.346391156657546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7a42a33a675d%3A0xf6c6f7cb17a2574f!2s7th%20Cross%20St%2C%20Lokanayaka%20Nagar%2C%20Hebbal%201st%20Stage%2C%20Mysuru%2C%20Karnataka%20570016!5e1!3m2!1sen!2sin!4v1726596653087!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
