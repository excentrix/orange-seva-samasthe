import React, { useState } from "react";
import { motion } from "framer-motion";

const Donate: React.FC = () => {
  const [amount, setAmount] = useState("");

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement donation logic here (e.g., redirect to payment gateway)
    alert(`Thank you for your donation of ₹${amount}!`);
  };

  return (
    <div className="bg-off-white py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Support Our Cause
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8"
        >
          <p className="mb-6 text-center">
            Your donation helps us continue our mission of serving the
            community.
          </p>
          <form onSubmit={handleDonate}>
            <div className="mb-4">
              <label
                htmlFor="amount"
                className="block text-gray-700 font-bold mb-2"
              >
                Donation Amount (₹)
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-primary"
                placeholder="Enter amount"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-accent text-white font-bold py-2 px-4 rounded-md hover:bg-orange-primary transition duration-300"
            >
              Donate Now
            </button>
          </form>
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">
              Bank Details for Direct Transfer:
            </h2>
            <p>Account Name: Orange Seva Samste (R), Mysore</p>
            <p>Account Number: 39260100003979</p>
            <p>Bank Name: Bank of Baroda</p>
            <p>Branch: Hebbal, Mysore</p>
            <p>IFSC Code: BARBOHEBBAL</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Donate;
