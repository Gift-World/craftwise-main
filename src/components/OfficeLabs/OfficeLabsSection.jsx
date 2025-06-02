import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FeaturesDropdown from "./FeaturesDropdown";

const OfficeLabsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="mb-6 bg-gradient-to-b from-orange-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          <h2 className="mb-2 font-montserrat text-4xl font-semibold text-gray-900">
            The CraftWise Office Labs
          </h2>

          <div className="mb-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <p className="mt-8 font-montserrat text-[18px] font-medium text-black">
                A Leading-edge training environment that simulates a fully
                operational corporate office, featuring functional departments
                such as HR, Marketing, Sales, and Operations.
              </p>
              <p className="mt-16 font-montserrat text-lg text-gray-700">
                <strong>
                  Equipped with state-of-the-art technology and tools to provide
                  participants with a hands-on experience reflective of
                  contemporary workplace dynamics.
                </strong>{" "}
              </p>
            </div>

            <div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <img
                src="/images/labs.avif"
                alt="Office environment"
                className="mt-0 rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 text-4xl">
                🧪
              </div>
            </div>
          </div>

          <FeaturesDropdown />
        </div>
      </div>
    </div>
  );
};

export default OfficeLabsSection;
