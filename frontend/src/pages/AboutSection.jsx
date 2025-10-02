import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const AboutSection = () => {
  const programs = [
    {
      icon: Target,
      title: 'Digital Skills Training',
      description: 'Comprehensive computer literacy, digital marketing, and online business skills to help women thrive in the digital economy.',
      borderColor: 'border-purple-500',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: Eye,
      title: 'Entrepreneurship Development',
      description: 'Business planning, financial literacy, and mentorship programs to support women entrepreneurs in starting and scaling their ventures.',
      borderColor: 'border-orange-500',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Healthcare awareness, nutrition education, and mental health support programs to ensure holistic development.',
      borderColor: 'border-pink-500',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            About Orbosis Foundation
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Orbosis Foundation is dedicated to empowering women through comprehensive skill development programs, 
            creating pathways to economic independence and social transformation. Since our inception, we have been 
            committed to breaking barriers and building bridges to opportunity.
          </p>
        </div>

        {/* Key Programs Section */}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">
            Our Key Programs
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div 
                  key={index} 
                  className={`bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 ${program.borderColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className={`p-2 sm:p-3 rounded-full ${program.iconBg} border-2 ${program.borderColor} w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center`}>
                      <Icon className={`h-6 w-6 sm:h-8 sm:w-8 ${program.iconColor}`} />
                    </div>
                  </div>
                  
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                    {program.title}
                  </h4>
                  
                  <p className="text-gray-600 text-center leading-relaxed text-xs sm:text-sm lg:text-base">
                    {program.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
