import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Footer from '../../Footer/Footer';
import { FaCheck } from "react-icons/fa";



const CraftwiseAcademy = () => {
  const eligibility = [
    "Mid-Level Managers & High-Potential Leaders – Take the next step toward senior leadership",
    "Department Heads & Functional Leaders – Expand your strategic influence",
    "Fast-Track Professionals – Develop the executive presence and decision-making skills",
    "Team Leaders Managing Complex Projects – Strengthen leadership capabilities"
  ];
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-09-03T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-16 bg-white">
      {/* Live Banner */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-primary-600 text-white py-3 px-4 text-center text-sm font-medium"
      >
        <span className="inline-flex font-montserrat items-center">
          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold mr-3 animate-pulse">
            LIVE
          </span>
          Secure Your Spot For The "Skyline Managers" Program With Craftwise Academy
        </span>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="bg-gray-50 py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-montserrat lg:text-6xl font-bold text-dark-800 leading-tight">
                Ready to Transform Into a
                <span className="text-primary-600 font-montserrat"> Strategic Manager</span>?
              </h1>
              <p className="text-xl text-primary-600 font-semibold">
                Leadership is about strategy, transformation, and executive readiness. CraftWise Academy’s Skyline Programme prepares high‑potential professionals to lead with clarity and impact.
              </p>
              <motion.a
                href="https://paystack.shop/pay/skylinemanagers"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex font-montserrat items-center justify-center px-8 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                JOIN THE PROGRAM NOW!
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Right Content - Program Details */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-xl p-8 border-l-4 border-primary-600"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl  font-montserrat  font-bold text-dark-800 mb-2">
                  THE PROGRAM BEGINS IN...
                </h3>
                <div className="grid grid-cols-4 gap-4 mt-6">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <motion.div
                      key={unit}
                      whileHover={{ scale: 1.1 }}
                      className="text-center"
                    >
                      <div className="bg-dark-800 text-white rounded-lg p-3 mb-2">
                        <div className="text-2xl font-bold">{value.toString().padStart(2, '0')}</div>
                      </div>
                      <div className="text-xs text-dark-600 capitalize font-medium">{unit}</div>
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm  font-montserrat  text-dark-600 mt-4">3rd September, 1900 EAT</p>
              </div>
              <motion.a
                href="https://paystack.shop/pay/skylinemanagers"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex  font-montserrat  items-center justify-center w-full px-6 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-all duration-300"
              >
                RESERVE MY SPOT NOW!
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What You'll Learn Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-craftwise-maroon py-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl  font-montserrat  md:text-4xl font-bold text-white text-center mb-16"
          >
            What You'll Master In This Managerial Program:
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-4 ">
            {[
              {
                title: "Strategic Impact",
                subtitle: "Master Advanced Managing Techniques",
                description: "Align initiatives with business goals and manage multi-stakeholder environments.",
                image: "/images/CWA-Skyline.png"
              },
              {
                title: "Advanced People Management",
                subtitle: "Drive Results Through People",
                description: "Lead, coach, and foster innovation while creating psychologically safe teams.",
                image: "/images/harry-training.png"
              },
              {
                title: "Change Management",
                subtitle: "Lead Transformation with Confidence",
                description: "Master leading through transitions, organizational shifts, and adaptive management.",
                image: "/images/change.png"
              },
              {
                title: "Innovation & Influence",
                subtitle: "Master Advanced Managing Techniques",
                description: "Inspire teams, drive creative problem-solving, and enhance executive presence.",
                image: "/images/training-skyline.png"
              },


            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl  font-montserrat  font-bold text-primary-600 mb-2">{item.title}</h3>
                  {/*<h4 className="text-primary-600 font-semibold mb-3">{item.subtitle}</h4>*/}
                  <p className="text-dark-600  font-montserrat  leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="https://paystack.shop/pay/skylinemanagers"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex  font-montserrat  items-center justify-center px-12 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              RESERVE MY SPOT NOW!
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Meet Your Instructors */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-gray-50 py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          {/*<motion.h2*/}
          {/*  variants={itemVariants}*/}
          {/*  className="text-4xl md:text-5xl font-bold text-dark-800 text-center mb-16"*/}
          {/*>*/}
          {/*  Meet Your Expert Trainers*/}
          {/*</motion.h2>*/}

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold  font-montserrat  text-primary-600">About This Program</h3>
                <div className="space-y-4 text-dark-700">
                  <p className="leading-relaxed  font-montserrat ">
                    In just 8 weeks, this high-impact, simulation-based leadership experience transforms
                    capable managers into strategic, emotionally intelligent, and results-oriented leaders.
                  </p>
                  <p className="  font-montserrat  leading-relaxed">
                    Through powerful sessions, real-world application, and a powerful capstone project,
                    participants emerge ready to lead change, boost performance, and drive business growth.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary-600">Our Expert Trainers</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary-600"
                    >
                      <img
                        src="/images/harry.avif"
                        alt="Harold Angila"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-dark-800 text-lg  font-montserrat ">Harold Angila</h4>
                      <p className="text-dark-600  font-montserrat ">Leadership Development Expert</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary-600"
                    >
                      <img
                        src="/images/gibbz.png"
                        alt="Ngibuini Mwaura"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <h4 className="font-bold  font-montserrat  text-dark-800 text-lg">Ngibuini Mwaura</h4>
                      <p className="text-dark-600  font-montserrat ">Learning & Design Lead - Craftwise Academy</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
                <h4 className="font-bold  font-montserrat  text-dark-800 mb-3">Program Investment</h4>
                <p className="text-3xl font-bold text-primary-600">KSH. 50,000</p>
                <p className="  font-montserrat  text-dark-600 mt-2">Complete 8-week leadership transformation program</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-primary-600 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-700 rounded-full -ml-12 -mb-12 opacity-30"></div>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-primary-600 mb-6">Who Should Apply?</h3>
                  <div className="space-y-4">
                    {eligibility.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <FaCheck className="flex-shrink-0 text-green-500 mt-1" />
                        <p className="text-dark-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">

                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary-600 font-bold text-2xl">CW</span>
                    </div>

                    <div>
                      <h3 className="text-2xl  font-montserrat  font-bold">Craftwise Academy</h3>
                      <p className="text-primary-100  font-montserrat ">Experience Learning,
                        That Changes Everything.</p>
                    </div>
                  </div>

                  {/*<div className="space-y-4 text-primary-50">*/}
                  {/*  <p>📧 info@craftwiseacademy.com</p>*/}
                  {/*  <p>🌐 www.craftwiseacademy.com</p>*/}
                  {/*  <p>📞 +254715208322</p>*/}
                  {/*</div>*/}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* This Program Could Change Everything */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true , margin: "-100px" }}
        variants={containerVariants}
        className="bg-craftwise-maroon py-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl  font-montserrat  md:text-4xl font-bold text-white text-center mb-16"
          >
            Advance Your Career with Strategic Insight
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {[
              {
                title: "Leadership in Action",
                description: "Immersive leadership simulations & decision-making challenges",
                icon: "🏆"
              },
              {
                title: "Accelerated Career Growth",
                description: "Capstone project solving a high-level organizational challenge",
                icon: "🚀"
              },
              {
                title: "Influential Leadership",
                description: "Peer networking & expert-led strategy sessions",
                icon: "📈"
              },
              {
                title: "Advanced Strategic Insight",
                description: "Real-world case studies & executive coaching",
                icon: "🎯"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-8 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-dark-800  font-montserrat  mb-4">{item.title}</h3>
                <p className="text-dark-600 leading-relaxed  font-montserrat ">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center"
          >

            <motion.a
              href="https://paystack.shop/pay/skylinemanagers"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex  font-montserrat  items-center justify-center px-12 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              RESERVE MY SPOT NOW!
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
      <Footer/>
    </div>
  );
};

export default CraftwiseAcademy;