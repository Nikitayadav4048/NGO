import React, { useState } from 'react';
import { MapPin, X, Mail } from 'lucide-react';

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      role: 'Founder & Chairperson',
      location: 'New Delhi',
      description: 'Dr. Priya Sharma brings 15 years of experience in social work and women empowerment. She has dedicated her life to creating sustainable change in communities.',
      skills: ['Leadership', 'Social Work', 'Community Development']
    },
    {
      id: 2,
      name: 'Ms. Anita Gupta',
      role: 'Executive Director',
      location: 'Mumbai',
      description: 'Ms. Anita Gupta brings 12 years of experience in program management and community development. She specializes in designing and implementing large-scale skill development initiatives.',
      skills: ['Program Management', 'Community Development', 'Training Design']
    },
    {
      id: 3,
      name: 'Dr. Kavita Reddy',
      role: 'Head of Programs',
      location: 'Bangalore',
      description: 'Dr. Kavita Reddy has 10 years of experience in educational program design and implementation. She focuses on creating innovative learning solutions for women.',
      skills: ['Program Design', 'Education', 'Innovation']
    },
    {
      id: 4,
      name: 'Ms. Ritu Singh',
      role: 'Regional Coordinator - North',
      location: 'Lucknow',
      description: 'Ms. Ritu Singh manages our northern region operations and has been instrumental in expanding our reach to remote communities.',
      skills: ['Regional Management', 'Outreach', 'Operations']
    },
    {
      id: 5,
      name: 'Ms. Deepika Patel',
      role: 'Digital Skills Trainer',
      location: 'Ahmedabad',
      description: 'Ms. Deepika Patel specializes in digital literacy programs and has trained hundreds of women in computer skills and online business.',
      skills: ['Digital Literacy', 'Training', 'Technology']
    },
    {
      id: 6,
      name: 'Ms. Sunita Rao',
      role: 'Entrepreneurship Mentor',
      location: 'Chennai',
      description: 'Ms. Sunita Rao guides women in starting their own businesses and has helped many become successful entrepreneurs.',
      skills: ['Entrepreneurship', 'Mentoring', 'Business Development']
    }
  ];

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section id="team" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center cursor-pointer"
              onClick={() => openModal(member)}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="text-white sm:w-10 sm:h-10"
                >
                  <path 
                    d="M12 2L2 7L12 12L22 7L12 2Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M2 17L12 22L22 17" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M2 12L12 17L22 12" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              
              <p className="text-purple-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                {member.role}
              </p>
              
              <div className="flex items-center justify-center text-gray-500">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                <span className="text-xs sm:text-sm">{member.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg sm:rounded-xl max-w-sm sm:max-w-md w-full mx-4 relative shadow-lg max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full cursor-pointer flex hover:bg-gray-100 bg-gray-200 items-center justify-center transition-colors z-10"
              >
                <X className="h-3 w-3 sm:h-4 sm:w-4 text-black" />
              </button>

              {/* Modal Content */}
              <div className="p-4 sm:p-6 lg:p-8 text-center">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pr-8">
                  {selectedMember.name}
                </h2>

                {/* Profile Icon */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-white sm:w-12 sm:h-12"
                  >
                    <path 
                      d="M12 2L2 7L12 12L22 7L12 2Z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M2 17L12 22L22 17" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M2 12L12 17L22 12" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Role */}
                <p className="text-purple-600 font-semibold text-base sm:text-lg mb-3 sm:mb-4">
                  {selectedMember.role}
                </p>

                {/* Location */}
                <div className="flex items-center justify-center text-gray-500 mb-4 sm:mb-6">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  <span className="text-xs sm:text-sm">{selectedMember.location}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  {selectedMember.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {selectedMember.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-gray-200 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Contact Icon */}
                <div className="flex justify-center">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
