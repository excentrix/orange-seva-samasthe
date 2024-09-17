import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">Get in touch with Orange Seva Samasthe:</p>
      <ul className="list-none">
        <li className="mb-2">
          <strong>Address:</strong> #296, 7th Cross, A-Main, Cellar, Hebbal 1st
          Stage, Hebbal, Mysore – 570016 Karnataka
        </li>
        <li className="mb-2">
          <strong>Email:</strong> sevaorange@gmail.com
        </li>
        <li className="mb-2">
          <strong>Phone:</strong> 9113902995, 6360814489
        </li>
        <li className="mb-2">
          <strong>Contact Person:</strong> Mr. Sunil P (BBM), General Secretary,
          OSS
        </li>
      </ul>
    </div>
  );
};

export default Contact;
