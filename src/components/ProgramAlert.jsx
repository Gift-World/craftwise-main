import { useState, useEffect } from 'react'
import { XMarkIcon, SparklesIcon, ClockIcon } from '@heroicons/react/24/solid'

function ProgramAlert({ onLearnMore, onDismiss }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 30,
    seconds: 45
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Animate in after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    setTimeout(onDismiss, 500) // Wait for animation to complete
  }

  return (
    <div className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ease-out ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 p-1 rounded-2xl shadow-2xl animate-pulse-glow">
          <div className="bg-black/50 backdrop-blur-xl rounded-xl p-6 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>

            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-200 z-10"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                  <SparklesIcon className="w-6 h-6 text-yellow-400 animate-spin-slow" />
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                    New Program Alert
                  </span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  Advanced React Mastery Program
                </h2>
                <p className="text-gray-200 text-sm lg:text-base mb-4">
                  Join our intensive 12-week bootcamp and become a React expert. Limited spots available!
                </p>

                {/* Countdown Timer */}
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                  <ClockIcon className="w-5 h-5 text-blue-400" />
                  <div className="flex gap-2 text-sm">
                    <div className="bg-white/20 rounded-lg px-2 py-1">
                      <span className="text-white font-bold">{timeLeft.days}</span>
                      <span className="text-gray-300 text-xs block">days</span>
                    </div>
                    <div className="bg-white/20 rounded-lg px-2 py-1">
                      <span className="text-white font-bold">{timeLeft.hours}</span>
                      <span className="text-gray-300 text-xs block">hrs</span>
                    </div>
                    <div className="bg-white/20 rounded-lg px-2 py-1">
                      <span className="text-white font-bold">{timeLeft.minutes}</span>
                      <span className="text-gray-300 text-xs block">min</span>
                    </div>
                    <div className="bg-white/20 rounded-lg px-2 py-1">
                      <span className="text-white font-bold">{timeLeft.seconds}</span>
                      <span className="text-gray-300 text-xs block">sec</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Only 12 spots remaining</span>
                </div>
              </div>

              {/* Right Content - CTA Button */}
              <div className="flex-shrink-0">
                <button
                  onClick={onLearnMore}
                  className="group relative bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/50"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Learn More
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramAlert