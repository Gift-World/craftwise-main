
const ApproachCard = ({ title, icon }) => {
  return (
    <div
     
      className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
    >
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
};

export default ApproachCard;
