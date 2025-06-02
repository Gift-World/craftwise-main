import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      style={{
        backgroundImage: "url('/images/banner.avif')",
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents tiling
        borderRadius: "12px", // Rounded corners (adjust as needed)

        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow
        overflow: "hidden",
        // For rounded corners
      }}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Animated Shape */}

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-16 md:flex-row md:px-12">
        {/* Left Section */}
      </div>

      <h1 className="mt-10 p-8 font-montserrat text-3xl font-bold text-white md:mt-24 md:p-32 md:text-7xl">
        <strong>
          CRAFTWISE <br></br>ACADEMY
        </strong>
      </h1>

      <p className="pl-8 font-montserrat text-xl font-medium text-white md:pl-32 md:text-3xl">
        Experience Learning, <br></br> That Changes Everything.
      </p>
      <div
        ref={ref}
        className="z-10 space-y-6 p-4 pl-8 pt-8 text-white md:w-1/2 md:pl-32"
        
      >
        <Link to="/programs">
          <button
            className="relative flex items-center justify-center gap-2 overflow-hidden rounded-full border border-white/30 bg-accent px-5 py-3 text-sm font-bold text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:border-white/60"
            
          >
            Programmes Offered
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
