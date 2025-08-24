# Muslim Community Platform

A modern, responsive web application built with React and Supabase, designed to serve the Muslim community in Budapest and beyond. The platform provides prayer times, daily Islamic content, and community resources.

## Features

### 🕌 Prayer Times
- Real-time prayer schedule for Budapest
- Current time display
- Next prayer indicator
- Beautiful Islamic design

### 📖 Daily Islamic Content
- **Daily Hadith**: Rotating collection of authentic Hadith with sources
- **Quranic Reflection**: Daily Quran verses with translations and reflections
- Content changes daily for variety

### 🔗 Quick Links
- Islamic Guide
- Donation Platform
- Islamic Calendar
- Volunteer Network
- Community Stories

### 🎨 Modern UI/UX
- Responsive design for all devices
- Beautiful gradients and Islamic design elements
- Smooth animations and hover effects
- Accessible and user-friendly interface

## Tech Stack

- **Frontend**: React 18
- **Styling**: CSS3 with modern features
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Backend**: Supabase (ready for integration)
- **Build Tool**: Create React App

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd muslim-community-platform
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `env.example` to `.env`
   - Add your Supabase credentials:
```bash
REACT_APP_SUPABASE_URL=your_supabase_project_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── components/
│   ├── PrayerTimes.js      # Prayer times component
│   ├── DailyHadith.js      # Daily Hadith display
│   ├── QuranReflection.js  # Quranic reflection component
│   ├── QuickLinks.js       # Quick navigation links
│   └── FeatureCards.js     # Platform features showcase
├── App.js                  # Main application component
├── index.js               # Application entry point
├── index.css              # Global styles
└── supabase.js            # Supabase configuration
```

## Customization

### Prayer Times
- Update prayer times in `PrayerTimes.js`
- Integrate with prayer time APIs for real-time data
- Add location-based prayer time calculation

### Content
- Modify Hadith collection in `DailyHadith.js`
- Update Quran reflections in `QuranReflection.js`
- Add more Islamic content categories

### Styling
- Customize colors and themes in `index.css`
- Modify gradients and design elements
- Add more Islamic design patterns

## Supabase Integration

The platform is designed to work with Supabase for:
- User authentication
- Content management
- Community features
- Prayer time calculations
- Event management

To enable full functionality:
1. Set up a Supabase project
2. Configure authentication
3. Create necessary database tables
4. Update environment variables

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please open an issue in the repository or contact the development team.

---

**Built with ❤️ for the Muslim community**
