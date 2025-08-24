import React, { useState, useEffect } from 'react';
import { Clock, Sun, Moon, Star } from 'lucide-react';
import { format } from 'date-fns';

const PrayerTimes = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [prayerTimes, setPrayerTimes] = useState({
    Fajr: '05:30',
    Sunrise: '07:15',
    Dhuhr: '12:30',
    Asr: '15:45',
    Maghrib: '18:20',
    Isha: '19:45'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getNextPrayer = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    const prayerTimesInMinutes = {
      Fajr: 5 * 60 + 30,
      Sunrise: 7 * 60 + 15,
      Dhuhr: 12 * 60 + 30,
      Asr: 15 * 60 + 45,
      Maghrib: 18 * 60 + 20,
      Isha: 19 * 60 + 45
    };

    for (const [prayer, time] of Object.entries(prayerTimesInMinutes)) {
      if (time > currentTimeInMinutes) {
        return prayer;
      }
    }
    return 'Fajr'; // If all prayers passed, next is Fajr tomorrow
  };

  const getPrayerIcon = (prayer) => {
    switch (prayer) {
      case 'Fajr':
        return <Moon size={20} />;
      case 'Sunrise':
        return <Sun size={20} />;
      case 'Dhuhr':
        return <Sun size={20} />;
      case 'Asr':
        return <Sun size={20} />;
      case 'Maghrib':
        return <Sun size={20} />;
      case 'Isha':
        return <Star size={20} />;
      default:
        return <Clock size={20} />;
    }
  };

  const nextPrayer = getNextPrayer();

  return (
    <div className="card prayer-times">
      <h2>
        <Clock size={24} />
        Prayer Times - Budapest
      </h2>
      
      <div className="current-time">
        <h3>Current Time</h3>
        <div className="time">{format(currentTime, 'HH:mm:ss')}</div>
        <div>{format(currentTime, 'EEEE, MMMM do, yyyy')}</div>
      </div>

      <div>
        {Object.entries(prayerTimes).map(([prayer, time]) => (
          <div 
            key={prayer} 
            className={`prayer-time ${prayer === nextPrayer ? 'next-prayer' : ''}`}
            style={prayer === nextPrayer ? { 
              background: 'rgba(255, 255, 255, 0.2)', 
              borderRadius: '8px',
              padding: '0.75rem',
              margin: '0.5rem 0'
            } : {}}
          >
            <div className="prayer-name">
              {getPrayerIcon(prayer)}
              <span style={{ marginLeft: '0.5rem' }}>{prayer}</span>
              {prayer === nextPrayer && (
                <span style={{ 
                  marginLeft: '0.5rem', 
                  fontSize: '0.8rem', 
                  opacity: 0.8,
                  background: 'rgba(255, 255, 255, 0.3)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '12px'
                }}>
                  Next
                </span>
              )}
            </div>
            <div className="prayer-time-value">{time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrayerTimes;
