
const HeroRising = () => {
  return (
    <div
      className="flex flex-col items-center px-4 pt-6 md:flex-row md:px-10 md:pt-10 lg:px-16"
     
    >
      <div className="mb-6 flex justify-center md:mb-0 md:w-1/2 md:justify-start">
        <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
          <img
            src="/images/popup.webp"
            alt="Young professionals smiling"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>

      <div className="text-center md:w-1/2 md:text-left">
        <h1
          className="mb-8 font-montserrat text-4xl font-bold text-craftwise-orange md:text-5xl lg:text-6xl"
          
        >
          RISING PROFESSIONALS PROGRAMME
        </h1>

        <div className="mb-6 flex flex-col justify-center gap-4 md:flex-row md:justify-start">
          <div
            className="rounded-full bg-craftwise-maroon px-6 py-2 text-center font-semibold text-white"
            
          >
            6 WEEKS
          </div>

          <div
            className="rounded-full bg-craftwise-orange px-6 py-2 text-center font-semibold text-white"
            
          >
            HYBRID LEARNING
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRising;
