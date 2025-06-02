import { useParams, useNavigate } from "react-router-dom";

const BlogArticle = ({ articles }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = articles.find((a) => a.path === `/blog/${slug}`);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <article
      
      className="mx-auto max-w-4xl rounded-lg bg-white shadow-lg"
    >
      <button
        onClick={() => navigate("/blogs")}
        className="inline-block px-6 py-4 text-indigo-600 transition-colors duration-300 hover:text-indigo-800"
      >
        ← Back to Articles
      </button>

      <div className="p-6">
        <img
         
          src={article.imageUrl}
          alt={article.title}
          className="mb-8 h-[400px] w-full rounded-lg object-cover shadow-lg"
        />

        <div
         
          className="space-y-6"
        >
          <div className="flex items-center space-x-4 text-gray-600">
            <span className="font-medium">{article.organization}</span>
            <span className="text-sm">{article.followers}</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-800">{article.title}</h1>

          <div className="flex items-center text-gray-600">
            <span>{article.author}</span>
            <span className="mx-2">•</span>
            <span>{article.date}</span>
          </div>

          <div className="prose lg:prose-xl whitespace-pre-line leading-relaxed text-gray-700">
            {article.content}
          </div>

          <div className="flex items-center justify-between border-t border-gray-200 pt-8">
            <div className="flex items-center space-x-4">
              <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-indigo-700">
                Share
              </button>
              <button className="rounded-lg border border-indigo-600 px-4 py-2 text-indigo-600 transition-colors duration-300 hover:bg-indigo-50">
                Follow
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Tags:</span>
              <span className="cursor-pointer rounded-full bg-gray-100 px-3 py-1 text-gray-700 transition-colors duration-300 hover:bg-gray-200">
                #career
              </span>
              <span className="cursor-pointer rounded-full bg-gray-100 px-3 py-1 text-gray-700 transition-colors duration-300 hover:bg-gray-200">
                #leadership
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogArticle;
