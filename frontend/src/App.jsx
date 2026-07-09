import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Loader from './components/Loader';
import ProfileCard from './components/ProfileCard';
import AnalyticsCard from './components/AnalyticsCard';
import { getProfile, getAnalytics } from './services/api';

const App = () => {
  const [profile, setProfile] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    setProfile(null);
    setAnalytics(null);

    try {
      // Execute both network requests concurrently
      const [profileData, analyticsData] = await Promise.all([
        getProfile(username),
        getAnalytics(username)
      ]);

      setProfile(profileData);
      setAnalytics(analyticsData);
    } catch (err) {
      // Extract error message from Django REST response if available
      const message = err.response?.data?.detail || 'User not found or an error occurred.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      maxWidth: '700px',
      margin: '40px auto',
      padding: '0 16px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', color: '#24292e', marginBottom: '24px' }}>
        GitHub Profile Analyzer
      </h1>
      
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
        <SearchBar onSearch={handleSearch} />
      </div>

      {error && (
        <div style={{
          padding: '12px 16px',
          backgroundColor: '#ffdce0',
          border: '1px solid #fdaeb7',
          borderRadius: '6px',
          color: '#86181d',
          marginBottom: '24px',
          fontSize: '14px'
        }}>
          {error}
        </div>
      )}

      {loading && <Loader />}

      {!loading && (
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '24px',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}>
          <ProfileCard profile={profile} />
          <AnalyticsCard analytics={analytics} />
        </div>
      )}
    </div>
  );
};

export default App;