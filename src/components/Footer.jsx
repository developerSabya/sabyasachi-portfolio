import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Footer = () => {
  const { personalInfo, socialLinks } = portfolioData;
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (iconName) => {
    const icons = {
      Github: Github,
      Linkedin: Linkedin,
      Mail: Mail
    };
    const Icon = icons[iconName];
    return Icon ? <Icon size={20} /> : null;
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">{personalInfo.name}</h3>
            <p className="text-gray-400 leading-relaxed">
              Senior Frontend Developer passionate about creating exceptional user experiences 
              and building scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>{personalInfo.location}</p>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="hover:text-white transition-colors block"
              >
                {personalInfo.email}
              </a>
              <a 
                href={`tel:${personalInfo.phone}`}
                className="hover:text-white transition-colors block"
              >
                {personalInfo.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="text-red-500" size={16} />
            <span>by {personalInfo.name}</span>
          </div>

          <div className="flex items-center space-x-6">
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>

            <span className="text-gray-400 text-sm">
              © {currentYear} All rights reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;