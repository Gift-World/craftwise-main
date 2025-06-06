import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Brochures from "../components/Brochure/Brochures";
import { Helmet } from "react-helmet-async";

const programs = [
  {
    title: "RISING PROFESSIONALS PROGRAMME",
    subtitle: "Empowering Early Career Success",
    description:
      "A foundational program designed to accelerate the growth of emerging professionals.",
    image: "https://i.imgur.com/6GjLRZC.png",
    path: "/rising",
  },
  {
    title: "NEW MANAGERS PROGRAMME",
    subtitle: "Transitioning from Individual Contributor to Leader",
    description:
      "A comprehensive program designed for new managers, focusing on essential leadership skills and team management fundamentals.",
    image: "https://i.imgur.com/Y94ziMX.png",
    path: "/managers",
  },
  {
    title: "EMERGING LEADERS PROGRAMME",
    subtitle: "Preparing for Senior Leadership Roles",
    description:
      "An advanced program for emerging leaders ready to take on greater organizational responsibilities.",
    image: "https://i.imgur.com/1NTh8oR.png",
    path: "/emerging",
  },
  {
    title: "LEGACY LEADERS PROGRAMME",
    subtitle: "Shaping Organizational Transformation",
    description:
      "An executive program focused on building lasting organizational impact and cultural transformation.",
    image: "https://i.imgur.com/qsWTkfs.png",
    path: "/legacy",
  },
];

function ProgramSection({ program }) {
  const navigate = useNavigate();
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleReadMore = () => {
    navigate(program.path);
  };

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-8 border-b border-gray-200 py-16 last:border-b-0 md:flex-row"
    >
      <div className="w-full md:w-1/2">
        <img
          src={program.image}
          alt={program.title}
          className="h-[400px] w-full rounded-lg object-cover shadow-lg"
        />
      </div>
      <div className="w-full space-y-4 md:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800">{program.title}</h2>
        <h3 className="text-xl text-gray-600">{program.subtitle}</h3>
        <p className="text-lg leading-relaxed text-gray-600">
          {program.description}
        </p>
        <button
          onClick={handleReadMore}
          className="read-more text-coral-red group inline-flex items-center font-semibold"
        >
          Read more
          <svg
            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

function Programs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
  <title>Craftwise Academy Programmes | Leadership & Career Development</title>
  <meta
    name="description"
    content="Explore Craftwise Academy's transformative programs designed for rising professionals, new managers, emerging leaders, and legacy executives. Unlock growth today."
  />
  <meta
    name="keywords"
    content="Craftwise Academy programs, leadership training Kenya, rising professionals development, new manager training, executive education, emerging leaders programme, legacy leaders programme, career growth, organizational transformation, management skills, leadership skills"
  />
  <link rel="canonical" href="https://craftwiseacademy.com/programs" />
</Helmet>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          width: "100%",
          position: "relative",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
          
            className="text-center text-white"
          >
            <h1 className="mb-4 text-5xl font-bold">Our Programmes</h1>
            <p className="mx-auto max-w-2xl text-xl">
              Empowering leaders and organizations through world-class education
              and development programmes
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-start px-4 md:justify-start">
        {/* This div will be aligned to the far right */}
        <div className="rounded-lg shadow-md">
          <Brochures />
        </div>
      </div>

      {/* Programs Section */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {programs.map((program, index) => (
          <ProgramSection key={index} program={program} index={index} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default Programs;
