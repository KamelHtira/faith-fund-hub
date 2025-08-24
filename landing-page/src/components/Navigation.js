import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Home, 
  BookOpen, 
  Heart, 
  Calendar, 
  Users, 
  FileText,
  Search,
  User,
  Bell
} from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', icon: <Home size={20} />, href: '#home' },
    { name: 'Islamic Guide', icon: <BookOpen size={20} />, href: '#guide' },
    { name: 'Donation', icon: <Heart size={20} />, href: '#donation' },
    { name: 'Calendar', icon: <Calendar size={20} />, href: '#calendar' },
    { name: 'Volunteer', icon: <Users size={20} />, href: '#volunteer' },
    { name: 'Stories', icon: <FileText size={20} />, href: '#stories' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo and Brand */}
        <div className="nav-brand">
          <div className="brand-icon">
            <BookOpen size={28} />
          </div>
          <span className="brand-text">Muslim Community</span>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="nav-menu desktop-menu">
          {menuItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className="nav-item"
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="nav-actions">
          <button className="nav-action-btn search-btn">
            <Search size={20} />
          </button>
          <button className="nav-action-btn notification-btn">
            <Bell size={20} />
            <span className="notification-badge">3</span>
          </button>
          <button className="nav-action-btn profile-btn">
            <User size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {menuItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className="mobile-nav-item"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
