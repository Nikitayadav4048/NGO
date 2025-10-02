import React from 'react';
import { Button } from '../components/ui/button.jsx';
import { Input } from '../components/ui/input.jsx';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-purple-400">Orbosis Foundation</h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
              Empowering women and creating positive change in communities through 
              education, skill development, and social support programs.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 p-2">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 p-2">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 p-2">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 p-2">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-purple-400">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors text-sm sm:text-base">About Us</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors text-sm sm:text-base">Our Projects</a></li>
              <li><a href="#volunteer-form" className="hover:text-white transition-colors text-sm sm:text-base">Volunteer</a></li>
              <li><a href="#donation-form" className="hover:text-white transition-colors text-sm sm:text-base">Donate</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors text-sm sm:text-base">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-purple-400">Programs</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors text-sm sm:text-base">Skill Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm sm:text-base">Education Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm sm:text-base">Health Awareness</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm sm:text-base">Economic Empowerment</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm sm:text-base">Community Development</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-purple-400">Contact Info</h4>
            <div className="space-y-2 sm:space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">123 Foundation Street, New Delhi, 110001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">+91 11 2345 6789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">info@orbosis.org</span>
              </div>
            </div>

            <div className="mt-4 sm:mt-6">
              <h5 className="text-xs sm:text-sm font-semibold mb-2 text-purple-400">Newsletter</h5>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Input
                  placeholder="Your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 text-sm flex-1"
                />
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-sm px-3 py-2">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-1 sm:gap-2 text-sm">
                <span className="flex items-center gap-1">
                  <span className="text-purple-400">©</span> {currentYear} 
                  <span className="text-purple-400 font-semibold">Orbosis Foundation</span>
                </span>
                <span className="hidden sm:inline">•</span>
                <span>All rights reserved</span>
              </p>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-400 text-center md:text-left">
                🏛️ Registered under Section 8 of the Companies Act, 2013 
                <span className="text-purple-400 block sm:inline sm:ml-2">• CIN: U85300DL2013NPL123456</span>
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms & Conditions</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Transparency</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
