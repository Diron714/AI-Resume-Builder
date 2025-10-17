import React, { useState } from 'react';
import { PlayCircle, Menu, X } from 'lucide-react'; // Added Menu and X icons for mobile toggle

function Hero() {
  const [activeItem, setActiveItem] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contacts', href: '#contacts' },
  ];

  const handleItemClick = (name) => {
    setActiveItem(name);
    // Optional: Close menu on link click
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // --- Component for the User Avatars and Rating (No changes needed here for responsiveness) ---
  const UserRating = () => (
    <div className="flex flex-col items-center mb-8">
      <div className="flex -space-x-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-black" style={{ backgroundImage: "url('https://i.pravatar.cc/32?img=1')", backgroundSize: 'cover' }}></div>
        <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-black" style={{ backgroundImage: "url('https://i.pravatar.cc/32?img=2')", backgroundSize: 'cover' }}></div>
        <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-black" style={{ backgroundImage: "url('https://i.pravatar.cc/32?img=3')", backgroundSize: 'cover' }}></div>
      </div>
      
      <div className="flex items-center text-sm">
        <span className="text-purple-500 text-xl mr-2">★★★★★</span> 
        <span className="text-white opacity-70">Used by **100,000+** users</span>
      </div>
    </div>
  );
  // --------------------------------------------------

  return (
    <div className="bg-black min-h-screen">
      
      {/* Navigation Header */}
      {/* Added responsive padding px-4 for smaller screens */}
      <header className="flex items-center justify-between p-4 md:p-6 relative z-10">
        
        {/* Logo/Branding (Made visible on all screens) */}
        <div className="text-white text-xl font-bold w-auto">Logo</div>

        {/* Centered Navigation Bar (Hidden on small screens, flex on medium/desktop) */}
        {/* We use 'hidden md:flex' to hide the entire pill menu on mobile */}
        <nav className="hidden md:flex items-center max-w-fit p-1 bg-gray-900/50 border border-gray-700/50 rounded-full shadow-lg backdrop-blur-sm">
          <ul className="flex space-x-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => handleItemClick(item.name)}
                  className={`
                    text-white/80 hover:text-white 
                    px-4 py-2 rounded-full text-sm font-medium
                    transition-colors duration-200
                    ${item.name === activeItem ? 'bg-white/10 text-white' : ''}
                  `}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Button Group (Get started & Login) - Made smaller for mobile, then larger for desktop */}
        <div className="flex space-x-3 items-center">
            
            {/* Mobile Menu Toggle Button (Visible on mobile, hidden on desktop) */}
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white md:hidden p-2 rounded-md hover:bg-gray-800 transition-colors"
                aria-label="Toggle Menu"
            >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            
            {/* Desktop Buttons (Made smaller on mobile with px-3 py-1.5) */}
            <button
                className="
                    bg-indigo-600 hover:bg-indigo-700 
                    text-white font-medium 
                    px-3 py-1.5 md:px-5 md:py-2 rounded-lg text-sm 
                    transition-colors duration-225
                    shadow-lg shadow-indigo-500/50
                "
            >
                Get started
            </button>
            <button
                className="
                    hidden sm:block // Hide Login button on smallest screens to save space
                    bg-transparent 
                    text-white font-medium 
                    px-3 py-1.5 md:px-5 md:py-2 rounded-lg text-sm
                    border border-gray-500 hover:border-white
                    transition-colors duration-225
                "
            >
                Login
            </button>
        </div>
      </header>

      {/* Mobile Navigation Menu (Appears only when isMenuOpen is true) */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-900/95 backdrop-blur-md absolute top-16 left-0 right-0 p-4 border-t border-gray-700/50">
            <ul className="flex flex-col space-y-2">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <a
                            href={item.href}
                            onClick={() => handleItemClick(item.name)}
                            className={`
                                block text-white/80 hover:text-white 
                                p-3 rounded-md font-medium
                                transition-colors duration-200 text-base
                                ${item.name === activeItem ? 'bg-white/10 text-white' : ''}
                            `}
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
      )}
      
      {/* --- HERO SECTION MAIN CONTENT --- (Already highly responsive) */}
      <div className="pt-10 md:pt-20 text-center px-4 max-w-6xl mx-auto">
        
        <UserRating />

        <h1 className="
            text-4xl sm:text-5xl md:text-7xl font-extrabold text-white 
            leading-snug md:leading-tight tracking-tighter mb-6
        ">
          Automation designed to make life easier
        </h1>

        <p className="
            text-base sm:text-xl text-white opacity-70 mb-10
            max-w-3xl mx-auto
        ">
          No complexity. No noise. Just clean, reliable automation to **boost your team's efficiency.**
        </p>

        {/* Action Buttons (The large ones in the center) */}
        <div className="flex justify-center space-x-4">
          
          {/* Primary Button */}
          <button
            className="
              bg-purple-600 hover:bg-purple-700 
              text-white font-semibold 
              px-6 py-3 md:px-8 md:py-3 rounded-xl text-base md:text-lg 
              transition-colors duration-300
              shadow-xl shadow-purple-500/30
            "
          >
            Get started
          </button>
          
          {/* Secondary Button ("Watch demo") */}
          <button
            className="
              flex items-center space-x-2
              bg-transparent 
              text-white font-semibold 
              px-6 py-3 md:px-8 md:py-3 rounded-xl text-base md:text-lg
              border border-white/20 hover:border-white/50
              transition-colors duration-300
            "
          >
            <PlayCircle className="w-5 h-5" /> 
            <span>Watch demo</span>
          </button>
        </div>

      </div>
      
      {/* Optional: Add a subtle gradient effect to the background container */}
      <style jsx>{`
        .bg-black {
          background-image: radial-gradient(at 50% 100%, #1a0033 0%, #000000 70%);
        }
      `}</style>

    </div>
  );
}

export default Hero;