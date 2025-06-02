
const CraftersAssemblyCard = ({ icon, title, description }) => {
  return (
    <div
      
      className="flex items-start space-x-4 rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
    >
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-500">
        {icon}
      </div>
      <div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default CraftersAssemblyCard;
