import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MobileBottomNav from './components/MobileBottomNav';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import DiseaseDetectionView from './views/DiseaseDetectionView';
import AIAssistantView from './views/AIAssistantView';
import WeatherView from './views/WeatherView';
import SchemesView from './views/SchemesView';
import CalendarView from './views/CalendarView';
import EvaluationView from './views/EvaluationView';
import ProfilePage from './pages/ProfilePage';
import CropRecommendationView from './views/CropRecommendationView';
import MarketIntelligencePage from './pages/MarketIntelligencePage';
import IrrigationPlannerPage from './pages/IrrigationPlannerPage';
import FertilizerPage from './pages/FertilizerPage';
import DocumentVaultPage from './pages/DocumentVaultPage';
import FarmMapPage from './pages/FarmMapPage';

// Phase 3 Pages
import DigitalTwinPage from './pages/DigitalTwinPage';
import SatellitePage from './pages/SatellitePage';
import PestPredictionPage from './pages/PestPredictionPage';
import YieldPredictionPage from './pages/YieldPredictionPage';
import OutbreakMapPage from './pages/OutbreakMapPage';
import CommunityPage from './pages/CommunityPage';
import SustainabilityPage from './pages/SustainabilityPage';
import EmergencyPage from './pages/EmergencyPage';
import AnalyticsPage from './pages/AnalyticsPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

import { authService } from './services/authService';
import { weatherService } from './services/weatherService';
import { schemeService } from './services/schemeService';
import { notificationService } from './services/notificationService';

