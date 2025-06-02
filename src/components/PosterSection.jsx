import { useNavigate } from "react-router-dom";

const PosterSection = () => {
  const navigate = useNavigate();

  const poster = {
    title: "Your First 100 Days in a New Role",
    description: `Your first 100 days in a new role set the foundation for your long-term success. 
    But how do you navigate expectations, build credibility, and make an impact—without feeling overwhelmed? 
    Join this expert-led, interactive Masterclass to learn more. Spots are limited!`,
    link: "https://zoom.us/webinar/register/WN_bZKioxAzTLmGMLNomZxCBA",
    imageUrl: "https://i.imgur.com/eD7f1dz.jpeg", // Replace with actual image URL
  };

  return (
    <div className="mx-auto max-w-4xl">
      <article
        
        className="overflow-hidden rounded-lg bg-white shadow-lg"
      >
        <div className="flex flex-col items-center p-6 text-center">
          <img
            
            src={poster.imageUrl}
            alt={poster.title}
            className="mb-6 w-full max-w-[600px] rounded-lg shadow-lg"
          />

          <h2 className="text-3xl font-bold text-gray-800">{poster.title}</h2>
          <p className="mt-4 font-montserrat leading-relaxed text-gray-600">
            {poster.description}
          </p>

          <a
            href={poster.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-lg bg-orange-500 px-6 py-3 text-lg font-semibold text-white transition-colors duration-300 hover:bg-orange-600"
          >
            👉 Register Now
          </a>
        </div>
      </article>
      <button
        
        onClick={() => navigate("/blogs")}
        className="group mb-6 flex items-center space-x-2 px-6 py-3 text-indigo-600 transition-colors duration-300 hover:text-indigo-800"
      >
        <svg
          className="h-5 w-5 transform transition-transform group-hover:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span className="font-montserrat text-orange-600">
          Back to Articles
        </span>
      </button>
    </div>
  );
};

export default PosterSection;
