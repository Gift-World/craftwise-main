import { useEffect, useRef } from 'react';
import { FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  { name: 'Harold Angila', image: '/images/harry.avif', linkedin: 'https://www.linkedin.com/in/harold-angila?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { name: 'Pete Kariuki', image: '/images/pete.avif', linkedin: 'https://www.linkedin.com/in/pete-kariuki-48788767/' },
  { name: 'Terry Kiruki', image: '/images/terry.avif', linkedin: 'https://www.linkedin.com/in/terry-kiruki-mimano-b8317141/' },
  { name: 'Joe Gachira', image: '/images/joe.avif', linkedin: 'https://www.linkedin.com/in/joseph-gachira-27429626/' },
  { name: 'Maryann Somba', image: '/images/somba.avif', linkedin: 'https://www.linkedin.com/in/maryann-somba/' },
  // { name: 'Bernard Kariuki', image: 'https://i.imgur.com/oxpubqd.png', linkedin: 'https://www.linkedin.com/in/bernard-kariuki-a1709752/' },
  { name: 'Sheila Antoinnette', image: '/images/sheila.avif', linkedin: 'https://www.linkedin.com/in/sheila-antoinette/' },
  { name: 'Ngibuini Mwaura', image: '/images/ngibuini.avif', linkedin: 'https://www.linkedin.com/in/ngibuinimwaura/' },
  { name: 'Carol Kaye', image: '/images/carol.avif', linkedin: 'https://www.linkedin.com/in/carolynekaye/' },
  { name: 'Edwin Mutoro', image: '/images/edwin.avif', linkedin: 'https://www.linkedin.com/in/edwinmutoro/?originalSubdomain=ke' },
  { name: 'Nguka Ojwang', image: '/images/nguka.avif', linkedin: 'https://www.linkedin.com/in/nguka/' },
  { name: 'Sylvia Njeri', image: '/images/sylvia.avif', linkedin: 'https://www.linkedin.com/in/sylvia-githinji/' },
  { name: 'Sam Kimera', image: '/images/sam.avif', linkedin: 'https://www.linkedin.com/in/samkimera/' },
  { name: 'Peris Wambui', image: '/images/peris.avif', linkedin: 'https://www.linkedin.com/in/peris-wambui-53547157/' },
  { name: 'Joy Wangu', image: '/images/joy.avif', linkedin: ' https://www.linkedin.com/in/wangu-joy-b39285246/' },
  { name: 'Nancy Gitonga', image: '/images/nancy.avif', linkedin: ' https://www.linkedin.com/in/nancy-w-gitonga/' },
  { name: 'George Munge', image: '/images/munge.avif', linkedin: 'https://www.linkedin.com/in/george-munge-861ab8109/' },
  { name: 'Denise Kibisu', image: '/images/denise.avif', linkedin: ' https://www.linkedin.com/in/denisekibisu/' }
];

const TeamSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mb-16 pt-6 py-16 bg-gradient-to-br from-[rgb(94,50,47)] to-[rgb(61,18,25)] text-white overflow-hidden">
      <h2 className="font-montserrat text-4xl font-bold text-center mb-2">
        Your Partners in Growth and Excellence
      </h2>
      <h3 className="font-montserrat text-2xl text-center mb-12">
        Empowering Africa's Top Talent!
      </h3>
      
      <div className="w-full overflow-hidden" ref={scrollRef}>
        <div className="flex gap-8 p-8 whitespace-nowrap">
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div
              key={index}
              className="flex-none w-[280px] p-6 bg-white/5 rounded-2xl text-center transform transition-all duration-300 hover:-translate-y-2 hover:bg-[rgb(73,37,47)]/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-[200px] h-[200px] mx-auto mb-4 rounded-full overflow-hidden border-4 border-[rgb(71,34,46)]/10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {member.name}
              </h3>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex justify-center items-center mt-2"
              >
                <FaLinkedin size={30} className="hover:text-blue-400 transition duration-300" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
