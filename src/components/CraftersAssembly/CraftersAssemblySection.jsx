import { useInView } from "react-intersection-observer";
import CraftersAssemblyCard from "./CraftersAssemblyCard";

const features = [
  {
    icon: "🚀",
    title: "Career Resources",
    description:
      "Access to career resources and ongoing professional development.",
    delay: 0.2,
  },
  {
    icon: "🤝",
    title: "Exclusive Events",
    description:
      "Invitations to exclusive events and networking opportunities.",
    delay: 0.4,
  },
  {
    icon: "💼",
    title: "Job Opportunities",
    description:
      "Job openings from top companies seeking skilled professionals.",
    delay: 0.6,
  },
];

const CraftersAssemblySection = () => {
  const [ref ] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      id="crafters"
      className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          
        >
          <h2
            className="mb-8 font-montserrat text-4xl font-bold text-gray-900"
           
          >
            THE CRAFTERS ASSEMBLY
          </h2>

          <div className="grid grid-cols-1 gap-12 font-montserrat text-[18px] lg:grid-cols-2">
            <div
              
              className="space-y-6"
            >
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <CraftersAssemblyCard key={index} {...feature} />
                ))}
              </div>

              <p
                className="mt-8 text-[20px] italic text-gray-700"
               
              >
                Join an elite community committed to continuous growth and
                impact.
              </p>
            </div>

            <div
              
              className="relative"
            >
              <img
                src="/images/assembly.avif"
                alt="Professional meeting"
                className="rounded-lg shadow-2xl"
              />
              <div
                className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-orange-500 opacity-20"
               
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftersAssemblySection;
