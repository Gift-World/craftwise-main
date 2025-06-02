
const ExperienceCard = ({ title, description, icon }) => {

  return (
    <div
     
      className="relative"
    >
      <div
        className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-lg md:h-32 md:w-32"
       
      >
        <span className="text-3xl md:text-4xl">{icon}</span>
      </div>

      <div
        className="text-center"
       
      >
        <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
        {/* <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-orange-500 transition-colors hover:text-orange-600"
        >
          {isExpanded ? "Show Less" : "Learn More"}
        </button> */}
      </div>

      <div
       
       
        className="mt-4 overflow-hidden text-center text-gray-600"
      >
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
