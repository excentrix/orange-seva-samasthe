import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FaUniversity, FaMoneyCheckAlt, FaCreditCard } from "react-icons/fa"; 

const Donate: React.FC = () => {
  return (
    <div className="bg-off-white"> 
      <div className="container px-4"> 
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '20px', fontSize:'35px', paddingTop: '40px'}}
          className="font-bold text-center mb-8 text-gray-800" 
        >
          Support Our Cause
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6" 
        >
          <p className="mb-4 text-center text-md text-gray-700"> 
            Your donation helps us continue our mission of serving the community. We appreciate your support!
          </p>

          <Link to={`https://razorpay.me/@orangesevasamsthe`}>
            <Button className="w-full bg-blue-accent text-white font-bold py-2 px-4 rounded-md hover:bg-orange-primary transition duration-300 mb-4"> {/* Added mb-4 to create space below the button */}
              Donate Now
            </Button>
          </Link>

          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 text-center">
              Bank Details for Direct Transfer:
            </h2>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-center">
                <FaUniversity className="mr-2 text-orange-500" />
                <p>
                  <strong>Account Name:</strong> Orange Seva Samsthe (R), Mysore
                </p>
              </div>
              <div className="flex items-center">
                <FaMoneyCheckAlt className="mr-2 text-green-500" />
                <p>
                  <strong>Account Number:</strong> 39260100003979
                </p>
              </div>
              <div className="flex items-center">
                <FaCreditCard className="mr-2 text-blue-500" />
                <p>
                  <strong>Bank Name:</strong> Bank of Baroda
                </p>
              </div>
              <div className="flex items-center">
                <FaUniversity className="mr-2 text-purple-500" />
                <p>
                  <strong>Branch:</strong> Hebbal, Mysore
                </p>
              </div>
              <div className="flex items-center">
                <FaCreditCard className="mr-2 text-red-500" />
                <p>
                  <strong>IFSC Code:</strong> BARBOHEBBAL
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Donate;
