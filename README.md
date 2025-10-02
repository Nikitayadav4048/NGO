# Orbosis Foundation - NGO Management System

A comprehensive, fully responsive web application for managing NGO operations including member management, volunteer coordination, donation tracking, and certificate issuance.

## 🌟 Features

### 📱 Fully Responsive Design
- **Mobile-First Approach**: Optimized for all screen sizes (320px to 1920px+)
- **Touch-Friendly UI**: Proper button sizing and spacing for mobile devices
- **Adaptive Layouts**: Responsive grids and flexible components
- **Cross-Device Compatibility**: Works seamlessly on phones, tablets, and desktops

### 👥 User Management
- **Multi-Role System**: Admin, Volunteer, Donor, and Member roles
- **Role-Based Access Control**: Different dashboards and permissions
- **User Authentication**: Secure login and session management
- **Profile Management**: User-specific profile pages

### 📊 Dashboard Features
- **Admin Dashboard**: Complete overview with statistics and management tools
- **Volunteer Dashboard**: Task management and event coordination
- **Donor Dashboard**: Donation history and impact reports
- **Responsive Analytics**: Mobile-friendly charts and statistics

### 🎯 Core Modules
- **Member Management**: Registration, profile management, and tracking
- **Volunteer Coordination**: Task assignment and event management
- **Donation Tracking**: Secure donation processing and receipt generation
- **Certificate Management**: Digital certificate issuance with QR codes
- **Gallery Management**: Photo uploads and gallery organization
- **Beneficiary Management**: Beneficiary tracking and support

## 🛠️ Technology Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Lucide React**: Beautiful, customizable icons
- **React Router**: Client-side routing and navigation
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Backend
- **Node.js**: JavaScript runtime for server-side development
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database for data storage
- **Cloudinary**: Image upload and management
- **JWT**: JSON Web Tokens for authentication

## 📱 Responsive Breakpoints

- **Mobile**: 0px - 640px (sm)
- **Tablet**: 640px - 1024px (md/lg)
- **Desktop**: 1024px+ (xl/2xl)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nikitayadav4048/NGO.git
   cd NGO
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Environment Setup**
   
   Create `.env` file in backend directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   ```

5. **Start the Application**
   
   Backend:
   ```bash
   cd backend
   npm start
   ```
   
   Frontend:
   ```bash
   cd frontend
   npm run dev
   ```

## 📱 Mobile Optimization

### Key Responsive Features
- **Collapsible Navigation**: Mobile-friendly sidebar and menu
- **Touch Targets**: Minimum 44px for accessibility
- **Scalable Typography**: Responsive text sizing
- **Optimized Forms**: Mobile-friendly input fields
- **Responsive Images**: Proper sizing and aspect ratios
- **Gesture Support**: Touch-friendly interactions

### Performance Optimizations
- **Lazy Loading**: Efficient component loading
- **Optimized Images**: Responsive image sizing
- **Minimal Bundle Size**: Efficient CSS and JavaScript
- **Fast Loading**: Optimized for mobile networks

## 🎨 UI/UX Features

- **Modern Design**: Clean, professional interface
- **Consistent Branding**: Purple and orange color scheme
- **Intuitive Navigation**: Easy-to-use menu structure
- **Accessibility**: WCAG compliant design
- **Loading States**: Smooth user experience
- **Error Handling**: User-friendly error messages

## 🔐 Security Features

- **Input Validation**: XSS and injection prevention
- **Secure Authentication**: JWT-based auth system
- **Data Sanitization**: Clean data processing
- **Role-Based Access**: Secure permission system

## 📊 Analytics & Reporting

- **Dashboard Analytics**: Real-time statistics
- **Export Functionality**: CSV and Excel exports
- **Report Generation**: Automated monthly reports
- **Data Visualization**: Charts and graphs

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Developer**: Nikita Yadav
- **Organization**: Orbosis Foundation

## 📞 Support

For support and queries, please contact:
- **Email**: info@orbosis.org
- **Website**: [Orbosis Foundation](https://orbosis.org)

## 🙏 Acknowledgments

- Thanks to all contributors and volunteers
- Special thanks to the Orbosis Foundation team
- Icons by Lucide React
- UI components inspired by modern design principles

---

**Made with ❤️ for social impact and women empowerment**