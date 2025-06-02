import BlogSection from "./BlogSection";
import Footer from "../Footer/Footer";
import Brochures from "../Brochure/Brochures";
import { Helmet } from "react-helmet-async";


const articles = [
  {
    id: 1,
    title:
      "Leading with Emotional Intelligence: The Secret to Building High-Performing Teams",
    author: "Edwin Mutoro",
    date: "May 29, 2025",
    excerpt:
      "Leadership today is no longer just about KPIs and strategies. It's about people.In a dynamic workplace where diversity of thought, background, and...",
    content: `ILeadership today is no longer just about KPIs and strategies. It's about people.
In a dynamic workplace where diversity of thought, background, and expectations is the norm,
one skill continues to stand out as a critical differentiator between mediocre and exceptional
leadership — Emotional Intelligence (EQ). EQ isn’t just a "nice-to-have" anymore; it's a
leadership imperative.

`,
    imageUrl: "/images/intelligence.avif",
    organization: "Craftwise Academy",
    // followers: "18 followers",
    path: "/Leading-with-Emotional-Intelligence",
  },
  {
    id: 2,
    title:
      "Why Empathy Is Emerging as the Most Strategic Skill in Modern Leadership",
    author: "Harold Ang'ila",
    date: "May 16, 2025",
    excerpt:
      "In today’s dynamic business environment—where change is constant, burnout is rising, and teams are more diverse than ever—one leadership skill is proving to be more powerful than once assumed: empathy.",
    content: `In today’s dynamic business environment—where change is constant, burnout is rising, and
teams are more diverse than ever—one leadership skill is proving to be more powerful than
once assumed: empathy.
Far from being a “soft” or sentimental trait, empathy is now recognised as a core leadership
competency. Research from institutions like Harvard Business Review and McKinsey
repeatedly point to empathy as a key driver of innovation, retention, collaboration, and
performance. Yet, for many managers, empathy remains one of the hardest skills to
consistently apply—especially when it’s not reciprocated.

`,
    imageUrl: "https://i.imgur.com/dvhezPi.jpeg",
    organization: "Craftwise Academy",
    // followers: "18 followers",
    path: "/Empathy-as-the-most-Strategic-Skill",
  },
  {
    id: 3,
    title:
      "Bridging the Managerial Gap: How African Companies Can Build Visionary Leaders from Within",
    author: "George Munge",
    date: "April 30, 2025",
    excerpt:
      "Across Africa, industries are evolving at breakneck speed. Yet one persistent bottleneck threatens to slow progress: the shortage of effective middle managers. In sectors ranging from finance to technology, agriculture to energy, the managerial gap is a reality many organizations can no longer i...",
    content: `Across Africa, industries are evolving at breakneck speed. Yet one persistent bottleneck
threatens to slow progress: the shortage of effective middle managers. In sectors ranging from
finance to technology, agriculture to energy, the "managerial gap" is a reality many organizations
can no longer ignore.
Without strong middle management, strategies fail at the execution level, employee
engagement suffers, and innovation stalls. The solution lies not in external recruitment alone,
but in intentionally building leadership capacity from within.
At Craftwise Academy, we believe that the answer is clear: targeted, Afrocentric programs like
the Emerging Managers Program that blend experiential learning with leadership principles
are crucial to shaping Africa's next generation of visionary lead

`,
    imageUrl: "https://i.imgur.com/aHIguOT.jpeg",
    organization: "Craftwise Academy",
    // followers: "18 followers",
    path: "/Bridging-the-Managerial-Gap",
  },

  {
    id: 4,
    title:
      "Why Experiential Learning Is the Future of Corporate Training in Africa",
    author: "George Munge",
    date: "April 23, 2025",
    excerpt:
      "In today's rapidly evolving workplace, the gap between knowledge and performance has become increasingly evident.. While many African professionals hold technical qualifications and formal degrees,...",
    content: `In today's rapidly evolving workplace, the gap between knowledge and performance has
become increasingly evident. While many African professionals hold technical qualifications and
formal degrees, they often struggle to translate this knowledge into impactful leadership and
problem-solving in the workplace. This disconnect calls for a shift from traditional lecture-based
training to more dynamic, engaging, and practical approaches. One solution stands out:
experiential learning.

`,
    imageUrl: "https://i.imgur.com/30Yy8SU.jpeg",
    organization: "Craftwise Academy",
    // followers: "18 followers",
    path: "/Experiential-Learning-Future-of-Corporate-Training",
  },

  {
    id: 5,
    title:
      "Training & Development in the 21st Century: The Heartbeat of Effective Teams",
    author: "Edwin Mutoro Situma",
    date: "April 14, 2025",
    excerpt:
      "In today’s fast-evolving workplace, characterized by global shifts, emerging technologies, and a rapidly diversifying workforce, training and development (T&D) is no longer a...",
    content: `In today’s fast-evolving workplace, characterized by global shifts, emerging technologies, and a 
rapidly diversifying workforce, training and development (T&D) is no longer a luxury—it’s a 
lifeline. But not just any training. To be effective in the 21st century, T&D must be strategic, 
inclusive, human-centered, and deeply integrated with organizational goals. When done right, it 
doesn't just upgrade skills—it transforms teams.

`,
    imageUrl: "https://i.imgur.com/5CwT9hL.jpeg",
    organization: "Craftwise Academy",
    // followers: "18 followers",
    path: "/Training&Development-in-the-21st-Century",
  },

  {
    id: 6,
    title: "Welcome to the Jungle: The Reality of the Modern Workplace",
    author: "Edwin Mutoro Situma",
    date: "March 14, 2025",
    excerpt:
      "The Gen Z workforce is redefining the traditional workplace, bringing with them new expectations, digital fluency, and a demand for purpose-driven ...",
    content: ` Welcome to the Jungle: The Reality of the Modern Workplace
The Gen Z workforce is redefining the traditional workplace, bringing with them new expectations,
digital fluency, and a demand for purpose-driven work. Unlike previous generations, Gen Z values
flexibility, mental well-being, and opportunities for continuous growth over rigid structures and
conventional career ladders. With the rise of digital transformation, remote work, and the gig
economy, today’s workplace is vastly different from what previous generations experienced.
However, organizations often struggle to integrate and retain this dynamic demographic due to
outdated leadership approaches, misaligned training strategies, and a lack of psychological insight
into what truly drives them. This is where organizational psychology becomes a game-changer—
helping companies design environments that foster engagement, motivation, and long-term
success. How can businesses leverage training and development to bridge the gap between Gen
Z’s aspirations and organizational goals? Let’s explore.
The Gen Z Workforce – Misunderstood or Mismanaged?
Many organizations struggle to integrate Gen Z talent effectively. The stereotypes are loud—
impatient, entitled, glued to their screens, and constantly job-hopping. But beneath these labels lies
a generation that values purpose over paycheck, flexibility over micromanagement, and impact
over bureaucracy.
The challenge? Companies often try to fit Gen Z into outdated molds instead of leveraging their
strengths: tech-savviness, creativity, and the ability to question the status quo. This disconnect
creates friction between traditional leadership and the evolving expectations of today’s workforce.
Bridging the Gap: Training & Development as the Game-Changer
To truly unlock Gen Z’s potential, organizations must rethink their approach to training and
development. Here’s how:
1. Ditch the One-Size-Fits-All Model
Long, monotonous onboarding sessions? Death by PowerPoint? Forget it. Gen Z learns through
interactive, engaging, and personalized experiences. Companies that integrate gamification,
microlearning, and mentorship programs see better retention and engagement rates.
2. Create a Learning Culture, Not a Lecture Hall
Training shouldn’t feel like a chore. Organizations that build continuous learning into their DNA—
through peer mentorship, leadership coaching, and real-time feedback—are more likely to attract
and retain Gen Z talent. Learning should be on-demand, digital-first, and deeply embedded in the
workflow.
3. Purpose-Driven Leadership: Speak Their Language

Gen Z professionals are purpose-driven. They want to work for companies that stand for something
bigger than profit. Leadership training should include emotional intelligence, cultural competence,
and adaptability—skills crucial for managing a diverse, young workforce.

How do GenZ then thrive in the WorkPlace
Upskilling: Your Survival Kit in the Jungle
The workplace is evolving, and the only way to stay ahead is by continuously learning. Training
and development aren’t just corporate buzzwords—they’re your weapons in this jungle. Whether
it’s through mentorship, e-learning platforms, leadership programs, or skill-based workshops,
investing in yourself gives you the edge to stand out. If your organization isn’t offering upskilling
opportunities, take charge—find online courses, seek out industry events, and build your own
knowledge base.
Soft Skills are the New Hard Skills
Gone are the days when technical skills alone could make or break your career. Today, emotional
intelligence, adaptability, leadership, and communication are just as valuable as your degree. In a
world where automation and AI are taking over routine tasks, what will set you apart is your ability
to lead, collaborate, and think critically. Organizations that recognize this shift invest heavily in
soft skills training—and those that don’t risk falling behind.
Feedback Culture: The Game-Changer for Career Growth

Gen Z thrives on feedback. We grew up with instant responses, from social media likes to real-
time comments. Yet, many organizations still operate on outdated annual review cycles. If your

workplace isn’t giving you regular feedback, ask for it. Create a culture of continuous learning by
seeking mentorship, requesting project reviews, and using every piece of constructive criticism to
level up.
The Role of Organizational Psychology in the Future Workplace
So, how does organizational psychology fit into all of this? Simple—it's the bridge between what
Gen Z wants and what organizations need to remain competitive.
1. Understanding Workplace Motivation
Organizational psychology helps companies understand what truly drives Gen Z employees.
Traditional reward systems (like tenure-based promotions) are losing relevance, and businesses
need psychological insights to create motivation strategies that align with Gen Z’s values—
flexibility, purpose, and meaningful work.

2. Reshaping Leadership Approaches
Hierarchical leadership is fading. Organizational psychology emphasizes adaptive leadership—
leaders who mentor, coach, and empower employees rather than dictate. By integrating
psychological principles, companies can foster leadership styles that resonate with Gen Z’s need
for autonomy and collaboration.
3. Mental Health and Well-being in the Workplace
Gen Z is vocal about mental health, and rightly so. Organizational psychology provides
frameworks to create mentally healthy workplaces, from stress management programs to inclusive
policies that prioritize employee well-being.
4. Creating a Culture of Belonging
A major reason for Gen Z’s job-hopping tendencies is a lack of belonging. Organizational
psychology emphasizes psychological safety—a workplace culture where employees feel valued,
heard, and encouraged to express themselves without fear of judgment.

HR & Learning Managers: The Call to Action
The future of work is shifting, and companies must evolve their talent strategies. Organizations
that invest in leadership development tailored to Gen Z will build stronger, more resilient teams.
HR leaders must:
• Reimagine training to be engaging and immersive.
• Foster an inclusive culture that values Gen Z’s contributions.
• Develop leaders who can coach, not just command.
Gen Z isn’t the problem—outdated leadership models are. The real challenge is creating a
workplace that empowers, nurtures, and equips this generation to lead the future.
Final Thoughts: Own Your Career Journey
The workplace is shifting, and Gen Z is at the forefront of that change. While organizations must
adapt, individuals also have a role to play in shaping their careers. Whether it’s upskilling,
networking, seeking mentorship, or leveraging workplace psychology, the key to thriving is taking
ownership of your journey.
Welcome to the jungle—now go and conquer it. 🚀
Are we ready to stop complaining about Gen Z and start building the next generation of
leaders?`,
    imageUrl: "https://i.imgur.com/LSflXJU.jpeg",
    organization: "Craftwise Academy",
    // followers: "18 followers",
    path: "/genz",
  },
  {
    id: 7,
    title: "The Myth of Perfect Strategy: Why Execution Matters More!",
    author:
      "PERIS WAMBUI  |  Head of Strategy @ HFC Kenya | Driving Business Growth with Resource Mobilization",
    date: "March 6, 2025",
    excerpt:
      "Let’s be honest, most of us love a good strategy session. It’s like planning a dream vacation: mapping out every detail, imagining how smooth everything will go, picturing the perfect outcome. And then reality hits 😬 you miss your flight, lose your luggage, and ...",
    content: ` Let’s be honest, most of us love a good strategy session. It’s like planning a dream vacation: mapping out every detail, imagining how smooth everything will go, picturing the perfect outcome. And then reality hits 😬 you miss your flight, lose your luggage, and end up eating questionable airport sandwiches. That’s what happens when execution doesn’t match strategy.

The Flawed Obsession with the ‘Perfect’ Strategy

Some companies treat strategy like an ancient scroll 📜 sacred, untouchable, and the key to all wisdom. They spend months (or years!) refining it, convinced they’ve cracked the code. But here’s the catch 🤔 no matter how brilliant the plan, if you don’t execute it well, it’s as useful as a GPS with no signal. Markets change, competitors aren’t waiting, and customers? They have the attention span of a goldfish 🐠.Perfection is a fantasy.

Execution: The Real MVP 🏆

Execution is where the magic happens ✨ A mediocre plan executed with energy beats a flawless plan gathering dust. Look at Nokia and Apple 📱 Nokia had the tech and the talent but fumbled the execution. Apple? They nailed it with a relentless focus on making things work in real life, not just in boardrooms.

Why Execution Goes Off the Rails 🚧

Nobody Got the Memo 📩 If your team doesn’t understand the plan, good luck getting it done.
Leadership in a Bubble - If leaders are too busy strategizing and not dealing with reality, execution falls apart.
Change? No Thanks 🙅♂ Some companies resist change like a cat resists a bath 🐱💦 Adaptability is key!
Set It and Forget It Syndrome  Execution isn’t a slow cooker 🍲 you have to check, tweak, and adjust constantly.

Finding the Sweet Spot 

Winning isn’t about having the fanciest plan. It’s about making things happen. Here’s how:

Keep strategy simple and flexible (like a good stretch before a workout 🏋♀) 
Hire leaders who know how to bridge the gap between planning and doing 👥 
Make sure your team actually knows what’s expected and give them the power to act 💡 
Track progress and be ready to pivot when needed (because nothing ever goes exactly to plan)

At the end of the day, strategy is just a fancy word for “what we plan to do.” Execution is actually doing it. So, instead of aiming for the perfect plan, focus on making things happen 🚀 and don’t forget to enjoy the ride! 🎢

What’s your take on execution vs. strategy? Have you seen a great strategy fail because of poor execution—or an average one succeed through sheer determination? Share your thoughts in the comments! 👇

#StrategyExecution #BusinessGrowth #Leadership #ExecutionMatters #StrategyVsExecution #SuccessMindset #BusinessTips #GetItDone #Innovation #Entrepreneurship`,
    imageUrl: "https://i.imgur.com/fUkk0mV.jpeg",
    organization: "Craftwise Academy",
    // followers: "18 followers",
    path: "/The-Myth-of-Perfect-Strategy",
  },

  {
    id: 8,
    title:
      "How Organizations Can Build a Learning Culture for Continuous Growth",
    author: "George Munge",
    date: "February 25, 2025",
    excerpt:
      "In today's fast-paced corporate environment, organizations must prioritize learning and development to remain competitive. A strong learning culture fosters continuous growth, enhances employee engagement, and improves overall productivity...",
    content: `
How Organizations Can Build a Learning Culture for Continuous Growth.
By George Munge
In today’s fast-paced corporate environment, organizations must prioritize learning and development to remain competitive. A strong learning culture fosters continuous growth, enhances employee engagement, and improves overall productivity. For businesses in Kenya and across Africa, investing in workplace learning and professional development is no longer a luxury but a necessity. This article explores how companies can cultivate a learning culture that drives sustainable growth, using practical insights and case studies from the African corporate landscape.
Understanding a Learning Culture
A learning culture refers to an organizational environment that encourages employees to continuously acquire new skills, improve their knowledge, and innovate. Companies with a strong learning culture integrate training into their daily operations, making professional development a core aspect of their strategy.
Kenyan firms such as Safaricom and Equity Bank have successfully embedded workplace learning into their corporate DNA. By investing in leadership development programs, digital skills training, and mentorship initiatives, they have built agile teams that adapt quickly to industry changes.
The Business Case for Workplace Learning
Why should African organizations prioritize workplace learning? Here are some compelling reasons:
Increased Employee Productivity – When employees receive continuous training, they perform better and become more efficient.
Talent Retention and Engagement – A learning culture fosters job satisfaction, reducing turnover rates.
Innovation and Competitive Advantage – A knowledgeable workforce is more likely to develop innovative solutions that give the company an edge.
Adaptability to Market Changes – Industries are evolving, and organizations that invest in upskilling remain ahead of the curve.
Improved Business Performance – Studies show that companies that prioritize employee development achieve higher profitability.
Strategies to Build a Learning Culture
1. Leadership Commitment to Learning
Building a learning culture starts at the top. When executives and managers champion professional development, employees are more likely to take learning seriously. African companies like KCB Bank have invested in leadership training, ensuring that managers foster a culture of continuous improvement.
2. Integrating Learning into Daily Operations
Learning should not be a one-time event but a continuous process. Organizations can embed training into everyday tasks through:
Microlearning: Short, engaging content that employees can consume on the go.
On-the-Job Training: Practical, hands-on learning experiences.
Cross-Departmental Collaboration: Encouraging employees to learn from different teams.
3. Leveraging Digital Learning Platforms
With the rise of e-learning, organizations can provide training through online platforms. Companies like Andela and Moringa School have revolutionized digital learning in Africa, offering courses that equip professionals with in-demand skills. Organizations can partner with platforms such as Craftwise Academy to provide tailored employee training programs.
4. Encouraging a Growth Mindset
A growth mindset—where employees believe they can develop new abilities through effort—must be instilled in workplace culture. Companies can achieve this by:
Rewarding employees who seek learning opportunities.
Providing constructive feedback.
Encouraging employees to take ownership of their development.
5. Providing Mentorship and Coaching
Mentorship plays a crucial role in professional growth. Companies like Equity Bank’s Wings to Fly program and Safaricom’s Women in Leadership initiative have shown the power of mentorship in developing future leaders. Organizations should create mentorship structures where experienced employees guide junior staff.
6. Measuring and Rewarding Learning Progress
To sustain a learning culture, organizations must track and reward progress. Methods include:
Implementing a learning management system (LMS) to monitor training activities.
Recognizing employees who complete training programs.
Offering career advancement opportunities based on acquired skills.
7. Aligning Learning with Business Goals
For training programs to be effective, they must align with organizational objectives. Companies should:
Identify skill gaps and tailor training programs accordingly.
Link learning initiatives to key performance indicators (KPIs).
Encourage employees to apply learned skills to real business challenges.
Real-World Examples: Learning Cultures in African Organizations
Safaricom’s Digital Academy
Safaricom has established a digital academy to train employees in emerging technologies such as artificial intelligence and data analytics. This initiative has improved employee performance and enhanced customer experiences.
Equity Bank’s Leadership Training
Equity Bank invests in leadership development, ensuring that employees are equipped with financial literacy, management skills, and strategic thinking capabilities.
M-Pesa’s Financial Literacy Programs
M-Pesa has integrated financial education into its services, providing training to both employees and customers. This approach has contributed to financial inclusion and business growth.
Overcoming Challenges in Building a Learning Culture
Despite the benefits, organizations in Kenya and Africa face challenges in implementing a learning culture, including:
Budget Constraints – Many SMEs struggle with limited resources for employee training.
Resistance to Change – Some employees and managers may resist new learning initiatives.
Time Constraints – Balancing work responsibilities with training can be difficult.
Solutions:
Leverage affordable e-learning solutions like Craftwise Academy.
Encourage peer-to-peer learning to reduce costs.
Integrate learning into work schedules to minimize disruptions.
A strong learning culture is the foundation of continuous growth and innovation in organizations. By prioritizing workplace learning, leveraging digital platforms, fostering mentorship, and aligning learning with business goals, African companies can build resilient, future-ready workforces. The success stories of leading organizations in Kenya demonstrate that investing in employee training is a strategic move that yields long-term benefits.
For companies looking to develop a robust learning culture, partnering with us at Craftwise Academy, expert training providers can provide the necessary tools and insights to drive organizational growth. 
The future belongs to organizations that invest in knowledge—because learning never stops.


`,
    imageUrl: "https://i.imgur.com/NuhymtZ.jpeg",
    organization: "Craftwise Academy",
    // followers: "18 followers",
    path: "/learning-culture",
  },
  {
    id: 9,
    title:
      "Built to Last: How to Create a Career & Organization That Thrives for Generations",
    author: "George Munge",
    date: "February 13, 2025",
    excerpt:
      "In today's fast-changing world, many careers and businesses rise and fall at an alarming rate. Short-term trends often dictate success, but some professionals and organizations break the cycle to achieve lasting impact...",
    content: `In today's fast-changing world, many careers and businesses rise and fall at an alarming rate. Short-term trends often dictate success, but some professionals and organizations break the cycle to achieve lasting impact. What sets them apart? How do they future-proof themselves in a world obsessed with quick wins? Jim Collins' Built to Last: Successful Habits of Visionary Companies uncovers that long-term success isn't about luck or a single brilliant idea. It's about having a solid foundation, embracing a visionary mindset, and committing to continuous growth. Whether you're an ambitious young professional, a middle manager, or a C-suite executive, these lessons can transform your approach to career and business success.

      Core Values: The Foundation of Long-Term Success
      The most enduring companies—Google, Safaricom, Mastercard Foundation, and Equity Bank—aren't solely driven by profit. They operate with a strong set of core values that define their culture and decision-making. Ask yourself: What drives me? Is it excellence, integrity, innovation, or impact? Once you define your core values, let them guide every career decision you make. Values serve as a compass, especially when navigating tough choices. When Safaricom launched M-Pesa, it wasn't just about mobile payments—it was about financial inclusion. Employees who aligned with this mission played a crucial role in its success.

      Move Beyond Execution: Be a Builder
      The best organizations don't just hire employees; they cultivate future leaders. Similarly, professionals who build systems, teams, and processes—not just execute tasks—become invaluable in their industries. Rather than just completing tasks, think about how you can improve efficiency, streamline workflows, and mentor others. If you lead a team, empower your colleagues by creating structures that make work more effective. Andela didn't just train software developers—it built an entire ecosystem to nurture African tech talent. Professionals who create such frameworks shape industries and leave a lasting impact.

      Similarly, at Craftwise Academy we don't just teach professionals to execute tasks; we empower them to build systems and foster leadership, enabling them to create lasting change within their industries.

      The Power of "AND": Balancing Stability and Innovation
      Visionary organizations embrace both structure and adaptability. They innovate while maintaining operational excellence. Individuals who think this way unlock limitless career opportunities. Instead of limiting yourself to one skill set, develop a mix of technical and soft skills.

      Be both a strategic thinker and a detail-oriented doer. By cultivating multiple strengths, you future-proof your career in an unpredictable job market. Diageo, a global beverage leader, balances tradition with innovation. It honors heritage brands like Johnnie Walker while leading modern, digital-first marketing strategies. Employees who thrive in both worlds become indispensable.

      Set Big, Audacious Career Goals
      Mastercard Foundation's Young Africa Works program doesn't aim for small wins—it seeks to enable 30 million young people to secure dignified and fulfilling work. That's bold ambition. Don't just aim for incremental promotions—set long-term, industry-changing goals.

      Ask yourself: What's the biggest problem I can solve in my field? Where do I want to be in 10 or 20 years? Elon Musk didn't just want to build a better car; he wanted to revolutionize sustainable transport. Professionals who think big redefine their careers and industries.

      It is for this reason why at Craftwise Academy, we inspire professionals to set bold, transformative career goals and pursue industry-changing ambitions, helping them think beyond incremental success to create long-term impact. While we aim to train 1,000,000 employees to revolutionize the African corporate workplace.

      Embrace Change: Experiment and Adapt
      The most successful individuals and organizations aren't afraid of failure. They experiment, learn, and pivot quickly. Stay ahead of industry trends. Invest in lifelong learning—master AI, digital transformation, and leadership skills. Step into unfamiliar roles or industries if they align with your long-term goals.

      Equity Bank evolved from a microfinance institution to one of Africa's largest financial institutions by continuously adapting to market needs. Employees who embrace change stay ahead of the curve.

      Build Meaningful Relationships
      Just as companies build strategic partnerships, professionals must invest in meaningful relationships to advance their careers. Find mentors who challenge and inspire you. Join professional networks and industry events. Contribute to thought leadership through writing and speaking engagements.

      Google thrives because it attracts top talent and fosters collaboration. Employees who build strong networks inside and outside their organizations create endless opportunities for career growth.

      In our Craftwise Assembly, our alumni are assured of an environment where professionals can build meaningful relationships, network with industry leaders, and collaborate to unlock new opportunities for growth and development.

      Build a Career and Organization That Outlasts You
      Great careers and companies aren't built overnight. They result from a clear vision, consistent action, and an unwavering commitment to excellence. Whether you're shaping an organization or your own career, ask yourself: Am I building something that will last?

      At Craftwise Academy, we are committed to helping professionals and organizations create a skilled, emotionally intelligent, and future-ready workforce. Join us in shaping a legacy of excellence.

      Craftwise Academy is revolutionizing workplace training in Africa. Through practical, experiential learning, we equip professionals with the skills needed to thrive in today's workplace.`,
    imageUrl: "https://i.imgur.com/potnzqb.jpeg",
    organization: "Craftwise Academy",
    // followers: "18 followers",
    path: "/built-to-last",
  },
];

function Blogs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
  <title>Blog – Leadership, Learning & Workplace Insights | Craftwise Academy</title>
  <meta
    name="description"
    content="Explore expert insights on emotional intelligence, leadership, career growth, and learning culture from the Craftwise Academy team."
  />
  <meta
    name="keywords"
    content="Craftwise blog, leadership insights, emotional intelligence, career growth, workplace training Kenya, learning culture, organizational development"
  />
  <link rel="canonical" href="https://craftwiseacademy.com/blogs" />
</Helmet>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.imgur.com/4jBBPw8.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          width: "100%",
          position: "relative",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
           
            className="text-center text-white"
          >
            <h1 className="mb-4 font-montserrat text-5xl font-bold">
              Our News And Insights
            </h1>
            <p className="mx-auto max-w-2xl font-montserrat text-xl">
              Insights and advice from our team of experts on leadership, career
              growth, and organizational development
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-start px-4 md:justify-start">
        {/* This div will be aligned to the far right */}
        <div className="rounded-lg shadow-md">
          <Brochures />
        </div>
      </div>
      {/* Blog Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 font-montserrat sm:px-6 lg:px-8">
        {articles.map((article, index) => (
          <BlogSection key={article.id} article={article} index={index} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default Blogs;
