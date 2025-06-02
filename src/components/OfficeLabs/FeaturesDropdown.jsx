import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Advanced technology and collaboration tools",
    icon: "💻",
    description:
      "State-of-the-art digital tools that mirror real workplace environments",
  },
  {
    title: "Real-time problem-solving exercises",
    icon: "🎯",
    description:
      "Hands-on scenarios that develop critical thinking and decision-making skills",
  },
  {
    title: "Role-playing scenarios",
    icon: "🎭",
    description:
      "Immersive experiences that simulate leadership and team dynamics",
  },
];

const FeaturesDropdown = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="space-y-4">
      <h3 className="mb-6 font-montserrat text-4xl font-bold text-gray-900">
        Features:
      </h3>
      {features.map((feature, index) => (
        <div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="overflow-hidden rounded-lg bg-white font-montserrat text-[15px] shadow-md"
        >
          <button
            onClick={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
            className="flex w-full items-center justify-between px-6 py-4 transition-colors hover:bg-orange-50"
          >
            <div className="flex items-center space-x-4">
              <span className="text-2xl">{feature.icon}</span>
              <span className="font-semibold text-gray-800">
                {feature.title}
              </span>
            </div>
            <span
              animate={{ rotate: expandedIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ▼
            </span>
          </button>

          <AnimatePresence>
            {expandedIndex === index && (
              <div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-orange-50 px-6 py-4"
              >
                <p className="text-gray-700">{feature.description}</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FeaturesDropdown;
