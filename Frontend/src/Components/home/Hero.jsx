import React, { useState } from 'react';
// Imported all necessary icons
import { PlayCircle, Menu, X, Square, CheckSquare, BarChart, Lock, FileText, CheckCircle, Linkedin, Twitter, Youtube, Rss, ArrowUp } from 'lucide-react'; 

function Hero() {
  const [activeItem, setActiveItem] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contacts', href: '#contacts' },
  ];

  const logos = [
    { name: 'Instagram', text: 'Instagram', style: { fontFamily: 'cursive', fontWeight: 'bold' } }, 
    { name: 'Fromer', text: 'Fromer', icon: <span className="text-purple-400 mr-1 rotate-45">/\\</span> }, 
    { name: 'Microsoft', text: 'Microsoft', icon: <Square className="w-5 h-5 text-indigo-500 mr-1" /> }, 
    { name: 'HUAWEI', text: 'HUAWEI', style: { fontWeight: '600' } },
    { name: 'Walmart', text: 'Walmart', icon: <span className="text-gray-400 mr-1 text-2xl">✱</span> },
  ];

  const testimonials = [
    { name: 'Avery Johnson', handle: '@averywrites', img: "url('https://i.pravatar.cc/150?img=50')", content: 'Radiant made undercutting all of our competitors an absolute breeze.' },
    { name: 'Jordan Lee', handle: '@jordantalks', img: "url('https://i.pravatar.cc/150?img=51')", content: 'Radiant made undercutting all of our competitors an absolute breeze.' },
    { name: 'Briar Martin', handle: '@neilstailor', img: "url('https://i.pravatar.cc/150?img=52')", content: 'Radiant made undercutting all of our competitors an absolute breeze.' },
    { name: 'Jordan Lee', handle: '@jordantalks', img: "url('https://i.pravatar.cc/150?img=53')", content: 'Radiant made undercutting all of our competitors an absolute breeze.' },
    { name: 'Avery Johnson', handle: '@averywrites', img: "url('https://i.pravatar.cc/150?img=54')", content: 'Radiant made undercutting all of our competitors an absolute breeze.' },
    { name: 'Briar Martin', handle: '@neilstailor', img: "url('https://i.pravatar.cc/150?img=55')", content: 'Radiant made undercutting all of our competitors an absolute breeze.' },
  ];
  
  const footerLinks = [
    { title: 'Product', links: [{ name: 'Home', href: '#home' }, { name: 'Support', href: '#support' }, { name: 'Pricing', href: '#pricing' }, { name: 'Affiliate', href: '#affiliate' }] },
    { title: 'Resources', links: [{ name: 'Company', href: '#company' }, { name: 'Blogs', href: '#blogs' }, { name: 'Community', href: '#community' }, { name: 'Careers', href: '#careers', highlight: true }, { name: 'About', href: '#about' }] },
    { title: 'Legal', links: [{ name: 'Privacy', href: '#privacy' }, { name: 'Terms', href: '#terms' }] }
  ];

  const handleItemClick = (name) => {
    setActiveItem(name);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const UserRating = () => (
    <div className="flex flex-col items-center mb-10">
      <div className="flex -space-x-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-gray-950" style={{ backgroundImage: "url('https://i.pravatar.cc/32?img=1')", backgroundSize: 'cover' }}></div>
        <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-950" style={{ backgroundImage: "url('https://i.pravatar.cc/32?img=2')", backgroundSize: 'cover' }}></div>
        <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-950" style={{ backgroundImage: "url('https://i.pravatar.cc/32?img=3')", backgroundSize: 'cover' }}></div>
      </div>
      <div className="flex items-center text-sm">
        <span className="text-green-500 text-xl mr-2">★★★★★</span> 
        <span className="text-white text-opacity-80 font-light tracking-wide">Used by 100,000+ users</span>
      </div>
    </div>
  );

  const TestimonialCard = ({ testimonial }) => (
    <div className="p-6 bg-gray-900/60 border border-gray-700 rounded-2xl shadow-xl shadow-gray-950/40 h-full 
                  transition-all duration-300 hover:scale-[1.02] hover:shadow-green-500/20 backdrop-blur-md relative overflow-hidden
                  before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:via-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
      <div className="flex items-center mb-4">
        <div 
          className="w-10 h-10 rounded-full bg-gray-700 mr-4 ring-1 ring-green-600/50"
          style={{ backgroundImage: testimonial.img, backgroundSize: 'cover' }}
        ></div>
        <div>
          <p className="text-white font-semibold flex items-center tracking-tight">
            {testimonial.name}
            <CheckCircle className="w-4 h-4 text-green-500 ml-1.5" />
          </p>
          <p className="text-gray-400 text-sm font-light">{testimonial.handle}</p>
        </div>
      </div>
      <p className="text-gray-200 text-base font-medium leading-relaxed">
        {testimonial.content}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans relative overflow-hidden">
      
      {/* GLOBAL BACKGROUND LIQUID GRADIENT */}
      <div className="absolute inset-0 z-0 opacity-40 animate-gradient-shift">
        <div className="absolute top-[-20%] left-[-20%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-green-700 to-sky-800 filter blur-3xl opacity-30 mix-blend-screen animate-float-slow"></div>
        <div className="absolute bottom-[-10%] right-[-15%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-purple-700 to-emerald-800 filter blur-3xl opacity-20 mix-blend-screen animate-float-fast"></div>
      </div>
      
      {/* ------------------------------------------------------------------ */}
      {/* --- HERO SECTION (DARK ASH BACKGROUND) --- */}
      {/* ------------------------------------------------------------------ */}
      <div className="hero-bg-dark-ash relative z-10"> 
        
        {/* Navigation Header - Enhanced glass effect */}
        <header className="flex items-center justify-between p-4 md:p-6 sticky top-0 bg-gray-950/60 backdrop-blur-xl z-30 border-b border-gray-800/60 ring-1 ring-gray-700/30">
          
          <div className="text-white text-2xl font-light tracking-tighter w-auto z-20">resume<span className="text-green-500">.</span></div>

          {/* CENTRALLY ALIGNED NAVIGATION BAR - Enhanced glass effect */}
          <div className="hidden md:flex absolute inset-x-0 justify-center">
              <nav 
                  className="flex items-center max-w-fit p-1 bg-gray-900/40 border border-gray-700/50 rounded-full shadow-2xl backdrop-blur-lg ring-1 ring-gray-600/20"
              >
                  <ul className="flex space-x-0.5">
                      {navItems.map((item) => (
                          <li key={item.name}>
                              <a
                                  href={item.href}
                                  onClick={() => handleItemClick(item.name)}
                                  className={`
                                      text-white/80 hover:text-white font-light tracking-tight
                                      px-5 py-2 rounded-full text-base
                                      transition-all duration-200 ease-in-out transform hover:scale-105
                                      ${item.name === activeItem ? 'bg-gray-800/70 text-white font-medium ring-1 ring-green-600/40' : ''}
                                  `}
                              >
                                  {item.name}
                              </a>
                          </li>
                      ))}
                  </ul>
              </nav>
          </div>
          
          {/* Button Group (Top-Right) */}
          <div className="flex space-x-3 items-center z-20">
              <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white md:hidden p-2 rounded-md hover:bg-gray-800 transition-colors"
                  aria-label="Toggle Menu"
              >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white font-light tracking-tight px-4 py-1.5 md:px-5 md:py-2 rounded-lg text-sm shadow-lg shadow-green-700/30 transition-all duration-225 transform hover:-translate-y-1 hover:scale-105">
                  Get started
              </button>
              <button className="hidden sm:block bg-transparent text-white font-light tracking-tight px-4 py-1.5 md:px-5 md:py-2 rounded-lg text-sm border border-gray-700/60 hover:border-white transition-colors duration-225 transform hover:-translate-y-1 hover:scale-105">
                  Login
              </button>
          </div>
        </header>

        {/* Mobile Navigation Menu - Enhanced glass effect */}
        {isMenuOpen && (
          <nav className="md:hidden bg-gray-900/90 backdrop-blur-xl absolute top-[4.5rem] left-0 right-0 p-4 border-t border-gray-800/60 shadow-lg z-20 ring-1 ring-gray-700/30">
              <ul className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                      <li key={item.name}>
                          <a href={item.href} onClick={() => handleItemClick(item.name)} className={`block text-white/80 hover:text-white p-3 rounded-md font-light transition-colors duration-200 text-base ${item.name === activeItem ? 'bg-gray-800/70 text-white' : ''}`}>
                              {item.name}
                          </a>
                      </li>
                  ))}
              </ul>
          </nav>
        )}
        
        {/* --- NEW: TRIAL OFFER PILL --- */}
        <div className="w-full flex justify-center mt-8 px-4">
            <a 
              href="#trial-offer" 
              className="group flex items-stretch overflow-hidden rounded-full p-0.5 bg-gray-900/50 backdrop-blur-sm shadow-lg ring-1 ring-gray-700/40 transition-all duration-300 hover:scale-[1.03] hover:ring-pink-500/50"
            >
              {/* Left Side: 'NEW' tag (Vibrant Magenta) */}
              <span className="bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center transition-all duration-300 group-hover:bg-pink-500">
                NEW
              </span>
              {/* Right Side: Text and Arrow */}
              <span className="flex items-center text-sm text-gray-200 font-medium px-4 py-1.5 space-x-1">
                <span>Try 30 days free trial option</span>
                <span className="text-pink-400 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-0.5">
                  &gt;
                </span>
              </span>
            </a>
        </div>
        {/* ----------------------------- */}
        
        {/* HERO SECTION MAIN CONTENT */}
        <div className="pt-10 md:pt-20 text-center px-4 max-w-7xl mx-auto pb-20 relative z-10">
          <UserRating />
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-thin text-white tracking-tight leading-none mb-6 drop-shadow-lg text-shadow-md">
            Automation designed to make life easier
          </h1>
          
          <p className="text-lg md:text-2xl text-white opacity-90 font-light mb-16 max-w-4xl mx-auto tracking-tight drop-shadow-sm">
            No complexity. No noise. Just clean, reliable automation to **boost your team's efficiency.**
          </p>
          
          <div className="flex justify-center space-x-6">
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3.5 rounded-lg text-lg transition-all duration-300 shadow-lg shadow-green-700/40 transform hover:-translate-y-1 hover:scale-105">
              Get started
            </button>
            <button className="flex items-center space-x-2 bg-transparent text-white font-medium px-8 py-3.5 rounded-lg text-lg border border-gray-700/60 hover:border-white transition-colors duration-300 shadow-md shadow-gray-950/30 transform hover:-translate-y-1 hover:scale-105">
              <PlayCircle className="w-5 h-5" /> <span>Watch demo</span>
            </button>
          </div>
          
          {/* TRUSTED BRANDS SECTION */}
          <div className="mt-24 pt-12 pb-16 border-t border-gray-800/60">
              <p className="text-sm md:text-base text-white/50 mb-10 font-light">Trusting by leading brands, including</p>
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16">
                  {logos.map((logo) => (
                      <span key={logo.name} className="flex items-center text-xl md:text-3xl font-light text-gray-500 hover:text-white transition-colors cursor-pointer" style={logo.style || {}}>
                          {logo.icon && React.cloneElement(logo.icon, { className: logo.icon.props.className.replace('text-gray-500', 'text-gray-400').replace('text-gray-700', 'text-gray-400') })} 
                          {logo.text}
                      </span>
                  ))}
              </div>
          </div>
        </div>
      </div>
      
      {/* ------------------------------------------------------------------ */}
      {/* --- FEATURE SECTION (CLEAN DARK ASH THEME) --- */}
      {/* ------------------------------------------------------------------ */}
      <div className="bg-gray-900 py-28 px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 mb-8 rounded-full bg-gray-800/70 border border-green-700/60 text-green-300 text-sm font-light backdrop-blur-md">
            <CheckSquare className="w-4 h-4" />
            <span>Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-thin text-white mb-4 tracking-tight drop-shadow-md">Build your resume</h2>
          <p className="text-lg md:text-xl text-gray-400 font-light mb-20 max-w-3xl mx-auto drop-shadow-sm">Our streamlined process helps you create a professional resume in minutes with intelligent AI-powered tools and features.</p>
          
          <div className="flex flex-col lg:flex-row justify-center items-start lg:space-x-12">
            <div className="relative w-full max-w-lg lg:w-1/2 mb-16 lg:mb-0">
              {/* Image Stack/Card - More pronounced glass effect and liquid gradient inside */}
              <div className="relative p-3 rounded-3xl overflow-hidden bg-gray-800/70 border border-gray-700/60 shadow-2xl shadow-gray-950/70 max-w-md mx-auto backdrop-blur-xl ring-1 ring-green-700/20 transform transition-all duration-500 hover:scale-[1.01]">
                <div className="h-[28rem] w-full rounded-2xl bg-gradient-to-br from-gray-700/80 to-gray-900/80 flex flex-col justify-end p-6 relative overflow-hidden">
                  {/* Internal liquid effect */}
                  <div className="absolute inset-0 z-0 opacity-30 animate-pulse-slow">
                    <div className="absolute top-[-30%] left-[-30%] w-[400px] h-[400px] rounded-full bg-green-500 filter blur-3xl opacity-20 mix-blend-screen animate-float-slow"></div>
                    <div className="absolute bottom-[-20%] right-[-20%] w-[300px] h-[300px] rounded-full bg-sky-500 filter blur-3xl opacity-15 mix-blend-screen animate-float-fast"></div>
                  </div>
                  <p className="text-white font-semibold opacity-90 relative z-10">Simulated App Usage</p>
                  <div className="w-full h-1/2 bg-gray-800/70 backdrop-blur-md rounded-lg p-3 relative z-10 border border-gray-700/50"></div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-12">
              {/* Real-Time Analytics Card - Made clickable */}
              <a 
                href="#analytics"
                className="p-6 rounded-xl bg-gray-950/70 shadow-xl border border-gray-700/60 max-w-sm w-full text-left transition-all duration-300 hover:shadow-green-500/20 backdrop-blur-lg ring-1 ring-gray-700/30 transform hover:scale-[1.01] hover:bg-gray-800/70"
              >
                <div className="flex items-start">
                  <BarChart className="w-6 h-6 text-green-400 mr-4 mt-0.5" />
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-1 tracking-tight">Real-Time Analytics</h3>
                    <p className="text-gray-400 text-sm font-light leading-snug">Get instant insights into your finances with live dashboards.</p>
                  </div>
                </div>
              </a>
              <div className="space-y-10 text-left w-full max-w-sm">
                  {/* Bank-Grade Security - Made clickable */}
                  <a 
                    href="#security"
                    className="flex items-start bg-gray-950/30 p-4 rounded-xl backdrop-blur-sm border border-gray-800/50 hover:bg-gray-900/50 transition-colors transform hover:translate-x-1"
                  >
                      <Lock className="w-6 h-6 text-green-400 mr-4 mt-0.5" />
                      <div>
                          <h3 className="text-white font-semibold text-lg tracking-tight">Bank-Grade Security</h3>
                          <p className="text-gray-400 text-sm font-light leading-snug">End-to-end encryption, 2FA, compliance with GDPR standards.</p>
                      </div>
                  </a>
                  {/* Customizable Reports - Made clickable */}
                  <a 
                    href="#reports"
                    className="flex items-start bg-gray-950/30 p-4 rounded-xl backdrop-blur-sm border border-gray-800/50 hover:bg-gray-900/50 transition-colors transform hover:translate-x-1"
                  >
                      <FileText className="w-6 h-6 text-orange-400 mr-4 mt-0.5" />
                      <div>
                          <h3 className="text-white font-semibold text-lg tracking-tight">Customizable Reports</h3>
                          <p className="text-gray-400 text-sm font-light leading-snug">Export professional, audit-ready financial reports for tax or internal review.</p>
                      </div>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* --- TESTIMONIALS SECTION (CLEAN DARK ASH THEME) --- */}
      {/* ------------------------------------------------------------------ */}
      <div className="bg-gray-950 py-28 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <TestimonialCard key={index} testimonial={t} />
            ))}
          </div>
          
          <div className="h-px w-full bg-gray-800/60 my-20"></div>

          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <h3 className="text-2xl md:text-4xl font-light text-white mb-8 md:mb-0 tracking-tight leading-snug drop-shadow-md">
              Build a Professional Resume That Helps You <span className="text-green-400">Stand Out and Get Hired</span>
            </h3>
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3.5 rounded-lg text-lg transition-all duration-300 shadow-lg shadow-green-700/40 transform hover:-translate-y-1 hover:scale-105">
              Get Started →
            </button>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* --- FOOTER SECTION (CLEAN DARK ASH THEME) --- */}
      {/* ------------------------------------------------------------------ */}
      <footer className="bg-gray-900 py-12 md:py-16 px-4 border-t border-gray-800/60 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 border-b border-gray-800/60 pb-10 mb-8">
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white text-2xl font-light mb-4 tracking-tighter">resume<span className="text-green-500">.</span></h4>
              <p className="text-gray-400 text-sm font-light max-w-xs">
                Making every customer feel valued—no matter the size of your audience.
              </p>
              
              <div className="flex space-x-4 mt-8">
                <a href="#linkedin" aria-label="LinkedIn" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110"><Linkedin className="w-5 h-5" /></a>
                <a href="#twitter" aria-label="Twitter" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110"><Twitter className="w-5 h-5" /></a>
                <a href="#youtube" aria-label="YouTube" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110"><Youtube className="w-5 h-5" /></a>
                <a href="#rss" aria-label="RSS Feed" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110"><Rss className="w-5 h-5" /></a>
              </div>
            </div>

            {footerLinks.map((column) => (
              <div key={column.title} className="col-span-1">
                <h5 className="text-lg font-medium text-white mb-4 tracking-tight">{column.title}</h5>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-400 hover:text-white text-sm font-light transition-colors flex items-center transform hover:translate-x-1">
                        {link.name}
                        {link.highlight && (
                          <span className="ml-2 px-2 py-0.5 rounded-full bg-green-600 text-white text-xs font-light">
                            We're hiring!
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-4">
            <p className="text-gray-600 text-sm font-light order-2 md:order-1 mt-4 md:mt-0 tracking-wide">
              © 2025 Resume. All rights reserved.
            </p>
            
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="bg-gray-800/50 hover:bg-gray-800 text-green-500 p-3 rounded-full order-1 md:order-2 transition-colors transform hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </footer>
      
      {/* Background Style for the Hero Gradient (Subtle dark-on-dark gradient) */}
      <style jsx>{`
        .hero-bg-dark-ash {
          min-height: 100vh;
          background-color: #101010;
          background-image: radial-gradient(at 50% 100%, #1a1a1a 0%, #101010 70%);
        }

        /* Keyframe animations for liquid backgrounds */
        @keyframes float-slow {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, 15px) rotate(1deg); }
          50% { transform: translate(0, 0) rotate(0deg); }
          75% { transform: translate(-10px, -15px) rotate(-1deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        @keyframes float-fast {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-10px, 20px) rotate(2deg); }
          50% { transform: translate(0, 0) rotate(0deg); }
          75% { transform: translate(10px, -20px) rotate(-2deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes pulse-slow {
          0% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.02); }
          100% { opacity: 0.2; transform: scale(1); }
        }

        /* For text shadow */
        .text-shadow-md {
          text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
}

export default Hero;