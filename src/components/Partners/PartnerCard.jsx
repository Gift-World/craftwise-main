import { FaExternalLinkAlt } from "react-icons/fa";

const PartnerCard = ({ logo, name, website }) => {
  return (
    <div
     
      className="flex flex-col items-center"
    >
      <div className="flex h-48 w-48 items-center justify-center rounded-full bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
        <img src={logo} alt={name} className="h-32 w-32 object-contain" />
      </div>
      <div className="mt-4 flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
           
            className="text-2xl text-yellow-400"
          >
            ⭐
          </span>
        ))}
      </div>
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mx-auto mt-4 flex items-center justify-center gap-2 space-x-1 overflow-hidden rounded-full border-white/30 px-5 py-2.5 text-sm font-bold text-yellow-500 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:border-white/60 hover:text-white"
      >
        <FaExternalLinkAlt size={20} />
      </a>
    </div>
  );
};

export default PartnerCard;
