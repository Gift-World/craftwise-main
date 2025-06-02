import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ImmersiveCircle from "./ImmersiveCircle";

const experiences = [
  {
    title: "TRANSFORMATIVE LEARNING",
    description: "Active participation, problem-solving, and hands-on practice",
    icon: "🔄 ",
    delay: 0.2,
  },
  {
    title: "EMPATHETIC LEADERSHIP",
    description: "Role-reversal challenges to build understanding and trust",
    icon: "🥇",
    delay: 0.4,
  },
  {
    title: "STRATEGIC AGILITY",
    description: "Real-time decision-making under pressure",
    icon: "🎯",
    delay: 0.6,
  },
];

const ImmersiveSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-[#2A1011] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 font-montserrat text-5xl font-bold text-orange-500">
            CRAFTWISE
          </h2>
          <h3 className="mb-16 font-montserrat text-4xl font-bold text-orange-500">
            EXPERIENCE: IMMERSIVE
          </h3>

          <div className="relative grid grid-cols-1 gap-16 font-montserrat text-2xl md:grid-cols-3">
            {/* Connecting lines */}
            <div className="absolute left-1/4 right-1/4 top-1/2 hidden h-0.5 bg-orange-500 md:block" />

            {experiences.map((experience, index) => (
              <ImmersiveCircle key={index} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImmersiveSection;
