import React, { useState, ReactNode } from 'react';

interface AccordionProps {
  title: ReactNode; 
  children: ReactNode; 
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false); 

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-lg mb-1">
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full p-4 text-left font-bold focus:outline-none"
      >
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="p-4 border-t border-gray-300">{children}</div>}
    </div>
  );
};

export default Accordion;
