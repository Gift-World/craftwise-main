import { useNavigate } from "react-router-dom";

function BrochureSection({ article }) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(article.path);
  };

  return (
    <button
      onClick={handleReadMore}
      
      className="relative flex items-center justify-center gap-2 overflow-hidden rounded-full border border-white/30 bg-accent px-5 py-3 text-sm font-bold text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:border-white/60"
    >
      Download our programs Brochure Here
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
  );
}

export default BrochureSection;
