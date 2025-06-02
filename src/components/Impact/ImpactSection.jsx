import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ImpactCard from "./ImpactCard";

const impacts = [
  {
    icon: "🎯",
    title: "Immediate Skill Application",
    description: "Apply learned concepts directly to real-world scenarios",
  },
  {
    icon: "👥",
    title: "Improved Team Dynamics",
    description: "Enhanced leadership confidence and team collaboration",
  },
  {
    icon: "💼",
    title: "Career Advancement",
    description: "Access to top job opportunities and professional growth",
  },
];

const ImpactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="mb-7 bg-gradient-to-b from-white to-orange-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2
            className="mb-4 font-montserrat text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            THE IMPACT
          </h2>

          <p
            className="mx-auto mb-12 max-w-3xl font-montserrat text-[19px] font-medium text-gray-600"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            CraftWise Academy doesn't just teach; we create leaders, innovators,
            and changemakers.
          </p>

          <div className="grid grid-cols-1 gap-8 font-montserrat text-[17px] font-semibold md:grid-cols-3">
            {impacts.map((impact, index) => (
              <ImpactCard key={index} {...impact} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
