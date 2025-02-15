import { motion } from 'framer-motion';
import BlogSection from './BlogSection';

const articles = [
  {
    id: 1,
    title: "Built to Last: How to Create a Career & Organization That Thrives for Generations",
    author: "George Munge",
    date: "February 13, 2025",
    excerpt: "In today's fast-changing world, many careers and businesses rise and fall at an alarming rate. Short-term trends often dictate success, but some professionals and organizations break the cycle to achieve lasting impact...",
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
    path: "/built-to-last"
  }
];

function Blogs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.imgur.com/4jBBPw8.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          width: '100%',
          position: 'relative'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-montserrat font-bold mb-4">Our Blog</h1>
            <p className="text-xl font-montserrat max-w-2xl mx-auto">
              Insights and advice from our team of experts on leadership, career growth, and organizational development
            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Content */}
      <main className="max-w-7xl font-montserrat mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {articles.map((article, index) => (
          <BlogSection key={article.id} article={article} index={index} />
        ))}
      </main>
    </div>
  );
}

export default Blogs;