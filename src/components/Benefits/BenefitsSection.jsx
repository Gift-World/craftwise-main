import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BenefitCard from "./BenefitCard";
import Footer from "../Footer/Footer";
import Brochures from "../Brochure/Brochures";
import { Helmet } from "react-helmet-async";
const benefits = [
  {
    title: "Transformative Learning",
    description: "Move beyond theory to action.",
    icon: "🎯",
    delay: 0.2,
  },
  {
    title: "Empathetic Leadership",
    description: "Deepen understanding of your team.",
    icon: "❤️",
    delay: 0.3,
  },
  {
    title: "Strategic Agility",
    description: "Develop confidence in high-stakes situations.",
    icon: "⚡",
    delay: 0.4,
  },
  {
    title: "Career Fulfillment",
    description: "Acquire skills that make you more valuable and satisfied.",
    icon: "🌟",
    delay: 0.5,
  },
  {
    title: "Exclusive Network",
    description:
      "Access the Crafter's Assembly—resources, events, and job opportunities",
    icon: "🤝",
    delay: 0.6,
  },
];

const BenefitsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      {/* SEO Meta Tags for Benefits Page */}
      <Helmet>
        <title>Craftwise Academy | Benefits of Transformative Learning</title>
        <meta
          name="description"
          content="Explore the key benefits of joining Craftwise Academy, from transformative learning to career fulfillment."
        />
        <meta
          name="keywords"
          content="Craftwise Academy, Transformative Learning, Empathetic Leadership, Strategic Agility, Career Fuulfillment"
        />
        <link rel="canonical" href="https://craftwiseacademy.com/benefits" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-8 font-montserrat text-4xl font-bold text-gray-900">
              BENEFITS
            </h2>
            <div className="grid grid-cols-1 gap-8 font-montserrat text-[17px] md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
              <Brochures />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BenefitsSection;
