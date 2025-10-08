import React from 'react';
import { Users, BookOpen, Briefcase, Heart } from 'lucide-react';

// Import women empowerment images
import img1 from '../assets/women-empowerment/img1.jpg';
import img2 from '../assets/women-empowerment/img2.jpg';
import img3 from '../assets/women-empowerment/img3.jpg';
import img4 from '../assets/women-empowerment/img4.jpg';

const WomenEmpowermentSection = () => {
  const programs = [
    {
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      title: "Women's Education Program",
      description: "Literacy and skill development programs for women",
      image: img1
    },
    {
      icon: <Briefcase className="w-8 h-8 text-purple-600" />,
      title: "Self-Employment Training",
      description: "Training in sewing, embroidery, and handicrafts",
      image: img2
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Women Support Groups",
      description: "Financial assistance and community support",
      image: img3
    },
    {
      icon: <Heart className="w-8 h-8 text-purple-600" />,
      title: "Health Awareness",
      description: "Health camps and counseling for women",
      image: img4
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Women Empowerment
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our mission is to empower women through education, skills development, and economic independence
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {program.icon}
                  <h3 className="text-xl font-semibold text-gray-800 ml-3">{program.title}</h3>
                </div>
                <p className="text-gray-600">{program.description}</p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default WomenEmpowermentSection;