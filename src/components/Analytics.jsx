// Analytics.jsx - Analytics tracking component
import { useEffect } from 'react';
import { trackPageView } from '../firebase';

const Analytics = () => {
  useEffect(() => {
    // Track initial page load
    trackPageView('Portfolio Home');
    
    // Track page visibility changes
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        trackPageView('Portfolio Return Visit');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default Analytics;
