import React, { useState, useEffect } from 'react';
import { BookOpen, Quote } from 'lucide-react';

const DailyHadith = () => {
  const [currentHadith, setCurrentHadith] = useState({
    text: "The Prophet Muhammad (ﷺ) said: 'The most beloved places to Allah are the mosques, and the most disliked places to Allah are the markets.'",
    narrator: "Sahih Muslim",
    category: "Mosque & Worship"
  });

  const hadiths = [
    {
      text: "The Prophet Muhammad (ﷺ) said: 'The most beloved places to Allah are the mosques, and the most disliked places to Allah are the markets.'",
      narrator: "Sahih Muslim",
      category: "Mosque & Worship"
    },
    {
      text: "The Prophet Muhammad (ﷺ) said: 'Whoever believes in Allah and the Last Day, let him speak good or remain silent.'",
      narrator: "Sahih Bukhari & Muslim",
      category: "Character & Speech"
    },
    {
      text: "The Prophet Muhammad (ﷺ) said: 'The best of you are those who are best to their families.'",
      narrator: "Tirmidhi",
      category: "Family & Relationships"
    },
    {
      text: "The Prophet Muhammad (ﷺ) said: 'Cleanliness is half of faith.'",
      narrator: "Sahih Muslim",
      category: "Hygiene & Cleanliness"
    },
    {
      text: "The Prophet Muhammad (ﷺ) said: 'The strong person is not the one who can wrestle someone else down. The strong person is the one who can control himself when he is angry.'",
      narrator: "Sahih Bukhari",
      category: "Self-Control & Patience"
    }
  ];

  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const hadithIndex = dayOfYear % hadiths.length;
    setCurrentHadith(hadiths[hadithIndex]);
  }, []);

  return (
    <div className="card hadith-card">
      <h2>
        <BookOpen size={24} />
        Daily Hadith
      </h2>
      
      <div className="hadith-content">
        <div className="hadith-text">
          <Quote size={20} style={{ marginRight: '0.5rem', opacity: 0.7 }} />
          {currentHadith.text}
        </div>
        
        <div className="hadith-narrator">
          — {currentHadith.narrator}
        </div>
        
        <div style={{ 
          marginTop: '1rem', 
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.2)',
          padding: '0.5rem',
          borderRadius: '8px',
          fontSize: '0.9rem'
        }}>
          Category: {currentHadith.category}
        </div>
      </div>
    </div>
  );
};

export default DailyHadith;
