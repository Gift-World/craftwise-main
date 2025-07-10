// import React from 'react';

function Companies() {
  const partners = [
    {
      name: "Cotecna",
      logo: "/images/cotecna.png"
    },
  
    {
      name: "Spinners & Spinners",
      logo: "/images/spinners.png"
    },
    {
      name: "Emerging Leaders",
      logo: "/images/emerging.png"
    },
    {
      name: "Gas2Go",
      logo: "/images/gas2go.png"
    }
   
   

  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-left">
          <h2 className="text-3xl font-bold font-montserrat text-gray-900 sm:text-4xl mb-8">
            Companies We've Worked With:
          </h2>
        </div>
        
        <div className="mt-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner, index) => (
              <div key={index} className="col-span-1 flex justify-center items-center">
                <img
                  className="h-56  object-contain hover:opacity-75 transition-opacity duration-300"
                  src={partner.logo}
                  alt={partner.name}
                />
              </div>
            ))}
          </div>
        </div>
        <div
            className="absolute left-0 right-0 mt-6  h-1 bg-orange-500"
           
          />
      </div>
       
    </div>
  );
}

export default Companies;