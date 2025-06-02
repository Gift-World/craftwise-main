import { useInView } from "react-intersection-observer";

const WhyItMattersSection = () => {
  const [ref ] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-gradient-to-b from-orange-50 to-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
        >
          <div
            
          >
            <h2 className="mb-8 font-montserrat text-4xl font-bold text-gray-900">
              Why it matters:
            </h2>

            <div
              className="rounded-lg bg-orange-500 p-8 text-white shadow-xl"
              
            >
              <h3 className="mb-4 font-montserrat text-2xl font-bold">
                Career Fulfillment:
              </h3>
              <p className="mb-4 font-montserrat text-lg">
                It's not just about a paycheck. It's about making an impact,
                feeling engaged, and growing continuously.
              </p>
              <p className="font-montserrat text-lg">
                CraftWise Academy ensures you're not just surviving but thriving
                in your career.
              </p>
            </div>
          </div>

          <div
            className="relative"
            
          >
            <img
              src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2h5JTIwaXQlMjBtYXR0ZXJzJTIwYWZyaWNhbiUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Career growth"
              className="rounded-lg shadow-2xl"
            />
            <div
              className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-orange-500 opacity-20"
              
            />
            <div
              className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-orange-500 opacity-20"
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyItMattersSection;
