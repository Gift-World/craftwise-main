import { useNavigate, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const links = {
  "Quick Links": [
    {
      name: "Facebook",
      url: "https://web.facebook.com/profile.php?id=61571583696663",
      icon: <FaFacebook />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/craftwise-academyke/?viewAsMember=true",
      icon: <FaLinkedin />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/craftwiseke?igsh=MWxyZmJsemFzeGRkdg==",
      icon: <FaInstagram />,
    },
  ],
  Programs: [
    { name: "Rising Professionals", route: "/rising" },
    { name: "New Managers", route: "/managers" },
    { name: "Emerging Leaders", route: "/emerging" },
    { name: "Legacy Leaders", route: "/legacy" },
  ],
  Company: [
    { name: "About Us", sectionId: "about" },
    { name: "How we work", sectionId: "what-we-do" },
    { name: "Crafters Assembly", sectionId: "crafters" },
    { name: "Partners", sectionId: "partners" },
  ],
  "Contact Info": [
    { name: "info@craftwiseacademy.com", sectionId: "email" },
    { name: "+254 715 208 322", sectionId: "phone" },
    { name: "Nairobi , Kenya", sectionId: "address-2" },
  ],
};

const FooterLinks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e, route, sectionId) => {
    e.preventDefault();

    if (route) {
      navigate(route);
    } else if (sectionId) {
      if (location.pathname === "/") {
        // Scroll directly if already on Home
        scrollToSection(sectionId);
      } else {
        // Navigate to Home first, then scroll
        navigate("/", { state: { scrollTo: sectionId } });
      }
    }
  };

  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  return (
    <div className="grid w-full grid-cols-1 gap-8 text-center sm:grid-cols-2 md:gap-12 lg:grid-cols-4">
      {Object.entries(links).map(([category, items]) => (
        <div
          key={category}
         
          className="flex flex-col items-center"
        >
          <h3 className="mb-4 font-montserrat text-2xl font-semibold text-orange-500">
            {category}
          </h3>
          <ul className="space-y-2">
            {items.map((item ) => (
              <li
                key={item.name}
                
              >
                <a
                  href={item.url ? item.url : `#${item.sectionId}`}
                  onClick={(e) =>
                    item.route
                      ? handleClick(e, item.route)
                      : item.sectionId && handleClick(e, null, item.sectionId)
                  }
                  target={item.url ? "_blank" : "_self"}
                  rel={item.url ? "noopener noreferrer" : ""}
                  className={
                    category === "Quick Links"
                      ? "flex h-10 w-10 items-center justify-center rounded-full border border-[#9c6717] font-montserrat text-white transition duration-500 hover:bg-[#ffe920]"
                      : "text-gray-300 transition-colors duration-200 hover:text-orange-400"
                  }
                >
                  {category === "Quick Links" ? item.icon : item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
