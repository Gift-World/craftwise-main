import posterImage from "../assets/rising.jpg"; // Ensure the correct path to your image

const PosterSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8">
      {/* Poster Image */}
      <img
        src={posterImage}
        alt="Masterclass Poster"
        className="w-full max-w-3xl rounded-lg shadow-lg"
      />
      
      {/* Masterclass Info Text */}
      <p className="mt-6 text-lg text-center font-montserrat text-gray-800 max-w-2xl">
        Your first 100 days in a new role set the foundation for your long-term success. But how do you navigate expectations, build credibility, and make an impact—without feeling overwhelmed? Join this expert-led, interactive Masterclass to learn more. Spots are limited! 👉 
        <a href="https://bit.ly/CraftwiseAcademyMasterClass2025" target="_blank" rel="noopener noreferrer" className="text-orange-500 font-semibold hover:underline">
          Register now
        </a>
      </p>
    </div>
  );
};

export default PosterSection;
