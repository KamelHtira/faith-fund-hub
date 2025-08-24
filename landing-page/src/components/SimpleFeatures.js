import React from 'react';
import { 
  BookOpen, 
  Heart, 
  Calendar, 
  Users, 
  FileText,
  ArrowRight
} from 'lucide-react';

const SimpleFeatures = () => {
  const features = [
    {
      icon: <BookOpen size={32} />,
      title: "Islamic Guide",
      description: "Daily Islamic guidance and knowledge"
    },
    {
      icon: <Heart size={32} />,
      title: "Donation",
      description: "Support community projects"
    },
    {
      icon: <Calendar size={32} />,
      title: "Calendar",
      description: "Islamic dates and events"
    },
    {
      icon: <Users size={32} />,
      title: "Volunteer",
      description: "Community service opportunities"
    },
    {
      icon: <FileText size={32} />,
      title: "Stories",
      description: "Community member stories"
    }
  ];

  return (
    <section className="simple-features">
      <div className="container">
        <div className="section-header">
          <h2>Platform Features</h2>
          <p>Everything you need for your Islamic journey</p>
        </div>
        
        <div className="features-simple-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-simple-card">
              <div className="feature-simple-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <button className="feature-simple-btn">
                Learn More
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleFeatures;
