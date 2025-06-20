import { useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";

const HardTruths = () => {
  const navigate = useNavigate();
  const article = {
    title:
      "The 5 Hard Truths Every First-Time Manager Needs to Hear",
    author: "George Munge",
    date: "June 20, 2025",
    subheadings: [
      "1. Your Technical Excellence Will No Longer Be Enough",
      "2. Being Liked Can No Longer Be Your Leadership Strategy",
      '3. You Will Feel Lonely—And That’s Normal',
      "4. Clear Communication is Your Greatest Asset—Not Authority",
      "5. You Will Not Be Good at This Right Away",
      "Where Do You Begin?",
    ],
    content: [
      `Transitioning into management for the first time is a career milestone often celebrated—but beneath the congratulatory messages and title upgrade lies a reality that many professionals are unprepared for. Leadership is not just about overseeing others; it's about transformation—of self, of systems, and of how success is measured.
      
      At Craftwise Academy, we believe that grooming emerging managers requires honesty, context, and a commitment to long-term impact. So, here are five hard truths no one tells you about becoming a first-time manager—and why preparing for them is your greatest professional investment.`,

      `For most professionals in Kenya and across Africa, promotions into management are based on technical performance. The accountant who delivers accurate reports, the engineer who designs reliably, or the teacher whose students perform well often gets tapped for leadership.

          But management is a different arena. Your ability to lead others is not a direct extension of your personal excellence. You now have to influence results through people, not just through your own effort. This shift demands a completely different skill set—communication, delegation, conflict resolution, coaching—skills that aren’t taught in most academic or professional spaces.


      Hard truth: You must unlearn the habit of doing everything yourself and learn how to build capability in others. If you don't, you'll burn out—or worse, become a bottleneck.`,

      `In African work culture, where respect is deeply tied to personal relationships, many new managers walk a tightrope: wanting to assert authority without damaging the friendships they’ve built with colleagues.

          Unfortunately, this often leads to passive leadership: avoiding hard conversations, tolerating mediocrity, and overcompensating to be liked.

      Hard truth: You don’t need to be feared, but you do need to be respected—and that requires courage. Courage to make unpopular decisions. Courage to hold people accountable. Courage to lead even when it’s uncomfortable.

      Respect is earned through consistency, clarity, and fairness—not through appeasement.
     `,
   
      `One of the most jarring realities of becoming a manager is the emotional distance that emerges. Conversations change. Jokes are filtered. Your presence changes dynamics in a room.

          This is especially profound in smaller organizations and startups, where managers are suddenly tasked with evaluating or supervising people they were peers with just a month ago.

      Hard truth: Leadership comes with necessary distance. But loneliness doesn't mean isolation. The key is to build new support systems—mentorship, peer networks, and safe learning spaces where you can process this new chapter without compromising your role.

      At Craftwise Academy, we’ve seen the power of community in the Emerging Managers Program. Participants find not only skills but also a circle of leaders navigating similar paths.
     `,

      `In many Kenyan workplaces, and indeed across Africa, there is still a heavy emphasis on hierarchical leadership. Titles carry weight. Instructions are obeyed. But as our workspaces evolve—with Gen Z entering the workforce, remote collaboration becoming more common, and values shifting—command-and-control no longer works.

          Hard truth: You must develop the ability to communicate clearly, inspire intentionally, and listen actively. Authority opens the door—but communication builds the room.

      Great managers are not just taskmasters. They are translators—of vision, of expectation, of feedback, and of values.
      `,

      `Here’s the most humbling truth of all: becoming a manager doesn’t instantly make you a leader. You will make mistakes. You’ll overstep. You’ll under-communicate. You’ll micromanage. You’ll cues. You’ll doubt yourself.

          But that’s normal.

      Too many African professionals are thrown into management without preparation, then judged harshly when they fumble. We must normalize learning leadership, not just assuming it.

      Hard truth: Great managers are not born—they are trained. You don’t need to have it all figured out. But you do need to commit to the growth journey.
      `,

      `This is why we built the Emerging Managers Program at Craftwise Academy.

          We saw a gap in the professional landscape—a gap where talent was being promoted but not prepared. Where new managers were expected to lead without training. Where leadership was reduced to titles instead of transformation.

      Our 8-week hybrid program is designed for professionals who are stepping into management roles and need structured, African-contextualized, practical support.

      Whether you’re supervising a small team, leading a department, or preparing for your first leadership role, the program equips you to:
      
      • Lead with clarity, not confusion. 
      • Communicate with confidence, not fear.
      • Build trust, not tension.
      • Deliver results through people, not pressure.

      You’ll learn through real-life scenarios, live mentorship, practical group sessions, and honest feedback.
      
      Because if you're going to lead Africa's future workforce, you must be built with wisdom, not just ambition.
      
      Leadership is not a title. It is a responsibility—and a skill that can be cultivated.
      
      If you’re a new or aspiring manager, don’t wait until you're overwhelmed. Don’t wait until your team checks out. Don’t wait until burnout knocks on your door.`,
    ],
    imageUrl: "https://i.imgur.com/PyhSCak.jpeg",
    organization: "Craftwise Academy",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-4xl">
        <button
          
          onClick={() => navigate("/blogs")}
          className="group mb-6 flex items-center space-x-2 px-6 py-3 text-indigo-600 transition-colors duration-300 hover:text-indigo-800"
        >
          <svg
            className="h-5 w-5 transform transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-montserrat text-orange-600">
            Back to Articles
          </span>
        </button>

        <article
          
          className="overflow-hidden rounded-lg bg-white shadow-lg"
        >
          <div className="p-6">
            <div
             
              className="space-y-6"
            >
              <div className="flex items-center space-x-4 text-gray-600">
                <span className="font-medium">{article.organization}</span>
              </div>

              <h1 className="text-4xl font-bold text-gray-800">
                {article.title}
              </h1>

              <div className="flex items-center text-gray-600">
                <span>{article.author}</span>
                <span className="mx-2">•</span>
                <span>{article.date}</span>
              </div>

              <img
               
                src={article.imageUrl}
                alt={article.title}
                className="mb-8 h-[400px] w-full rounded-lg object-cover shadow-lg"
              />

              <div className="prose lg:prose-xl font-montserrat leading-relaxed text-gray-700">
                <p>{article.content[0]}</p>

                {article.subheadings.map((subheading, index) => (
                  <div key={index} className="mt-8">
                    <h2 className="mt-4 font-montserrat font-bold text-orange-500">
                      {subheading}
                    </h2>
                    <p className="mt-4 whitespace-pre-line font-montserrat">
                      {article.content[index + 1]}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 pt-8">
                <div className="flex items-center space-x-2">
                  {/* <span className="px-3 py-1 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300 cursor-pointer">
                    #career
                  </span>
                  <span className="px-3 py-1 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300 cursor-pointer">
                    #leadership
                  </span> */}
                  <button
                    
                    onClick={() => navigate("/blogs")}
                    className="group mb-6 flex items-center space-x-2 px-6 py-3 text-indigo-600 transition-colors duration-300 hover:text-indigo-800"
                  >
                    <svg
                      className="h-5 w-5 transform transition-transform group-hover:-translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    <span className="text-orange-600">Back to Articles</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default HardTruths;
