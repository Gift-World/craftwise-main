import BrochureSection from './BrochureSection';
// import Footer from '../Footer/Footer';

const articles = [
  
  {
    id: 1,
   
    organization: "CraftWise Academy",
    // followers: "18 followers",
    path: "/brochure"
  },
   
 
];

function Brochures() {
  return (
   
      <main className="max-w-6xl font-montserrat mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {articles.map((article, index) => (
          <BrochureSection key={article.id} article={article} index={index} />
        ))}
      </main>
     
   
  );
}

export default Brochures;