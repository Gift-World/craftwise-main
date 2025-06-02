import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const ExperienceCard = ({ title, description, icon, delay }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className="relative"
    >
      <div
        className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-lg md:h-32 md:w-32"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-3xl md:text-4xl">{icon}</span>
      </div>

      <div
        className="text-center"
        animate={{ y: isExpanded ? -10 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-orange-500 transition-colors hover:text-orange-600"
        >
          {isExpanded ? "Show Less" : "Learn More"}
        </button>
      </div>

      <div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isExpanded ? 1 : 0,
          height: isExpanded ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="mt-4 overflow-hidden text-center text-gray-600"
      >
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
