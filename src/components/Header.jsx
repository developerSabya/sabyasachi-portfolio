import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-900">
          Sabyasachi Sahoo
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col py-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="px-6 py-3 text-left text-gray-700 hover:bg-gray-50"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="px-6 py-3 text-left text-gray-700 hover:bg-gray-50"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 text-left text-gray-700 hover:bg-gray-50"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="px-6 py-3 text-left text-gray-700 hover:bg-gray-50"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="mx-6 my-2 bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors text-center"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;