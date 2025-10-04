import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap, Check, Phone } from 'lucide-react';

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const rotatingTexts = [
    "stationery, tech rentals, and essential equipment",
    "copiers, computers, and water dispensers",
    "office furniture, printers, and accessories",
    "premium supplies delivered seamlessly"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    "24/7 Support",
    "Free Maintenance",
    "Flexible Plans",
    "Quick Delivery"
  ];

  const navItems = ["Products", "Services", "Rentals", "Contact"];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-end">
            {/* Right Nav Items */}
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          {/* Animated background elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
          
          <div className="text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-600 mb-8 opacity-0 animate-fade-in">
              <Zap className="w-4 h-4" />
              Smart Office Solutions
            </div>

            {/* Main Heading */}
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="block opacity-0 animate-slide-up" style={{animationDelay: '0.2s'}}>
                  Put your office on{' '}
                  <span className="animated-autopilot-gradient">Autopilot</span>
                </span>
              </h1>
            </div>

            {/* Subheading with rotating text */}
            <div className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto opacity-0 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center justify-center min-h-[60px]">
                <p className="text-center">
                  Everything your office needs—{' '}
                  <span className="relative inline-block overflow-hidden h-7 w-full max-w-2xl">
                    {rotatingTexts.map((text, index) => (
                      <span
                        key={index}
                        className="absolute left-0 right-0 text-center transition-all duration-700 ease-in-out font-medium"
                        style={{
                          transform: `translateY(${(index - currentText) * 100}%)`,
                          opacity: index === currentText ? 1 : 0
                        }}
                      >
                        {text}
                      </span>
                    ))}
                  </span>
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 opacity-0 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <button className="group px-8 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-base">
                Set up my office
              </button>
              <a
                href="tel:+919884989466"
                className="group px-8 py-3 bg-white text-gray-900 rounded-md font-medium border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 hover:scale-105 flex items-center gap-2 text-base shadow-sm hover:shadow-md"
              >
                <Phone className="w-4 h-4" />
                Talk to Sarath
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 justify-center opacity-0 animate-fade-in" style={{animationDelay: '0.8s'}}>
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animated-gemini-gradient {
          background: linear-gradient(90deg, 
            #4285f4,
            #34a853,
            #fbbc04,
            #ea4335,
            #9c27b0,
            #4285f4
          );
          background-size: 300% 100%;
          animation: gradient-shift 6s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .animated-autopilot-gradient {
          background: linear-gradient(90deg, 
            #3b82f6,
            #1d4ed8,
            #2563eb,
            #1e40af,
            #1e3a8a,
            #3b82f6
          );
          background-size: 200% 100%;
          animation: gradient-shift 8s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
}
