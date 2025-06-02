import { useNavigate } from "react-router-dom";

function BlogSection({ article}) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(article.path);
  };

  return (
    <div
     
      className="flex flex-col items-center gap-8 border-b border-gray-200 py-16 last:border-b-0 md:flex-row"
    >
      <div className="w-full md:w-1/2">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="h-[400px] w-full rounded-lg object-cover shadow-lg"
        />
      </div>
      <div className="w-full space-y-4 md:w-1/2">
        <div className="flex items-center space-x-4 text-gray-600">
          <span className="font-medium">{article.organization}</span>
          <span className="text-sm">{article.followers}</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">{article.title}</h2>
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-lg px-6 py-3 font-montserrat text-[30px] text-lg font-bold text-orange-500 transition-colors duration-300"
        >
          {article.button}
        </a>
        <div className="flex items-center text-sm text-gray-600">
          <span>{article.author}</span>
          <span className="mx-2">•</span>
          <span>{article.date}</span>
        </div>
        <p className="line-clamp-3 text-lg leading-relaxed text-gray-600">
          {article.excerpt}
        </p>
        <button
          onClick={handleReadMore}
          
          className="group inline-flex items-center font-semibold text-indigo-600"
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

export default BlogSection;
