import { motion } from "framer-motion";
import { useState } from "react";

const BenefitCard = ({ title, description, icon, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative cursor-pointer overflow-hidden rounded-lg bg-white p-6 shadow-md"
    >
      <div
        animate={{
          scale: isHovered ? 1.05 : 1,
          y: isHovered ? -5 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-4 text-4xl">{icon}</div>
        <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      <div
        className="absolute bottom-0 left-0 h-1 w-full bg-orange-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default BenefitCard;
