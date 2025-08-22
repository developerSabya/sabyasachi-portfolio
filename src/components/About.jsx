import React from 'react';
import { Code, Database, Zap, Users } from 'lucide-react';
import { portfolioData } from '../data/mock';

const About = () => {
  const { personalInfo, skills, stats } = portfolioData;

  const highlights = [
    {
      icon: Code,
      title: "Frontend Expertise",
      description: "React, Angular, Vue.js with TypeScript for scalable applications"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Proven track record of improving load times by up to 35%"
    },
    {
      icon: Database,
      title: "Full-Stack Understanding",
      description: "Cloud deployment experience with AWS and Azure"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Leading cross-functional teams in Agile environments"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Description */}
          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-6">
              Building the Future of Web Applications
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              {personalInfo.summary}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <highlight.icon className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-light text-gray-900 mb-8 text-center">
            Technical Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;