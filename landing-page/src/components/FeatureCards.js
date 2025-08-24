import React from 'react';
import { 
  BookOpen, 
  Heart, 
  Calendar, 
  Users, 
  FileText,
  Star
} from 'lucide-react';

const FeatureCards = () => {
  const features = [
    {
      title: "Islamic Guide",
      description: "Comprehensive Islamic knowledge base with daily guidance, prayer instructions, and religious rulings.",
      icon: <BookOpen size={24} />,
      color: "#667eea"
    },
    {
      title: "Donation Platform",
      description: "Secure and transparent donation system supporting community projects, mosque maintenance, and charitable causes.",
      icon: <Heart size={24} />,
      color: "#f093fb"
    },
    {
      title: "Islamic Calendar",
      description: "Hijri calendar with prayer times, Islamic holidays, and important religious dates for the community.",
      icon: <Calendar size={24} />,
      color: "#4facfe"
    },
    {
      title: "Volunteer Network",
      description: "Connect with community service opportunities, organize events, and contribute to building a stronger community.",
      icon: <Users size={24} />,
      color: "#43e97b"
    },
    {
      title: "Community Stories",
      description: "Share and read inspiring stories from community members, fostering connection and understanding.",
      icon: <FileText size={24} />,
      color: "#fa709a"
    },
    {
      title: "Premium Features",
      description: "Advanced features including personalized prayer reminders, detailed Islamic content, and community analytics.",
      icon: <Star size={24} />,
      color: "#ffd700"
    }
  ];

  return (
    <div className="features-section">
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '2rem',
        padding: '0 1rem'
      }}>
        <h2 style={{ 
          fontSize: '2rem', 
          color: '#1e3c72', 
          marginBottom: '1rem' 
        }}>
          Platform Features
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#666', 
          maxWidth: '600px', 
          margin: '0 auto' 
        }}>
          Discover all the features designed to strengthen our Muslim community and enhance your spiritual journey.
        </p>
      </div>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div 
              className="feature-icon"
              style={{ 
                background: `linear-gradient(135deg, ${feature.color} 0%, ${feature.color}dd 100%)`
              }}
            >
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
