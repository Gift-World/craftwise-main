import { useInView } from "react-intersection-observer";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    title: "IN-PERSON",
    description:
      "Fully immersive, hands-on workshops at our Office Labs or at your custom location.",
    icon: "🎓",
    delay: 0.2,
  },
  {
    title: "ONLINE",
    description:
      "Engaging virtual training with interactive simulations and expert facilitator-led sessions.",
    icon: "💻",
    delay: 0.4,
  },
  {
    title: "HYBRID",
    description:
      "A combination of in-person and online experiences to maximize learning impact.",
    icon: "🔄",
    delay: 0.6,
  },
];

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-gradient-to-b from-orange-50 to-white py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
         
        >
          <h2 className="mb-4 font-montserrat text-4xl font-bold text-gray-900">
            FLEXIBLE TRAINING
          </h2>
          <h3 className="mb-12 font-montserrat text-2xl font-semibold text-orange-500">
            FORMATS
          </h3>

          <div className="grid grid-cols-1 gap-4 font-montserrat text-[17px] sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
