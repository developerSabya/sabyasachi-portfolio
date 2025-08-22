import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const { personalInfo, socialLinks } = portfolioData;

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  const getSocialIcon = (iconName) => {
    const icons = {
      Github: Github,
      Linkedin: Linkedin,
      Mail: Mail
    };
    const Icon = icons[iconName];
    return Icon ? <Icon size={24} /> : null;
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="mb-8 animate-fade-in">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src="https://customer-assets.emergentagent.com/job_modern-folio-27/artifacts/l83rip4e_Photo.jpg"
                alt={personalInfo.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-white"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-gray-900/10"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            {personalInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
            {personalInfo.title}
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.summary.split('.').slice(0, 2).join('.') + '.'}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {getSocialIcon(link.icon)}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mb-16">
          <button
            onClick={scrollToAbout}
            className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <button onClick={scrollToAbout} className="text-gray-400 hover:text-gray-600 transition-colors">
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;