export default function App() {
  // Theme State ('light' | 'dark')
  const [theme, setTheme] = useState(() => localStorage.getItem('agrisahay_theme') || 'light');
  
  // Selected Language State ('en' | 'ta')
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  // RBAC Active Role ('farmer' | 'officer' | 'admin')
  const [activeRole, setActiveRole] = useState('farmer');

  // Navigation View State
  const [currentView, setCurrentView] = useState('landing');

  // Farmer Profile State
  const [farmerProfile, setFarmerProfile] = useState(() => authService.getCurrentProfile());

  // Location State
  const [location, setLocation] = useState({
    latitude: 10.9601,
    longitude: 78.0766,
    state: farmerProfile.state || 'Tamil Nadu',
    district: farmerProfile.district || 'Karur',
    taluk: farmerProfile.taluk || 'Kulithalai',
    village: farmerProfile.village || 'Mayanur'
  });

  // Weather Telemetry State
  const [activeWeather, setActiveWeather] = useState({
    district: farmerProfile.district || 'Karur',
    temp: 33,
    condition: 'Tropical Warm & Sunny',
    icon: '☀️',
    forecast7Days: [],
    alerts: []
  });

  // Matched Schemes State
  const [matchedSchemes, setMatchedSchemes] = useState([]);

  // Notifications State
  const [notifications, setNotifications] = useState([]);

  // Scan History
  const [recentScans, setRecentScans] = useState([]);

  // Sync Theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('agrisahay_theme', theme);
  }, [theme]);

  // Load location, weather, schemes & notifications on profile change
  useEffect(() => {
    weatherService.getWeatherByDistrict(farmerProfile.district || 'Karur').then(setActiveWeather);
    schemeService.getRecommendedSchemes({
      state: farmerProfile.state || 'Tamil Nadu',
      crop: farmerProfile.primaryCrop || 'paddy',
      landSizeAcres: farmerProfile.landSizeAcres || 4.5,
      category: farmerProfile.farmerCategory || 'small'
    }).then(setMatchedSchemes);
    notificationService.getNotifications().then(setNotifications);
  }, [farmerProfile]);

  const handleLoginSuccess = (profile) => {
    setFarmerProfile(profile);
    setCurrentView('dashboard');
  };

  const handleRegisterSuccess = (profile) => {
    setFarmerProfile(profile);
    setCurrentView('dashboard');
  };

  const handleLogout = async () => {
    await authService.logout();
    setCurrentView('landing');
  };

  const handleUpdateProfile = (updatedProfile) => {
    setFarmerProfile(updatedProfile);
  };

  const handleUpdateLocation = (locData) => {
    setLocation(prev => ({ ...prev, ...locData }));
    if (locData.district) {
      setFarmerProfile(prev => ({ ...prev, district: locData.district, village: locData.village || prev.village }));
    }
  };

  const handleMarkAsRead = async (id) => {
    const updated = await notificationService.markAsRead(id);
    setNotifications(updated);
  };

  const handleMarkAllRead = async () => {
    const updated = await notificationService.markAllAsRead();
    setNotifications(updated);
  };

  // Render Unauthenticated Pages (Landing, Login, Register)
  if (currentView === 'landing') {
    return (
      <div className="app-landing-wrapper">
        <LandingPage 
          onNavigate={(view) => {
            if (view === 'login' || view === 'register') {
              setCurrentView(view);
            } else {
              const profile = authService.getCurrentProfile();
              setFarmerProfile(profile);
              setCurrentView(view || 'dashboard');
            }
          }} 
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          onLoginDemo={(targetView) => {
            const profile = authService.getCurrentProfile();
            setFarmerProfile(profile);
            setCurrentView(typeof targetView === 'string' ? targetView : 'dashboard');
            try {
              authService.login('farmer@agrisahay.in', 'password123').catch(() => {});
            } catch (e) {}
          }}
        />
      </div>
    );
  }

  if (currentView === 'login') {
    return (
      <LoginPage 
        onLoginSuccess={handleLoginSuccess}
        onNavigateRegister={() => setCurrentView('register')}
      />
    );
  }

  if (currentView === 'register') {
    return (
      <RegisterPage 
        onRegisterSuccess={handleRegisterSuccess}
        onNavigateLogin={() => setCurrentView('login')}
      />
    );
  }

  // Render Main Authenticated App
  return (
    <div className="app-layout">
      {/* Sidebar Navigation */}
      <Sidebar 
        currentView={currentView} 
        setCurrentView={setCurrentView}
        onLogout={handleLogout}
        activeRole={activeRole}
        selectedLanguage={selectedLanguage}
      />

      {/* Main Content Area */}
      <div className="main-content">
        {/* Navbar */}
        <Navbar 
          farmerProfile={farmerProfile}
          onOpenProfile={() => setCurrentView('profile')}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          theme={theme}
          setTheme={setTheme}
          activeWeather={activeWeather}
          onNavigate={(view) => setCurrentView(view)}
          onLogout={handleLogout}
          notifications={notifications}
          onMarkAsRead={handleMarkAsRead}
          onMarkAllRead={handleMarkAllRead}
          onUpdateLocation={handleUpdateLocation}
        />

        {/* Dynamic View Switcher */}
        <main className="view-container">
          {currentView === 'dashboard' && (
            <DashboardPage 
              farmerProfile={farmerProfile}
              activeWeather={activeWeather}
              matchedSchemes={matchedSchemes}
              onNavigate={(view) => setCurrentView(view)}
              recentScans={recentScans}
              selectedLanguage={selectedLanguage}
            />
          )}

          {currentView === 'digital_twin' && (
            <DigitalTwinPage 
              farmerProfile={farmerProfile}
              location={location}
              activeWeather={activeWeather}
            />
          )}

          {currentView === 'satellite' && (
            <SatellitePage 
              location={location}
            />
          )}

          {currentView === 'pest' && (
            <PestPredictionPage 
              farmerProfile={farmerProfile}
              activeWeather={activeWeather}
              location={location}
            />
          )}

          {currentView === 'yield' && (
            <YieldPredictionPage 
              farmerProfile={farmerProfile}
            />
          )}

          {currentView === 'outbreak' && (
            <OutbreakMapPage 
              location={location}
            />
          )}

          {currentView === 'recommend' && (
            <CropRecommendationView 
              farmerProfile={farmerProfile}
              selectedLanguage={selectedLanguage}
            />
          )}

          {currentView === 'disease' && (
            <DiseaseDetectionView 
              onSaveScanToHistory={(scan) => setRecentScans(prev => [scan, ...prev])}
            />
          )}

          {currentView === 'assistant' && (
            <AIAssistantView 
              farmerProfile={farmerProfile}
              selectedLanguage={selectedLanguage}
            />
          )}

          {currentView === 'community' && (
            <CommunityPage 
              farmerProfile={farmerProfile}
            />
          )}

          {currentView === 'weather' && (
            <WeatherView 
              farmerProfile={farmerProfile}
              onUpdateLocation={(dt) => handleUpdateLocation({ district: dt })}
            />
          )}

          {currentView === 'market' && (
            <MarketIntelligencePage 
              farmerProfile={farmerProfile}
            />
          )}

          {currentView === 'schemes' && (
            <SchemesView 
              farmerProfile={farmerProfile}
              onOpenProfile={() => setCurrentView('profile')}
              selectedLanguage={selectedLanguage}
            />
          )}

          {currentView === 'evaluation' && (
            <EvaluationView 
              selectedLanguage={selectedLanguage}
            />
          )}

          {currentView === 'irrigation' && (
            <IrrigationPlannerPage 
              farmerProfile={farmerProfile}
            />
          )}

          {currentView === 'fertilizer' && (
            <FertilizerPage 
              farmerProfile={farmerProfile}
            />
          )}

          {currentView === 'sustainability' && (
            <SustainabilityPage 
              farmerProfile={farmerProfile}
            />
          )}

          {currentView === 'calendar' && (
            <CalendarView 
              farmerProfile={farmerProfile}
            />
          )}

          {currentView === 'vault' && (
            <DocumentVaultPage />
          )}

          {currentView === 'map' && (
            <FarmMapPage location={location} />
          )}

          {currentView === 'emergency' && (
            <EmergencyPage location={location} />
          )}

          {currentView === 'analytics' && (
            <AnalyticsPage />
          )}

          {currentView === 'admin' && (
            <AdminDashboardPage 
              activeRole={activeRole}
              setActiveRole={setActiveRole}
            />
          )}

          {currentView === 'profile' && (
            <ProfilePage 
              farmerProfile={farmerProfile}
              onUpdateProfile={handleUpdateProfile}
            />
          )}
        </main>
      </div>

      {/* Mobile Bottom Bar */}
      <MobileBottomNav 
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
    </div>
  );
}
