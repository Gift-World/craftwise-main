import { motion } from "framer-motion";

import { Link } from "react-router-dom";
const MotionLink = motion(Link);

const FooterRising = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-white px-4 py-8 md:flex-row md:justify-between"
     
    >
      <div className="mb-6 md:mb-0">
        <MotionLink
          to="/rising"
          // target="_blank"
          rel="noopener noreferrer"
          className="apply-button inline-block rounded-full bg-craftwise-orange px-10 py-3 text-xl font-bold text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          APPLY NOW
        </MotionLink>
      </div>
    </div>
  );
};

export default FooterRising;
