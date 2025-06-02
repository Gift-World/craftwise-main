import { motion } from "framer-motion";

const ImpactCard = ({ icon, title, description, index }) => {
  return (
    <div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl"
    >
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="mb-2 text-center text-xl font-semibold text-gray-900">
        {title}
      </h3>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
};

export default ImpactCard;
