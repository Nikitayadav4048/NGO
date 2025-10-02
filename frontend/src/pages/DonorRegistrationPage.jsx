import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button.jsx';
import { Input } from '../components/ui/input.jsx';
import { Label } from '../components/ui/label.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card.jsx';
import { ArrowLeft, Heart, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const DonorRegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    address: '',
    city: '',
    state: '',
    panGst: '',
    donationMode: '',
    emailUpdates: false,
    whatsappUpdates: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donor registration submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const donationModes = [
    'Bank Transfer',
    'UPI',
    'Cheque',
    'In-Kind',
    'Online Payment'
  ];
  useEffect(() => {
  window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-amber-50 flex items-center justify-center py-8">
      <div className="max-w-2xl w-full mx-auto px-4">
        {/* Back to Home Link */}
        <div className="mb-6">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>

        {/* Main Form Card */}
        <Card className="bg-white shadow-lg border-0">
          <CardHeader className="text-center pb-8">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-[#9333ea] to-[#f59e0b] rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            {/* Title */}
            <CardTitle className="text-3xl font-bold text-[#6b21a8] mb-2">
              Donor Registration
            </CardTitle>
            
            {/* Subtitle */}
            <p className="text-gray-600 text-lg">
              Support our mission to empower women through skills development
            </p>
          </CardHeader>

          <CardContent className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactNumber" className="text-sm font-medium text-gray-700">
                        Contact Number *
                      </Label>
                      <Input
                        id="contactNumber"
                        name="contactNumber"
                        type="tel"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="Enter contact number"
                        className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email ID *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Address Information (for receipts)</h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                      Address
                    </Label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Enter complete address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-sm font-medium text-gray-700">
                        City
                      </Label>
                      <Input
                        id="city"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter city"
                        className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state" className="text-sm font-medium text-gray-700">
                        State
                      </Label>
                      <Input
                        id="state"
                        name="state"
                        type="text"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="Enter state"
                        className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Tax Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tax Information (for tax receipt if in India)</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="panGst" className="text-sm font-medium text-gray-700">
                    PAN / GST Number
                  </Label>
                  <Input
                    id="panGst"
                    name="panGst"
                    type="text"
                    value={formData.panGst}
                    onChange={handleChange}
                    placeholder="Enter PAN or GST number"
                    className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>

              {/* Donation Mode */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferred Mode of Donation</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="donationMode" className="text-sm font-medium text-gray-700">
                    Select Donation Mode
                  </Label>
                  <Select value={formData.donationMode} onValueChange={(value) => handleSelectChange('donationMode', value)}>
                    <SelectTrigger className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                      <SelectValue placeholder="Select preferred donation mode" />
                    </SelectTrigger>
                    <SelectContent className="z-50 bg-white border border-gray-200 rounded-md shadow-lg">
                      {donationModes.map((mode) => (
                        <SelectItem key={mode} value={mode} className="bg-white hover:bg-gray-50">
                          {mode}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Consent for Updates */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Consent for Updates</h3>
                
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="emailUpdates"
                      checked={formData.emailUpdates}
                      onChange={handleChange}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-700">
                      I consent to receive updates via email about our programs and impact
                    </span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="whatsappUpdates"
                      checked={formData.whatsappUpdates}
                      onChange={handleChange}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-700">
                      I consent to receive updates via WhatsApp about our programs and impact
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg font-semibold rounded-lg cursor-pointer"
                >
                  Register as Donor
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DonorRegistrationPage;
