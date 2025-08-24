import React, { useState, useEffect } from 'react';
import { BookOpen, Lightbulb, Heart } from 'lucide-react';

const QuranReflection = () => {
  const [currentReflection, setCurrentReflection] = useState({
    verse: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    translation: "Indeed, Allah is with the patient.",
    reference: "Quran 2:153",
    reflection: "Patience is not just about waiting; it's about maintaining a positive attitude while waiting. Allah promises to be with those who practice patience, giving us strength and guidance through difficult times.",
    theme: "Patience & Perseverance"
  });

  const reflections = [
    {
      verse: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
      translation: "Indeed, Allah is with the patient.",
      reference: "Quran 2:153",
      reflection: "Patience is not just about waiting; it's about maintaining a positive attitude while waiting. Allah promises to be with those who practice patience, giving us strength and guidance through difficult times.",
      theme: "Patience & Perseverance"
    },
    {
      verse: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ",
      translation: "And my success is not but through Allah.",
      reference: "Quran 11:88",
      reflection: "This verse reminds us that all our achievements and successes come from Allah's grace. It teaches us humility and gratitude, recognizing that we are dependent on Allah for everything.",
      theme: "Humility & Gratitude"
    },
    {
      verse: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا بِأَنْفُسِهِمْ",
      translation: "Indeed, Allah will not change the condition of a people until they change what is in themselves.",
      reference: "Quran 13:11",
      reflection: "This powerful verse teaches us about personal responsibility and the power of self-improvement. Change begins within, and Allah helps those who help themselves.",
      theme: "Self-Improvement & Change"
    },
    {
      verse: "وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ",
      translation: "And do not pursue that of which you have no knowledge.",
      reference: "Quran 17:36",
      reflection: "This verse encourages us to seek knowledge and avoid making assumptions or judgments without proper understanding. It promotes intellectual honesty and wisdom.",
      theme: "Knowledge & Wisdom"
    },
    {
      verse: "إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ",
      translation: "Indeed, Allah loves those who do good.",
      reference: "Quran 2:195",
      reflection: "Doing good deeds is not just about helping others; it's about earning Allah's love and pleasure. Every act of kindness, no matter how small, brings us closer to Allah.",
      theme: "Good Deeds & Kindness"
    }
  ];

  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const reflectionIndex = dayOfYear % reflections.length;
    setCurrentReflection(reflections[reflectionIndex]);
  }, []);

  return (
    <div className="card quran-reflection">
      <h2>
        <BookOpen size={24} />
        Daily Quranic Reflection
      </h2>
      
      <div className="reflection-content">
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '1.5rem',
          background: 'rgba(255, 255, 255, 0.2)',
          padding: '1rem',
          borderRadius: '12px'
        }}>
          <div style={{ 
            fontSize: '1.5rem', 
            marginBottom: '0.5rem',
            lineHeight: '1.8'
          }}>
            {currentReflection.verse}
          </div>
          <div style={{ 
            fontSize: '1.1rem', 
            marginBottom: '0.5rem',
            fontStyle: 'italic'
          }}>
            "{currentReflection.translation}"
          </div>
          <div style={{ 
            fontSize: '0.9rem', 
            opacity: 0.9,
            background: 'rgba(255, 255, 255, 0.3)',
            padding: '0.3rem 0.8rem',
            borderRadius: '20px',
            display: 'inline-block'
          }}>
            {currentReflection.reference}
          </div>
        </div>
        
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '1rem',
          borderRadius: '12px',
          marginBottom: '1rem'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '0.5rem',
            gap: '0.5rem'
          }}>
            <Lightbulb size={18} />
            <strong>Reflection:</strong>
          </div>
          <div style={{ lineHeight: '1.6' }}>
            {currentReflection.reflection}
          </div>
        </div>
        
        <div style={{ 
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.2)',
          padding: '0.5rem',
          borderRadius: '8px',
          fontSize: '0.9rem'
        }}>
          <Heart size={16} style={{ marginRight: '0.5rem' }} />
          Theme: {currentReflection.theme}
        </div>
      </div>
    </div>
  );
};

export default QuranReflection;
