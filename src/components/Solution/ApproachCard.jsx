import { motion } from "framer-motion";

const ApproachCard = ({ title, icon }) => {
  return (
    <div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      // transition={{ delay }}
      className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
    >
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
};

export default ApproachCard;
