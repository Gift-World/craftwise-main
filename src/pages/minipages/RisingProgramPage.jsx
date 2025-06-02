import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const RisingProgramPage = ({
  title,
  subtitle,
  title1,
  description,
  backgroundImage,
  features,
  tools,
  outcome,
  outcome1,
  duration,
  eligibility,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { ref } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Program Interest from ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n\n` +
        `Message: ${formData.message}`,
    );

    const gmailWebLink = `https://mail.google.com/mail/?view=cm&fs=1&to=joy@craftwiseacademy.com&su=${subject}&body=${body}`;
    const mailtoLink = `mailto:joy@craftwiseacademy.com?subject=${subject}&body=${body}`;

    // Special link for Android (opens Gmail app directly)
    const gmailIntent = `intent://compose?to=joy@craftwiseacademy.com&subject=${subject}&body=${body}#Intent;scheme=mailto;package=com.google.android.gm;end;`;

    if (/Android/i.test(navigator.userAgent)) {
      // Try opening Gmail app on Android
      window.location.href = gmailIntent;
    } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      // Try opening Gmail on iOS using the mailto link
      window.location.href = mailtoLink;
    } else {
      // Try opening Gmail Web on desktop or fallback to mailto
      const newTab = window.open(gmailWebLink, "_blank");
      setTimeout(() => {
        if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
          window.location.href = mailtoLink;
        }
      }, 1000);
    }

    setShowForm(false);
  };

 

  

 

  return (
    <div className="min-h-screen">
      <div
        className="relative h-[80vh] overflow-hidden"
       
      >
        <div
          className="absolute inset-0 min-h-screen transform overflow-hidden bg-cover bg-no-repeat transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>

        <div className="relative flex h-full items-center justify-center pt-32 text-white">
          <div
            
            className="max-w-4xl text-center"
          >
            <h1
              className="mb-4 font-montserrat text-4xl font-bold"
              
            >
              {title}
            </h1>
            <p
              className="font-montserrat text-2xl font-semibold"
              
            >
              {subtitle}
            </p>
            <a
              href="https://forms.gle/6gWr9S4gYuBA3UDJ6"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <button className="transform rounded-full bg-orange-500 px-8 py-3 font-montserrat text-[27px] font-bold text-white transition-all hover:bg-blue-700">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div
            
            className="mb-16 text-center"
          >
            <h2
              
              className="mb-4 font-montserrat text-3xl font-black text-orange-500"
            >
              {title1}
            </h2>
            <p
              
              className="mx-auto font-montserrat text-[18px] text-gray-600"
            >
              {description}
            </p>
          </div>

          <div ref={ref} className="mb-16 grid gap-12 md:grid-cols-2">
            <div
              
            >
              <h2 className="mb-8 font-montserrat text-3xl font-bold">
                What You'll Master
              </h2>
              <div className="space-y-6 font-montserrat">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    
                    className="flex items-start space-x-4 rounded-lg bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md"
                  >
                    <div className="rounded-full bg-orange-500 p-3">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-orange-500">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              
            >
              <h2 className="mb-8 font-montserrat text-3xl font-bold">
                Who Should Apply?
              </h2>
              <div className="space-y-4 font-montserrat">
                {eligibility.map((item, index) => (
                  <div
                    key={index}
                    
                    className="flex items-center space-x-3 rounded-lg bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md"
                  >
                    <FaCheck className="flex-shrink-0 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            
            className="mb-16 text-center"
          >
            <h2 className="mb-8 font-montserrat text-3xl font-bold">
              Why Choose This Programme?
            </h2>
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              {tools.map((tool, index) => {
                // Define an array of unique background gradients for each card
                const bgGradients = [
                  "bg-gradient-to-r from-orange-500 to-orange-500",
                  "bg-gradient-to-r from-orange-500 to-orange-500",
                  "bg-gradient-to-r from-orange-500 to-orange-500",
                  "bg-gradient-to-r from-orange-500 to-orange-500",
                ];
                return (
                  <div
                    key={index}
                    
                    className={`rounded-lg p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl ${bgGradients[index % bgGradients.length]} text-white`}
                  >
                    <p className="font-montserrat text-white">{tool}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div
           
            className="mb-16 text-center"
          >
            <h2 className="mb-4 font-montserrat text-3xl font-bold">
              Program Outcome
            </h2>
            <p
              
              className="mx-auto max-w-3xl text-xl text-gray-600"
            >
              {outcome1}
            </p>
          </div>
          <div className="mb-16 rounded-xl bg-gradient-to-r from-orange-500 via-orange-500 to-orange-500 p-8 text-white shadow-lg transition-shadow duration-300 hover:shadow-2xl">
            <h3 className="mb-6 text-center font-montserrat text-2xl font-bold">
              Program Duration & Format
            </h3>
            <div className="grid gap-8 md:grid-cols-2">
              <div
                className="space-y-4"
               
              >
                <div
                 
                  className="flex items-center space-x-3"
                >
                  <span className="text-2xl">📅</span>
                  <span className="font-montserrat text-lg font-semibold">
                    {duration.weeks}
                  </span>
                </div>
                <div
                 
                  className="flex items-center space-x-3"
                >
                  <span className="text-2xl">🎓</span>
                  <span className="font-montserrat text-lg">
                    {duration.format}
                  </span>
                </div>
              </div>
              <div
                className="space-y-3 font-montserrat"
                
              >
                {duration.components.map((component, index) => (
                  <div
                    key={index}
                    
                    className="flex items-start space-x-2"
                    
                  >
                    <FaCheck className="mt-1 flex-shrink-0 text-green-300" />
                    <span>{component}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            
            className="flex justify-center space-x-6 font-montserrat"
          >
            <button
              
              onClick={() => setShowForm(true)}
              className="transform rounded-full bg-orange-500 px-8 py-3 text-white transition-all hover:bg-orange-600"
            >
              Express Interest
            </button>
            <a
              href="https://forms.gle/6gWr9S4gYuBA3UDJ6"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <button className="transform rounded-full bg-blue-600 px-8 py-3 text-white transition-all hover:bg-blue-700">
                Apply Now
              </button>
            </a>
          </div>
          <p  className="mx-auto p-6 text-xl text-black">
            {outcome}
          </p>
        </div>
      </div>

      {showForm && (
        <div
          
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
        >
          <div
           
            className="w-full max-w-md rounded-lg bg-white p-8"
          >
            <h3 className="mb-4 text-2xl font-bold">Express Interest</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full rounded-md border px-3 py-2 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-orange-500"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full rounded-md border px-3 py-2 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-orange-500"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  className="w-full rounded-md border px-3 py-2 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-orange-500"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  className="w-full rounded-md border px-3 py-2 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-orange-500"
                  rows="4"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-orange-500 px-6 py-2 text-white hover:bg-orange-600"
                 
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RisingProgramPage;
