import { useInView } from "react-intersection-observer";
import PartnerCard from "./PartnerCard";

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
    },
  {
    name: "Inuka",
    logo: "/images/inuka2.png",
    website: "https://inukaleadership.net/",
    delay: 0.2,
  },
  {
    name: "Career Kickstart KE",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQE-x0yP7DJVag/company-logo_200_200/company-logo_200_200/0/1630560839614?e=2147483647&v=beta&t=cL61HW_DLGGeKt3W0ACUCXSm9u_p8h-O5rCq0oKZTDs",
    website: "https://careerkickstart.co.ke/",
    delay: 0.4,
  },
  {
    name: "Ultra Events",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQV7FhM9Tr70m88wqKnvSos1JkeYoafZdYMg&s",
    website: "https://www.ultraevents.org/",
    delay: 0.6,
  },
];

const PartnersSection = () => {
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      id="partners"
      className="min-h-screen bg-gradient-to-b from-[#2A1011] to-orange-900 py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          
          className="text-center"
        >
          <h2
            className="mb-16 font-montserrat text-5xl font-bold text-orange-500"
            
          >
           CLIENTS & PARTNERS
          </h2>

          {/* <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {partners.map((partner, index) => (
              <PartnerCard key={index} {...partner} />
            ))}
          </div> */}
           <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {partners.map((partner, index) => (
              <PartnerCard 
                key={index} 
                name={partner.name}
                logo={partner.logo}
                website={partner.website} // Only passed if exists
              />
            ))}
          </div>

          <div
            className="absolute left-0 right-0 mt-12 h-1 bg-orange-500"
           
          />
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
