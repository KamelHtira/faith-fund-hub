import React from 'react';
import Navigation from './components/Navigation';
import PrayerTimes from './components/PrayerTimes';
import DailyHadith from './components/DailyHadith';
import QuranReflection from './components/QuranReflection';
import SimpleFeatures from './components/SimpleFeatures';
import { Building, Heart } from 'lucide-react';

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="header">
        <div className="container">
          <h2>
            <Building size={32} style={{ marginRight: '0.8rem' }} />
            Daily Islamic Content
          </h2>
          <p>Your daily dose of Islamic wisdom and guidance</p>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          {/* Main Grid with Prayer Times, Hadith, and Quran Reflection */}
          <div className="grid">
            <PrayerTimes />
            <DailyHadith />
            <QuranReflection />
          </div>

          {/* Simple Features Section */}
          <SimpleFeatures />
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            <Heart size={16} style={{ marginRight: '0.5rem' }} />
            Built with love for the Muslim community in Budapest and beyond
          </p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
            © 2024 Muslim Community Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
