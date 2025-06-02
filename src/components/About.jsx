import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="about" className="bg-gradient-to-b from-white to-orange-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div
          ref={ref}
          
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
        >
          <div>
            <h1
              className="mb-7 font-montserrat text-4xl font-bold text-gray-600"
              
            >
              About us
            </h1>
            <h1
              className="mb-6 font-montserrat text-3xl font-medium text-gray-900"
              
            >
              CraftWise Academy:
              <span className="block font-montserrat font-bold text-orange-500">
                A Revolution in Experiential Learning.
              </span>
            </h1>
            <p
              className="mb-8 font-montserrat text-[18px] font-medium text-black"
              
            >
              We craft high-performing professionals to excel through hands-on
              learning, practical tools, and expert guidance that build
              confidence, spark innovation, and deliver real results{" "}
            </p>
            <p
              className="mb-8 font-montserrat text-[18px] font-medium text-black"
             
            >
              More than just a training center—CraftWise Academy is where career
              advancement and organizational transformation come alive. Say
              goodbye to uninspired workshops and hello to hands-on experiences
              that mirror real workplace challenges.{" "}
            </p>
          </div>
          <div
            
            className="relative"
          >
            <img
              src="/images/about.avif"
              alt="Professional training session"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-orange-500 opacity-20" />
            <div className="absolute -left-4 -top-4 h-32 w-32 rounded-full bg-orange-500 opacity-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
