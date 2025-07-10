import { useState, useEffect } from 'react';
import { FaCheck } from "react-icons/fa";
import Footer from '../../Footer/Footer';

const EventPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: "🎯",
      title: "Live Leadership Simulations",
      description: "Practice managing high-stakes scenarios that reflect real workplace challenges."
    },
    {
      icon: "🤝",
      title: "Peer Exchange in Small Groups",
      description: "Engage with fellow leaders to share perspectives and refine approaches."
    },
    {
      icon: "📊",
      title: "Expert-Led Frameworks",
      description: "Gain actionable tools and evidence-based insights from Craftwise Academy faculty."
    }
  ];

  const faculty = [
  {
    name: "Ngibuini Mwaura",
    title: "Head of Learning & Design, Craftwise Academy",
    description: "An accomplished leadership strategist specializing in people-first cultures that deliver business growth.",
    image: "/images/ngibuini.png" // Add image path
  },
  {
    name: "Esther Mucheru",
    title: "Head of HRD, Spinners & Spinners Ltd.",
    description: "Bringing firsthand insights on how transformational leadership is reshaping team dynamics and organizational outcomes.",
    image: "/images/Esther.png"
    // guest :"Guest Contributer" // Add image path
  },
  {
    name: "Sam Kimera",
    title: "Senior Facilitator, Craftwise Academy",
    description: "A seasoned executive coach known for translating complex leadership concepts into practical, impactful action.",
    image: "/images/sam.png" 
    // Add image path
  }
  
];
  const benefits = [
    "Inspire and Retain Talent: Build high-performing, resilient teams with lower attrition rates.",
    "Lead Through Complexity: Navigate high-pressure situations with confidence and emotional intelligence.",
    "Deliver Measurable Impact: Align leadership practices with organizational strategy for sustainable results."
  ];

  return (
    <div className="min-h-screen bg-gray-50">
          
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary text-white">
        
        <div className="absolute inset-0 bg-gray-100 bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div className="relative">
                <img
                  src="/images/eventbanner2.jpeg"
                  alt="Executive Leadership Event"
                  className="w-full h-full object-cover rounded-2xl hover-scale"
                />
                <div className="absolute inset-0  to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                
                </div>
                 
              </div>
              
                <div className="bg-white/10  mt-2  backdrop-blur-md rounded-lg p-4 border border-white/20">
                    <p className="text-sm text-gray-800 p-1 font-montserrat font-medium">90-minute virtual masterclass</p>
                  </div>
            </div>
            
            <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
                <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://zoom.us/meeting/register/GC_NRs1wSCakAMW5EFt7Yg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-craftwise-orange justify-center px-8 py-4 bg-accent-500 text-white font-semibold rounded-lg hover:bg-gray-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Reserve My Seat
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <div className="flex items-center space-x-2 text-gray-200">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  <span className="text-craftwise-dark-orange text-sm">Limited Spots!!</span>
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-montserrat text-gray-900 font-bold leading-tight">
                  People First,<br/>
                  <span className="text-accent-500 font-montserrat text-gray-900">Performance Always is:</span>
                </h1>
                <p className="text-xl text-gray-700 font-montserrat leading-relaxed">
                  a high-level executive session by Craftwise Academy for leaders determined to unlock this potential. This isn’t a traditional webinar. It’s an experiential leadership masterclass crafted to help decision-makers reimagine how managers drive culture, engagement, and measurable business outcomes.

This 90 minute virtual event brings together a curated group of senior leaders and HR executives for a practical, immersive learning experience.
                </p>
              </div>
              
             
            </div>
            
           
          </div>
          <div
            className="absolute left-0 right-0 mt-12 h-1 bg-orange-500"
           
          />
        </div>
        
      </section>
      <div className={`text-center mt-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">Masterclass Overview</h2>
            <p className="text-xl text-gray-600 font-montserrat max-w-4xl mx-auto">
             In a world where talent defines competitive advantage, the role of managers has never been more pivotal or more challenging. Organizations are discovering that their greatest performance gains come not from strategy alone, but from equipping managers to lead with clarity, empathy, and precision.
            </p>
          </div>

      {/* Quick Summary Section */}
    
      {/* Program Overview */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <div className="space-y-6 mt-32 font-montserrat">
  <h2 className="mb-8  font-montserrat text-3xl font-bold">
    Why Attend?
  </h2>
  <p className="text-gray-600 font-montserrat">
    Organizations that invest in their managers don't just retain talent, they outperform. 
    This session will empower you and your teams to:
  </p>
  <div className="space-y-6">
    {benefits.map((benefit, index) => (
      <div
        key={index}
        className="flex items-start space-x-4 rounded-lg bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md"
      >
        <div className="rounded-full bg-orange-500 p-3">
          <svg 
            className="w-5 h-5 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>
        <div>
          <p className="text-gray-600 font-montserrat">{benefit}</p>
        </div>
      </div>
    ))}
  </div>
</div>
            </div>
            
           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className={`text-center mb-7 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
    <h2 className=" text-3xl font-montserrat font-bold">Who Should Attend?</h2>
    <p className="text-gray-600  font-montserrat mt-2">This program is designed for:</p>
  </div>

  <div className="space-y-4 font-montserrat">
    {["C-Suite and Senior HR Leaders", "Business Owners and Directors", "Senior Managers preparing for executive leadership"].map((audience, index) => (
      <div
        key={index}
        className={`flex items-center space-x-3 rounded-lg bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md ${
          isVisible ? 'animate-slide-up' : 'opacity-0'
        }`}
        style={{ animationDelay: `${index * 150}ms` }}
      >
        <FaCheck className="flex-shrink-0 text-green-500" />
        <span className="text-gray-700">{audience}</span>
      </div>
    ))}
  </div>
</div>
          </div>
        </div>
      </section>

      {/* What You'll Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">What You'll Experience</h2>
            <p className="text-xl text-gray-600">This executive program integrates:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg card-shadow-hover hover-scale cursor-pointer transition-all duration-300 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-center space-y-4">
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold font-montserrat text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 font-montserrat leading-relaxed">{feature.description}</p>
                </div>
                {hoveredCard === index && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-600/5 rounded-2xl"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold font-montserrat text-gray-900 mb-4">Faculty Leadership</h2>
            {/* <p className="text-xl font-montserrat text-gray-600">Learn from industry experts and thought leaders.</p> */}
          </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {faculty.map((member, index) => (
    <div
      key={index}
      className={`bg-white rounded-2xl p-8 shadow-lg card-shadow-hover hover-scale transition-all duration-300 ${
        isVisible ? 'animate-slide-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="text-center space-y-4">
        {/* Image container - shows image if available, falls back to initials */}
        <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-craftwise-orange">
          {member.image ? (
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
              <span className="text-3xl font-montserrat font-bold text-white">
                {member.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          )}
        </div>
         <p className="text-primary-600 text-craftwise-orange font-montserrat font-medium">{member.guest}</p>
        <h3 className="text-xl font-montserrat font-bold text-gray-900 mt-4">{member.name}</h3>
        <p className="text-primary-600 text-craftwise-orange font-montserrat font-medium">{member.title}</p>
       
        <p className="text-gray-600 font-montserrat leading-relaxed">{member.description}</p>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>
        <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-montserrat text-gray-900 font-bold mb-4">Transform Your Managers Into Culture & Performance Multipliers</h2>
              <p className="text-lg text-gray-600 font-montserrat leading-relaxed">
               Equip your managers with the skills to inspire trust, retain talent, and deliver measurable business results. This exclusive Craftwise Academy session combines live simulations, peer dialogue, and expert insights tailored for today’s complex workplace challenges. Designed for senior leaders, managers and HR executives, it offers practical frameworks to transform managers into culture and performance multipliers.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Who Should Attend */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who Should Attend?</h2>
            <p className="text-xl text-gray-600">This program is designed for:</p>
          </div>

          <div className="grid  grid-cols-1 md:grid-cols-3 gap-6">
            {["C-Suite and Senior HR Leaders", "Business Owners and Directors", "Senior Managers preparing for executive leadership"].map((audience, index) => (
              <div
                key={index}
                className={`bg-craftwise-orange rounded-2xl p-6 text-center border border-primary-100 hover:border-primary-200 transition-all duration-300 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 bg-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{audience}</h3>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h2 className="text-4xl text-gray-900 font-montserrat font-bold">Reserve Your Spot!</h2>
              <p className="text-[18px] font-montserrat text-gray-700">
                Participation is strictly limited to to ensure an intimate, high-value learning experience.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://zoom.us/meeting/register/GC_NRs1wSCakAMW5EFt7Yg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex font-montserrat text-black bg-craftwise-orange items-center justify-center px-12 py-4 bg-accent-500 font-bold text-lg rounded-lg hover:bg-accent-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl animate-pulse-slow"
              >
                Reserve My Seat Now
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <div className="flex items-center space-x-2 text-gray-200">
                <span className="w-3 h-3 bg-red-500 rounded-full animate-bounce"></span>
                <span className=" text-craftwise-orange  font-montserrat font-medium">Seats filling fast!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2A1011] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-montserrat text-craftwise-orange font-bold text-gradient">The Craftwise Advantage</h3>
            <p className="text-gray-100 font-montserrat max-w-3xl mx-auto leading-relaxed">
              At Craftwise Academy, we specialize in crafting transformational learning experiences that combine 
              rigorous frameworks, African context relevance, and high-impact simulations. We don't just train managers, 
              we empower them to lead change, inspire loyalty, and drive results.
            </p>
          </div>
        </div>
      </footer>
      <Footer />
    </div>
  );
};

export default EventPage;