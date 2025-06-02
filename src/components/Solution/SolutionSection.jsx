import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ApproachCard from "./ApproachCard";

const approaches = [
  {
    title: "High-stakes simulations",
    icon: "🎯",
    delay: 0.2,
  },
  {
    title: "Strategic decision-making exercises",
    icon: "🧩",
    delay: 0.4,
  },
  {
    title: "Cross-functional adventures",
    icon: "🔄",
    delay: 0.6,
  },
];

const SolutionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="mt-0 bg-gradient-to-b from-white to-orange-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 font-montserrat text-4xl font-bold text-gray-900">
              CraftWise's Unique Approach:
            </h1>
            <p
              className="mb-8 font-montserrat text-[19px] font-medium text-gray-800"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Breaking away from the traditional, overcrowded training market!!!
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {approaches.map((approach, index) => (
                <ApproachCard key={index} {...approach} />
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/approach.avif"
              alt="Innovative learning"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 text-4xl">
              💡
            </div>
          </div>
        </div>
      </div>
      <div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
        className="mb-4 text-center"
      >
        <p className="mx-auto p-5 font-montserrat text-[17px] font-medium text-gray-800">
          We create an entirely new category of learning—experiential, engaging,
          and transformational.
        </p>
      </div>
    </div>
  );
};

export default SolutionSection;
