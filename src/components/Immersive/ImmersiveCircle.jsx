
const ImmersiveCircle = ({ title, description, icon }) => {
  return (
    <div
     
      className="relative"
    >
      <div className="relative">
        {/* Dotted circle animation */}
        <div
          
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(from 0deg, transparent 0%, rgba(251, 146, 60, 0.2) 20%, transparent 40%)`,
          }}
        />

        {/* Main circle */}
        <div className="relative flex aspect-square flex-col items-center justify-center rounded-full border-2 border-orange-500 bg-[#4A1D1F] p-4 text-center lg:p-8">
          <div className="mb-2 text-2xl text-white md:text-6xl">{icon}</div>
          <h3 className="mb-2 font-bold text-white">{title}</h3>
          <p className="text-sm text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImmersiveCircle;
