import { useState } from "react";

const BenefitCard = ({ title, description, icon, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative cursor-pointer overflow-hidden rounded-lg bg-white p-6 shadow-md"
    >
      <div
        
        
      >
        <div className="mb-4 text-4xl">{icon}</div>
        <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      <div
        className="absolute bottom-0 left-0 h-1 w-full bg-orange-500"
       
      />
    </div>
  );
};

export default BenefitCard;
