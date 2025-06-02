import { useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";

const Empathy = () => {
  const navigate = useNavigate();
  const article = {
    title:
      "Why Empathy Is Emerging as the Most Strategic Skill in Modern Leadership",
    author: " Harold Ang'ila",
    date: "May 16, 2025",
    subheadings: [
      "Leadership & Organizational Culture",
      "A Moment That Defines Leadership",
      "What Empathy Really Means in Business",
      "The Business Case for Empathy",
      "How to Build Empathy Into Your Leadership Practice",
      "The Future Belongs to the Empathetic",
    ],
    content: [
      `In today’s dynamic business environment—where change is constant, burnout is rising, and teams are more diverse than ever—one leadership skill is proving to be more powerful than once assumed: empathy. Far from being a “soft” or sentimental trait, empathy is now recognised as a core leadership competency. Research from institutions like Harvard Business Review and McKinsey repeatedly point to empathy as a key driver of innovation, retention, collaboration, and performance. Yet, for many managers, empathy remains one of the hardest skills to consistently apply—especially when it’s not reciprocated.`,
      `Imagine this scenario: A team leader notices a usually high-performing staff member becoming uncharacteristically quiet during meetings. She isn’t missing deadlines, but the spark is gone. He checks in privately: “Is everything okay?” To his surprise, the response is curt. Defensive. Even dismissive. “I’m fine. Can we not make this a thing?” This is the moment that defines leadership. Many would retreat, embarrassed or irritated. But a leader grounded in empathy understands: people don’t always reject your concern—they might just not be ready to receive it. Empathy is not about always being welcomed. It’s about always being available.`,

      `Empathy in the workplace is often misunderstood. It is not about agreeing with everyone, nor is it about excusing poor performance. It is about creating a culture where individuals feel seen, heard, and safe enough to engage honestly.

There are three dimensions of empathy that managers should be aware of:

1. Cognitive Empathy: Understanding another person’s perspective or mental model.
2. Emotional Empathy: Feeling what another person feels.
3. Compassionate Empathy: Not only understanding and feeling—but being moved to

It is this final layer that elevates a manager into a trusted leader.
`,

      `Numerous studies have now linked empathy to tangible business outcomes. According to a recent Catalyst study, employees with highly empathetic leaders are more innovative (61% compared to 13%) and more engaged (76% compared to 32%).

Empathy enhances:

• Psychological safety – employees feel safe to speak up without fear. 

• Team cohesion – trust and respect reduce internal politics.

• Decision-making – leaders factor in not just logic, but human realities.

• Customer service – teams that understand each other better, serve better.

Empathy, in this sense, is not just emotional—it’s economic.
`,
      `Empathy is not always convenient. Leaders may reach out only to be rebuffed. A check-in might be met with silence or sarcasm. Some employees, overwhelmed or guarded, may not respond positively to support. However, this should not discourage empathetic leadership. In many cases, initial resistance masks deeper appreciation. An employee who was not ready to talk today might approach you quietly in a week’s time with, “Thanks for noticing, I wasn’t okay.” Consistency is key. Empathy is not a one-time gesture; it is a leadership posture.

`,

      `Empathy can be cultivated. It is not the preserve of a select few. Here are five practices managers can embed into their day-to-day approach:

1. Be observant – Look beyond what is said. Pay attention to tone, posture, and participation 

2. Ask thoughtfully – Use open-ended, non-threatening questions like, “What’s been challenging this week?”

3. Listen actively – Hold back on solutions. Let the person feel heard before responding.

4. Don’t take resistance personally – Not every check-in will be welcomed. Stay steady.

5.  Be consistent – Culture is shaped by repetition. Let your team know you are always approachable.

When done authentically, these practices create a workplace environment where empathy is not an initiative but a norm.
`,
      `As we transition into a work era marked by AI integration, global teams, and a renewed focus on employee wellbeing, empathy is emerging as a key differentiator. It is what retains top talent, sustains creativity, and protects teams against disengagement. Empathy does not make leaders “soft.” It makes them strategic. It empowers them to respond to people—not just processes. And when a team feels seen, heard, and valued, they don’t just comply—they commit`,
    ],
    imageUrl: "https://i.imgur.com/dvhezPi.jpeg",
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

export default Empathy;
