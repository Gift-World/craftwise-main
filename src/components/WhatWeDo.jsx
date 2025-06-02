import { useInView } from "react-intersection-observer";

const ServiceCard = ({ title, description, icon }) => {
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      
      className="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhatWeDo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="what-we-do" className="bg-gradient-to-b from-orange-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div
          ref={ref}
         
          className="mb-4 text-center"
        >
          <h2 className="mb-10 font-montserrat text-4xl font-bold text-gray-900">
            We Serve ...
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Ambitious Professionals"
            description="Looking to elevate their careers through practical, hands-on learning experiences."
            icon={<span className="text-2xl">👥</span>}
            delay={0.2}
          />
          <ServiceCard
            title="Corporate Leaders"
            description="Who want to build high-performing teams and drive organizational success."
            icon={<span className="text-2xl">💼</span>}
            delay={0.4}
          />
          <ServiceCard
            title="Organizations"
            description="Committed to fostering a culture of continuous growth and collaboration."
            icon={<span className="text-2xl">🎯</span>}
            delay={0.6}
          />
        </div>
        <div
          ref={ref}
         
          className="mb-4 text-center"
        >
          <p className="mx-auto p-5 font-montserrat text-[17px] font-medium text-gray-800">
            Whether you are an aspiring manager, a seasoned leader, or an HR
            professional seeking innovative training solutions, CraftWise
            Academy is crafted just for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
