// Mock data for portfolio - will be replaced with backend integration
import resumeData from './resume.json';

export const portfolioData = {
  ...resumeData,
  
  // Additional mock data for portfolio features
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Project Manager, Leading Financial Firm in US",
      company: "Leading Financial Firm in US",
      content: "Sabyasachi's technical expertise and leadership transformed our trading platform. His React architecture improvements delivered measurable performance gains.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Tech Lead, Deloitte",
      company: "Deloitte",
      content: "Outstanding problem-solver with deep frontend expertise. Sabyasachi consistently delivers high-quality solutions under tight deadlines.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Senior Developer, EPAM",
      company: "EPAM",
      content: "Excellent mentor and collaborative team player. His Angular expertise helped elevate our entire development team's capabilities.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ],

  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/developersabya",
      icon: "Linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/developersabya",
      icon: "Github"
    },
    {
      name: "Email",
      url: "mailto:sss193959@gmail.com",
      icon: "Mail"
    }
  ],

  stats: [
    { label: "Years Experience", value: "10+" },
    { label: "Projects Delivered", value: "50+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Performance Improvement", value: "35%" }
  ]
};

export default portfolioData;